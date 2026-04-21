import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SettingsPanel } from "@/components/SettingsPanel";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });
  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for all pages in this layout
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "layout" });

  return (
    <NextIntlClientProvider>
      <ThemeProvider>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_110%_70%_at_50%_-15%,rgba(209,54,57,0.14),transparent_55%)]" />
        <header className="border-b border-white/10 bg-[#120709]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="group/logo flex items-center gap-2.5 text-lg font-semibold tracking-tight transition-opacity hover:opacity-90"
            >
              <Image
                src="/icon.svg"
                alt=""
                width={32}
                height={32}
                className="size-8 shrink-0 rounded-lg ring-1 ring-white/10 transition ring-offset-2 ring-offset-[#120709] group-hover/logo:ring-white/18"
                priority
              />
              <span className="text-white">{t("brand")}</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-red-200/55">{t("set")}</span>
              <SettingsPanel currentLocale={locale} />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-[#120709]/92 py-8 text-sm text-red-100/45">
          <div className="mx-auto max-w-6xl space-y-3 px-4 sm:px-6">
            <p>{t("footer.disclaimer")}</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                className="text-red-200/90 hover:text-red-100"
                href="https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/tft-set-17-space-gods-overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.riotLink")}
              </a>
              <a
                className="text-red-200/90 hover:text-red-100"
                href="https://mobalytics.gg/tft/new-set-release"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.mobalyticsLink")}
              </a>
            </p>
          </div>
        </footer>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
