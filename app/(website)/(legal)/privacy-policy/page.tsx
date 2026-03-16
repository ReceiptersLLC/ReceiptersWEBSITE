'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('privacyPolicy.title')}</h1>
      <p className="text-sm text-gray-500 mb-6">{t('privacyPolicy.effectiveDate')}</p>

      <p className="mb-4">
        {t('privacyPolicy.intro')}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section1.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section1.intro')}</p>

      <h3 className="text-lg font-semibold mb-2">{t('privacyPolicy.section1.personalInfo.title')}</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section1.personalInfo.name')}</li>
        <li>{t('privacyPolicy.section1.personalInfo.email')}</li>
        <li>{t('privacyPolicy.section1.personalInfo.phone')}</li>
        <li>{t('privacyPolicy.section1.personalInfo.billing')}</li>
        <li>{t('privacyPolicy.section1.personalInfo.credentials')}</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">{t('privacyPolicy.section1.financialData.title')}</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section1.financialData.transaction')}</li>
        <li>{t('privacyPolicy.section1.financialData.payment')}</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">{t('privacyPolicy.section1.deviceInfo.title')}</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section1.deviceInfo.details')}</li>
        <li>{t('privacyPolicy.section1.deviceInfo.usage')}</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">{t('privacyPolicy.section1.location.title')}</h3>
      <p className="mb-4">{t('privacyPolicy.section1.location.description')}</p>

      <h3 className="text-lg font-semibold mb-2">{t('privacyPolicy.section1.cookies.title')}</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section1.cookies.storage')}</li>
        <li>{t('privacyPolicy.section1.cookies.analytics')}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section2.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section2.intro')}</p>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section2.accountManagement')}</li>
        <li>{t('privacyPolicy.section2.transactionManagement')}</li>
        <li>{t('privacyPolicy.section2.improvingServices')}</li>
        <li>{t('privacyPolicy.section2.communications')}</li>
        <li>{t('privacyPolicy.section2.compliance')}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section3.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section3.intro')}</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-semibold">{t('privacyPolicy.section3.serviceProviders.title')}:</span> {t('privacyPolicy.section3.serviceProviders.description')}
        </li>
        <li>
          <span className="font-semibold">{t('privacyPolicy.section3.legalCompliance.title')}:</span> {t('privacyPolicy.section3.legalCompliance.description')}
        </li>
        <li>
          <span className="font-semibold">{t('privacyPolicy.section3.businessTransfers.title')}:</span> {t('privacyPolicy.section3.businessTransfers.description')}
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section4.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section4.description')}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section5.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section5.description')}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section6.title')}</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacyPolicy.section6.access')}</li>
        <li>{t('privacyPolicy.section6.deletion')}</li>
        <li>{t('privacyPolicy.section6.portability')}</li>
        <li>{t('privacyPolicy.section6.consent')}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section7.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section7.description')}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section8.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section8.description')}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">{t('privacyPolicy.section9.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section9.intro')}</p>
      <address className="not-italic mb-4">
        <p>{t('privacyPolicy.section9.company')}</p>
        <p>{t('privacyPolicy.section9.email')}: <a href="mailto:dpo@receipter.com" className="text-blue-500">dpo@receipter.com</a></p>
        <p>{t('privacyPolicy.section9.phone')}: +254 700 031512</p>
      </address>

      <p className="text-sm text-gray-600">{t('privacyPolicy.conclusion')}</p>
    </div>
  );
};
