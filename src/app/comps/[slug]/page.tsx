import Link from "next/link";
import { notFound } from "next/navigation";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { MetaBoardPreview } from "@/components/MetaBoardPreview";
import { getCompBySlug, getCompSlugs } from "@/lib/comps";
import type { Comp } from "@/types/comp";
import type { Metadata } from "next";

const playstyleLabel: Record<Comp["playstyle"], string> = {
  slow_roll: "Slow roll",
  fast_8: "Fast 8",
  fast_9: "Fast 9",
  standard: "Standard tempo",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCompSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getCompBySlug(slug);
  if (!comp) return { title: "Comp not found" };
  return {
    title: `${comp.name} · TFT Set 17`,
    description: comp.summary,
  };
}

export default async function CompDetailPage({ params }: Props) {
  const { slug } = await params;
  const comp = getCompBySlug(slug);
  if (!comp) notFound();

  return (
    <div className="mx-auto w-full max-w-full px-4 py-10 sm:max-w-[60%] sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-red-200 hover:text-red-100"
      >
        ← All comps
      </Link>

      <header className="mt-6 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-red-300/90">Set 17 · Space Gods</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">{comp.name}</h1>
            <p className="mt-3 text-red-100/75">{comp.summary}</p>
          </div>
          {comp.tier === "S" ? (
            <span className="relative isolate shrink-0 overflow-hidden rounded-xl border border-amber-200/70 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 px-5 py-2.5 text-xl font-extrabold tracking-tight text-amber-950 shadow-[0_0_28px_rgba(251,191,36,0.5),inset_0_1px_0_rgba(255,255,255,0.5)] ring-2 ring-amber-100/50 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/35 before:via-transparent before:to-transparent before:opacity-60 after:pointer-events-none after:absolute after:-inset-1 after:rounded-xl after:bg-amber-400/20 after:blur-lg after:content-['']">
              {comp.tier} tier
            </span>
          ) : comp.tier === "A" ? (
            <span className="rounded-xl border border-emerald-400/45 bg-emerald-500/15 px-4 py-2 text-xl font-bold text-emerald-100 ring-1 ring-emerald-400/30">
              {comp.tier} tier
            </span>
          ) : (
            <span className="rounded-xl border border-red-400/35 bg-red-500/10 px-4 py-2 text-xl font-bold text-red-100/90 ring-1 ring-red-400/25">
              {comp.tier} tier
            </span>
          )}
        </div>
        <dl className="mt-6 grid gap-x-4 gap-y-4 text-sm sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">Game plan</dt>
            <dd className="font-medium leading-snug text-red-50">{playstyleLabel[comp.playstyle]}</dd>
            <dd className="leading-relaxed text-red-100/65">{comp.rollInfo}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">Difficulty</dt>
            <dd className="leading-normal">
              <DifficultyBadge difficulty={comp.difficulty} size="md" />
            </dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">Patch</dt>
            <dd className="font-medium leading-snug text-red-50">{comp.patch}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">Content updated</dt>
            <dd className="font-medium leading-snug text-red-50">{comp.lastUpdated}</dd>
          </div>
        </dl>
        {comp.godHint ? (
          <p className="mt-4 rounded-lg border border-red-500/25 bg-red-950/35 px-4 py-3 text-sm text-red-50">
            <span className="font-semibold text-red-200">Space God tip: </span>
            {comp.godHint}
          </p>
        ) : null}
      </header>

      <section className="py-8">
        <h2 className="text-lg font-semibold text-white">Trait highlights</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {comp.traits.map((t) => (
            <li
              key={`${t.name}-${t.count}`}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-red-50"
            >
              {t.name} · {t.count}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-semibold text-white">Board preview</h2>
        <MetaBoardPreview units={comp.units} />
      </section>

      <section className="py-6">
        <h2 className="text-lg font-semibold text-white">Notes</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-red-100/72">
          {comp.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
