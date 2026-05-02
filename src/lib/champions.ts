import { SET17_CHAMPIONS } from "@/data/set17/champions";
import { SET17_COMPS } from "@/data/set17/comps";
import type { Champion } from "@/types/champion";
import type { Comp } from "@/types/comp";

/** Kebab-case slug from display name (for validation / tooling only). */
export function toChampionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['.]/g, "")
    .replace(/&/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

const bySlug = new Map<string, Champion>(SET17_CHAMPIONS.map((c) => [c.slug, c]));
const byName = new Map<string, Champion>(SET17_CHAMPIONS.map((c) => [c.name, c]));

export function getAllChampions(): Champion[] {
  return SET17_CHAMPIONS;
}

export function getChampionSlugs(): string[] {
  return SET17_CHAMPIONS.map((c) => c.slug);
}

export function getChampionBySlug(slug: string): Champion | undefined {
  return bySlug.get(slug);
}

export function getChampionByName(name: string): Champion | undefined {
  return byName.get(name);
}

export function getCompsForChampion(name: string): Comp[] {
  return SET17_COMPS.filter((c) => c.units.some((u) => u.champion === name));
}

if (process.env.NODE_ENV !== "production") {
  const referenced = new Set<string>();
  for (const comp of SET17_COMPS) {
    for (const u of comp.units) {
      referenced.add(u.champion);
    }
  }
  const missing: string[] = [];
  for (const name of referenced) {
    if (!byName.has(name)) {
      missing.push(name);
    }
  }
  if (missing.length > 0) {
    throw new Error(`[champions] Missing champion data for CompUnit names: ${missing.join(", ")}`);
  }

  for (const c of SET17_CHAMPIONS) {
    const expected = toChampionSlug(c.name);
    if (expected !== c.slug) {
      throw new Error(
        `[champions] "${c.name}" slug should be "${expected}" but is "${c.slug}"`,
      );
    }
  }
}
