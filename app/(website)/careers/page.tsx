'use client';

import { useTranslation } from 'react-i18next';
import { Globe, Zap, Heart, Code2, Megaphone, Headset, Calculator, Check, Mail, ArrowDown, MapPin } from 'lucide-react';
import Link from 'next/link';

const APPLY_EMAIL = 'info@receipters.com';

const roles = [
  { key: 'developer', Icon: Code2 },
  { key: 'marketer', Icon: Megaphone },
  { key: 'support', Icon: Headset },
  { key: 'accountant', Icon: Calculator },
];
const doPoints = ['point1', 'point2', 'point3'];
const fitPoints = ['fit1', 'fit2'];

const reasons = [
  { key: 'globalImpact', Icon: Globe },
  { key: 'innovation', Icon: Zap },
  { key: 'culture', Icon: Heart },
];

const offices = [
  { title: 'footer.primaryOffice', address: 'footer.primaryOfficeAddress' },
  { title: 'footer.usOffice', address: 'footer.usOfficeAddress' },
  { title: 'footer.zambiaOffice', address: 'footer.zambiaOfficeAddress' },
];

const steps = ['step1', 'step2', 'step3'];

export default function CareersPage() {
  const { t } = useTranslation('common');

  const applyHref = (key: string) =>
    `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`${t('careers.roles.applyPrefix')}: ${t(`careers.roles.${key}.title`)}`)}`;

  return (
    <div className="bg-white text-ink">
      {/* Hero with an index of the open roles */}
      <section className="bg-primary-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              {t('careers.hero.title')}
            </h1>
            <p className="mt-6 max-w-xl text-[1.1rem] leading-[1.7] text-white/75">{t('careers.hero.description')}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">{t('careers.hero.detail')}</p>
          </div>
          <nav aria-label={t('careers.index.title')} className="lg:col-span-5">
            <div className="border border-white/20 bg-white/[0.04]">
              <div className="border-b border-white/20 px-6 py-4 text-[15px] font-semibold">{t('careers.index.title')}</div>
              <ul className="m-0 list-none p-0">
                {roles.map(({ key, Icon }) => (
                  <li key={key} className="border-b border-white/15 last:border-b-0">
                    <a
                      href={`#${key}`}
                      className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/10"
                    >
                      <Icon className="size-5 shrink-0 text-skyDeep" strokeWidth={1.5} aria-hidden="true" />
                      <span className="flex-1 text-[17px] font-medium">{t(`careers.roles.${key}.title`)}</span>
                      <ArrowDown className="size-4 text-white/50 transition-transform group-hover:translate-y-0.5 group-hover:text-white" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-28 bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.roles.title')}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t('careers.roles.subtitle')}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {roles.map(({ key, Icon }) => (
              <article
                key={key}
                id={key}
                className="group flex scroll-mt-32 flex-col border border-line border-t-[3px] border-t-primary bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)] sm:p-9"
              >
                <div className="flex size-12 items-center justify-center bg-primary text-white">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight sm:text-[1.75rem]">
                  {t(`careers.roles.${key}.title`)}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">{t(`careers.roles.${key}.summary`)}</p>

                <h4 className="mt-7 text-[15px] font-semibold">{t('careers.roles.doTitle')}</h4>
                <ul className="m-0 mt-3 list-none space-y-3 p-0">
                  {doPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
                      <span>{t(`careers.roles.${key}.${point}`)}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-7 border-t border-line pt-6 text-[15px] font-semibold">{t('careers.roles.fitTitle')}</h4>
                <ul className="m-0 mt-3 list-none space-y-3 p-0">
                  {fitPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                      <span>{t(`careers.roles.${key}.${point}`)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={applyHref(key)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-ink sm:w-auto sm:self-start"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {t('careers.roles.apply')}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How applying works: a real sequence */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.process.title')}</h2>
          <ol className="mt-12 grid list-none border-l border-t border-line p-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="border-b border-r border-line p-7 transition-colors hover:bg-mist/60 md:min-h-[14rem]">
                <div className="font-mono text-sm font-medium text-primary">{String(index + 1).padStart(2, '0')}</div>
                <div className="mt-3 h-px w-10 bg-primary" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{t(`careers.process.${step}.title`)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(`careers.process.${step}.description`)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            {t('careers.roles.howToApply')}{' '}
            <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold text-primary underline underline-offset-4">
              {APPLY_EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-ink-depth text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.whyJoin.title')}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{t('careers.whyJoin.subtitle')}</p>
          <div className="mt-12 grid border-l border-t border-white/15 md:grid-cols-3">
            {reasons.map(({ key, Icon }) => (
              <div key={key} className="border-b border-r border-white/15 p-7 lg:min-h-[14rem]">
                <Icon className="size-6 text-skyDeep" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{t(`careers.whyJoin.${key}.title`)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/78">{t(`careers.whyJoin.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.where.title')}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t('careers.where.subtitle')}</p>
          <div className="mt-10 grid border-l border-t border-line md:grid-cols-3">
            {offices.map(({ title, address }) => (
              <div key={title} className="border-b border-r border-line p-7">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="size-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  {t(title)}
                </div>
                <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-muted">{t(address)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No fitting role */}
      <section className="bg-primary-depth text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.cta.title')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{t('careers.cta.description')}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-mist"
          >
            {t('careers.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
