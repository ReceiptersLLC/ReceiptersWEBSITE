import HeroSection from "@/app/landing/HeroSection";
import Features from "@/app/landing/Features";
import WhoWeAre from "@/app/landing/WhoWeAre";
import Testimonials from "@/app/landing/Testimonials";
import HowItWorks from "@/app/landing/HowItWorks";
import CallToAction from "@/app/landing/CallToAction";

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
