// Release history for the changelog pages, read at build time from changelog.json.
// The build fails if the version in stable.json has no entry here (add it with
// `npm run changelog:add` after signing the manifest), so a release can't ship without notes.
//
// LUNA_CHANGELOG (env) overrides the path, for testing with a copy.
import fs from "node:fs";
import path from "node:path";
import { release, REPO_URL } from "./release";

const changelogPath = process.env.LUNA_CHANGELOG
  ? path.resolve(process.env.LUNA_CHANGELOG)
  : path.resolve(process.cwd(), "src/data/changelog.json");

export type ChangelogEntry = { version: string; date: string; notes: { en: string; ar: string } };

function fail(message: string): never {
  throw new Error(`changelog.ts: ${message}\n  file: ${changelogPath}`);
}

function load(): ChangelogEntry[] {
  let data: any;
  try {
    data = JSON.parse(fs.readFileSync(changelogPath, "utf8"));
  } catch {
    return fail("changelog.json is missing, unreadable or not valid JSON");
  }
  if (!Array.isArray(data) || data.length === 0) fail("changelog.json must be a non-empty array");
  const seen = new Set<string>();
  for (const [i, entry] of data.entries()) {
    const where = `entry ${i + 1}`;
    if (typeof entry?.version !== "string" || !/^\d+\.\d+\.\d+$/.test(entry.version)) fail(`${where}: "version" must look like 1.2.3`);
    if (seen.has(entry.version)) fail(`${where}: version ${entry.version} appears twice`);
    seen.add(entry.version);
    if (typeof entry?.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) fail(`${where} (${entry.version}): "date" must be YYYY-MM-DD`);
    if (typeof entry?.notes?.en !== "string" || !entry.notes.en || typeof entry?.notes?.ar !== "string" || !entry.notes.ar) {
      fail(`${where} (${entry.version}): "notes.en" and "notes.ar" must both be non-empty strings`);
    }
  }
  if (!seen.has(release.version)) {
    fail(
      `stable.json is at version ${release.version}, but changelog.json has no entry for it.\n` +
        `  Run: npm run changelog:add   (adds the entry from stable.json), then build again.`,
    );
  }
  return [...data].sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
}

export const changelog = load();

export const releaseUrlFor = (version: string) => `${REPO_URL}/releases/tag/desktop-win-v${version}`;

export function formatDate(iso: string, lang: "en" | "ar") {
  // Latin digits in both languages, like the rest of the site.
  const locale = lang === "ar" ? "ar-u-nu-latn" : "en-GB";
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}
