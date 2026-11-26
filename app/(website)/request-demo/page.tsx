'use client';

import { Suspense, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { CalendarCheck, Send } from 'lucide-react';
import { productsFor, services } from '@/lib/siteLinks';
import { useRegion } from '@/components/RegionProvider';

const SALES_EMAIL = 'receipters@receipters.com';
const MESSAGE_LIMIT = 2000;
const OUTLETS = ['1', '2-5', '6-20', '20+'];

const inputClass =
  'w-full border border-line bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none';

export default function RequestDemoPage() {
  return (
    <Suspense fallback={null}>
      <RequestDemo />
    </Suspense>
  );
}

function RequestDemo() {
  const { t } = useTranslation('common');
  const params = useSearchParams();
  const { region } = useRegion();
  const products = productsFor(region);
  // The choice is stored as "product:<slug>" or "service:<slug>"; empty means not sure yet.
  const initial = products.some((p) => p.slug === params.get('product'))
    ? `product:${params.get('product')}`
    : services.some((s) => s.slug === params.get('service'))
      ? `service:${params.get('service')}`
      : '';

  const [interest, setInterest] = useState(initial);
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [outlets, setOutlets] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  const [kind, slug] = interest.split(':');
  const chosenProduct = kind === 'product' ? products.find((p) => p.slug === slug) : undefined;
  const chosenService = kind === 'service' ? services.find((s) => s.slug === slug) : undefined;
  const isService = Boolean(chosenService);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: chosenProduct?.slug ?? '',
          service: chosenService?.slug ?? '',
          fullName, businessName, email, phone, outlets, message, website,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <div className="bg-mist">
      <section className="bg-primary-hero text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            {chosenProduct
              ? t('demo.titleProduct', { product: chosenProduct.name })
              : chosenService
                ? t('demo.titleService', { service: t(chosenService.titleKey) })
                : t('demo.title')}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.7] text-white/75">{t(isService ? 'demo.introService' : 'demo.intro')}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="border border-line bg-white">
          <div className="flex items-center gap-3.5 bg-primary p-5 text-white">
            <span className="flex size-11 shrink-0 items-center justify-center bg-white/15">
              <CalendarCheck className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">{t('demo.formTitle')}</h2>
              <p className="text-sm text-white/80">{t('demo.formSubtitle')}</p>
            </div>
          </div>

          {status === 'sent' ? (
            <div className="p-6" aria-live="polite">
              <p className="border border-signal/40 bg-signal/10 px-4 py-3 text-[15px] text-ink">{t('demo.sent')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <Field label={t('demo.interest')} wide>
                <select value={interest} onChange={(e) => setInterest(e.target.value)} className={inputClass}>
                  <option value="">{t('demo.productUnsure')}</option>
                  {products.length > 0 && (
                    <optgroup label={t('demo.groupProducts')}>
                      {products.map((p) => (
                        <option key={p.slug} value={`product:${p.slug}`}>
                          {p.name}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  <optgroup label={t('demo.groupServices')}>
                    {services.map((s) => (
                      <option key={s.slug} value={`service:${s.slug}`}>
                        {t(s.titleKey)}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </Field>
              <Field label={t('demo.fullName')}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required maxLength={120} autoComplete="name" className={inputClass} />
              </Field>
              <Field label={t('demo.businessName')}>
                <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required maxLength={160} autoComplete="organization" className={inputClass} />
              </Field>
              <Field label={t('demo.email')}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={200} autoComplete="email" className={inputClass} />
              </Field>
              <Field label={t('demo.phone')}>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={40} autoComplete="tel" className={inputClass} />
              </Field>
              <Field label={t('demo.outlets')} hint={t('demo.optional')} wide>
                <select value={outlets} onChange={(e) => setOutlets(e.target.value)} className={inputClass}>
                  <option value="">{t('demo.outletsChoose')}</option>
                  {OUTLETS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('demo.message')} hint={t('demo.optional')} wide>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_LIMIT))}
                  rows={5}
                  placeholder={t('demo.messagePlaceholder')}
                  className={inputClass}
                />
              </Field>

              {/* Hidden from people; catches automated spam. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </label>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
                >
                  <Send className="size-4" aria-hidden="true" />
                  {status === 'sending' ? t('demo.sending') : t(isService ? 'demo.sendService' : 'demo.send')}
                </button>
                <p className="mt-3 text-xs leading-relaxed text-muted">{t('demo.privacy')}</p>
                <div aria-live="polite">
                  {status === 'failed' && (
                    <p className="mt-3 border border-red-300 bg-red-50 px-4 py-3 text-sm text-ink">
                      {t('demo.failed')}{' '}
                      <a href={`mailto:${SALES_EMAIL}`} className="font-semibold text-primary underline">
                        {SALES_EMAIL}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, hint, wide, children }: { label: string; hint?: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${wide ? 'sm:col-span-2' : ''}`}>
      <span className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-ink">
        {label}
        {hint && <span className="text-xs font-normal text-muted">{hint}</span>}
      </span>
      {children}
    </label>
  );
}
