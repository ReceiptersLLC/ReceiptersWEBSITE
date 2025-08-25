"use client";

import { useTranslation } from "react-i18next";
import { FaBolt, FaLock, FaLeaf } from "react-icons/fa";

// Define the data for each feature card
const features = [
  {
    icon: <FaBolt className="text-primary text-3xl mb-4" />,
    title: "Instant Delivery",
    description: "Receipts are delivered to your account instantly after purchase, so you never lose track.",
  },
  {
    icon: <FaLock className="text-primary text-3xl mb-4" />,
    title: "Secure Storage",
    description: "Your receipts are encrypted and stored securely, accessible only by you.",
  },
  {
    icon: <FaLeaf className="text-primary text-3xl mb-4" />,
    title: "Sustainability",
    description: "Go paperless and help protect the environment with digital receipts.",
  },
];

export default function FeatureCards() {
  const { t, ready } = useTranslation("common"); // 't' is now used for the button text

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
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg flex-1 flex flex-col items-center p-8 text-center"
            >
              {feature.icon}
              <h4 className="text-lg font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                {feature.description}
              </p>
              {/* Replaced the simple div with a button-like div with gradient background and arrow */}
              <div
                className="!bg-gradient-to-r !from-primary !to-primaryDark shadow-lg transition-colors 
                           px-6 py-3 !rounded-full text-white w-full max-w-xs !justify-center mt-auto
                           flex items-center justify-center space-x-3 cursor-pointer" // Added flex, justify-center, items-center for icon alignment and cursor for interactivity
              >
                <span className="font-semibold text-sm whitespace-nowrap">
                  {t('learn More')} {/* Using 't' for translation, assuming this key exists */}
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
