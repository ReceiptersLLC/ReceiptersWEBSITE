"use client";

import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null; // Or render a loading spinner/skeleton
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs sm:text-sm font-medium text-center uppercase mb-3 sm:mb-4 tracking-wider">
          {t('landing.testimonials.subtitle')}
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 leading-tight">
          {t('landing.testimonials.title')}
        </h3>

        <div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div
              className="relative bg-[url(/img/customer-satisfaction.webp)] w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center text-white flex flex-col justify-end p-6 sm:p-8 lg:p-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                89.54%
              </div>
              <div className="text-sm sm:text-base opacity-90">{t('landing.testimonials.customerSatisfaction')}
              </div>
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="h-4 sm:h-5 w-full mb-4 sm:mb-6 relative flex flex-row items-center gap-1">
                {[1, 2, 3, 4, 5].map((v, i) => (
                  <svg
                    key={`testimonail-svg-${i}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 17"
                    height="100%">
                    <path
                      d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                      className="fill-primary"></path>
                  </svg>
                ))}
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed mb-4 sm:mb-6">
                {t('landing.testimonials.quote')}
              </div>
              <div className="flex flex-row space-x-3 sm:space-x-4 items-center">
                <div className="size-10 sm:size-12 relative bg-amber-50 rounded-full overflow-hidden">
                  <Image
                    alt="Customer testimonial image"
                    src="/img/customer-satisfaction.webp"
                    layout="fill"/>
                </div>
                <div className="text-base sm:text-lg font-medium">
                  Leonard Ochieng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
