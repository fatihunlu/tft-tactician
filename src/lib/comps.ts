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
