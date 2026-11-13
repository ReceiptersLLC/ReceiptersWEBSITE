'use client';

import Link from 'next/link';
import { Shield, FileText, Cookie, BadgeCheck, UserX } from 'lucide-react';
import LegalLayout from '@/components/legal/LegalLayout';

const docs = [
  { href: '/privacy-policy', Icon: Shield, title: 'Privacy Policy', text: 'What personal data we collect, why, who sees it and how long we keep it.' },
  { href: '/terms-and-conditions', Icon: FileText, title: 'Terms and Conditions', text: 'The rules for using Receipters, subscriptions, liability and termination.' },
  { href: '/cookie-policy', Icon: Cookie, title: 'Cookie Policy', text: 'Every cookie and stored value on this site, with your choices.' },
  { href: '/compliance', Icon: BadgeCheck, title: 'Compliance', text: 'Tax data on receipts, security measures and your data rights.' },
  { href: '/delete-account', Icon: UserX, title: 'Delete account', text: 'Ask us to delete your account and personal data.' },
];

export default function Page() {
  return (
    <LegalLayout
      title="Legal centre"
      subtitle="Everything that governs how you use Receipters and how we handle your data, in one place."
    >
      <div className="grid border-l border-t border-line sm:grid-cols-2">
        {docs.map(({ href, Icon, title, text }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col border-b border-r border-line p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)]"
          >
            <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="mt-6 font-serif text-2xl font-medium tracking-tight">{title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            <span className="mt-5 text-sm font-semibold text-primary group-hover:underline underline-offset-4">Read</span>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-[15px] leading-relaxed text-muted">
        Questions about any of these? Write to{' '}
        <a href="mailto:info@receipters.com" className="font-semibold text-primary underline underline-offset-4">
          info@receipters.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
