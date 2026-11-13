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
import { openCookieSettings } from "@/lib/consent";

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-inkDeep-depth text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative block h-9 w-6">
                <Image src="/img/logo.svg" alt="" fill className="object-contain" />
              </span>
              <span className="font-serif text-lg font-medium tracking-tight">Receipters</span>
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

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterLinksSection title={t('footer.explore')} data={exploreLinks.map(link => ({ ...link, name: t(link.name) }))} />
            <FooterLinksSection title={t('footer.company')} data={companyLinks.map(link => ({ ...link, name: t(link.name) }))} />
            <FooterLinksSection title={t('footer.trustLegal')} data={trustLinks.map(link => ({ ...link, name: t(link.name) }))} />
          </div>
        </div>

        <div id="locations" className="scroll-mt-32 border-b border-white/15 py-10">
          <div className="mb-5 text-sm font-semibold">{t('footer.locations')}</div>
          <div className="grid gap-8 sm:grid-cols-3">
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

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Receipters Technology. All rights reserved.</div>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.id} href={link.url} className="transition-colors hover:text-white">
                {t(link.nameKey)}
              </Link>
            ))}
            <button type="button" onClick={openCookieSettings} className="transition-colors hover:text-white">
              {t("cookies.footerLink")}
            </button>
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

const exploreLinks = [
  { id: 1, name: "landing.features.digitalReceipting.title", url: "/features/digital-receipt-issuance" },
  { id: 2, name: "landing.features.receiptStorage.title", url: "/features/receipt-storage" },
  { id: 3, name: "landing.features.receiptersApp.title", url: "/features/multi-device" },
  { id: 4, name: "landing.features.dataAnalysis.title", url: "/features/data-analysis" },
  { id: 5, name: "landing.howItWorks.newTitle", url: "/#how-it-works" },
  { id: 6, name: "landing.whoWeServe.title", url: "/#sectors" },
];

const companyLinks = [
  { id: 1, name: "navbar.link.home", url: "/" },
  { id: 2, name: "navbar.link.about", url: "/about" },
  { id: 3, name: "navbar.link.product", url: "/product" },
  { id: 4, name: "navbar.link.services", url: "/services" },
  { id: 5, name: "navbar.link.blogs", url: "/blogs" },
  { id: 6, name: "navbar.link.careers", url: "/careers" },
  { id: 7, name: "navbar.link.contact", url: "/contact" },
];

const trustLinks = [
  { id: 1, name: "footer.legalLinks.privacyPolicy", url: "/privacy-policy" },
  { id: 2, name: "footer.legalLinks.termsAndConditions", url: "/terms-and-conditions" },
  { id: 3, name: "footer.deleteAccount", url: "/delete-account" },
];
