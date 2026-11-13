'use client';

import { useTranslation } from 'react-i18next';
import { Globe, Zap, Heart, Code2, Megaphone, Headset, Calculator, Check, Mail } from 'lucide-react';
import Link from 'next/link';

const APPLY_EMAIL = 'info@receipters.com';

const roles = [
  { key: 'developer', Icon: Code2 },
  { key: 'marketer', Icon: Megaphone },
  { key: 'support', Icon: Headset },
  { key: 'accountant', Icon: Calculator },
];
const points = ['point1', 'point2', 'point3'];

const reasons = [
  { key: 'globalImpact', Icon: Globe },
  { key: 'innovation', Icon: Zap },
  { key: 'culture', Icon: Heart },
];

export default function CareersPage() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-white text-ink">
      {/* Hero */}
      <section className="bg-ink-depth text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {t('careers.hero.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] leading-[1.7] text-white/75">{t('careers.hero.description')}</p>
          <a
            href="#roles"
            className="mt-9 inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-mist"
          >
            {t('careers.roles.see')}
          </a>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">{t('careers.roles.title')}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t('careers.roles.subtitle')}</p>

          <div className="mt-12 border-t border-line">
            {roles.map(({ key, Icon }) => (
              <article
                key={key}
                id={key}
                className="grid scroll-mt-32 gap-8 border-b border-line py-10 transition-colors hover:bg-mist/50 lg:grid-cols-12 lg:gap-10 lg:px-4"
              >
                <div className="lg:col-span-5">
                  <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight">{t(`careers.roles.${key}.title`)}</h3>
                  <p className="mt-3 max-w-md text-[17px] leading-relaxed text-muted">{t(`careers.roles.${key}.summary`)}</p>
                </div>
                <div className="lg:col-span-7">
                  <ul className="m-0 list-none space-y-3.5 p-0">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <Check className="mt-1 size-4 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
                        <span>{t(`careers.roles.${key}.${point}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`${t('careers.roles.applyPrefix')}: ${t(`careers.roles.${key}.title`)}`)}`}
                    className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {t('careers.roles.apply')}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
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
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{t(`careers.whyJoin.${key}.description`)}</p>
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
