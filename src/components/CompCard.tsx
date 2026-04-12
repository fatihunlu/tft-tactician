import Link from "next/link";
import type { Comp } from "@/types/comp";

const tierRing: Record<string, string> = {
  S: "ring-amber-400/60 shadow-amber-500/20",
  A: "ring-emerald-400/50 shadow-emerald-500/15",
  B: "ring-red-400/35",
};

const difficultyLabel: Record<Comp["difficulty"], string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
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
        <span className="shrink-0 rounded-lg bg-amber-500/20 px-2.5 py-1 text-sm font-bold text-amber-200">
          {comp.tier}
        </span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-red-100/55">
        <div>
          <dt className="text-red-200/45">Difficulty</dt>
          <dd className="font-medium text-red-50">{difficultyLabel[comp.difficulty]}</dd>
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
