'use client';

import { useState, type FormEvent } from 'react';
import LegalLayout from '@/components/legal/LegalLayout';

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const field = 'w-full border border-line bg-white px-4 py-3 text-[17px] text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

export default function DeleteAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState<{ type: 'error' | 'loading' | 'success'; message: string } | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !validEmail(email)) {
      setStatus({ type: 'error', message: 'Enter your name and the email address on your account.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Sending your request...' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: name.trim(),
          email: email.trim(),
          subject: 'Account deletion request',
          message: reason.trim() || 'Please delete my account and personal data.',
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus({
        type: 'success',
        message: 'Request received. We will email you to confirm your identity before we delete anything.',
      });
      setName('');
      setEmail('');
      setReason('');
    } catch {
      setStatus({
        type: 'error',
        message: 'We could not send your request. Email support@receipters.com or info@receipters.com with the subject "Account deletion request".',
      });
    }
  };

  return (
    <LegalLayout
      title="Delete your account"
      subtitle="Ask us to delete your Receipters account and the personal data tied to it."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <form onSubmit={submit} noValidate className="space-y-5 lg:col-span-3">
          <div>
            <label htmlFor="del-name" className="mb-2 block text-[15px] font-semibold">Full name</label>
            <input id="del-name" className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="del-email" className="mb-2 block text-[15px] font-semibold">Account email</label>
            <input id="del-email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="del-reason" className="mb-2 block text-[15px] font-semibold">Anything we should know (optional)</label>
            <textarea id="del-reason" rows={4} className={field} value={reason} onChange={(e) => setReason(e.target.value)} />
          </div>
          <button
            type="submit"
            disabled={status?.type === 'loading'}
            className="inline-flex items-center justify-center bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
          >
            Request account deletion
          </button>
          {status && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              className={`text-[15px] leading-relaxed ${status.type === 'error' ? 'text-red-700' : status.type === 'success' ? 'text-signal' : 'text-muted'}`}
            >
              {status.message}
            </p>
          )}
        </form>
        <aside className="border border-line bg-mist p-6 lg:col-span-2">
          <h2 className="font-serif text-xl font-medium">What happens next</h2>
          <ul className="m-0 mt-4 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-muted marker:text-primary">
            <li>We confirm it is you by email.</li>
            <li>We delete your account and personal data, except records we must keep by law.</li>
            <li>Deletion cannot be undone, so export anything you need first.</li>
          </ul>
        </aside>
      </div>
    </LegalLayout>
  );
}
