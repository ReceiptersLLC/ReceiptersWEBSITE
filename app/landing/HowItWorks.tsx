"use client"
import Image from "next/image";
import classNames from "classnames";
import Button from "@/components/Button";
import { useTranslation } from 'react-i18next';
import {useRouter} from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();
  // const { t } = useTranslation('common');
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null; // Or render a loading spinner/skeleton
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-xs sm:text-sm font-medium uppercase mb-3 sm:mb-4 tracking-wider">
          {t('landing.howItWorks.subtitle')}
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 leading-tight">
          {t('landing.howItWorks.title')}
        </h3>
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {
            data.map((item, index) => {
              const reverse = index % 2 === 0
              const { title, description, image } = item;
              return (
                <div
                  key={`hiw-${index}`}
                  className="grid lg:grid-cols-2 p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <div className={classNames(
                    "flex flex-col justify-center order-2 lg:order-1", {
                      'lg:order-2': reverse
                    }
                  )}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight">{t(title)}</h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">{t(description)}</p>
                  </div>
                  <div className={
                    classNames(
                      "h-[280px] sm:h-[360px] lg:h-[440px] relative order-1 lg:order-2", {
                        'lg:order-1': reverse
                      }
                    )
                  }>
                    <Image
                      alt={item.title}
                      src={image}
                      objectFit="contain"
                      layout="fill"/>

                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex items-center justify-center mt-8 sm:mt-10 px-4">
                  <Button
                    variant="custom"
                    onClick={() => router.push("/download")}
                    className="!bg-gradient-to-r !from-primary !to-primaryDark px-4 sm:px-6 py-3 sm:py-4 !rounded-full text-white w-full sm:w-auto max-w-xs">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                      <div className="font-medium text-sm sm:text-base">
                        {t('landing.hero.button')}
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
    </div>
  )
}


const data = [
  {
    id: 1,
    title: "landing.howItWorks.step1.title",
    description: "landing.howItWorks.step1.description",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp",
  },
  {
    id: 2,
    title: "landing.howItWorks.step2.title",
    description: "landing.howItWorks.step2.description",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp"

  },
  {
    id: 3,
    title: "landing.howItWorks.step3.title",
    description: "landing.howItWorks.step3.description",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp"
  }
]
