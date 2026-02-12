"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function HeroSection() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    setIsLoaded(true);
  }, []);

  return (
    <div className="relative pt-20 flex flex-col items-center
                    min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]
                    bg-gray-500 text-white overflow-hidden"> {/* Add overflow-hidden to prevent horizontal scroll */}

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl 
                      items-center md:items-start justify-between px-4 sm:px-6 lg:px-8 py-8 md:py-16">

        { }
        <div className={`
          flex-1 lg:basis-3/5 text-left pr-8 mb-8 md:mb-0
          transition-all duration-300 ease-out transform
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-md">
            {t('landing.hero.newTitle')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed max-w-4xl drop-shadow-md">
            {t('landing.hero.newDescription')}
          </p>
          <p className="text-base sm:text-lg mb-8 text-gray-200 drop-shadow-md">
            {t('landing.hero.newSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button
              variant="custom"
              onClick={() => router.push("/download")}
              className="!bg-gradient-to-r !from-primary !to-primaryDark px-8 py-3 !rounded-full text-white !justify-center shadow-lg">
              <div className="flex items-center justify-center space-x-3">
                <span className="font-medium text-sm whitespace-nowrap">
                  {t('landing.hero.newButton1')}
                </span>
                <div className="size-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-rounded text-primary text-sm">

                  </span>
                </div>
              </div>
            </Button>
            <Button
              variant="custom"
              onClick={() => router.push("/product")}
              className="!border-2 !border-white !text-white hover:!bg-white hover:!text-gray-800 px-8 py-3 !rounded-full !justify-center shadow-lg">
              <span className="font-medium text-sm whitespace-nowrap">
                {t('landing.hero.newButton2')}
              </span>
            </Button>
          </div>
        </div>

        { }
        <div className={`
          hidden lg:block lg:basis-2/5 flex justify-end items-start w-full
          transition-all duration-300 ease-out transform
          ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}>
          <div className="w-full h-auto rounded-xl shadow-2xl max-w-[500px] lg:max-w-[700px] overflow-hidden">
            <Image
              src="/assets/re.jpg"
              alt={t('landing.hero.newImageAlt')}
              width={400}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}