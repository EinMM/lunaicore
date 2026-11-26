// /sitemap.xml, generated from ONE route list: each entry is an EN page and its AR twin, and every
// page gets its own <url> with the same three alternates (en, ar, x-default = en), like the old
// hand-written sitemap. No dependency.
//
// lastmod: the release date (stable.json) for the home, product, downloads and changelog pages; the
// "luna-doc-version" date at the top of PRIVACY.md / TERMS.md for the legal pages. SECURITY.md
// carries no such date, so its two entries have no <lastmod> (the tag is optional).
import fs from "node:fs";
import path from "node:path";
import type { APIRoute } from "astro";
import { manualPages, slugOf } from "../data/docs";
import { release } from "../data/release";
import { SITE } from "../i18n/page";

const docsRoot = process.env.LUNA_DOCS_ROOT ? path.resolve(process.env.LUNA_DOCS_ROOT) : path.resolve(process.cwd(), "..");

function docDate(file: string, required: boolean): string | undefined {
  const text = fs.readFileSync(path.join(docsRoot, file), "utf8");
  const found = text.match(/<!--\s*luna-doc-version:\s*(\d{4}-\d{2}-\d{2})\s*-->/);
  if (!found && required) throw new Error(`sitemap: ${file} has no "<!-- luna-doc-version: YYYY-MM-DD -->" line`);
  return found?.[1];
}

// /start/ and /ar/start/ are deliberately NOT listed (noindex landing).
// [English path, Arabic path, lastmod]
const routes: Array<[string, string, string | undefined]> = [
  ["/", "/ar/", release.releaseDate],
  ["/products/desktop/", "/ar/products/desktop/", release.releaseDate],
  ["/privacy-security/", "/ar/privacy-security/", release.releaseDate],
  ["/downloads/", "/ar/downloads/", release.releaseDate],
  ["/changelog/", "/ar/changelog/", release.releaseDate],
  ["/legal/privacy/", "/ar/legal/privacy/", docDate("PRIVACY.md", true)],
  ["/legal/terms/", "/ar/legal/terms/", docDate("TERMS.md", true)],
  ["/legal/security/", "/ar/legal/security/", docDate("SECURITY.md", false)],
  ["/legal/website-privacy/", "/ar/legal/website-privacy/", docDate("WEBSITE_PRIVACY.md", true)],
  ["/support/", "/ar/support/", release.releaseDate],
];

const entry = (loc: string, lastmod: string | undefined, en: string, ar: string) =>
  [
    "  <url>",
    `    <loc>${SITE}${loc}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="ar" href="${SITE}${ar}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${en}"/>`,
    "  </url>",
  ].join("\n");

export const GET: APIRoute = async () => {
  // The docs hub, the Luna Desktop index and every manual page (EN twin and AR twin, same lastmod: the release date).
  const docs: Array<[string, string, string | undefined]> = [["/docs/", "/ar/docs/", release.releaseDate], ["/docs/desktop/", "/ar/docs/desktop/", release.releaseDate]];
  for (const page of await manualPages("en")) docs.push([`/docs/desktop/${slugOf(page)}/`, `/ar/docs/desktop/${slugOf(page)}/`, release.releaseDate]);
  const urls = [...routes, ...docs].flatMap(([en, ar, lastmod]) => [entry(en, lastmod, en, ar), entry(ar, lastmod, en, ar)]);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
