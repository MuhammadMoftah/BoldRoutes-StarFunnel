import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = ".vercel/output/functions";
const TARGET_RUNTIME = "nodejs20.x";
const DEPRECATED_RUNTIMES = new Set(["nodejs18.x"]);

function patchVcConfigs(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      patchVcConfigs(fullPath);
      continue;
    }

    if (entry !== ".vc-config.json") continue;

    const config = JSON.parse(readFileSync(fullPath, "utf8"));

    if (!DEPRECATED_RUNTIMES.has(config.runtime)) continue;

    config.runtime = TARGET_RUNTIME;
    writeFileSync(fullPath, `${JSON.stringify(config, null, "\t")}\n`);
    console.log(`Updated ${fullPath} runtime to ${TARGET_RUNTIME}`);
  }
}

try {
  patchVcConfigs(OUTPUT_DIR);
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.warn(`Skipped Vercel runtime patch: ${OUTPUT_DIR} not found`);
    process.exit(0);
  }

  throw error;
}
