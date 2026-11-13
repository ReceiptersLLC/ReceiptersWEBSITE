'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  Search,
  LifeBuoy,
  Mail,
  MessageCircle,
  MapPin,
  BookOpen,
  Boxes,
  Wrench,
  Route,
  Smartphone,
  CircleHelp,
  MessageSquare,
  ArrowUpRight,
  ChevronDown,
  Send,
} from 'lucide-react';

const SUPPORT_EMAIL = 'support@receipters.com';
const GENERAL_EMAIL = 'info@receipters.com';
const MESSAGE_LIMIT = 4000;

const channels = [
  { key: 'email', Icon: Mail, value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, external: true },
  { key: 'emailGeneral', Icon: Mail, value: GENERAL_EMAIL, href: `mailto:${GENERAL_EMAIL}`, external: true },
  { key: 'whatsappKenya', Icon: MessageCircle, value: '+254 722 752 755', href: 'https://wa.me/254722752755', external: true },
  { key: 'whatsappUsa', Icon: MessageCircle, value: '+1 (720) 930-7025', href: 'https://wa.me/17209307025', external: true },
  { key: 'offices', Icon: MapPin, value: 'Nairobi, Newark, Lusaka', href: '#locations', external: false },
];

const guides = [
  { key: 'products', Icon: Boxes, href: '/product' },
  { key: 'services', Icon: Wrench, href: '/services' },
  { key: 'howItWorks', Icon: Route, href: '/#how-it-works' },
  { key: 'app', Icon: Smartphone, href: '/download' },
];

const faqs = ['delivery', 'pos', 'beforeIntegration', 'app', 'ownership'];
const topics = ['question', 'problem', 'sales', 'integration', 'partnership', 'other'];

const inputClass =
  'w-full border border-line bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none';

