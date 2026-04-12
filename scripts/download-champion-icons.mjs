/**
 * Downloads LoL Data Dragon champion portraits into public/champions/
 * for every `champion: "..."` entry in src/data/set17/comps.ts.
 *
 * Run: npm run download:champion-icons
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const COMPS_FILE = path.join(ROOT, "src", "data", "set17", "comps.ts");
const OUT_DIR = path.join(ROOT, "public", "champions");

/** Must match src/lib/championArt.ts */
const OVERRIDES = {
  Rhaast: "Kayn",
  Meepsie: null,
  "Nunu & Willump": "Nunu",
  LeBlanc: "Leblanc",
  "Bel'Veth": "Belveth",
  "Cho'Gath": "Chogath",
};

function toIconKey(champion) {
  const k = champion.trim();
  if (Object.prototype.hasOwnProperty.call(OVERRIDES, k)) {
    return OVERRIDES[k];
  }
  return k.replace(/['.]/g, "").replace(/\s+/g, "");
}

async function latestDdragonVersion() {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  if (!res.ok) throw new Error(`versions.json ${res.status}`);
  const versions = await res.json();
  return versions[0];
}

function extractChampionNames(source) {
  const re = /champion:\s*"([^"]+)"/g;
  const out = new Set();
  let m;
  while ((m = re.exec(source)) !== null) {
    out.add(m[1]);
  }
  return [...out];
}

async function main() {
  const version = await latestDdragonVersion();
  console.log("Data Dragon version:", version);

  const text = fs.readFileSync(COMPS_FILE, "utf8");
  const names = extractChampionNames(text);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (const name of names) {
    const key = toIconKey(name);
    if (!key) {
      console.log("skip (no LoL portrait):", name);
      skipped += 1;
      continue;
    }

    const dest = path.join(OUT_DIR, `${key}.png`);
    if (fs.existsSync(dest)) {
      console.log("exists:", key);
      ok += 1;
      continue;
    }

    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${key}.png`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error("FAIL", name, "->", key, res.status, url);
      failed += 1;
      continue;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log("saved:", key);
    ok += 1;
  }

  console.log("\nDone. saved/existing:", ok, "skipped:", skipped, "failed:", failed);
  if (failed > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
