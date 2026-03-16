"use client"
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';

export default function CallToAction() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          {t('landing.cta.newTitle')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 max-w-3xl leading-relaxed opacity-90">
          {t('landing.cta.newDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="custom"
            onClick={() => router.push("/signup")}
            className="!bg-white !text-blue-600 px-8 py-3 !rounded-full w-full sm:w-auto !justify-center hover:!bg-gray-100">
            <span className="font-medium text-sm sm:text-base whitespace-nowrap">
              {t('landing.cta.newButton1')}
            </span>
          </Button>
          <Button
            variant="custom"
            onClick={() => router.push("/contact")}
            className="!bg-transparent !text-white !border-2 !border-white px-8 py-3 !rounded-full w-full sm:w-auto !justify-center hover:!bg-white hover:!text-blue-600">
            <span className="font-medium text-sm sm:text-base whitespace-nowrap">
              {t('landing.cta.newButton2')}
            </span>
          </Button>
        </div>
        <p className="text-sm opacity-90">
          {t('landing.cta.newFooter')}
        </p>
      </div>
    </div>
  )
}