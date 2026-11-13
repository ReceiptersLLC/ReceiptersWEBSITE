'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LegalLayout, { Section, P, List } from '@/components/legal/LegalLayout';

const ids = ['eligibility', 'account', 'use', 'data', 'payments', 'ip', 'termination', 'disclaimer', 'liability', 'changes', 'contact'];
const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

export default function Page() {
  const { t } = useTranslation('common');
  const k = (key: string) => t(`terms.${key}`);
  const sections = ids.map((id, i) => ({ id, title: k(`section${i + 1}.title`) }));

  return (
    <LegalLayout title={k('title')} subtitle={k('subtitle')} meta={k('effectiveDate')} sections={sections}>
      <P>{k('intro')}</P>

      <Section id="eligibility" title={k('section1.title')}>
        <P>{k('section1.description')}</P>
      </Section>
      <Section id="account" title={k('section2.title')}>
        <P>{k('section2.description')}</P>
      </Section>
      <Section id="use" title={k('section3.title')}>
        <P>{k('section3.intro')}</P>
        <List items={range(4).map((n) => k(`section3.services.${n}`))} />
        <P>{k('section3.agreement')}</P>
      </Section>
      <Section id="data" title={k('section4.title')}>
        <P>{k('section4.description')}</P>
        <P>
          <Link href="/privacy-policy" className="font-semibold text-primary underline underline-offset-4">
            {k('section4.link')}
          </Link>
        </P>
      </Section>
      <Section id="payments" title={k('section5.title')}>
        <P>{k('section5.description')}</P>
        <List items={range(6).map((n) => k(`section5.items.${n}`))} />
        <P>{k('section5.note')}</P>
      </Section>
      <Section id="ip" title={k('section6.title')}>
        <P>{k('section6.description')}</P>
      </Section>
      <Section id="termination" title={k('section7.title')}>
        <P>{k('section7.description')}</P>
      </Section>
      <Section id="disclaimer" title={k('section8.title')}>
        <P>{k('section8.description')}</P>
        <P>{k('section8.notAdvice')}</P>
      </Section>
      <Section id="liability" title={k('section9.title')}>
        <P>{k('section9.description')}</P>
      </Section>
      <Section id="changes" title={k('section10.title')}>
        <P>{k('section10.description')}</P>
      </Section>
      <Section id="contact" title={k('section11.title')}>
        <P>{k('section11.intro')}</P>
        <List items={[k('section11.contact.email'), k('section11.contact.phone'), k('section11.contact.office')]} />
      </Section>
    </LegalLayout>
  );
}
