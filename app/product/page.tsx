
// import Image from 'next/image';
import React from 'react';
import { Smartphone, MonitorSmartphone, UploadCloud, Smile } from "lucide-react";
// import {ReactNode} from "react";
import { useTranslation } from 'react-i18next';

const features = [
  {
    title: "Digital Receipt Issuance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "product.features.digitalReceipts.description"
  },
  {
    title: "product.features.offlineFunctionality.title",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M8 8h8v8H8z" />
      </svg>
    ),
    description: "product.features.offlineFunctionality.description"
  },
  {
    title: "product.features.multiDeviceSync.title",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h8" />
      </svg>
    ),
    description: "product.features.multiDeviceSync.description"
  },
  {
    title: "product.features.budgetingAssistant.title",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2h0c1.1 0 2 .9 2 2s-.9 2-2 2m0-6v2m0 4v.01" />
      </svg>
    ),
    description: "product.features.budgetingAssistant.description"
  },
  {
    title: "product.features.expenseSharing.title",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
      </svg>
    ),
    description: "product.features.expenseSharing.description"
  },
  {
    title: "product.features.vendorAnalytics.title",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
    ),
    description: "product.features.vendorAnalytics.description"
  }
];

const aiBenefits = [
  {
    emoji: "🧠",
    title: "product.aiBenefits.smartCategorization.title",
    description: "product.aiBenefits.smartCategorization.description"
  },
  {
    emoji: "📊",
    title: "product.aiBenefits.trendDetection.title",
    description: "product.aiBenefits.trendDetection.description"
  },
  {
    emoji: "🔍",
    title: "product.aiBenefits.instantRetrieval.title",
    description: "product.aiBenefits.instantRetrieval.description"
  }
];

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Receipters Products</h1>
          <p className="text-lg text-gray-600">
            {t('product.hero.description')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">“What Receipters Offers”</h2>
          <p className="text-xl text-center mb-8 text-gray-600">Explore our powerful suite of tools and features</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={t(feature.title)}
                icon={feature.icon}
                description={t(feature.description)}
              />
            ))}

          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">The Power of AI</p>
          <h2 className="text-4xl font-bold mb-6">How Receipters&apos; AI Transforms Your Expenses</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('product.aiBenefits.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {aiBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-sm text-center transition hover:shadow-md">
                <div className="text-3xl mb-4">{benefit.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <MonitorSmartphone size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="text-gray-700 text-sm">
              {t('product.howItWorks.step1.description')}
            </p>
          </div>

          {/* Arrow 1 */}
          {/* <Arrow /> */}

          {/* Step 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <UploadCloud size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="text-gray-700 text-sm">
              {t('product.howItWorks.step2.description')}
            </p>
          </div>

          {/* Arrow 2 */}
          {/* <Arrow /> */}

          {/* Step 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Smartphone size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="text-gray-700 text-sm">
              {t('product.howItWorks.step3.description')}
            </p>
          </div>

          {/* Arrow 3 */}
          {/* <Arrow /> */}

          {/* Step 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Smile size={40} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 4</h3>
            <p className="text-gray-700 text-sm">
              {t('product.howItWorks.step4.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to go paperless and powerful?</h2>
          <p className="text-lg mb-6">Start using Receipters today to manage your receipts like a pro.</p>
          <a href="/pricing" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            {t('product.cta.button')}
          </a>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 text-center text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

// function Arrow() {
//   return (
//     <div className="hidden md:flex justify-center items-center">
//       <svg
//         className="w-6 h-6 text-gray-400"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         viewBox="0 0 24 24"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
//       </svg>
//     </div>
//   );
// }
