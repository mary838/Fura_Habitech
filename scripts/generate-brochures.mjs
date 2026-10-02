/**
 * Prints every `/brochures/<slug>` page to `public/fura/brochures/<slug>.pdf`
 * with headless Chrome. Run it while the site is up (`npm run dev`):
 *
 *   npm run brochures                    # every property in src/lib/brochures.ts
 *   npm run brochures -- the-lakes       # just one
 *
 * BASE_URL defaults to http://localhost:3000; CHROME to `google-chrome`.
 * Chrome embeds photos uncompressed, so when Ghostscript (`gs`) is installed
 * each PDF is re-saved at print quality, typically 5–10× smaller.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, renameSync, unlinkSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const baseUrl = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const chrome = process.env.CHROME ?? "google-chrome";

// The registry's keys are its quoted top-level entries.
const registry = readFileSync(path.join(root, "src/lib/brochures.ts"), "utf8");
const allSlugs = [...registry.matchAll(/^ {2}"([a-z0-9-]+)": \{/gm)].map((m) => m[1]);
const slugs = process.argv.length > 2 ? process.argv.slice(2) : allSlugs;

for (const slug of slugs) {
  if (!allSlugs.includes(slug)) {
    console.error(`✗ ${slug}: not in src/lib/brochures.ts`);
    process.exitCode = 1;
    continue;
  }
  const out = path.join(root, "public/fura/brochures", `${slug}.pdf`);
  const raw = `${out}.raw`;
  execFileSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=15000",
      `--print-to-pdf=${raw}`,
      `${baseUrl}/brochures/${slug}`,
    ],
    { stdio: "ignore" },
  );
  compress(raw, out);
  console.log(`✓ ${slug} → public/fura/brochures/${slug}.pdf`);
}

function compress(input, output) {
  try {
    execFileSync(
      "gs",
      [
        "-q",
        "-sDEVICE=pdfwrite",
        "-dPDFSETTINGS=/printer",
        "-dNOPAUSE",
        "-dBATCH",
        `-sOutputFile=${output}`,
        input,
      ],
      { stdio: "ignore" },
    );
    unlinkSync(input);
  } catch {
    renameSync(input, output);
  }
}
