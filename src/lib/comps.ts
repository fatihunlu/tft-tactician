import { SET17_COMPS } from "@/data/set17/comps";
import type { Comp, CompTier, Difficulty, Playstyle } from "@/types/comp";

export function getAllComps(): Comp[] {
  return SET17_COMPS;
}

export function getCompBySlug(slug: string): Comp | undefined {
  return SET17_COMPS.find((c) => c.slug === slug);
}

export function getCompSlugs(): string[] {
  return SET17_COMPS.map((c) => c.slug);
}

export type CompFilters = {
  tier: CompTier | "all";
  difficulty: Difficulty | "all";
  playstyle: Playstyle | "all";
};

export function filterComps(
  comps: Comp[],
  { tier, difficulty, playstyle }: CompFilters,
): Comp[] {
  return comps.filter((c) => {
    if (tier !== "all" && c.tier !== tier) return false;
    if (difficulty !== "all" && c.difficulty !== difficulty) return false;
    if (playstyle !== "all" && c.playstyle !== playstyle) return false;
    return true;
  });
}

/** Loose match: ignores case; also compares alphanumeric-only forms (e.g. "nova" vs "N.O.V.A."). */
function textMatches(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase().trim();
  if (!n) return true;
  if (h.includes(n)) return true;
  const hAlnum = h.replace(/[^a-z0-9]/g, "");
  const nAlnum = n.replace(/[^a-z0-9]/g, "");
  return nAlnum.length > 0 && hAlnum.includes(nAlnum);
}

export function compMatchesSearchQuery(comp: Comp, rawQuery: string): boolean {
  const q = rawQuery.trim();
  if (!q) return true;

  if (textMatches(comp.name, q)) return true;
  if (textMatches(comp.slug, q)) return true;
  const slugAsWords = comp.slug.replace(/-/g, " ");
  if (textMatches(slugAsWords, q)) return true;

  for (const t of comp.traits) {
    if (textMatches(t.name, q)) return true;
    if (textMatches(`${t.name} ${t.count}`, q)) return true;
  }

  return false;
}

export function filterCompsBySearch(comps: Comp[], query: string): Comp[] {
  return comps.filter((c) => compMatchesSearchQuery(c, query));
}

const TIER_ORDER: Record<CompTier, number> = { S: 0, A: 1, B: 2 };
const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
};

export type CompSortKey = "tier" | "difficulty" | "name" | "lastUpdated";

/** Stable tie-breaker: comp name (en-US). */
function compareName(a: Comp, b: Comp): number {
  return a.name.localeCompare(b.name, "en-US", { sensitivity: "base" });
}

/**
 * Returns a new array. Tier: S → A → B. Difficulty: easy → hard. Name: A–Z.
 * Last updated: newest first (`lastUpdated` is expected as ISO `YYYY-MM-DD`).
 */
export function sortComps(comps: Comp[], sortBy: CompSortKey): Comp[] {
  const out = [...comps];
  out.sort((a, b) => {
    switch (sortBy) {
      case "tier": {
        const d = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
        return d !== 0 ? d : compareName(a, b);
      }
      case "difficulty": {
        const d = DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
        return d !== 0 ? d : compareName(a, b);
      }
      case "name":
        return compareName(a, b);
      case "lastUpdated": {
        const d = b.lastUpdated.localeCompare(a.lastUpdated);
        return d !== 0 ? d : compareName(a, b);
      }
      default:
        return 0;
    }
  });
  return out;
}
