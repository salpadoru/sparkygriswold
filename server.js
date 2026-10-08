const { createServer } = require("http");
const { parse } = require("url");
const fs = require("fs");
const path = require("path");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "127.0.0.1";
const port = Number(process.env.PORT) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function serveStatic(req, res) {
  if (!req.url || !req.url.startsWith("/_next/static/")) return false;

  const relativePath = decodeURIComponent(req.url.split("?")[0]).replace(/^\/_next\//, "");
  const root = path.join(__dirname, ".next");
  const filePath = path.join(root, relativePath);

  if (!filePath.startsWith(root + path.sep)) {
    res.statusCode = 403;
    res.end("Forbidden");
    return true;
  }

  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return false;

    const type = MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.statusCode = 200;
    res.setHeader("Content-Type", type);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    fs.createReadStream(filePath).on("error", () => {
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    }).pipe(res);
    return true;
  } catch {
    return false;
  }
}

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      if (serveStatic(req, res)) return;

      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (error) {
      console.error("Error handling request:", error);
      res.statusCode = 500;
      res.end("Internal server error");
    }
  }).listen(port, hostname, () => {
    console.log("> Sparky Griswold ready");
  });
}).catch((error) => {
  console.error("Failed to start Sparky Griswold:", error);
  process.exit(1);
});
