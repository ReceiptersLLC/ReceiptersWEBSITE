'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Pause, Play, Search, UserPlus, UserX, X } from 'lucide-react';
import { useConsole } from '@/components/console/ConsoleProvider';
import StatusBadge from '@/components/console/StatusBadge';
import { consoleProducts, timeAgo, type AccountStatus, type AdminAccount } from '@/lib/console/data';

const filters: Array<{ key: 'all' | AccountStatus; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'paused', label: 'Paused' },
  { key: 'deactivated', label: 'Deactivated' },
  { key: 'invited', label: 'Invited' },
];

const input =
  'w-full border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

export default function ProductConsole() {
  const { product: slug } = useParams<{ product: string }>();
  const router = useRouter();
  const { admins, activity, setStatus, addAdmin } = useConsole();
  const product = consoleProducts.find((p) => p.slug === slug);

  const [filter, setFilter] = useState<'all' | AccountStatus>('all');
  const [query, setQuery] = useState('');
  const [confirming, setConfirming] = useState<AdminAccount | null>(null);
  const [inviting, setInviting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', businessId: '', role: 'Admin' as AdminAccount['role'] });
  const [formError, setFormError] = useState('');
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState('');

  const list = useMemo(() => admins.filter((a) => a.product === slug), [admins, slug]);
  const businessIds = useMemo(() => Array.from(new Set(list.map((a) => a.businessId))), [list]);
  const visible = list.filter(
    (a) =>
      (filter === 'all' || a.status === filter) &&
      `${a.name} ${a.email} ${a.businessId}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const events = activity.filter((e) => e.product === slug).slice(0, 6);

  if (!product) {
    return (
      <div>
        <h1 className="font-serif text-3xl font-medium">Product not found</h1>
        <Link href="/console" className="mt-4 inline-block font-semibold text-primary underline underline-offset-4">
          Back to all products
        </Link>
      </div>
    );
  }

  const count = (s: AccountStatus) => list.filter((a) => a.status === s).length;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.businessId.trim()) {
      setFormError('Enter a name, a valid email and a business ID.');
      return;
    }
    setSending(true);
    setFormError('');
    try {
      const res = await fetch('/api/console/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, product: product.slug, productName: product.name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormError(data.message || 'The invite could not be sent.');
        return;
      }
      addAdmin(product.slug, { ...form, name: form.name.trim(), email: form.email.trim(), businessId: form.businessId.trim() });
      setNotice(data.message || 'Invite sent.');
      setForm({ name: '', email: '', businessId: '', role: 'Admin' });
      setInviting(false);
    } catch {
      setFormError('Could not reach the server. Try again.');
    } finally {
      setSending(false);
    }
  };

  const actions = (a: AdminAccount) => (
    <div className="flex flex-wrap gap-2">
      {a.status === 'active' && (
        <button type="button" onClick={() => setStatus(a.id, 'paused')} className="inline-flex items-center gap-1.5 border border-line bg-white px-3 py-1.5 text-sm font-semibold hover:border-primary hover:text-primary">
          <Pause className="size-3.5" aria-hidden="true" /> Pause
        </button>
      )}
      {a.status === 'paused' && (
        <button type="button" onClick={() => setStatus(a.id, 'active')} className="inline-flex items-center gap-1.5 border border-line bg-white px-3 py-1.5 text-sm font-semibold hover:border-primary hover:text-primary">
          <Play className="size-3.5" aria-hidden="true" /> Resume
        </button>
      )}
      {a.status !== 'deactivated' ? (
        <button type="button" onClick={() => setConfirming(a)} className="inline-flex items-center gap-1.5 border border-red-200 bg-white px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-50">
          <UserX className="size-3.5" aria-hidden="true" /> Deactivate
        </button>
      ) : (
        <button type="button" onClick={() => setStatus(a.id, 'active')} className="inline-flex items-center gap-1.5 border border-line bg-white px-3 py-1.5 text-sm font-semibold hover:border-primary hover:text-primary">
          <Play className="size-3.5" aria-hidden="true" /> Reactivate
        </button>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/console"
          className="inline-flex w-fit items-center gap-2 border border-line bg-white px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to all products
        </Link>
        <div className="flex items-center gap-3">
          <label htmlFor="switch-product" className="text-sm font-semibold text-muted">Switch product</label>
          <select
            id="switch-product"
            value={product.slug}
            onChange={(e) => router.push(`/console/${e.target.value}`)}
            className="border border-line bg-white px-3 py-2.5 text-sm font-semibold text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {consoleProducts.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{product.name} console</h1>
          <p className="mt-2 text-lg text-muted">{product.description}</p>
        </div>
        <button
          type="button"
          onClick={() => setInviting((v) => !v)}
          className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          <UserPlus className="size-4" aria-hidden="true" /> Invite admin
        </button>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-5">
        {[
          ['Business IDs', businessIds.length],
          ['Admins', list.length],
          ['Active', count('active')],
          ['Paused', count('paused')],
          ['Deactivated', count('deactivated')],
        ].map(([label, value], i) => (
          <div key={label as string} className={`bg-white px-5 py-4 ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
            <dd className="font-mono text-2xl font-medium">{value}</dd>
            <dt className="mt-1 text-sm text-muted">{label}</dt>
          </div>
        ))}
      </dl>

      {inviting && (
        <form onSubmit={submit} noValidate className="mt-6 border border-line bg-white p-6">
          <h2 className="font-serif text-xl font-medium">Invite an admin to {product.name}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div>
              <label htmlFor="a-name" className="mb-1.5 block text-sm font-semibold">Name</label>
              <input id="a-name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="a-email" className="mb-1.5 block text-sm font-semibold">Email</label>
              <input id="a-email" type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="a-biz" className="mb-1.5 block text-sm font-semibold">Business ID</label>
              <input id="a-biz" list="biz-ids" className={input} value={form.businessId} onChange={(e) => setForm({ ...form, businessId: e.target.value })} />
              <datalist id="biz-ids">{businessIds.map((b) => <option key={b} value={b} />)}</datalist>
            </div>
            <div>
              <label htmlFor="a-role" className="mb-1.5 block text-sm font-semibold">Role</label>
              <select id="a-role" className={input} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value as AdminAccount['role'] })}>
                <option>Admin</option>
                <option>Owner</option>
              </select>
            </div>
          </div>
          {formError && <p role="alert" className="mt-3 text-sm text-red-700">{formError}</p>}
          <div className="mt-5 flex gap-3">
            <button type="submit" disabled={sending} className="bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-ink disabled:opacity-60">{sending ? 'Sending...' : 'Send invite'}</button>
            <button type="button" onClick={() => setInviting(false)} className="border border-line px-6 py-3 text-sm font-semibold hover:border-primary">Cancel</button>
          </div>
        </form>
      )}

      {notice && <p role="status" className="mt-6 border border-line bg-white px-5 py-3 text-[15px] text-signal">{notice}</p>}

      <section className="mt-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-serif text-2xl font-medium tracking-tight">Admin accounts</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div role="tablist" aria-label="Filter by status" className="flex border border-line bg-white">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2.5 text-sm font-semibold transition-colors ${filter === f.key ? 'bg-primary text-white' : 'hover:bg-mist'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input
                aria-label="Search admins"
                placeholder="Search name, email or business ID"
                className={`${input} pl-9 sm:w-72`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table on wide screens */}
        <div className="mt-5 hidden overflow-x-auto border border-line bg-white md:block">
          <table className="w-full min-w-[56rem] border-collapse text-left text-[15px]">
            <thead className="bg-mist text-sm">
              <tr>
                {['Admin', 'Business ID', 'Role', 'Status', 'Last activity', 'Actions'].map((h) => (
                  <th key={h} scope="col" className="border-b border-line px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((a) => (
                <tr key={a.id} className="border-b border-line last:border-b-0">
                  <td className="px-4 py-3.5">
                    <div className="font-semibold">{a.name}</div>
                    <div className="text-sm text-muted">{a.email}</div>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-sm">{a.businessId}</td>
                  <td className="px-4 py-3.5 text-muted">{a.role}</td>
                  <td className="px-4 py-3.5"><StatusBadge status={a.status} /></td>
                  <td className="px-4 py-3.5 text-muted">{timeAgo(a.lastActiveMinutes)}</td>
                  <td className="px-4 py-3.5">{actions(a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards on phones */}
        <ul className="m-0 mt-5 list-none space-y-3 p-0 md:hidden">
          {visible.map((a) => (
            <li key={a.id} className="border border-line bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-semibold">{a.name}</div>
                  <div className="truncate text-sm text-muted">{a.email}</div>
                </div>
                <StatusBadge status={a.status} />
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                <span className="font-mono text-ink">{a.businessId}</span>
                <span>{a.role}</span>
                <span>{timeAgo(a.lastActiveMinutes)}</span>
              </div>
              <div className="mt-4">{actions(a)}</div>
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="mt-5 border border-line bg-white p-6 text-muted">No admins match. Clear the search or choose another status.</p>
        )}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium tracking-tight">Recent activity</h2>
        <ul className="m-0 mt-5 list-none border border-line bg-white p-0">
          {events.map((e) => (
            <li key={e.id} className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 text-[15px] last:border-b-0">
              <span>{e.text}</span>
              <span className="shrink-0 text-sm text-muted">{timeAgo(e.minutesAgo)}</span>
            </li>
          ))}
        </ul>
      </section>

      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-5" role="dialog" aria-modal="true" aria-labelledby="deact-title">
          <div className="w-full max-w-md border border-line bg-white p-7">
            <div className="flex items-start justify-between gap-4">
              <h2 id="deact-title" className="font-serif text-2xl font-medium">Deactivate {confirming.name}?</h2>
              <button type="button" aria-label="Close" onClick={() => setConfirming(null)} className="text-muted hover:text-ink">
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {confirming.email} will lose access to {product.name} right away. You can reactivate the account later. To block access
              for a short time instead, use Pause.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => { setStatus(confirming.id, 'deactivated'); setConfirming(null); }}
                className="bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Deactivate
              </button>
              <button type="button" onClick={() => setConfirming(null)} className="border border-line px-6 py-3 text-sm font-semibold hover:border-primary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
