"use client"
import featuresData from "@/app/landing/featuresData";
import Image from "next/image";
import classNames from "classnames";
import {useState} from "react";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="section">
      <div className="max-w-7xl">
        <h2 className="text-sm uppercase font-medium mb-4 text-center">{t('landing.features.subtitle')}</h2>
        <h3 className="h3 mb-10 text-center">
        </h3>
        <div className="flex flex-col md:flex-row space-x-4 mb-16 justify-center">
          {featuresData.map((feature, index) => (
            <button
              onClick={() => setSelectedIndex(index)}
              key={`feature-header-${feature.id}`}
              className={classNames(
                'px-3 py-2 rounded-full border border-transparent hover:border-primary',
                {'bg-white text-primary': index === selectedIndex}
              )
              }>
              {feature.header}
            </button>
          ))}
        </div>
        <div className="bg-white">
          <div className="p-8 rounded-3xl grid gap-8 md:grid-cols-2">
            <div className="w-full aspect-[32/30] relative">
              <Image
                alt={featuresData[selectedIndex].title}
                src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821d_blobs2.webp"
                layout="fill"
                className="rounded-3xl"/>
            </div>
            <div className="flex flex-col space-4">
              <h3 className="h3 mb-4">{t(featuresData[selectedIndex].titleKey)}</h3>
              <p className="mb-8">{t(featuresData[selectedIndex].descriptionKey)}</p>
              <Button
                variant='custom'
                onClick={() => router.push("/download")}
                className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 !rounded-full text-white self-start">
                <div className="flex items-center space-x-4">
                  <div className="font-semibold">
                    Get Started Today
                  </div>
                  <div className="size-8 rounded-full bg-white flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary">
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
  )
}
