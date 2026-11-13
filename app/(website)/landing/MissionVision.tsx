"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function MissionVision() {
  const { t } = useTranslation("common");

  return (
    <section className="border-t border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("landing.mission.title")}
          </h2>
          <Link href="/about" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            {t("landing.mission.link")}
          </Link>
        </div>
        <div className="mt-10 grid border-l border-t border-line lg:grid-cols-2">
          <div className="border-b border-r border-line bg-white p-7 sm:p-9">
            <h3 className="text-lg font-semibold text-ink">{t("about.mission.title")}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">{t("about.mission.description")}</p>
          </div>
          <div className="border-b border-r border-line bg-white p-7 sm:p-9">
            <h3 className="text-lg font-semibold text-ink">{t("about.vision.title")}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">{t("about.vision.africa")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
