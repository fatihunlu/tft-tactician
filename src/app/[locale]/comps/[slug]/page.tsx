import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { MetaBoardPreview } from "@/components/MetaBoardPreview";
import { UnitRow } from "@/components/UnitRow";
import { getChampionByName } from "@/lib/champions";
import { getCompBySlug, getCompSlugs } from "@/lib/comps";
import { t as loc } from "@/types/comp";
import type { Comp } from "@/types/comp";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = getCompSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const comp = getCompBySlug(slug);
  const tDetail = await getTranslations({ locale, namespace: "compDetail" });
  if (!comp) {
    return { title: tDetail("notFound") };
  }
  return {
    title: tDetail("metaTitle", { compName: loc(comp.name, locale) }),
    description: loc(comp.summary, locale),
  };
}

function playstyleKey(playstyle: Comp["playstyle"]): string {
  const map: Record<Comp["playstyle"], string> = {
    slow_roll: "slow_roll",
    fast_8: "fast_8",
    fast_9: "fast_9",
    standard: "standard",
  };
  return map[playstyle];
}

export default async function CompDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const comp = getCompBySlug(slug);
  if (!comp) notFound();

  const t = await getTranslations({ locale, namespace: "compDetail" });
  const tPlaystyle = await getTranslations({ locale, namespace: "playstyle" });

  const name = loc(comp.name, locale);
  const summary = loc(comp.summary, locale);
  const rollInfo = loc(comp.rollInfo, locale);

  return (
    <div className="mx-auto w-full max-w-full px-4 py-10 sm:max-w-[60%] sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-red-200 hover:text-red-100"
      >
        {t("backLink")}
      </Link>

      <header className="mt-6 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-red-300/90">{t("breadcrumb")}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">{name}</h1>
            <p className="mt-3 text-red-100/75">{summary}</p>
          </div>
          {comp.tier === "S" ? (
            <span className="relative isolate shrink-0 overflow-hidden rounded-xl border border-amber-200/70 bg-linear-to-br from-amber-200 via-amber-400 to-amber-600 px-5 py-2.5 text-xl font-extrabold tracking-tight text-amber-950 shadow-[0_0_28px_rgba(251,191,36,0.5),inset_0_1px_0_rgba(255,255,255,0.5)] ring-2 ring-amber-100/50 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-tr before:from-white/35 before:via-transparent before:to-transparent before:opacity-60 after:pointer-events-none after:absolute after:-inset-1 after:rounded-xl after:bg-amber-400/20 after:blur-lg after:content-['']">
              {t("tier", { tier: comp.tier })}
            </span>
          ) : comp.tier === "A" ? (
            <span className="rounded-xl border border-emerald-400/45 bg-emerald-500/15 px-4 py-2 text-xl font-bold text-emerald-100 ring-1 ring-emerald-400/30">
              {t("tier", { tier: comp.tier })}
            </span>
          ) : (
            <span className="rounded-xl border border-red-400/35 bg-red-500/10 px-4 py-2 text-xl font-bold text-red-100/90 ring-1 ring-red-400/25">
              {t("tier", { tier: comp.tier })}
            </span>
          )}
        </div>
        <dl className="mt-6 grid gap-x-4 gap-y-4 text-sm sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">{t("gamePlan")}</dt>
            <dd className="font-medium leading-snug text-red-50">
              {tPlaystyle(playstyleKey(comp.playstyle) as Parameters<typeof tPlaystyle>[0])}
            </dd>
            <dd className="leading-relaxed text-red-100/65">{rollInfo}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">{t("difficulty")}</dt>
            <dd className="leading-normal">
              <DifficultyBadge difficulty={comp.difficulty} size="md" />
            </dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">{t("patch")}</dt>
            <dd className="font-medium leading-snug text-red-50">{comp.patch}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-xs leading-normal text-red-200/45">{t("contentUpdated")}</dt>
            <dd className="font-medium leading-snug text-red-50">{comp.lastUpdated}</dd>
          </div>
        </dl>
        {comp.godHint ? (
          <p className="mt-4 rounded-lg border border-red-500/25 bg-red-950/35 px-4 py-3 text-sm text-red-50">
            <span className="font-semibold text-red-200">{t("spaceGodTip")}</span>
            {loc(comp.godHint, locale)}
          </p>
        ) : null}
      </header>

      <section className="py-8">
        <h2 className="text-lg font-semibold text-white">{t("traitHighlights")}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {comp.traits.map((tr) => (
            <li
              key={`${tr.name}-${tr.count}`}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-red-50"
            >
              {tr.name} · {tr.count}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-semibold text-white">{t("boardPreview")}</h2>
        <MetaBoardPreview units={comp.units} />
      </section>

      <section className="py-6">
        <h2 className="text-lg font-semibold text-white">{t("notes")}</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-red-100/72">
          {comp.notes.map((n, i) => (
            <li key={i}>{loc(n, locale)}</li>
          ))}
        </ul>
      </section>

      <section className="py-6">
        <ul className="space-y-2">
          {comp.units.map((unit) => (
            <UnitRow
              key={unit.champion}
              unit={unit}
              championSlug={getChampionByName(unit.champion)?.slug}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
