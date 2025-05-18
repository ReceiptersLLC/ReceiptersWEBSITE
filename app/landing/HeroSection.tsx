"use client"
import {useRouter} from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="dp-x pt-20 flex flex-col items-center">
      <div
        className="dp-x py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 max-w-7xl grid grid-cols-1 gap-16 bg-gradient-to-b from-primary/10  via-primary/5 to-background rounded-3xl">
        <div className=" rounded-3xl">
          <h1 className="h1 text-center mb-6">
            Effortless Expense Management <span className="text-primary">Anywhere.</span>
          </h1>
          <p className="text-center mb-10">
            Receipters makes expense tracking and financial management simple, accurate, and hassle-free with advanced
            AI technology and seamless integrations.”
          </p>
          <div className="flex flex-row justify-center">
            <Button
              variant="custom"
              onClick={() => router.push("/download")}
              className="!bg-gradient-to-r !from-primary !to-primaryDark px-6 !rounded-full text-white">
              <div className="flex items-center space-x-4">
                <div className="font-medium">
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

          {/*  CTA get started*/}
        </div>
        <div className="flex flex-row justify-center">
          <div className="size-[400px] relative">
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
