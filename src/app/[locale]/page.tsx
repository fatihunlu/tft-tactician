import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { CompGallery } from "@/components/CompGallery";
import { getAllComps } from "@/lib/comps";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function HomeContent({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" });
  const comps = getAllComps();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-red-300/90">
          {t("eyebrow")}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-red-100/75">
          {t("description")}
        </p>
      </header>
      <CompGallery comps={comps} locale={locale} />
    </div>
  );
}

export default function Home({ params }: Props) {
  return (
    // Async wrapper via Promise param keeps static-friendly behavior
    <HomeAsync params={params} />
  );
}

async function HomeAsync({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent locale={locale} />;
}
