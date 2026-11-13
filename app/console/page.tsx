'use client';

import Link from 'next/link';
import { ArrowRight, Boxes, ExternalLink } from 'lucide-react';
import { useConsole } from '@/components/console/ConsoleProvider';
import { consoleProducts, timeAgo } from '@/lib/console/data';

export default function ConsoleHome() {
  const { admins } = useConsole();

  return (
    <div>
      <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Your products</h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Choose a product to manage its business IDs and admin accounts.
      </p>

      <ul className="m-0 mt-10 list-none space-y-3 p-0">
        {consoleProducts.map((p) => {
          const list = admins.filter((a) => a.product === p.slug);
          const count = (s: string) => list.filter((a) => a.status === s).length;
          const businesses = new Set(list.map((a) => a.businessId)).size;
          const recent = list.reduce<number | null>(
            (min, a) => (a.lastActiveMinutes === null ? min : min === null ? a.lastActiveMinutes : Math.min(min, a.lastActiveMinutes)),
            null
          );
          const external = p.externalConsoleUrl;

          const body = (
            <>
              <div className="flex min-w-0 items-center gap-4 lg:w-[34%]">
                <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-white">
                  <Boxes className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-serif text-xl font-medium leading-tight tracking-tight">{p.name}</h2>
                  <p className="mt-0.5 text-sm text-muted">
                    {p.category} · {p.description}
                  </p>
                </div>
              </div>

              {external ? (
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  Managed in its own owner console. Opens in a new tab.
                </p>
              ) : (
                <dl className="grid flex-1 grid-cols-5 gap-px border border-line bg-line text-center">
                  {[
                    ['Businesses', businesses],
                    ['Admins', list.length],
                    ['Active', count('active')],
                    ['Paused', count('paused')],
                    ['Deactivated', count('deactivated')],
                  ].map(([label, value]) => (
                    <div key={label as string} className="bg-white px-1 py-2">
                      <dd className="font-mono text-lg font-medium">{value}</dd>
                      <dt className="text-[11px] text-muted sm:text-xs">{label}</dt>
                    </div>
                  ))}
                </dl>
              )}

              <div className="flex items-center justify-between gap-6 lg:w-[26%] lg:justify-end">
                {!external && <span className="text-sm text-muted">Active {timeAgo(recent)}</span>}
                <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                  {external ? 'Open console' : 'Manage'}
                  {external ? (
                    <ExternalLink className="size-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  )}
                </span>
              </div>
            </>
          );

          const rowClass =
            'group flex flex-col gap-4 border border-line border-l-[3px] border-l-primary bg-white p-4 transition-all hover:border-primary/50 hover:shadow-[0_14px_28px_-16px_rgba(14,20,51,0.22)] sm:p-5 lg:flex-row lg:items-center lg:gap-6';

          return (
            <li key={p.slug}>
              {external ? (
                <a href={external} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  {body}
                </a>
              ) : (
                <Link href={`/console/${p.slug}`} className={rowClass}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
