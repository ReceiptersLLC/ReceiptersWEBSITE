"use client"
import {useRouter} from "next/navigation";
import Button from "@/components/Button";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const router = useRouter();
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null; // Or render a loading spinner/skeleton
  }

 return (
    <div className="px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center">
      <div
        className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 max-w-7xl grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background rounded-2xl sm:rounded-3xl">
        <div className="rounded-2xl sm:rounded-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('landing.hero.title') }}></h1>
          <p className="text-sm sm:text-base lg:text-lg text-center mb-8 sm:mb-10 px-2 sm:px-4 lg:px-8 leading-relaxed max-w-4xl mx-auto text-gray-600">
            {t('landing.hero.description')}
          </p>
          <div className="flex flex-row justify-center px-4">
            <Button
              variant="custom"
              onClick={() => router.push("/download")}
              className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 sm:px-8 py-3 sm:py-4 !rounded-full text-white w-full sm:w-auto max-w-sm mx-auto !justify-center">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full">
                <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                  {t('landing.hero.button')}
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
        <div className="flex flex-row justify-center">
          <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-square relative">
            <Image
              alt="Receipters app"
              src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb8274_imghero1.webp"
              layout="fill"
              objectFit="contain"
              priority/>
          </div>
        </div>
      </div>
    </div>
  )
}
