"use client";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import {
  Instagram,
  Youtube
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import FooterLinksSection from "@/components/footer/FooterLinksSection";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return null; 
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#151516] text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 border-b border-b-white pb-8 sm:pb-12">
          {}
          <div className="grid gap-4 sm:gap-6 lg:col-span-2">
            <Link href="/">
              <div className="relative w-[120px] sm:w-[138px] h-[25px] sm:h-[29.117px]">
                <Image
                  src="/img/logo_full_w.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="text-sm sm:text-base lg:text-lg">
              {t('footer.newsletter.title')}
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 mb-3">
                <TextInput
                  required
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onTextChange={setEmail}
                  className="flex-1 sm:mr-6"
                />
                <Button onClick={() => console.log("")} className="!rounded-full w-full sm:w-auto">
                  {t('footer.newsletter.button')}
                </Button>
              </div>
              <div className="text-xs sm:text-sm opacity-75 leading-relaxed">
                {t('footer.newsletter.privacyPolicy')}
              </div>
              <div className="flex flex-col items-start mt-4 sm:mt-6">
                <div className="text-sm sm:text-base font-semibold mb-3">
                  {t('footer.connectWithUs')}</div>
              <div className="flex flex-row gap-4 sm:gap-6 flex-wrap">
                <Link href="https://www.facebook.com/profile.php?id=61576378047776" target="_blank"><FaSquareFacebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-500 transition-colors" /></Link>
                <Link href="https://www.instagram.com/receipters_llc" target="_blank"><Instagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-500 transition-colors" /></Link>
                <Link href="https://www.x.com/receipters_llc" target="_blank"><FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-400 transition-colors" /></Link>
                <Link href="https://www.linkedin.com/in/receipters-llc" target="_blank"><FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-600 transition-colors" /></Link>
                <Link href="https://www.tiktok.com/@receipters_llc" target="_blank"><FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 hover:text-gray-300 transition-colors" /></Link>
                <Link href="https://www.youtube.com/@Receipters_llc" target="_blank"><Youtube className="w-5 h-5 sm:w-6 sm:h-6 hover:text-red-500 transition-colors" /></Link>
              </div>
            </div>
            </div>
          </div>

          {}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4">
            <FooterLinksSection title={t('footer.quickLinks.title')} data={productLinks.map(link => ({...link, name: t(`footer.productLinks.${link.name.toLowerCase().replace(/\s/g, '')}`)}))} />
            <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">{t('footer.ourOffice')}:</strong><br />
                355 Ridgewood Ave, Suite 1<br />
                Newark, NJ 07112
              
              </div>
          </div>
        </div>

        {}
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12 mb-4 sm:mb-5">
          {legalLinks.map((link, index) => (
            <Link
              key={`legal-link-${index}`}
              href={link.url}
              className="text-xs sm:text-sm hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {}
        <div className="text-center text-xs sm:text-sm lg:text-base opacity-75">
          © {new Date().getFullYear()} Receipters LLC. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

const legalLinks = [
  {
    id: 1,
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    id: 2,
    name: "Terms and Conditions",
    url: "/terms-and-conditions",
  },
];

const productLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Product",
    url: "/product",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
];
