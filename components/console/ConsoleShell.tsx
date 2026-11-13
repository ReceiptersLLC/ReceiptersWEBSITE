'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

/** Frame for every console page: slim header, sample-data notice and a sign-in gate once sign-in is configured. */
export default function ConsoleShell({ children }: { children: ReactNode }) {
  const { user, loading, logout } = useAuth();
  const signInConfigured = Boolean(auth);
  const blocked = signInConfigured && !loading && !user;

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
            {user && <span className="hidden text-white/80 md:inline">{user.email}</span>}
            <Link href="/" className="font-semibold text-white/90 hover:text-white">
              Back to website
            </Link>
            {user && (
              <button type="button" onClick={() => logout()} className="font-semibold text-white/90 hover:text-white">
                Sign out
              </button>
            )}
          </div>
        </div>
      </header>

      {!signInConfigured && (
        <div role="note" className="border-b border-line bg-white">
          <p className="mx-auto max-w-7xl px-5 py-2.5 text-sm text-muted sm:px-8">
            <strong className="font-semibold text-ink">Preview with sample data.</strong> Accounts shown here are examples and
            changes are not saved. Connecting real data and owner sign-in comes next.
          </p>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        {loading && signInConfigured ? (
          <p className="text-muted">Loading...</p>
        ) : blocked ? (
          <div className="mx-auto max-w-md border border-line bg-white p-8 text-center">
            <h1 className="font-serif text-2xl font-medium">Sign in to continue</h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">The owners console is for Receipters product owners.</p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center justify-center bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink"
            >
              Sign in
            </Link>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
