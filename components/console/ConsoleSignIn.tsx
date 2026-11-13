'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

type Mode = 'password' | 'link-sent' | 'setup';
type Notice = { type: 'error' | 'info'; message: string } | null;

const field =
  'mt-2 w-full border border-line bg-white px-4 py-3 text-[17px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';
const primaryButton =
  'inline-flex w-full items-center justify-center bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60';

export default function ConsoleSignIn() {
  const params = useSearchParams();
  const router = useRouter();
  const setupToken = params.get('setup');

  const [mode, setMode] = useState<Mode>(setupToken ? 'setup' : 'password');
  const [email, setEmail] = useState('receipters@receipters.com');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<Notice>(
    params.get('error') === 'link'
      ? { type: 'error', message: 'That link has expired or was already used. Request a new one.' }
      : null
  );

  const post = async (url: string, body: unknown) => {
    setBusy(true);
    setNotice(null);
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json().catch(() => ({}));
      return { ok: res.ok, message: (data.message as string) || 'Something went wrong. Try again.' };
    } catch {
      return { ok: false, message: 'Could not reach the server. Check your connection and try again.' };
    } finally {
      setBusy(false);
    }
  };

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    const r = await post('/api/console/login', { email, password });
    if (r.ok) router.refresh();
    else setNotice({ type: 'error', message: r.message });
  };

  const emailLink = async () => {
    const r = await post('/api/console/request-link', { email });
    if (r.ok) setMode('link-sent');
    else setNotice({ type: 'error', message: r.message });
  };

  const savePassword = async (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 12) return setNotice({ type: 'error', message: 'Use a password of at least 12 characters.' });
    if (password !== confirm) return setNotice({ type: 'error', message: 'The two passwords do not match.' });
    const r = await post('/api/console/set-password', { token: setupToken, password });
    if (r.ok) {
      router.replace('/console');
      router.refresh();
    } else setNotice({ type: 'error', message: r.message });
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
        <div className="w-full max-w-sm">
          {mode === 'link-sent' && (
            <>
              <h2 className="font-serif text-3xl font-medium tracking-tight">Check your email</h2>
              <p role="status" className="mt-6 border border-line bg-mist p-5 text-[15px] leading-relaxed">
                If that address can sign in, a link is on its way. It works once and expires in 15 minutes. Use it to create or
                reset your password.
              </p>
              <button type="button" onClick={() => setMode('password')} className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">
                Back to sign in
              </button>
            </>
          )}

          {mode === 'setup' && (
            <form onSubmit={savePassword} noValidate>
              <h2 className="font-serif text-3xl font-medium tracking-tight">Create your password</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Choose a password of at least 12 characters. From now on you sign in with your email and this password.
              </p>
              <label htmlFor="new-pw" className="mt-8 block text-[15px] font-semibold">New password</label>
              <input id="new-pw" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} />
              <label htmlFor="confirm-pw" className="mt-5 block text-[15px] font-semibold">Confirm password</label>
              <input id="confirm-pw" type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={field} />
              <button type="submit" disabled={busy} className={`${primaryButton} mt-6`}>
                {busy ? 'Saving...' : 'Save password and sign in'}
              </button>
            </form>
          )}

          {mode === 'password' && (
            <form onSubmit={signIn} noValidate>
              <h2 className="font-serif text-3xl font-medium tracking-tight">Sign in</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">Sign in with the owner email and your password.</p>
              <label htmlFor="owner-email" className="mt-8 block text-[15px] font-semibold">Owner email</label>
              <input id="owner-email" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
              <label htmlFor="owner-pw" className="mt-5 block text-[15px] font-semibold">Password</label>
              <input id="owner-pw" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} />
              <button type="submit" disabled={busy || !email || !password} className={`${primaryButton} mt-6`}>
                {busy ? 'Signing in...' : 'Sign in'}
              </button>
              <button
                type="button"
                onClick={emailLink}
                disabled={busy || !email}
                className="mt-5 text-sm font-semibold text-primary underline underline-offset-4 disabled:opacity-60"
              >
                First time, or forgot your password? Email me a link
              </button>
            </form>
          )}

          {notice && mode !== 'link-sent' && (
            <p role="alert" className={`mt-5 text-[15px] ${notice.type === 'error' ? 'text-red-700' : 'text-muted'}`}>
              {notice.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
