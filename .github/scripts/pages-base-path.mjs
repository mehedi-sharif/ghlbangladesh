// GitHub Pages serves this preview from a sub-folder (/<repository>/) instead of the
// domain root. The site's own code links to root paths ("/images/…"), as it should for
// ghlbangladesh.com, so after the build every root-relative URL in dist/ gets the
// sub-folder in front. The source code is not changed.
//
// Usage: node .github/scripts/pages-base-path.mjs /ghl-bangladesh-redesign
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const base = (process.argv[2] || "").replace(/\/+$/, "");
if (!base) {
  console.log("No sub-folder given; nothing to change.");
  process.exit(0);
}

const prefix = (url) =>
  url.startsWith("/") && !url.startsWith("//") && !url.startsWith(`${base}/`)
    ? base + url
    : url;

const fixUrls = (text) =>
  text.replace(
    /url\((["']?)(\/[^)"']*)\1\)/g,
    (_, quote, url) => `url(${quote}${prefix(url)}${quote})`,
  );

const fixHtml = (html) =>
  fixUrls(
    html
      .replace(
        /(\s(?:href|src|poster|action|data-photo)=")(\/[^"]*)"/g,
        (_, attr, url) => `${attr}${prefix(url)}"`,
      )
      .replace(/(\ssrcset=")([^"]*)"/g, (_, attr, list) => {
        const fixed = list
          .split(",")
          .map((entry) => {
            const [url, ...rest] = entry.trim().split(/\s+/);
            return [prefix(url), ...rest].join(" ");
          })
          .join(", ");
        return `${attr}${fixed}"`;
      })
      .replace(
        /(content="\d+;\s*url=)(\/[^"]*)"/g,
        (_, start, url) => `${start}${prefix(url)}"`,
      ),
  );

let changed = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    const type = extname(name);
    if (type !== ".html" && type !== ".css") continue;
    const before = readFileSync(path, "utf8");
    const after = type === ".html" ? fixHtml(before) : fixUrls(before);
    if (after !== before) {
      writeFileSync(path, after);
      changed++;
    }
  }
};

walk("dist");
console.log(`Prefixed root paths with ${base} in ${changed} files.`);