export default function Page() {
  const { t } = useTranslation('common');
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  const q = query.trim().toLowerCase();
  const matches = (...texts: string[]) => !q || texts.some((text) => text.toLowerCase().includes(q));

  const visibleGuides = useMemo(
    () => guides.filter(({ key }) => matches(t(`support.guides.${key}.title`), t(`support.guides.${key}.description`))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q, t]
  );
  const visibleFaqs = useMemo(
    () => faqs.filter((key) => matches(t(`support.faq.${key}.question`), t(`support.faq.${key}.answer`))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q, t]
  );
  const nothingFound = q !== '' && visibleGuides.length === 0 && visibleFaqs.length === 0;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: name,
          email,
          subject: t(`support.form.topics.${topic}`),
          message: phone ? `${message}\n\nPhone or WhatsApp: ${phone}` : message,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setName('');
      setEmail('');
      setPhone('');
      setTopic(topics[0]);
      setMessage('');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <div className="bg-mist">
      {/* Hero with search */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t('support.hero.title')}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{t('support.hero.description')}</p>
          <label className="relative mt-8 block max-w-2xl">
            <span className="sr-only">{t('support.hero.searchLabel')}</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('support.hero.searchPlaceholder')}
              className="w-full border-0 bg-white py-4 pl-12 pr-4 text-[15px] text-ink placeholder:text-muted/80 focus:outline focus:outline-2 focus:outline-skyDeep"
            />
          </label>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="border border-white/25 px-3 py-1.5 text-white/85">{t('support.hero.chipEmail')}</span>
            <span className="border border-white/25 px-3 py-1.5 text-white/85">{t('support.hero.chipWhatsapp')}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl items-start gap-6 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-14">
        <div className="space-y-6 lg:col-span-7">
          {/* Contact channels */}
          <Panel
            Icon={LifeBuoy}
            title={t('support.contact.title')}
            subtitle={t('support.contact.subtitle')}
            rule="border-t-skyDeep"
            iconBg="bg-skyDeep text-ink"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ key, Icon, value, href, external }) => (
                <a
                  key={key}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex items-center gap-3.5 border border-line bg-white p-3.5 transition-colors hover:border-primary hover:bg-sky/40 ${
                    key === 'offices' ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-white">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-muted">{t(`support.contact.${key}`)}</span>
                    <span className="block truncate text-[15px] font-semibold text-ink">{value}</span>
                  </span>
                  {external && <ArrowUpRight className="size-4 shrink-0 text-muted group-hover:text-primary" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </Panel>

          {/* Guides */}
          {visibleGuides.length > 0 && (
            <Panel
              Icon={BookOpen}
              title={t('support.guides.title')}
              subtitle={t('support.guides.subtitle')}
              rule="border-t-primary"
              iconBg="bg-primary text-white"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleGuides.map(({ key, Icon, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className="group flex items-center gap-3.5 border border-line bg-white p-3.5 transition-colors hover:border-primary hover:bg-sky/40"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center bg-ink text-white">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold text-ink">{t(`support.guides.${key}.title`)}</span>
                      <span className="block text-sm text-muted">{t(`support.guides.${key}.description`)}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </Panel>
          )}

          {/* FAQ */}
          {visibleFaqs.length > 0 && (
            <Panel
              Icon={CircleHelp}
              title={t('support.faq.title')}
              subtitle={t('support.faq.subtitle')}
              rule="border-t-signal"
              iconBg="bg-signal text-white"
            >
              <div className="border-t border-line">
                {visibleFaqs.map((key) => (
                  <details key={key} className="group border-b border-line" open={q !== ''}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      {t(`support.faq.${key}.question`)}
                      <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="pb-4 pr-8 text-[15px] leading-relaxed text-muted">{t(`support.faq.${key}.answer`)}</p>
                  </details>
                ))}
              </div>
            </Panel>
          )}

          {nothingFound && (
            <div className="border border-line bg-white p-7 text-[15px] text-muted">
              {t('support.noResults')}
            </div>
          )}
        </div>

        {/* Message form */}
        <div className="lg:sticky lg:top-32 lg:col-span-5">
          <div className="border border-line bg-white">
            <div className="flex items-center gap-3.5 bg-primary p-5 text-white">
              <span className="flex size-11 shrink-0 items-center justify-center bg-white/15">
                <MessageSquare className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">{t('support.form.title')}</h2>
                <p className="text-sm text-white/80">{t('support.form.subtitle')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-5">
              <Field label={t('support.form.name')}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" className={inputClass} />
              </Field>
              <Field label={t('support.form.email')}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" className={inputClass} />
              </Field>
              <Field label={t('support.form.phone')} hint={t('support.form.optional')}>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" className={inputClass} />
              </Field>
              <Field label={t('support.form.topic')}>
                <select value={topic} onChange={(e) => setTopic(e.target.value)} className={inputClass}>
                  {topics.map((key) => (
                    <option key={key} value={key}>
                      {t(`support.form.topics.${key}`)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('support.form.message')}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_LIMIT))}
                  required
                  rows={6}
                  placeholder={t('support.form.messagePlaceholder')}
                  className={inputClass}
                />
                <span className="mt-1 block text-right text-xs tabular-nums text-muted">
                  {message.length.toLocaleString()} / {MESSAGE_LIMIT.toLocaleString()}
                </span>
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
              >
                <Send className="size-4" aria-hidden="true" />
                {status === 'sending' ? t('support.form.sending') : t('support.form.send')}
              </button>

              <div aria-live="polite">
                {status === 'sent' && (
                  <p className="border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-ink">{t('support.form.sent')}</p>
                )}
                {status === 'failed' && (
                  <p className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-ink">
                    {t('support.form.failed')}{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-primary underline">
                      {SUPPORT_EMAIL}
                    </a>{' '}
                    {t('support.form.or')}{' '}
                    <a href={`mailto:${GENERAL_EMAIL}`} className="font-semibold text-primary underline">
                      {GENERAL_EMAIL}
                    </a>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({
  Icon,
  title,
  subtitle,
  rule,
  iconBg,
  children,
}: {
  Icon: typeof LifeBuoy;
  title: string;
  subtitle: string;
  rule: string;
  iconBg: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`border border-line border-t-[3px] bg-white p-5 sm:p-6 ${rule}`}>
      <div className="mb-5 flex items-center gap-3.5">
        <span className={`flex size-11 shrink-0 items-center justify-center ${iconBg}`}>
          <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-ink">
        {label}
        {hint && <span className="text-xs font-normal text-muted">{hint}</span>}
      </span>
      {children}
    </label>
  );
}
