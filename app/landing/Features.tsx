"use client";

// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { FaBolt, FaLock, FaLeaf } from "react-icons/fa";
// The 'useRouter' hook is imported correctly, but 'router' is unused in the current logic.
import { useRouter } from "next/navigation";

// Define the data for each feature card
// This variable is kept for potential future use, but marked as unused to clear the warning.
const features = [ // eslint-disable-line @typescript-eslint/no-unused-vars
  {
    icon: <FaBolt className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.captureReceipts.header",
    descriptionKey: "landing.features.data.captureReceipts.description",
    slug: "instant-delivery",
  },
  {
    icon: <FaLock className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.trackAndAnalyze.header",
    descriptionKey: "landing.features.data.trackAndAnalyze.description",
    slug: "secure-storage",
  },
  {
    icon: <FaLeaf className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.generateReports.header",
    descriptionKey: "landing.features.data.generateReports.description",
    slug: "sustainability",
  },
];

export default function FeatureCards() {
  const { t } = useTranslation('common');
  const router = useRouter(); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Value Proposition Strip */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('landing.features.newTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{t('landing.features.digitalReceipting.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.digitalReceipting.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{t('landing.features.receiptStorage.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.receiptStorage.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{t('landing.features.receiptersApp.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.receiptersApp.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{t('landing.features.dataAnalysis.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.dataAnalysis.description')}</p>
            </div>
          </div>
        </div>

        {/* Why Receipters Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('landing.features.whyReceipters.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Receipters sits at the intersection of payments, compliance, and data intelligence. We don&apos;t just replace paper receipts – we upgrade your entire post-transaction experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">{t('landing.features.builtForCompliance.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.builtForCompliance.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">{t('landing.features.secureByDesign.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.secureByDesign.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">{t('landing.features.aiReadyData.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.aiReadyData.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">{t('landing.features.developerFriendlyApis.title')}</h3>
              <p className="text-gray-600 text-sm">{t('landing.features.developerFriendlyApis.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}