// Adds the release described by stable.json to src/data/changelog.json.
// Idempotent: a version that is already listed is left untouched (edit the file by hand to fix notes).
// Run after signing the manifest:  npm run changelog:add
//
//   node scripts/changelog-add.mjs [--manifest <path>] [--changelog <path>] [--dry-run]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const manifestPath = path.resolve(arg("--manifest") ?? path.join(here, "../../manifests/desktop-windows/stable.json"));
const changelogPath = path.resolve(arg("--changelog") ?? path.join(here, "../src/data/changelog.json"));
const dryRun = args.includes("--dry-run");

const die = (message) => {
  console.error(`changelog-add: ${message}`);
  process.exit(1);
};
const readJson = (file, what) => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return die(`${what} is missing or not valid JSON: ${file}`);
  }
};

const manifest = readJson(manifestPath, "stable.json");
const entries = readJson(changelogPath, "changelog.json");
if (!Array.isArray(entries)) die("changelog.json must be an array");

if (!/^\d+\.\d+\.\d+$/.test(manifest.version ?? "")) die('stable.json "version" must look like 1.2.3');
if (!/^\d{4}-\d{2}-\d{2}$/.test(manifest.release_date ?? "")) die('stable.json "release_date" must be YYYY-MM-DD');
if (!manifest.notes?.en || !manifest.notes?.ar) die('stable.json "notes.en" and "notes.ar" must both be present');

if (entries.some((entry) => entry.version === manifest.version)) {
  console.log(`changelog-add: version ${manifest.version} is already in changelog.json, nothing to do.`);
  process.exit(0);
}

entries.push({ version: manifest.version, date: manifest.release_date, notes: { en: manifest.notes.en, ar: manifest.notes.ar } });
entries.sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));

if (dryRun) {
  console.log(`changelog-add: would add version ${manifest.version} (${manifest.release_date}) to ${changelogPath}`);
  process.exit(0);
}
fs.writeFileSync(changelogPath, JSON.stringify(entries, null, 2) + "\n", "utf8");
console.log(`changelog-add: added version ${manifest.version} (${manifest.release_date}) to ${changelogPath}`);
