"use client";
import Link from "next/link";
import Image from "next/image";
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
  const { t } = useTranslation('common');

  return (
    <footer className="bg-inkDeep text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative block h-9 w-6">
                <Image src="/img/logo.svg" alt="" fill className="object-contain" />
              </span>
              <span className="text-lg font-semibold tracking-tight">Receipters</span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              {t('footer.tagline')}
            </p>
            <div className="mt-8 text-sm font-semibold">{t('footer.connectWithUs')}</div>
            <div className="mt-4 flex flex-wrap gap-5 text-white/70">
              <Link href="https://www.facebook.com/profile.php?id=61576378047776" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaSquareFacebook className="size-5 transition-colors hover:text-white" /></Link>
              <Link href="https://www.instagram.com/receipters_llc" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="size-5 transition-colors hover:text-white" /></Link>
              <Link href="https://www.x.com/receipters_llc" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter className="size-5 transition-colors hover:text-white" /></Link>
              <Link href="http://www.linkedin.com/company/Receipters-LLC/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin className="size-5 transition-colors hover:text-white" /></Link>
              <Link href="https://www.tiktok.com/@receipters_llc" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok className="size-5 transition-colors hover:text-white" /></Link>
              <Link href="https://www.youtube.com/@Receipters_llc" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube className="size-5 transition-colors hover:text-white" /></Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <FooterLinksSection title={t('footer.quickLinks.title')} data={productLinks.map(link => ({ ...link, name: t(`footer.productLinks.${link.name.toLowerCase().replace(/\s/g, '')}`) }))} />
          </div>

          <div className="lg:col-span-4">
            <div className="mb-3 text-sm font-semibold">{t('footer.locations')}</div>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              <div className="text-sm leading-relaxed text-white/65">
                <strong className="font-medium text-white">{t('footer.primaryOffice')}</strong><br />
                <span className="whitespace-pre-line">{t('footer.primaryOfficeAddress')}</span>
              </div>
              <div className="text-sm leading-relaxed text-white/65">
                <strong className="font-medium text-white">{t('footer.usOffice')}</strong><br />
                <span className="whitespace-pre-line">{t('footer.usOfficeAddress')}</span>
              </div>
              <div className="text-sm leading-relaxed text-white/65">
                <strong className="font-medium text-white">{t('footer.zambiaOffice')}</strong><br />
                <span className="whitespace-pre-line">{t('footer.zambiaOfficeAddress')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Receipters Technology. All rights reserved.</div>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.id} href={link.url} className="transition-colors hover:text-white">
                {t(link.nameKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const legalLinks = [
  {
    id: 1,
    nameKey: "footer.legalLinks.privacyPolicy",
    url: "/privacy-policy",
  },
  {
    id: 2,
    nameKey: "footer.legalLinks.termsAndConditions",
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
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    name: "Careers",
    url: "/careers",
  },
  {
    id: 6,
    name: "Contact",
    url: "/contact",
  },
];
