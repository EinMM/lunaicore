// Release values for the landing pages, read at build time from the update manifest.
// Read-only: this file never writes to manifests/. The manifest's signature is not
// checked here (the app's update check does that); this only feeds page text.
//
// LUNA_MANIFEST (env) overrides the path, for testing with a copy outside manifests/.
import fs from "node:fs";
import path from "node:path";

export const REPO_URL = "https://github.com/EinMM/lunaicore";
const manifestPath = process.env.LUNA_MANIFEST
  ? path.resolve(process.env.LUNA_MANIFEST)
  : path.resolve(process.cwd(), "../manifests/desktop-windows/stable.json");

function fail(message: string): never {
  throw new Error(`release.ts: ${message}\n  manifest: ${manifestPath}`);
}

function load() {
  let raw: string;
  try {
    raw = fs.readFileSync(manifestPath, "utf8");
  } catch {
    return fail("stable.json is missing or unreadable (build from the site/ folder of the repo, or set LUNA_MANIFEST)");
  }
  let data: any;
  try {
    data = JSON.parse(raw);
  } catch {
    return fail("stable.json is not valid JSON");
  }
  const installer = data?.installer;
  if (data?.product !== "desktop-windows") fail('"product" must be "desktop-windows"');
  if (data?.channel !== "stable") fail('"channel" must be "stable"');
  if (typeof data?.version !== "string" || !/^\d+\.\d+\.\d+$/.test(data.version)) fail('"version" must look like 1.2.3');
  if (typeof data?.release_date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.release_date)) fail('"release_date" must be YYYY-MM-DD');
  if (typeof installer?.name !== "string" || installer.name !== `LunaSetup-${data.version}.exe`) fail(`"installer.name" must be LunaSetup-${data.version}.exe`);
  if (typeof installer?.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(installer.sha256)) fail('"installer.sha256" must be 64 lowercase hex characters');
  if (!Number.isInteger(installer?.size) || installer.size <= 0) fail('"installer.size" must be a positive integer (bytes)');

  // "Beta {major}.{minor}" comes from the manifest version, so the label can never go stale.
  // The version format was checked above; this keeps the build failing if it ever stops matching.
  const [, major, minor] = data.version.match(/^(\d+)\.(\d+)\.\d+$/) ?? fail(`cannot derive the Beta label from version "${data.version}"`);
  const betaLabel = `Beta ${major}.${minor}`;
  const betaLabelAr = `الإصدار التجريبي ${major}.${minor}`;

  const tag = `desktop-win-v${data.version}`;
  const releaseUrl = `${REPO_URL}/releases/tag/${tag}`;
  if (data.release_page !== releaseUrl) fail(`"release_page" must be ${releaseUrl}`);

  return {
    version: data.version as string,
    releaseDate: data.release_date as string,
    tag,
    installerName: installer.name as string,
    sha256: installer.sha256 as string,
    sizeBytes: installer.size as number,
    sizeMB: Math.round(installer.size / 1048576),
    downloadUrl: `${REPO_URL}/releases/download/${tag}/${installer.name}`,
    releaseUrl,
    betaLabel,
    betaLabelAr,
  };
}

export const release = load();

export function formatDate(iso: string, lang: "en" | "ar") {
  // Latin digits in both languages, like the rest of the site.
  const locale = lang === "ar" ? "ar-u-nu-latn" : "en-GB";
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}
