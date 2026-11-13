'use client';

import Link from 'next/link';
import LegalLayout, { Section, P, List } from '@/components/legal/LegalLayout';

const sections = [
  { id: 'receipts', title: 'Tax information on receipts' },
  { id: 'security', title: 'How we protect data' },
  { id: 'ownership', title: 'Data ownership' },
  { id: 'rights', title: 'Your data rights' },
  { id: 'requests', title: 'How to make a request' },
  { id: 'scope', title: 'What this page does not claim' },
];

export default function Page() {
  return (
    <LegalLayout
      title="Compliance"
      subtitle="How Receipters handles tax data, security and personal data, and how to exercise your rights."
      sections={sections}
    >
      <Section id="receipts" title="Tax information on receipts">
        <P>
          Receipts issued through Receipters can carry the tax details a merchant needs to present to customers and to keep for
          their own records.
        </P>
        <List
          items={[
            'Merchant tax identification (PIN)',
            'Receipt number and issue date and time',
            'Tax type, tax rate and tax amount for each sale',
            'Itemised lines, totals and payment details',
          ]}
        />
        <P>
          Merchants stay responsible for entering correct tax details and for meeting the filing and record-keeping rules of the
          countries where they trade.
        </P>
      </Section>

      <Section id="security" title="How we protect data">
        <List
          items={[
            'Encryption to protect stored and transmitted data',
            'Access controls so only authorised people and systems reach customer data',
            'Regular security audits',
          ]}
        />
        <P>
          No system is perfectly secure. If you believe your account has been accessed without permission, write to us right
          away at the address below.
        </P>
      </Section>

      <Section id="ownership" title="Data ownership">
        <P>
          Your receipts and the data in your account belong to you. We process them to run the service you asked for, as
          described in the{' '}
          <Link href="/privacy-policy" className="font-semibold text-primary underline underline-offset-4">
            Privacy Policy
          </Link>
          , and we do not sell them.
        </P>
      </Section>

      <Section id="rights" title="Your data rights">
        <List
          items={[
            'Access the personal data we hold about you',
            'Correct data that is wrong or incomplete',
            'Delete your account and associated personal data, subject to records we must keep by law',
            'Receive a copy of your data in a portable format',
            'Withdraw consent you gave, including cookie choices, at any time',
          ]}
        />
      </Section>

      <Section id="requests" title="How to make a request">
        <P>
          Use the{' '}
          <Link href="/delete-account" className="font-semibold text-primary underline underline-offset-4">
            account deletion form
          </Link>{' '}
          to delete your account, or email{' '}
          <a href="mailto:support@receipters.com" className="font-semibold text-primary underline underline-offset-4">
            support@receipters.com
          </a>{' '}
          for access, correction or export. We may ask you to confirm your identity before acting on a request.
        </P>
      </Section>

      <Section id="scope" title="What this page does not claim">
        <P>
          This page describes our practices. It is not legal advice and it does not state that Receipters holds a specific
          certification or meets a particular statute. Where a law applies to your business, take your own advice on how to use
          the service in line with it.
        </P>
      </Section>
    </LegalLayout>
  );
}
