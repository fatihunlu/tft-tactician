"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
      <p className="mt-2 text-red-100/65">{t("description")}</p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-red-200 hover:text-red-100"
      >
        {t("back")}
      </Link>
    </div>
  );
}
