'use client'
import React from 'react';
import Link from 'next/link';
import {
  ReceiptText,
  Database,
  MonitorSmartphone,
  Wallet,
  Share2,
  ChartLine,
  Tags,
  TrendingUp,
  ScanSearch,
  UploadCloud,
  Smartphone,
  Smile,
  Check,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProductFamily from '@/components/ProductFamily';

const features = [
  { title: 'product.features.digitalReceiptIssuance.title', slug: 'digital-receipt-issuance', Icon: ReceiptText, description: 'product.features.digitalReceiptIssuance.description' },
  { title: 'product.features.offlineFunctionality.title', slug: 'receipt-storage', Icon: Database, description: 'product.features.offlineFunctionality.description' },
  { title: 'landing.features.receiptersApp.title', slug: 'multi-device', Icon: MonitorSmartphone, description: 'product.features.multiDeviceSync.description' },
  { title: 'product.features.budgetingAssistant.title', slug: 'data-analysis', Icon: Wallet, description: 'product.features.budgetingAssistant.description' },
  { title: 'product.features.expenseSharing.title', slug: 'receipt-sharing', Icon: Share2, description: 'product.features.expenseSharing.description' },
  { title: 'product.features.vendorAnalyticsDashboard.title', slug: 'vendor-analytics-dashboard', Icon: ChartLine, description: 'product.features.vendorAnalyticsDashboard.description' },
];

const aiBenefits = [
  { Icon: Tags, title: 'product.aiBenefits.smartCategorization.title', description: 'product.aiBenefits.smartCategorization.description' },
  { Icon: TrendingUp, title: 'product.aiBenefits.trendDetection.title', description: 'product.aiBenefits.trendDetection.description' },
  { Icon: ScanSearch, title: 'product.aiBenefits.instantRetrieval.title', description: 'product.aiBenefits.instantRetrieval.description' },
];

const steps = [
  { key: 'step1', Icon: MonitorSmartphone },
  { key: 'step2', Icon: UploadCloud },
  { key: 'step3', Icon: Smartphone },
  { key: 'step4', Icon: Smile },
];

const buttonPrimary =
  'inline-flex items-center justify-center bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink';
const buttonOutline =
  'inline-flex items-center justify-center border border-ink px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-white text-ink">
      {/* Hero */}
      <section className="bg-primary-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {t('product.hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.1rem] leading-[1.7] text-white/75">{t('product.hero.description')}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-mist"
              >
                {t('product.hero.button1')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                {t('product.hero.button2')}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-white/70">{t('product.hero.description1')}</p>
            <ul className="mt-5 list-none space-y-3 border-t border-white/15 p-0 pt-5">
              {['bullet1', 'bullet2', 'bullet3', 'bullet4'].map((key) => (
                <li key={key} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
                  <Check className="mt-1 size-4 shrink-0 text-[#7BE0B5]" strokeWidth={2.5} aria-hidden="true" />
                  <span>{t(`product.hero.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProductFamily />

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-serif max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            {t('product.features.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t('product.features.subtitle')}</p>
          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, slug, Icon, description }) => (
              <Link
                key={slug}
                href={`/features/${slug}`}
                className="group relative flex min-h-[15rem] flex-col border-b border-r border-line bg-white p-7 transition-all hover:z-10 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)]"
              >
                <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold">{t(title)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(description)}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                  {t('learn More')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI benefits */}
      <section className="bg-ink-depth text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-serif max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
            {t('product.aiBenefits.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{t('product.aiBenefits.description')}</p>
          <div className="mt-12 grid border-l border-t border-white/15 md:grid-cols-3">
            {aiBenefits.map(({ Icon, title, description }) => (
              <div key={title} className="border-b border-r border-white/15 p-7 lg:min-h-[14rem]">
                <Icon className="size-6 text-skyDeep" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{t(title)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/78">{t(description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works: a real sequence */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('product.howItWorks.title')}</h2>
          <ol className="mt-12 grid list-none border-l border-t border-line p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ key, Icon }, index) => (
              <li key={key} className="border-b border-r border-line p-7 transition-colors hover:bg-mist/60 lg:min-h-[17rem]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="mt-3 h-px w-10 bg-primary" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{t(`product.howItWorks.${key}.title`)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(`product.howItWorks.${key}.description`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-depth text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('product.cta.title')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{t('product.cta.description')}</p>
          </div>
          <Link
            href="/download"
            className="inline-flex shrink-0 items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-mist"
          >
            {t('product.cta.button')}
          </Link>
        </div>
      </section>

      {/* Getting started: a real sequence */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('product.closing.title')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t('product.closing.subtitle')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/product" className={buttonPrimary}>
                {t('landing.features.comparePlans')}
              </Link>
              <Link href="/contact" className={buttonOutline}>
                {t('landing.features.talkToTeam')}
              </Link>
            </div>
          </div>
          <ol className="m-0 list-none border-t border-line p-0 lg:col-span-7">
            {[
              t('product.closing.step1'),
              t('product.closing.step2'),
              `Roll out the ${t('landing.features.receiptersApp.title')} to put receipts in the hands of staff and customers.`,
              t('product.closing.step4'),
            ].map((text, index) => (
              <li key={index} className="flex gap-5 border-b border-line py-5">
                <span className="font-mono text-sm font-medium text-primary">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[17px] leading-relaxed">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
