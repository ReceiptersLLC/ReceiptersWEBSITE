"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Import useState and useEffect for the animation state
import Button from "@/components/Button";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function HeroSection() {
  const router = useRouter();
  const { t, ready } = useTranslation('common');
  const [isLoaded, setIsLoaded] = useState(false); // State to control the animation

  useEffect(() => {
    // When the component mounts, set the state to true to trigger the animation
    setIsLoaded(true);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div className="relative pt-20 flex flex-col items-center
                    min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]
                    bg-gray-500 text-white overflow-hidden"> {/* Add overflow-hidden to prevent horizontal scroll */}
      
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl 
                      items-center md:items-start justify-between px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Text content - Now animates from the right */}
        <div className={`
          flex-1 lg:basis-3/5 text-left pr-8 mb-8 md:mb-0
          transition-all duration-1000 ease-out transform
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-md">
            <span dangerouslySetInnerHTML={{ __html: t('landing.hero.title') }}></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl drop-shadow-md">
            {t('landing.hero.description')}
          </p>
          <div className="flex justify-start">
            <Button
              variant="custom"
              onClick={() => router.push("/download")}
              className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 py-3 !rounded-full text-white w-full max-w-sm !justify-center shadow-lg">
              <div className="flex items-center justify-center space-x-3 w-full">
                <span className="font-medium text-sm whitespace-nowrap">
                  {t('landing.hero.button')}
                </span>
                <div className="size-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-rounded text-primary text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Button>
          </div>
        </div>
        
        {/* Image - Now animates from the left */}
        <div className={`
          hidden lg:block lg:basis-2/5 flex justify-end items-start w-full
          transition-all duration-1000 ease-out transform delay-300
          ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}>
          <div className="w-full h-auto rounded-xl shadow-2xl max-w-[500px] lg:max-w-[700px] overflow-hidden">
            <Image
              src="/assets/re.jpg"
              alt="Digital receipt displayed on a phone screen"
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