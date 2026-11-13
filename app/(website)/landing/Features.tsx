"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  ReceiptText,
  Database,
  Smartphone,
  ChartLine,
  ShieldCheck,
  LockKeyhole,
  Braces,
  Webhook,
} from "lucide-react";

const modules = [
  { key: "digitalReceipting", Icon: ReceiptText, href: "/features/digital-receipt-issuance" },
  { key: "receiptStorage", Icon: Database, href: "/features/receipt-storage" },
  { key: "receiptersApp", Icon: Smartphone, href: "/features/multi-device" },
  { key: "dataAnalysis", Icon: ChartLine, href: "/features/data-analysis" },
];

const reasons = [
  { key: "builtForCompliance", Icon: ShieldCheck },
  { key: "secureByDesign", Icon: LockKeyhole },
  { key: "aiReadyData", Icon: Braces },
  { key: "developerFriendlyApis", Icon: Webhook },
];

export function Modules() {
  const { t } = useTranslation("common");

  return (
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t("landing.features.newTitle")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t("landing.features.newDescription")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
              >
                {t("landing.features.comparePlans")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {t("landing.features.talkToTeam")}
              </Link>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {modules.map(({ key, Icon, href }) => (
              <Link
                key={key}
                href={href}
                className="group flex min-h-[15rem] flex-col border-b border-r border-line bg-white p-7 transition-colors hover:bg-mist"
              >
                <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold text-ink">
                  {t(`landing.features.${key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {t(`landing.features.${key}.description`)}
                </p>
                <span className="mt-auto pt-6 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                  {t("learn More")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}

export function WhyReceipters() {
  const { t } = useTranslation("common");

  return (
      <section id="compliance" className="scroll-mt-16 border-t border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t("landing.features.whyReceipters.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t("landing.features.whyReceipters.description")}
              </p>
            </div>
          </div>
          <div className="grid border-l border-t border-line sm:grid-cols-2 lg:col-span-8">
            {reasons.map(({ key, Icon }) => (
              <div key={key} className="border-b border-r border-line bg-white p-7 sm:min-h-[17rem]">
                <Icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t(`landing.features.${key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {t(`landing.features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
