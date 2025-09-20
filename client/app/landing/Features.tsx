"use client";

import { useTranslation } from "react-i18next";
import { FaBolt, FaLock, FaLeaf } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Define the data for each feature card
const features = [
  {
    icon: <FaBolt className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.instantDelivery.title",
    descriptionKey: "landing.features.instantDelivery.description",
    slug: "instant-delivery",
  },
  {
    icon: <FaLock className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.secureStorage.title",
    descriptionKey: "landing.features.secureStorage.description",
    slug: "secure-storage",
  },
  {
    icon: <FaLeaf className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.sustainability.title",
    descriptionKey: "landing.features.sustainability.description",
    slug: "sustainability",
  },
];

export default function FeatureCards() {
  const { t, ready } = useTranslation("common");
  const router = useRouter();

  if (!ready) {
    return null;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Container for the feature cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
          {features.map((feature) => (
            <div
              key={feature.titleKey}
              className="bg-white rounded-2xl shadow-lg flex-1 flex flex-col items-center p-8 text-center"
            >
              {feature.icon}
              <h4 className="text-lg font-semibold mb-2">
                {t(feature.titleKey)}
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                {t(feature.descriptionKey)}
              </p>
              {/* Replaced the simple div with a button-like div with gradient background and arrow */}
              <div
                onClick={() => router.push(`/features/${feature.slug}`)}
                className="!bg-gradient-to-r !from-primary !to-primaryDark shadow-lg transition-colors
                           px-6 py-3 !rounded-full text-white w-full max-w-xs !justify-center mt-auto
                           flex items-center justify-center space-x-3 cursor-pointer"
              >
                <span className="font-semibold text-sm whitespace-nowrap">
                  {t('landing.features.learnMore')}
                </span>
                <div className="size-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-rounded text-primary text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
