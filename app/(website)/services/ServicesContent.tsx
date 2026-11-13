"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Cable, Rocket, Code2, ChartLine, UserRound, ArchiveRestore, Check } from "lucide-react";

const services = [
  { key: "integration", Icon: Cable },
  { key: "onboarding", Icon: Rocket },
  { key: "developer", Icon: Code2 },
  { key: "analytics", Icon: ChartLine },
  { key: "individualHistory", Icon: UserRound },
  { key: "merchantHistory", Icon: ArchiveRestore },
];
const points = ["point1", "point2", "point3"];
const steps = ["step1", "step2", "step3"];

export default function ServicesContent() {
  const { t } = useTranslation("common");

  return (
    <div>
      <section className="bg-ink-depth text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            {t("services.hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {t("services.hero.description")}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid border-l border-t border-line md:grid-cols-2">
            {services.map(({ key, Icon }) => (
              <div key={key} id={key} className="group relative scroll-mt-32 border-b border-r border-line p-7 transition-all hover:z-10 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)] sm:p-9 md:min-h-[22rem]">
                <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-7 text-2xl font-semibold tracking-tight text-ink">
                  {t(`services.${key}.title`)}
                </h2>
                <p className="mt-3 max-w-md text-[17px] leading-relaxed text-muted">
                  {t(`services.${key}.description`)}
                </p>
                <ul className="mt-6 list-none space-y-3 p-0">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
                      <span>{t(`services.${key}.${point}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("services.process.title")}
          </h2>
          <ol className="mt-12 grid list-none border-l border-t border-line p-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="border-b border-r border-line bg-white p-7 transition-colors hover:bg-mist/60 md:min-h-[14rem]">
                <div className="font-mono text-sm font-medium text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 h-px w-10 bg-primary" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t(`services.process.${step}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {t(`services.process.${step}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary-depth text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t("services.cta.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {t("services.cta.description")}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-mist"
          >
            {t("landing.features.talkToTeam")}
          </Link>
        </div>
      </section>
    </div>
  );
}
