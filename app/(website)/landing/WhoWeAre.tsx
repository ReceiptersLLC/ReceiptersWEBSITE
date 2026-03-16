"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import classNames from "classnames";

export default function CTASection() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
          {t("landing.cta.title", "Ready to Go Paperless with Digital Receipts?")}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 text-gray-400">
          {t("landing.cta.description", "Join hundreds of businesses and customers who rely on Receipters for their digital receipt management. Try Receipters today and see how effortless paperless transactions can be.")}
        </p>
        <Button
          variant="custom"
          onClick={() => router.push("/download")}
          className={classNames(
            "!bg-gradient-to-r !from-blue-800 !to-blue-900 px-6 sm:px-8 py-3 sm:py-4",
            "!rounded-full text-white w-full sm:w-auto max-w-sm mx-auto !justify-center shadow-lg"
          )}
        >
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full">
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              {t("landing.cta.button", "Get Started Today")}
            </span>
            <div className="size-6 sm:size-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-rounded text-blue-800 text-sm sm:text-base">
                arrow_forward
              </span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}