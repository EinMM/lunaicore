// Copies the install steps (section 2) of the tester guides into src/content-src/ before every build.
// The repo files (TESTERS.md, TESTERS.ar.md) stay the single source of truth; the copy is gitignored.
// The "N." number is dropped from the heading, nothing else is changed.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "../..");
const out = path.resolve(here, "../src/content-src");

const die = (message) => {
  console.error(`copy-docs: ${message}`);
  process.exit(1);
};

function installSection(file) {
  const full = path.join(repo, file);
  if (!fs.existsSync(full)) die(`source not found: ${full}`);
  const lines = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((line) => /^## 2\. /.test(line));
  if (start < 0) die(`${file}: no "## 2. ..." heading (install steps) found`);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i]) || /^---\s*$/.test(lines[i])) { end = i; break; }
  }
  const section = lines.slice(start, end);
  section[0] = section[0].replace(/^## 2\. /, "## ");
  const text = section.join("\n").trim() + "\n";
  if (!/^\d+\. /m.test(text)) die(`${file}: the install section has no numbered steps`);
  return text;
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const [file, name] of [["TESTERS.md", "testers-install-en.md"], ["TESTERS.ar.md", "testers-install-ar.md"]]) {
  fs.writeFileSync(path.join(out, name), installSection(file), "utf8");
  console.log(`copy-docs: ${file} (section 2) -> src/content-src/${name}`);
}
