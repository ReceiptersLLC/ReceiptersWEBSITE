"use client"

// Removed unused imports and wrapped unused variables to suppress warnings
// import Image from "next/image"; // Removed
// import classNames from "classnames"; // Removed
// import Button from "@/components/Button"; // Removed
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";
import Testimonials from "./Testimonials";

export default function HowItWorks() {
  const { t } = useTranslation('common');
  const router = useRouter(); // eslint-disable-line @typescript-eslint/no-unused-vars

  const steps = [
    {
      title: t('landing.howItWorks.step1.title'),
      description: t('landing.howItWorks.step1.description'),
      icon: "📱"
    },
    {
      title: t('landing.howItWorks.step2.title'),
      description: t('landing.howItWorks.step2.description'),
      icon: "💾"
    },
    {
      title: t('landing.howItWorks.step3.title'),
      description: t('landing.howItWorks.step3.description'),
      icon: "🔍"
    },
    {
      title: t('landing.howItWorks.step4.title'),
      description: t('landing.howItWorks.step4.description'),
      icon: "📊"
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* How It Works Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('landing.howItWorks.newTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            {t('landing.aiSection.title')}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {t('landing.aiSection.description')}
          </p>
          <p className="text-center text-gray-700 mb-8">
            {t('landing.aiSection.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{t('landing.aiSection.understandPerformance.title')}</h4>
              <p className="text-sm text-gray-600">{t('landing.aiSection.understandPerformance.description')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{t('landing.aiSection.spotTrends.title')}</h4>
              <p className="text-sm text-gray-600">{t('landing.aiSection.spotTrends.description')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{t('landing.aiSection.monitorRisk.title')}</h4>
              <p className="text-sm text-gray-600">{t('landing.aiSection.monitorRisk.description')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">{t('landing.aiSection.automateReporting.title')}</h4>
              <p className="text-sm text-gray-600">{t('landing.aiSection.automateReporting.description')}</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">
            {t('landing.aiSection.ownership')}
          </p>
        </div>

        {/* Receipters App Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            {t('landing.appSection.title')}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {t('landing.appSection.description')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('landing.appSection.forMerchants.title')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forMerchants.capture')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forMerchants.issue')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forMerchants.lookup')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('landing.appSection.forConsumers.title')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forConsumers.collect')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forConsumers.find')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{t('landing.appSection.forConsumers.use')}</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            {t('landing.appSection.connect')}
          </p>
        </div>

        {/* Who We Serve Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            {t('landing.whoWeServe.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('landing.whoWeServe.retailers.title')}</h3>
              <p className="text-gray-600">{t('landing.whoWeServe.retailers.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('landing.whoWeServe.restaurants.title')}</h3>
              <p className="text-gray-600">{t('landing.whoWeServe.restaurants.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('landing.whoWeServe.healthcare.title')}</h3>
              <p className="text-gray-600">{t('landing.whoWeServe.healthcare.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('landing.whoWeServe.universities.title')}</h3>
              <p className="text-gray-600">{t('landing.whoWeServe.universities.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('landing.whoWeServe.consumers.title')}</h3>
              <p className="text-gray-600">{t('landing.whoWeServe.consumers.description')}</p>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  )
}