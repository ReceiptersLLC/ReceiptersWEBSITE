"use client";
import featuresData from "@/app/landing/featuresData";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t, ready } = useTranslation("common");
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedFeature = featuresData[selectedIndex];
  const titleKey = selectedFeature?.titleKey;
  const descriptionKey = selectedFeature?.descriptionKey;
  
  if (!ready) {
    return null; // Or render a loading spinner/skeleton
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs sm:text-sm uppercase font-medium mb-3 sm:mb-4 text-center tracking-wider">
          {t("landing.features.subtitle")}
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center leading-tight">
          {t("landing.features.title")}
        </h3>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-12 sm:mb-16 justify-center items-center">
          {featuresData.map((feature, index) => (
            <button
              onClick={() => setSelectedIndex(index)}
              key={`feature-header-${feature.id}`}
              className={classNames(
                "px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-transparent hover:border-primary text-sm sm:text-base transition-all duration-200",
                { "bg-white text-primary shadow-md": index === selectedIndex }
              )}
            >
              {t(feature.header)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg">
          <div className="p-4 sm:p-6 lg:p-8 grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="w-full aspect-[32/30] relative order-2 lg:order-1">
              <Image
                alt={t(titleKey)}
                src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821d_blobs2.webp"
                layout="fill"
                className="rounded-2xl sm:rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">{t(titleKey)}</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-600">{t(descriptionKey)}</p>
              <Button
                variant="custom"
                onClick={() => router.push("/download")}
                className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 sm:px-8 py-3 sm:py-4 !rounded-full text-white w-full sm:w-auto max-w-sm mx-auto !justify-center"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full">
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                    {t("landing.features.button")}
                  </span>
                  <div className="size-6 sm:size-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-rounded text-primary text-sm sm:text-base">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
