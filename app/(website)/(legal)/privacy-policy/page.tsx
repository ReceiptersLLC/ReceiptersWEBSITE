'use client';

import { useTranslation } from 'react-i18next';
import LegalLayout, { Section, Sub, P, List } from '@/components/legal/LegalLayout';

const ids = ['collect', 'use', 'share', 'security', 'retention', 'rights', 'children', 'changes', 'contact'];

export default function Page() {
  const { t } = useTranslation('common');
  const p = (key: string) => t(`privacyPolicy.${key}`);
  const sections = ids.map((id, i) => ({ id, title: p(`section${i + 1}.title`) }));

  return (
    <LegalLayout title={p('title')} meta={p('effectiveDate')} subtitle={p('intro')} sections={sections}>
      <Section id="collect" title={p('section1.title')}>
        <P>{p('section1.intro')}</P>
        <Sub title={p('section1.personalInfo.title')} />
        <List items={['name', 'email', 'phone', 'billing', 'credentials'].map((k) => p(`section1.personalInfo.${k}`))} />
        <Sub title={p('section1.financialData.title')} />
        <List items={['transaction', 'payment'].map((k) => p(`section1.financialData.${k}`))} />
        <Sub title={p('section1.deviceInfo.title')} />
        <List items={['details', 'usage'].map((k) => p(`section1.deviceInfo.${k}`))} />
        <Sub title={p('section1.location.title')} />
        <P>{p('section1.location.description')}</P>
        <Sub title={p('section1.cookies.title')} />
        <List items={['storage', 'analytics'].map((k) => p(`section1.cookies.${k}`))} />
      </Section>

      <Section id="use" title={p('section2.title')}>
        <P>{p('section2.intro')}</P>
        <List
          items={['accountManagement', 'transactionManagement', 'improvingServices', 'communications', 'compliance'].map((k) =>
            p(`section2.${k}`)
          )}
        />
      </Section>

      <Section id="share" title={p('section3.title')}>
        <P>{p('section3.intro')}</P>
        <List
          items={['serviceProviders', 'legalCompliance', 'businessTransfers'].map((k) => (
            <span key={k}>
              <strong className="font-semibold text-ink">{p(`section3.${k}.title`)}:</strong> {p(`section3.${k}.description`)}
            </span>
          ))}
        />
      </Section>

      <Section id="security" title={p('section4.title')}>
        <P>{p('section4.description')}</P>
      </Section>

      <Section id="retention" title={p('section5.title')}>
        <P>{p('section5.description')}</P>
      </Section>

      <Section id="rights" title={p('section6.title')}>
        <List items={['access', 'deletion', 'portability', 'consent'].map((k) => p(`section6.${k}`))} />
        <P>
          <a href="/delete-account" className="font-semibold text-primary underline underline-offset-4">
            {t('legal.nav.delete')}
          </a>
        </P>
      </Section>

      <Section id="children" title={p('section7.title')}>
        <P>{p('section7.description')}</P>
      </Section>

      <Section id="changes" title={p('section8.title')}>
        <P>{p('section8.description')}</P>
      </Section>

      <Section id="contact" title={p('section9.title')}>
        <P>{p('section9.intro')}</P>
        <address className="not-italic space-y-1 text-[17px] leading-[1.75] text-muted">
          <p>{p('section9.company')}</p>
          <p>
            {p('section9.email')}:{' '}
            <a href="mailto:dpo@receipter.com" className="font-semibold text-primary underline underline-offset-4">
              dpo@receipter.com
            </a>
          </p>
          <p>{p('section9.phone')}: +254 700 031512</p>
        </address>
        <p className="text-sm leading-relaxed text-muted">{p('conclusion')}</p>
      </Section>
    </LegalLayout>
  );
}
