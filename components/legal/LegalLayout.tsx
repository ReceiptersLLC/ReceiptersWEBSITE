'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const legalDocuments = [
  { href: '/legal', key: 'legal.nav.hub' },
  { href: '/privacy-policy', key: 'legal.nav.privacy' },
  { href: '/terms-and-conditions', key: 'legal.nav.terms' },
  { href: '/cookie-policy', key: 'legal.nav.cookies' },
  { href: '/compliance', key: 'legal.nav.compliance' },
  { href: '/delete-account', key: 'legal.nav.delete' },
];

export type LegalSection = { id: string; title: string };

/** Shared frame for every legal and compliance page: hero, document switcher, contents list and a readable column. */
export default function LegalLayout({
  title,
  subtitle,
  meta,
  sections,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  sections?: LegalSection[];
  children: ReactNode;
}) {
  const { t } = useTranslation('common');
  const pathname = usePathname();

  return (
    <div className="bg-white text-ink">
      <section className="bg-primary-hero text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">{subtitle}</p>}
          {meta && <p className="mt-4 text-sm text-white/75">{meta}</p>}
        </div>
      </section>

      <nav aria-label={t('legal.nav.label')} className="border-b border-line bg-mist">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 sm:px-8">
          {legalDocuments.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`shrink-0 px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                  active ? 'bg-primary text-white' : 'text-ink hover:bg-white'
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-20">
        {sections && sections.length > 0 && (
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="text-[15px] font-semibold">{t('legal.onThisPage')}</div>
              <ol className="m-0 mt-4 list-none border-l border-line p-0">
                {sections.map(({ id, title: sectionTitle }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm leading-snug text-muted transition-colors hover:border-primary hover:text-ink"
                    >
                      {sectionTitle}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        )}
        <article className={sections && sections.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}>
          <div className="max-w-3xl">{children}</div>
        </article>
      </div>
    </div>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-line pb-10 pt-10 first:pt-0 last:border-b-0">
      <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-[1.75rem]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function Sub({ title }: { title: string }) {
  return <h3 className="pt-2 text-lg font-semibold">{title}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[17px] leading-[1.75] text-muted">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-primary">
      {items.map((item, index) => (
        <li key={index} className="pl-1 text-[17px] leading-[1.7] text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
