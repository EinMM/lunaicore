// Copies the docs the site renders into src/content-src/ before every build (the copy is gitignored; the repo
// files stay the single source of truth): the install steps (section 2) of TESTERS.md / TESTERS.ar.md, and
// the English and Arabic halves of PRIVACY.md, TERMS.md and SECURITY.md (see the Legal section below).
// The "N." number is dropped from the install heading, nothing else is changed.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
// LUNA_DOCS_ROOT / LUNA_DOCS_OUT (env) override the source and output folders, for testing with copies.
const repo = process.env.LUNA_DOCS_ROOT ? path.resolve(process.env.LUNA_DOCS_ROOT) : path.resolve(here, "../..");
const out = process.env.LUNA_DOCS_OUT ? path.resolve(process.env.LUNA_DOCS_OUT) : path.resolve(here, "../src/content-src");

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

// ---- Legal documents: one bilingual file -> one English and one Arabic page ----------------------
// PRIVACY.md, TERMS.md and SECURITY.md each hold both languages: an English part (from <a id="english">
// to the "---" before <a id="arabic">) and an Arabic part (inside <div dir="rtl">). Only the scaffolding
// is removed (anchors, jump links, language label heading, div wrapper, the "---" separator); the bilingual
// H1 "English · العربية" becomes the front-matter title of each page. The wording itself is never changed.
// Relative links to the other repo documents are rewritten to the site's pages (or GitHub for TESTERS).
const REPO_BLOB = "https://github.com/EinMM/lunaicore/blob/main";
const LEGAL = [
  { file: "PRIVACY.md", slug: "privacy", headings: 10, what: "short version + sections 1-9" },
  { file: "TERMS.md", slug: "terms", headings: 15, what: "sections 1-15" },
  { file: "SECURITY.md", slug: "security", headings: 5, what: "5 sections" },
  { file: "WEBSITE_PRIVACY.md", slug: "website-privacy", headings: 6, what: "sections 1-6 (site only, not bundled in the app)" },
];
const LABEL = { en: "## English", ar: "## العربية" };

function rewriteLinks(md, lang, file) {
  const prefix = lang === "ar" ? "/ar" : "";
  const out = md.replace(/\]\(([^)\s]+)\)/g, (all, url) => {
    const m = url.match(/^(PRIVACY|TERMS|SECURITY|WEBSITE_PRIVACY|TESTERS|TESTERS\.ar)\.md(#[\w-]+)?$/);
    if (!m) return all;
    const [, name, hash = ""] = m;
    if (name.startsWith("TESTERS")) return `](${REPO_BLOB}/${name}.md${hash})`;
    if (hash && hash !== "#english" && hash !== "#arabic") die(`${file}: link ${url} has an anchor this script does not know`);
    return `](${prefix}/legal/${name.toLowerCase().replace("_", "-")}/)`;
  });
  if (/\]\((?!https?:\/\/|mailto:|\/)[^)]*\)/.test(out)) {
    die(`${file} (${lang}): a relative or anchor link is left after rewriting: ${out.match(/\]\((?!https?:\/\/|mailto:|\/)[^)]*\)/)[0]}`);
  }
  return out;
}

function splitLegal({ file, headings, what }) {
  const full = path.join(repo, file);
  if (!fs.existsSync(full)) die(`source not found: ${full}`);
  const lines = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n").split("\n");
  const find = (test, from = 0) => { for (let i = from; i < lines.length; i++) if (test(lines[i])) return i; return -1; };
  const need = (index, marker) => { if (index < 0) die(`${file}: marker not found: ${marker}`); return index; };

  const h1 = need(find((l) => /^# /.test(l)), "the H1 line (# English · العربية)");
  const parts = lines[h1].slice(2).split(" · ");
  if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) die(`${file}: the H1 must be "English title · Arabic title", found: ${lines[h1]}`);
  const titles = { en: parts[0].trim(), ar: parts[1].trim() };

  const jump = need(find((l) => l.trim() === "[English](#english) · [العربية](#arabic)", h1), "the jump-links line");
  const en = need(find((l) => l.trim() === '<a id="english"></a>', jump), '<a id="english"></a>');
  const ar = need(find((l) => l.trim() === '<a id="arabic"></a>', en), '<a id="arabic"></a>');
  const open = need(find((l) => l.trim() === '<div dir="rtl">', ar), '<div dir="rtl">');
  let close = -1;
  for (let i = lines.length - 1; i > open; i--) if (lines[i].trim() === "</div>") { close = i; break; }
  need(close, "the closing </div>");
  if (lines.slice(close + 1).some((l) => l.trim())) die(`${file}: unexpected content after the closing </div>`);

  const parts2 = { en: lines.slice(en + 1, ar), ar: lines.slice(open + 1, close) };
  const result = {};
  for (const lang of ["en", "ar"]) {
    let part = parts2[lang];
    const trim = () => { while (part.length && !part[0].trim()) part.shift(); while (part.length && !part[part.length - 1].trim()) part.pop(); };
    trim();
    if (lang === "en") {
      if (part[part.length - 1].trim() !== "---") die(`${file}: the English part must end with the "---" before <a id="arabic">`);
      part.pop();
      trim();
    }
    if (part[0]?.trim() !== LABEL[lang]) die(`${file} (${lang}): the part must start with "${LABEL[lang]}", found: ${part[0]}`);
    part.shift();
    trim();
    let body = part.join("\n") + "\n";
    if (body.length < 500) die(`${file} (${lang}): the part is empty or far too short (${body.length} bytes)`);
    if (/<a id=|<\/?div\b/.test(body)) die(`${file} (${lang}): an anchor or div is left in the part`);
    body = rewriteLinks(body, lang, file);
    const count = (body.match(/^### /gm) || []).length;
    result[lang] = { body, count };
  }
  if (result.en.count !== result.ar.count) {
    die(`${file}: EN has ${result.en.count} "###" sections but AR has ${result.ar.count} (the two languages are out of sync)`);
  }
  if (result.en.count !== headings) die(`${file}: expected ${headings} sections (${what}), found ${result.en.count} in both languages`);
  return { titles, result };
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const [file, name] of [["TESTERS.md", "testers-install-en.md"], ["TESTERS.ar.md", "testers-install-ar.md"]]) {
  fs.writeFileSync(path.join(out, name), installSection(file), "utf8");
  console.log(`copy-docs: ${file} (section 2) -> src/content-src/${name}`);
}
for (const doc of LEGAL) {
  const { titles, result } = splitLegal(doc);
  for (const lang of ["en", "ar"]) {
    const front = `---\ntitle: ${JSON.stringify(titles[lang])}\n---\n\n`;
    fs.writeFileSync(path.join(out, `legal-${doc.slug}-${lang}.md`), front + result[lang].body, "utf8");
  }
  console.log(`copy-docs: ${doc.file} -> legal-${doc.slug}-en.md / -ar.md (${result.en.count} sections each; ${titles.en} · ${titles.ar})`);
}
