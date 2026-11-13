"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const steps = ["step1", "step2", "step3", "step4"];
const analytics = ["understandPerformance", "spotTrends", "monitorRisk", "automateReporting"];
const sectors = ["retailers", "restaurants", "healthcare", "universities", "consumers"];
const audiences = [
  { key: "forMerchants", points: ["capture", "issue", "lookup"] },
  { key: "forConsumers", points: ["collect", "find", "use"] },
];

// A real sequence, so the steps are numbered.
export function Steps() {
  const { t } = useTranslation("common");

  return (
      <section id="how-it-works" className="scroll-mt-28 border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("landing.howItWorks.newTitle")}
          </h2>
          <ol className="mt-12 grid list-none border-l border-t border-line p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step} className="border-b border-r border-line p-7 transition-colors hover:bg-mist/60 lg:min-h-[19rem]">
                <div className="font-mono text-sm font-medium text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 h-px w-10 bg-primary" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t(`landing.howItWorks.${step}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {t(`landing.howItWorks.${step}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
  );
}

export function Analytics() {
  const { t } = useTranslation("common");

  return (
      <section className="bg-ink-depth text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t("landing.aiSection.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {t("landing.aiSection.description")}
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {analytics.map((key) => (
              <div key={key} className="border-b border-r border-white/15 p-7 lg:min-h-[13rem]">
                <h3 className="text-lg font-semibold">{t(`landing.aiSection.${key}.title`)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {t(`landing.aiSection.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/55">{t("landing.aiSection.ownership")}</p>
        </div>
      </section>
  );
}

export function AppSection() {
  const { t } = useTranslation("common");

  return (
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {t("landing.appSection.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t("landing.appSection.description")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com/gb/app/receipters/id6740431170"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative block h-[46px] w-[150px] overflow-hidden">
                  <Image src="/assets/app-store.svg" alt="Download on the App Store" width={150} height={150} className="absolute left-0 top-1/2 size-[150px] max-w-none -translate-y-1/2" />
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.receipters.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative block h-[46px] w-[150px] overflow-hidden">
                  <Image src="/assets/google-play.svg" alt="Get it on Google Play" width={150} height={150} className="absolute left-0 top-1/2 size-[150px] max-w-none -translate-y-1/2" />
                </span>
              </a>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-line lg:grid-cols-2">
            {audiences.map(({ key, points }) => (
              <div key={key} className="border-b border-r border-line p-7 sm:p-9">
                <h3 className="text-xl font-semibold text-ink">
                  {t(`landing.appSection.${key}.title`)}
                </h3>
                <ul className="mt-6 list-none space-y-4 p-0">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
                      <span>{t(`landing.appSection.${key}.${point}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{t("landing.appSection.connect")}</p>
        </div>
      </section>
  );
}

export function Sectors() {
  const { t } = useTranslation("common");

  return (
      <section id="sectors" className="scroll-mt-28 border-t border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-serif max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t("landing.whoWeServe.title")}
          </h2>
          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((key) => (
              <div key={key} className="border-b border-r border-line bg-white p-7 transition-colors hover:bg-mist/60 lg:min-h-[13rem]">
                <h3 className="text-lg font-semibold text-ink">
                  {t(`landing.whoWeServe.${key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {t(`landing.whoWeServe.${key}.description`)}
                </p>
              </div>
            ))}
            <Link
              href="/contact"
              className="group flex flex-col border-b border-r border-line bg-primary p-7 text-white transition-all hover:-translate-y-0.5 hover:bg-ink lg:min-h-[13rem]"
            >
              <h3 className="text-lg font-semibold">{t("landing.whoWeServe.other.title")}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                {t("landing.whoWeServe.other.description")}
              </p>
              <span className="mt-auto pt-6 text-sm font-semibold underline-offset-4 group-hover:underline">
                {t("landing.features.talkToTeam")}
              </span>
            </Link>
          </div>
        </div>
      </section>
  );
}
