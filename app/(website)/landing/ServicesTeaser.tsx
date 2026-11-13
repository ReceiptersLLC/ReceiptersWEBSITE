"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const services = ["integration", "onboarding", "developer", "analytics", "individualHistory", "merchantHistory"];

export default function ServicesTeaser() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="font-serif max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("landing.servicesTeaser.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {t("landing.servicesTeaser.description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              {t("landing.servicesTeaser.button")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
            >
              {t("landing.features.talkToTeam")}
            </Link>
          </div>
        </div>
        <ul className="m-0 list-none border-t border-line p-0 lg:col-span-5">
          {services.map((key) => (
            <li key={key} className="flex items-center gap-3 border-b border-line py-4 text-[17px] font-medium text-ink">
              <Check className="size-4 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
              {t(`services.${key}.title`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
