'use client';

import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{t('terms.title')}</h1>
      <p className="text-sm text-gray-600 mb-2">{t('terms.subtitle')}</p>
      <p className="text-sm text-gray-500 mb-6">{t('terms.effectiveDate')}</p>
      <p className="mb-6">
        {t('terms.intro')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section1.title')}</h2>
      <p className="mb-6">
        {t('terms.section1.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section2.title')}</h2>
      <p className="mb-6">
        {t('terms.section2.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section3.title')}</h2>
      <p className="mb-4">
        {t('terms.section3.intro')}
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">{t('terms.section3.services.1')}</li>
        <li className="mb-2">{t('terms.section3.services.2')}</li>
        <li className="mb-2">{t('terms.section3.services.3')}</li>
        <li>{t('terms.section3.services.4')}</li>
      </ul>
      <p className="mb-6">
        {t('terms.section3.agreement')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section4.title')}</h2>
      <p className="mb-2">
        {t('terms.section4.description')}
      </p>
      <p className="mb-6">
        <Link href="/privacy-policy" className="text-blue-500 underline">
          {t('terms.section4.link')}
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section5.title')}</h2>
      <p className="mb-4">
        {t('terms.section5.description')}
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">{t('terms.section5.items.1')}</li>
        <li className="mb-2">{t('terms.section5.items.2')}</li>
        <li className="mb-2">{t('terms.section5.items.3')}</li>
        <li className="mb-2">{t('terms.section5.items.4')}</li>
        <li className="mb-2">{t('terms.section5.items.5')}</li>
        <li>{t('terms.section5.items.6')}</li>
      </ul>
      <p className="mb-6">
        {t('terms.section5.note')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section6.title')}</h2>
      <p className="mb-6">
        {t('terms.section6.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section7.title')}</h2>
      <p className="mb-6">
        {t('terms.section7.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section8.title')}</h2>
      <p className="mb-4">
        {t('terms.section8.description')}
      </p>
      <p className="mb-6">
        {t('terms.section8.notAdvice')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section9.title')}</h2>
      <p className="mb-6">
        {t('terms.section9.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section10.title')}</h2>
      <p className="mb-6">
        {t('terms.section10.description')}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('terms.section11.title')}</h2>
      <p className="mb-2">{t('terms.section11.intro')}</p>
      <ul className="mb-6">
        <li className="mb-1">📧 {t('terms.section11.contact.email')}</li>
        <li className="mb-1">📞 {t('terms.section11.contact.phone')}</li>
        <li>🏢 {t('terms.section11.contact.office')}</li>
      </ul>
    </div>
  )
}
