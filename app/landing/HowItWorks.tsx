"use client"
import Image from "next/image";
import classNames from "classnames";
import Button from "@/components/Button";

export default function HowItWorks() {
  return (
    <div className="section">
      <div className="max-w-7xl">

        <h2 className="text-xs font-medium  uppercase mb-3">
          This is how it works
        </h2>
        <h3 className="text-2xl font-medium mb-10">
          Snap, scan, and relax—let Receipters do the heavy lifting!
        </h3>
        <div className="grid gap-10">
          {
            data.map((item, index) => {
              const reverse = index % 2 === 0
              return (
                <div
                  key={`hiw-${index}`}
                  className="grid sm:grid-cols-2 p-5 gap-8 rounded-3xl bg-white border border-slate-200 md:border-transparent">
                  <div className={classNames(
                    "flex flex-col justify-center", {
                      'order-2': reverse
                    }
                  )}>
                    <h3 className="text-2xl font-medium mb-6">{item.title}</h3>
                    <p>{item.description}</p>
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
                      src={item.image}
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
            onClick={() => console.log("clicked")}
            className="border border-slate-300 text-slate-900 px-6 !rounded-full hover:bg-primary hover:text-white">
            Get started free
          </Button>
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    id: 1,
    title: "Effortless Receipt Scanning",
    description: "Our advanced AI technology automatically scans, reads, and categorizes your receipts with unmatched accuracy, saving you time and reducing errors. Simply snap a photo, and let Receipters handle the rest.",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp",
  },
  {
    id: 2,
    title: "Real-Time Financial Insights",
    description: "Get a comprehensive view of your spending in real-time. Whether you’re tracking daily expenses or managing a company budget, our intuitive dashboard offers powerful insights to help you make better financial decisions.",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp"

  },
  {
    id: 3,
    title: "Seamless Integration with Financial Tools",
    description: "Easily connect Receipters to your bank accounts, credit cards, and other financial tools. Keep all your financial data in one place, simplifying the way you manage and monitor your expenses.",
    image: "https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp"
  }
]
