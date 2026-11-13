'use client';

import Link from 'next/link';
import LegalLayout, { Section, P, List } from '@/components/legal/LegalLayout';
import { openCookieSettings } from '@/lib/consent';

const sections = [
  { id: 'what', title: 'What cookies and storage we use' },
  { id: 'table', title: 'Cookies and stored values' },
  { id: 'third', title: 'Third-party services' },
  { id: 'choices', title: 'Your choices' },
  { id: 'contact', title: 'Questions' },
];

const rows = [
  { name: 'session', purpose: 'Keeps you signed in after you log in.', category: 'Necessary', duration: '5 days' },
  { name: 'rc_consent', purpose: 'Remembers the cookie choices you made on this site.', category: 'Necessary', duration: '6 months' },
  { name: 'rc_lang', purpose: 'Remembers the language you selected.', category: 'Preferences', duration: '1 year' },
];

export default function Page() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="What this website stores on your device, why, and how to change your choices at any time."
      sections={sections}
    >
      <Section id="what" title="What cookies and storage we use">
        <P>
          Cookies are small text files that a website saves on your device. We also use similar browser storage. We keep this
          to the minimum needed to run the site, and anything optional only runs after you agree.
        </P>
        <List
          items={[
            'Necessary: required to sign in and to remember your cookie choices. These cannot be turned off.',
            'Preferences: remember settings such as your language. Used only if you allow Preferences.',
            'Support chat: loads the WhatsApp chat widget so you can message us from the site. Used only if you allow Support chat.',
          ]}
        />
      </Section>

      <Section id="table" title="Cookies and stored values">
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[15px]">
            <thead className="bg-mist">
              <tr>
                {['Name', 'Purpose', 'Category', 'Duration'].map((h) => (
                  <th key={h} scope="col" className="border-b border-line px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-b border-line last:border-b-0">
                  <td className="px-4 py-3 font-mono text-sm text-ink">{r.name}</td>
                  <td className="px-4 py-3 text-muted">{r.purpose}</td>
                  <td className="px-4 py-3 text-muted">{r.category}</td>
                  <td className="px-4 py-3 text-muted">{r.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          The <span className="font-mono text-sm text-ink">session</span> cookie is set by our server, is not readable by
          scripts on the page, and is only sent to Receipters. Our sign-in provider may also keep sign-in state in your
          browser storage so that you stay signed in.
        </P>
      </Section>

      <Section id="third" title="Third-party services">
        <P>
          The WhatsApp chat widget is loaded from a third-party content delivery network. It is requested only after you allow
          Support chat. When it loads, that provider can receive technical information such as your IP address and browser
          details, under its own terms.
        </P>
      </Section>

      <Section id="choices" title="Your choices">
        <P>
          You can accept all, reject all or choose categories from the banner shown on your first visit. To change your mind
          later, open the settings at any time.
        </P>
        <button
          type="button"
          onClick={openCookieSettings}
          className="inline-flex items-center justify-center bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          Open cookie settings
        </button>
        <P>
          You can also block or delete cookies in your browser settings. Blocking necessary cookies means sign-in will not
          work.
        </P>
      </Section>

      <Section id="contact" title="Questions">
        <P>
          See our{' '}
          <Link href="/privacy-policy" className="font-semibold text-primary underline underline-offset-4">
            Privacy Policy
          </Link>{' '}
          for how we handle personal data, or write to{' '}
          <a href="mailto:support@receipters.com" className="font-semibold text-primary underline underline-offset-4">
            support@receipters.com
          </a>
          .
        </P>
      </Section>
    </LegalLayout>
  );
}
