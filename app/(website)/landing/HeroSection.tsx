"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import ReceiptArtifact from "./ReceiptArtifact";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-ink-depth text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="flex flex-col justify-center lg:col-span-6">
          <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {t("landing.hero.newTitle")}
          </h1>
          <p className="mt-6 max-w-xl text-[1.1rem] leading-[1.7] text-white/75">
            {t("landing.hero.newDescription")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-mist hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.45)]"
            >
              {t("landing.hero.newButton1")}
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              {t("landing.hero.newButton2")}
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/55">{t("landing.hero.newSubtitle")}</p>
        </div>
        <div className="lg:col-span-6">
          <ReceiptArtifact caption={t("landing.hero.artifactCaption")} />
        </div>
      </div>
    </section>
  );
}
