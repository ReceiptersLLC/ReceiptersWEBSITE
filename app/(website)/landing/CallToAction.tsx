"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-primary-depth text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {t("landing.cta.newTitle")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            {t("landing.cta.newDescription")}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Link
            href="/download"
            className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-mist"
          >
            {t("landing.cta.newButton1")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            {t("landing.cta.newButton2")}
          </Link>
        </div>
      </div>
    </section>
  );
}
