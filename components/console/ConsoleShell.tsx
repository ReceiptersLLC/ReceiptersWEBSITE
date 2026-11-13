'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/** Frame for every signed-in console page. The console is its own space, so it carries no marketing navigation. */
export default function ConsoleShell({ owner, children }: { owner: string; children: ReactNode }) {
  const router = useRouter();

  const signOut = async () => {
    await fetch('/api/console/logout', { method: 'POST' });
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-mist text-ink">
      <header className="bg-primary-depth text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/console" className="flex items-center gap-3">
            <span className="relative block size-8">
              <Image src="/img/logo.svg" alt="" fill className="object-contain" />
            </span>
            <span className="font-serif text-[1.35rem] leading-none">Receipters</span>
            <span className="hidden border-l border-white/30 pl-3 text-[15px] font-semibold sm:inline">Owners console</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <span className="hidden text-white/80 md:inline">{owner}</span>
            <button type="button" onClick={signOut} className="font-semibold text-white/90 hover:text-white">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div role="note" className="border-b border-line bg-white">
        <p className="mx-auto max-w-7xl px-5 py-2.5 text-sm text-muted sm:px-8">
          <strong className="font-semibold text-ink">Sample data.</strong> The accounts below are examples and are not saved.
          Invites are real: they email the person you invite.
        </p>
      </div>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">{children}</main>
    </div>
  );
}
