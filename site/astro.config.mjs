import { defineConfig } from "astro/config";

// Static output, no integrations. Pages: / (EN) and /ar/ (AR).
// compressHTML is off so the built HTML keeps the whitespace of the live pages.
export default defineConfig({
  output: "static",
  compressHTML: false,
  build: { format: "directory" },
  // Legal text must be rendered exactly as written: no curly quotes, dashes or ellipses.
  markdown: { smartypants: false },
});
