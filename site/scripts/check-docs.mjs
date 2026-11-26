// docs:check: structure and wording checks for the Luna Desktop manual (src/content/manual/{en,ar}/*.md).
// Errors (exit code 1): missing twin, different front-matter group/order/verifiedFor, different headings, numbers or
// code blocks between EN and AR, "by default", unreleased-feature names, Latin "Luna" in Arabic running text.
// Warnings (exit code 0): a page whose verifiedFor differs from the release manifest version; links to other sites.
// No dependencies. Run: npm run docs:check
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "src/content/manual");
const manifest = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "../manifests/desktop-windows/stable.json"), "utf8"));
const errors = [];
const warnings = [];

function list(lang) {
  const dir = path.join(root, lang);
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort() : [];
}

function parse(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw, bad: true };
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  }
  return { fm, body: m[2] };
}

const stripCode = (body) => body.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "").replace(/\]\([^)]*\)/g, "]").replace(/https?:\/\/\S+/g, "");
const fences = (body) => [...body.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map((x) => x[1].trim());
const headings = (body) => [...stripFences(body).matchAll(/^(#{1,4}) /gm)].map((x) => x[1].length).join("");
const stripFences = (body) => body.replace(/```[\s\S]*?```/g, "");
const numbers = (body) => [...stripCode(body).matchAll(/\d+(?:\.\d+)?/g)].map((x) => x[0]).sort().join(",");

const en = list("en");
const ar = list("ar");
for (const f of en) if (!ar.includes(f)) errors.push(`${f}: no Arabic twin`);
for (const f of ar) if (!en.includes(f)) errors.push(`${f}: no English twin`);

const FORBID_ALL = [/\bLuna (Vision|Voice|Connect)\b/i, /Desktop Agent/i, /\bplugins?\b/i, /\bskills\b/i, /roadmap/i];
for (const f of en.filter((x) => ar.includes(x))) {
  const e = parse(path.join(root, "en", f));
  const a = parse(path.join(root, "ar", f));
  for (const [lang, p] of [["en", e], ["ar", a]]) {
    const tag = `${lang}/${f}`;
    if (p.bad) errors.push(`${tag}: no front-matter`);
    for (const key of ["title", "description", "order", "group", "verifiedFor"]) if (!p.fm[key]) errors.push(`${tag}: front-matter "${key}" missing`);
    if (p.fm.verifiedFor && p.fm.verifiedFor !== manifest.version) warnings.push(`${tag}: verifiedFor ${p.fm.verifiedFor} is not the release version ${manifest.version} (re-verify, then bump)`);
    if (p.fm.description && p.fm.description.length > 160) warnings.push(`${tag}: description is ${p.fm.description.length} characters (aim for 160 or fewer)`);
    for (const re of FORBID_ALL) if (re.test(stripCode(p.body))) errors.push(`${tag}: unreleased-feature wording ${re}`);
    for (const m of p.body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) if (!/^https:\/\/(github\.com\/EinMM\/lunaicore|lunaicore\.com)/.test(m[1])) warnings.push(`${tag}: link to another site ${m[1]}`);
  }
  for (const key of ["group", "order", "verifiedFor"]) if (e.fm[key] !== a.fm[key]) errors.push(`${f}: front-matter "${key}" differs (en ${e.fm[key]}, ar ${a.fm[key]})`);
  if (/by default/i.test(stripCode(e.body))) errors.push(`en/${f}: "by default"`);
  if (/افتراضي/.test(stripCode(a.body))) errors.push(`ar/${f}: "افتراضي" (by default)`);
  if (/\bLuna\b/.test(stripCode(a.body))) errors.push(`ar/${f}: Latin "Luna" in running text (use «لونا»)`);
  if (headings(e.body) !== headings(a.body)) errors.push(`${f}: heading structure differs between en and ar`);
  if (numbers(e.body) !== numbers(a.body)) errors.push(`${f}: numbers differ between en and ar (en ${numbers(e.body)} | ar ${numbers(a.body)})`);
  if (JSON.stringify(fences(e.body)) !== JSON.stringify(fences(a.body))) errors.push(`${f}: code blocks differ between en and ar`);
}

console.log(`docs:check: ${en.length} English and ${ar.length} Arabic pages, manifest version ${manifest.version}`);
for (const w of warnings) console.log(`  warning: ${w}`);
for (const e of errors) console.log(`  ERROR: ${e}`);
if (errors.length) {
  console.log(`docs:check failed: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(1);
}
console.log(`docs:check ok (${warnings.length} warning(s))`);