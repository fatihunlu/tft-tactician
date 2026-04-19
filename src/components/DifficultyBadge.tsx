import type { Comp } from "@/types/comp";

const difficultyLabel: Record<Comp["difficulty"], string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const difficultyBadgeClass: Record<Comp["difficulty"], string> = {
  easy:
    "border-amber-300/70 bg-gradient-to-b from-amber-500/25 to-amber-800/20 text-amber-50 shadow-[inset_0_1px_0_rgba(253,230,138,0.35)]",
  medium:
    "border-emerald-300/70 bg-gradient-to-b from-emerald-500/25 to-emerald-800/20 text-emerald-50 shadow-[inset_0_1px_0_rgba(110,231,183,0.35)]",
  hard:
    "border-amber-300/70 bg-gradient-to-b from-amber-500/25 to-amber-800/20 text-amber-50 shadow-[inset_0_1px_0_rgba(253,230,138,0.35)]",
};

const sizeClass: Record<"sm" | "md", string> = {
  sm: "min-w-[4.8rem] px-[0.6rem] py-0.5 text-xs tracking-wide",
  md: "min-w-[5.75rem] px-3 py-1 text-sm font-medium tracking-wide",
};

export function DifficultyBadge({
  difficulty,
  size = "sm",
}: {
  difficulty: Comp["difficulty"];
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border ${sizeClass[size]} ${difficultyBadgeClass[difficulty]}`}
    >
      {difficultyLabel[difficulty]}
    </span>
  );
}
