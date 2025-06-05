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
    <div className="section">
      <div className="max-w-7xl">

        <h2 className="text-xs font-medium uppercase mb-3">
          {t('landing.howItWorks.subtitle')}
        </h2>
        <h3 className="text-2xl font-medium mb-10">
          {t('landing.howItWorks.title')}
        </h3>
        <div className="grid gap-10">
          {
            data.map((item, index) => {
              const reverse = index % 2 === 0
              const { title, description, image } = item;
              return (
                <div
                  key={`hiw-${index}`}
                  className="grid sm:grid-cols-2 p-5 gap-8 rounded-3xl bg-white border border-slate-200 md:border-transparent">
                  <div className={classNames(
                    "flex flex-col justify-center", {
                      'order-2': reverse
                    }
                  )}>
                    <h3 className="text-2xl font-medium mb-6">{t(title)}</h3>
                    <p>{t(description)}</p>
                  </div>
                  <div className={
                    classNames(
                      "h-[360px] sm:h-[440px] relative", {
                        'order-1': reverse
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
        <div className="flex items-center justify-center mt-10">
                  <Button
                    variant="custom"
                    onClick={() => router.push("/download")}
                    className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 !rounded-full text-white">
                    <div className="flex items-center space-x-4">
                      <div className="font-medium">
                        {t('landing.hero.button')}
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
