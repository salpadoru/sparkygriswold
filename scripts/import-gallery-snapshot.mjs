import fs from "node:fs/promises";

const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
}

const headers = {
  apikey: serviceRoleKey,
  Authorization: `Bearer ${serviceRoleKey}`,
};

const source = await fs.readFile(new URL("../lib/generatedGallery.ts", import.meta.url), "utf8");
const items = [...source.matchAll(
  /src: "([^"]+)"[^\n]*name: "([^"]+)"[^\n]*year: (\d+)/g
)].map((match) => ({
  url: match[1],
  title: match[2],
  year: Number(match[3]),
}))
.filter((item) => /^https?:\/\//.test(item.url));

console.log(`Found ${items.length} gallery images in the current snapshot.`);

async function supabase(pathname, options = {}) {
  const response = await fetch(`${supabaseUrl}${pathname}`, {
    ...options,
    headers: { ...headers, ...(options.headers ?? {}) },
  });
  if (!response.ok) {
    throw new Error(`${pathname}: ${response.status} ${await response.text()}`);
  }
  return response;
}

let imported = 0;
let skipped = 0;
let failed = 0;

for (const [index, item] of items.entries()) {
  const url = new URL(item.url);
  const rawName = decodeURIComponent(url.pathname.split("/").pop() || `image-${index + 1}.jpg`);
  const safeName = rawName.replace(/[^a-zA-Z0-9._-]/g, "-");
  const storagePath = `legacy/${item.year}/${index + 1}-${safeName}`;

  try {
    const existing = await fetch(
      `${supabaseUrl}/rest/v1/gallery?select=id&image_path=eq.${encodeURIComponent(storagePath)}&limit=1`,
      { headers }
    );
    if (!existing.ok) throw new Error(`gallery lookup failed: ${existing.status} ${await existing.text()}`);
    const rows = await existing.json();

    if (rows.length) {
      skipped++;
      console.log(`SKIP ${index + 1}/${items.length}: ${storagePath}`);
      continue;
    }

    const image = await fetch(item.url);
    if (!image.ok) throw new Error(`source image returned ${image.status}`);

    const contentType = image.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await image.arrayBuffer());

    const upload = await fetch(
      `${supabaseUrl}/storage/v1/object/gallery/${storagePath}`,
      {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": contentType,
          "x-upsert": "false",
        },
        body: buffer,
      }
    );

    if (!upload.ok) throw new Error(`storage upload failed: ${upload.status} ${await upload.text()}`);

    const insert = await fetch(`${supabaseUrl}/rest/v1/gallery`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        title: item.title === "Archive image" ? rawName : item.title,
        caption: "",
        image_path: storagePath,
        year: item.year,
        sort_order: index,
        published: true,
      }),
    });

    if (!insert.ok) {
      await fetch(`${supabaseUrl}/storage/v1/object/gallery/${storagePath}`, {
        method: "DELETE",
        headers,
      });
      throw new Error(`database insert failed: ${insert.status} ${await insert.text()}`);
    }

    imported++;
    console.log(`OK   ${index + 1}/${items.length}: ${storagePath}`);
  } catch (error) {
    failed++;
    console.error(`FAIL ${index + 1}/${items.length}: ${item.url}`);
    console.error(error instanceof Error ? error.message : error);
  }
}

console.log(`Imported ${imported}, skipped ${skipped}, failed ${failed}.`);
if (failed) process.exitCode = 1;
