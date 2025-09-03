"use client"

import Image from "next/image";
import classNames from "classnames";
import Button from "@/components/Button";
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null;
  }

  const data = [
    {
      id: 1,
      title: "landing.howItWorks.step1.title",
      description: "landing.howItWorks.step1.description",
      image: "/assets/receipt1.jpg",
    },
    {
      id: 2,
      title: "landing.howItWorks.step2.title",
      description: "landing.howItWorks.step2.description",
      image: "/assets/cluod.jpg",
      
    },
    {
      id: 3,
      title: "landing.howItWorks.step3.title",
      description: "landing.howItWorks.step3.description",
      image: "/assets/expense.jpg",
    }
  ];

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
              // This logic makes the image come to the left and text to the right
              const reverse = true; 
              const { title, description, image } = item;
              return (
                <div
                  key={`hiw-${index}`}
                  className="grid lg:grid-cols-2 p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <div className={classNames(
                    "flex flex-col justify-center order-2 lg:order-2", {
                      'lg:order-1': reverse
                    }
                  )}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight">{t(title)}</h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">{t(description)}</p>
                  </div>
                  <div className={
                    classNames(
                      "h-[280px] sm:h-[360px] lg:h-[440px] relative order-1 lg:order-1", {
                        'lg:order-2': reverse
                      }
                    )
                  }>
                    <Image
                      alt={item.title}
                      src={image}
                      objectFit="contain"
                      layout="fill" />
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* New section with the added id */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            <div
              id="simplicity"
              className="bg-[#304191] rounded-xl p-8 flex flex-col items-center shadow">
              <span className="text-green-400 text-4xl mb-4">😊</span>
              <h3 className="text-xl font-semibold text-white mb-2">Simplicity</h3>
              <p className="text-sm text-gray-400 text-center">
                Our user-friendly interface makes managing receipts effortless for everyone.
              </p>
            </div>
            <div
              className="bg-[#304191] rounded-xl p-8 flex flex-col items-center shadow">
              <span className="text-purple-400 text-4xl mb-4">🔐</span>
              <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
              <p className="text-sm text-gray-400 text-center">
                Your data is protected with military-grade encryption for peace of mind.
              </p>
            </div>
            <div
              className="bg-[#304191] rounded-xl p-8 flex flex-col items-center shadow">
              <span className="text-blue-400 text-4xl mb-4">⚡</span>
              <h3 className="text-xl font-semibold text-white mb-2">Speed</h3>
              <p className="text-sm text-gray-400 text-center">
                Get instant access to your receipts, no waiting required.
              </p>
            </div>
            <div
              className="bg-[#304191] rounded-xl p-8 flex flex-col items-center shadow">
              <span className="text-blue-400 text-4xl mb-4">🌍</span>
              <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
              <p className="text-sm text-gray-400 text-center">
                Reduce paper waste and help the environment with our digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 sm:mt-10 px-4">
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
    </div>
  )
}