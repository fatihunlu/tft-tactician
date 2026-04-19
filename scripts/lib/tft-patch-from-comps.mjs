/**
 * Shared: highest TFT patch segment from comps.ts (matches items + champions folders).
 */
import fs from "fs";

export function extractTftPatches(source) {
  const re = /patch:\s*"([^"]+)"/g;
  const set = new Set();
  let m;
  while ((m = re.exec(source)) !== null) set.add(m[1]);
  return [...set];
}

export function comparePatch(a, b) {
  const pa = a.split(/[.\-]/).map((x) => parseInt(x, 10) || 0);
  const pb = b.split(/[.\-]/).map((x) => parseInt(x, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const da = pa[i] ?? 0;
    const db = pb[i] ?? 0;
    if (da !== db) return da - db;
  }
  return 0;
}

export function maxTftPatch(patches) {
  if (patches.length === 0) {
    throw new Error('No patch: "..." fields found in comps.ts');
  }
  return patches.reduce((best, p) => (comparePatch(p, best) > 0 ? p : best));
}

/** Safe single path segment under public/items/ or public/champions/ */
export function tftPatchToDirSegment(patch) {
  return patch.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "unknown";
}

export function getActiveTftPatchDirFromCompsFile(compsFilePath) {
  const text = fs.readFileSync(compsFilePath, "utf8");
  const raw = maxTftPatch(extractTftPatches(text));
  return tftPatchToDirSegment(raw);
}
