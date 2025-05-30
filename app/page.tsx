import HeroSection from "@/app/landing/HeroSection";
import Features from "@/app/landing/Features";
import WhoWeAre from "@/app/landing/WhoWeAre";
import Testimonials from "@/app/landing/Testimonials";
import HowItWorks from "@/app/landing/HowItWorks";
import CallToAction from "@/app/landing/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receipters",
  description: "Effortless Expense Management Anywhere.",
};

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <WhoWeAre/>
      <Testimonials/>
      <HowItWorks/>
      <CallToAction/>
    </div>
  );
}
