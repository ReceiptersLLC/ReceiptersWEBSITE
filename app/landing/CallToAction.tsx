"use client"
import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import { useTranslation } from 'react-i18next';

export default function CallToAction() {
  const router = useRouter();
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null; // Or a loading indicator component
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#222] text-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          {t('landing.cta.title')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-12 sm:mb-16 max-w-3xl leading-relaxed opacity-90">
          {t('landing.cta.description')}
        </p>
        <Button
          variant="custom"
          onClick={() => router.push("/download")}
          className="!bg-gradient-to-r !from-primary !to-primaryDark px-4 sm:px-6 py-3 sm:py-4 !rounded-full text-white w-full sm:w-auto max-w-xs">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="font-medium text-sm sm:text-base">
              {t('landing.cta.button')}
            </div>
            <div className="size-6 sm:size-8 rounded-full bg-white flex items-center justify-center">
            <span className="material-symbols-rounded text-primary text-sm sm:text-base">
              arrow_forward
            </span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}
