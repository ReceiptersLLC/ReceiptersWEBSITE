'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function ConsoleSignIn() {
  const params = useSearchParams();
  const [email, setEmail] = useState('receipters@receipters.com');
  const [state, setState] = useState<{ type: 'idle' | 'loading' | 'sent' | 'error'; message?: string }>({
    type: params.get('error') === 'link' ? 'error' : 'idle',
    message: params.get('error') === 'link' ? 'That sign-in link has expired or was already replaced. Request a new one.' : undefined,
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState({ type: 'loading' });
    try {
      const res = await fetch('/api/console/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      setState(res.ok ? { type: 'sent' } : { type: 'error', message: data.message || 'Something went wrong. Try again.' });
    } catch {
      setState({ type: 'error', message: 'Could not reach the server. Check your connection and try again.' });
    }
  };

  return (
    <div className="grid min-h-screen bg-white text-ink lg:grid-cols-2">
      <div className="bg-primary-hero hidden flex-col justify-between p-12 text-white lg:flex">
        <div className="flex items-center gap-3">
          <span className="relative block size-9">
            <Image src="/img/logo.svg" alt="" fill className="object-contain" />
          </span>
          <span className="font-serif text-2xl leading-none">Receipters</span>
        </div>
        <div>
          <h1 className="max-w-md font-serif text-4xl font-medium leading-[1.1] tracking-tight">Owners console</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Manage every Receipters product, its business IDs and its administrators in one place.
          </p>
        </div>
        <p className="text-sm text-white/70">Restricted to Receipters owners.</p>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <form onSubmit={submit} noValidate className="w-full max-w-sm">
          <h2 className="font-serif text-3xl font-medium tracking-tight lg:hidden">Owners console</h2>
          <h2 className="hidden font-serif text-3xl font-medium tracking-tight lg:block">Sign in</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Enter the owner email address. We will send a sign-in link to it.
          </p>

          {state.type === 'sent' ? (
            <p role="status" className="mt-8 border border-line bg-mist p-5 text-[15px] leading-relaxed">
              If that address can sign in, a link is on its way. It expires in 15 minutes.
            </p>
          ) : (
            <>
              <label htmlFor="owner-email" className="mt-8 block text-[15px] font-semibold">Owner email</label>
              <input
                id="owner-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-line bg-white px-4 py-3 text-[17px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={state.type === 'loading' || !email}
                className="mt-5 inline-flex w-full items-center justify-center bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
              >
                {state.type === 'loading' ? 'Sending...' : 'Email me a sign-in link'}
              </button>
              {state.type === 'error' && (
                <p role="alert" className="mt-4 text-[15px] text-red-700">{state.message}</p>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
