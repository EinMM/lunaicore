// Copies ../assets -> public/assets before every build (the copy is never committed).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(here, "../../assets");
const target = path.resolve(here, "../public/assets");

if (!fs.existsSync(source)) {
  console.error(`copy-assets: source folder not found: ${source}`);
  process.exit(1);
}
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
console.log(`copy-assets: ${source} -> ${target}`);
