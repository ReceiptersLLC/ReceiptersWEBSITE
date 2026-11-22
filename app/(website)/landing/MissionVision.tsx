"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LEARN_MORE_HREF } from "@/lib/siteLinks";

export default function MissionVision() {
  const { t } = useTranslation("common");

  return (
    <section className="border-t border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("landing.mission.title")}
          </h2>
        </div>
        <div className="mt-10 grid border-l border-t border-line lg:grid-cols-2">
          {[
            { key: "mission", title: t("about.mission.title") },
            { key: "vision", title: t("about.vision.title") },
          ].map(({ key, title }) => (
            <Link
              key={key}
              href={LEARN_MORE_HREF}
              className="group flex items-center justify-between gap-6 border-b border-r border-line bg-white p-7 transition-colors hover:bg-mist/60 sm:p-9"
            >
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <span className="shrink-0 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                {t("learn More")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
