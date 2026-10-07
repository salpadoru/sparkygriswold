import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public/images/uploads");
const output = path.resolve("lib/generatedGallery.ts");

const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const resized = /-(?:\d+x\d+|\d+x|scaled)(?=\.[^.]+$)/i;

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

const files = fs.existsSync(root)
  ? walk(root)
      .filter((file) => allowed.has(path.extname(file).toLowerCase()))
      .filter((file) => !resized.test(path.basename(file)))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  : [];

const images = files.map((file, index) => {
  const relative = path.relative(path.resolve("public"), file).split(path.sep).join("/");
  const url = "/" + relative;
  return {
    number: index + 1,
    src: url,
    full: url,
    name: path.basename(file, path.extname(file)),
  };
});

const source = `export type GalleryImage = {
  number: number;
  src: string;
  full: string;
  name: string;
};

export const galleryImages: GalleryImage[] = ${JSON.stringify(images, null, 2)};
`;

fs.writeFileSync(output, source);
console.log(`Generated ${images.length} original images in ${output}`);
