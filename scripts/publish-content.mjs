import fs from "node:fs/promises";
import path from "node:path";

const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const headers = {
  apikey: serviceRoleKey,
  Authorization: `Bearer ${serviceRoleKey}`,
};

async function supabase(pathname, options = {}) {
  const response = await fetch(`${supabaseUrl}${pathname}`, {
    ...options,
    headers: { ...headers, ...(options.headers ?? {}) },
  });
  if (!response.ok) {
    throw new Error(`${pathname}: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

const gallery = await supabase(
  "/rest/v1/gallery?select=id,title,image_path,caption,year,sort_order,created_at&published=eq.true&order=sort_order.asc,created_at.asc"
);
const events = await supabase(
  "/rest/v1/events?select=id,title,event_date,venue,city,description,image_path,sort_order&published=eq.true&order=event_date.asc.nullslast,sort_order.asc"
);

const galleryDir = path.join(process.cwd(), "public", "content", "gallery");
await fs.rm(galleryDir, { recursive: true, force: true });
await fs.mkdir(galleryDir, { recursive: true });

async function downloadStorageFile(storagePath) {
  const cleanPath = storagePath.replace(/^\//, "");
  const url = `${supabaseUrl}/storage/v1/object/public/gallery/${cleanPath}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not download ${storagePath}: ${response.status}`);
  }

  const filename = path.basename(storagePath);
  await fs.writeFile(
    path.join(galleryDir, filename),
    Buffer.from(await response.arrayBuffer())
  );
  return `/content/gallery/${filename}`;
}

const publishedGallery = [];
for (const item of gallery) {
  const localPath = await downloadStorageFile(item.image_path);
  publishedGallery.push({
    number: publishedGallery.length + 1,
    src: localPath,
    full: localPath,
    name: item.title || "Gallery photograph",
    caption: item.caption || "",
    year: item.year ?? (item.created_at ? new Date(item.created_at).getFullYear() : undefined),
  });
}

const json = (value) => JSON.stringify(value, null, 2);

await fs.writeFile(
  path.join(process.cwd(), "lib", "generatedGallery.ts"),
  `import type { GalleryImage } from "./gallery";

export const galleryImages: GalleryImage[] = ${json(publishedGallery)};
`
);

await fs.writeFile(
  path.join(process.cwd(), "lib", "generatedEvents.ts"),
  `import type { EventItem } from "./events";

export const eventItems: EventItem[] = ${json(
    events.map((event) => ({
      id: event.id,
      title: event.title,
      date: event.event_date,
      venue: event.city ? `${event.venue} • ${event.city}` : event.venue,
      description: event.description,
      image: event.image_path
        ? `/content/gallery/${path.basename(event.image_path)}`
        : undefined,
      externalUrl: event.external_url || undefined,
    }))
  )};
`
);

console.log(`Published ${publishedGallery.length} gallery items and ${events.length} events.`);
