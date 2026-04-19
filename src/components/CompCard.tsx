import Link from "next/link";
import type { Comp } from "@/types/comp";

const tierRing: Record<string, string> = {
  S: "ring-2 ring-amber-400/80 shadow-[0_0_36px_rgba(251,191,36,0.28),0_0_1px_rgba(254,243,199,0.4)]",
  A: "ring-1 ring-emerald-400/50 shadow-emerald-500/15",
  B: "ring-1 ring-red-400/35",
};

function TierBadge({ tier }: { tier: Comp["tier"] }) {
  if (tier === "S") {
    return (
      <span className="relative isolate shrink-0 overflow-hidden rounded-lg border border-amber-200/70 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 px-3 py-1.5 text-sm font-extrabold tracking-tight text-amber-950 shadow-[0_0_20px_rgba(251,191,36,0.55),0_0_40px_rgba(245,158,11,0.2),inset_0_1px_0_rgba(255,255,255,0.55)] ring-2 ring-amber-100/50 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/40 before:via-transparent before:to-transparent before:opacity-70 after:pointer-events-none after:absolute after:-inset-1 after:rounded-lg after:bg-amber-400/25 after:blur-md after:content-['']">
        {tier}
      </span>
    );
  }
  if (tier === "A") {
    return (
      <span className="shrink-0 rounded-lg border border-emerald-400/45 bg-emerald-500/15 px-2.5 py-1 text-sm font-bold text-emerald-100 ring-1 ring-emerald-400/30">
        {tier}
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-lg border border-red-400/35 bg-red-500/10 px-2.5 py-1 text-sm font-bold text-red-100/90 ring-1 ring-red-400/25">
      {tier}
    </span>
  );
}

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

const playstyleLabel: Record<Comp["playstyle"], string> = {
  slow_roll: "Slow roll",
  fast_8: "Fast 8",
  fast_9: "Fast 9",
  standard: "Standard tempo",
};

export function CompCard({ comp }: { comp: Comp }) {
  const ring = tierRing[comp.tier] ?? tierRing.B;

  return (
    <Link
      href={`/comps/${comp.slug}`}
      className={`group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 transition hover:border-red-400/30 hover:bg-white/[0.07] ${ring}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white group-hover:text-red-100">
            {comp.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-red-100/70">
            {comp.summary}
          </p>
        </div>
        <TierBadge tier={comp.tier} />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-red-100/55">
        <div className="text-[0.6rem] leading-snug">
          <dt className="text-red-200/45">Difficulty</dt>
          <dd className="font-medium">
            <span
              className={`inline-flex min-w-[4.8rem] items-center justify-center rounded-full border px-[0.6rem] py-[0.1rem] tracking-wide ${difficultyBadgeClass[comp.difficulty]}`}
            >
              {difficultyLabel[comp.difficulty]}
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-red-200/45">Plan</dt>
          <dd className="font-medium text-red-50">{playstyleLabel[comp.playstyle]}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-red-200/45">Patch</dt>
          <dd className="font-medium text-red-50">{comp.patch}</dd>
        </div>
      </dl>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {comp.traits.slice(0, 4).map((t) => (
          <span
            key={`${t.name}-${t.count}`}
            className="rounded-md bg-red-950/70 px-2 py-0.5 text-[11px] font-medium text-red-100/95"
          >
            {t.name} ({t.count})
          </span>
        ))}
      </div>
    </Link>
  );
}
