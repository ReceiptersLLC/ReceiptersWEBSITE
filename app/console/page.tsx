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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {consoleProducts.map((p) => {
          const list = admins.filter((a) => a.product === p.slug);
          const count = (s: string) => list.filter((a) => a.status === s).length;
          const businesses = new Set(list.map((a) => a.businessId)).size;
          const recent = list.reduce<number | null>(
            (min, a) => (a.lastActiveMinutes === null ? min : min === null ? a.lastActiveMinutes : Math.min(min, a.lastActiveMinutes)),
            null
          );
          const external = p.externalConsoleUrl;
          const cardClass =
            'group flex flex-col border border-line border-t-[3px] border-t-primary bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)]';
          const head = (
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-medium tracking-tight">{p.name}</h2>
                <p className="mt-1 text-sm text-muted">{p.category}</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center bg-primary text-white">
                <Boxes className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>
          );

          if (external) {
            return (
              <a key={p.slug} href={external} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {head}
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.description}</p>
                <p className="mt-6 border border-line bg-mist px-4 py-3 text-sm leading-relaxed text-muted">
                  This product has its own owner console. It opens in a new tab.
                </p>
                <div className="mt-5 flex items-center justify-end border-t border-line pt-4 text-sm">
                  <span className="flex items-center gap-1.5 font-semibold text-primary">
                    Open {p.name} console
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          }

          return (
            <Link key={p.slug} href={`/console/${p.slug}`} className={cardClass}>
              {head}
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.description}</p>
              <dl className="mt-6 grid grid-cols-3 gap-px border border-line bg-line text-center">
                {[
                  ['Businesses', businesses],
                  ['Admins', list.length],
                  ['Active', count('active')],
                ].map(([label, value]) => (
                  <div key={label as string} className="bg-white px-2 py-3">
                    <dd className="font-mono text-xl font-medium">{value}</dd>
                    <dt className="mt-0.5 text-xs text-muted">{label}</dt>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-muted">
                  {count('paused')} paused · {count('deactivated')} deactivated
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span className="text-muted">Last activity {timeAgo(recent)}</span>
                <span className="flex items-center gap-1.5 font-semibold text-primary">
                  Open console
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
