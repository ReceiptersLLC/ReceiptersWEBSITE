"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export default function InstantDeliveryPage() {
  const router = useRouter();
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl">
        <FaBolt className="text-primary text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">{t('features.instantDelivery.title')}</h1>
        <p className="text-lg text-gray-700 mb-6">
          {t('features.instantDelivery.description')}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-full shadow hover:bg-opacity-90 transition-colors">
          {t('features.instantDelivery.goBack')}
        </button>
      </div>
    </div>
  );
}
