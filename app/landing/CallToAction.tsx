"use client"
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export default function CallToAction() {
  const router = useRouter();
  return (
    <div className="section bg-[#222] text-white text-center">
      <div className="max-w-7xl flex flex-col items-center">
        <h2 className="h1 mb-6">
          Ready to Streamline Your Expense Management?
        </h2>
        <p className="mb-16">
          Join hundreds of businesses and individuals who rely on Receipters for their financial management. Try
          Receipters today and see how effortless managing expenses can be.
        </p>
        <Button
          variant="custom"
          onClick={() => router.push("/download")} // Redirect to the new download page
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
    </div>
  )
}
