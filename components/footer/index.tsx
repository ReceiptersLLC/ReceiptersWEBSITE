"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Mail, MessageCircle, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import FooterLinksSection from "@/components/footer/FooterLinksSection";
import { useTranslation } from "react-i18next";
import { openCookieSettings } from "@/lib/consent";
import { products, services } from "@/lib/siteLinks";

const SUPPORT_EMAIL = "support@receipters.com";
const GENERAL_EMAIL = "info@receipters.com";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576378047776", Icon: FaSquareFacebook },
  { label: "Instagram", href: "https://www.instagram.com/receipters_llc", Icon: Instagram },
  { label: "X", href: "https://www.x.com/receipters_llc", Icon: FaXTwitter },
  { label: "LinkedIn", href: "http://www.linkedin.com/company/Receipters-LLC/", Icon: FaLinkedin },
  { label: "TikTok", href: "https://www.tiktok.com/@receipters_llc", Icon: FaTiktok },
  { label: "YouTube", href: "https://www.youtube.com/@Receipters_llc", Icon: Youtube },
];

const contacts = [
  { key: "footer.supportEmail", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, Icon: Mail },
  { key: "footer.generalEmail", value: GENERAL_EMAIL, href: `mailto:${GENERAL_EMAIL}`, Icon: Mail },
  { key: "footer.whatsappKenya", value: "+254 722 752 755", href: "https://wa.me/254722752755", Icon: MessageCircle },
  { key: "footer.whatsappUsa", value: "+1 (720) 930-2570", href: "https://wa.me/17209302570", Icon: MessageCircle },
];

const offices = [
  { title: "footer.primaryOffice", address: "footer.primaryOfficeAddress" },
  { title: "footer.usOffice", address: "footer.usOfficeAddress" },
  { title: "footer.zambiaOffice", address: "footer.zambiaOfficeAddress" },
];

export default function Footer() {
  const { t } = useTranslation("common");

  const productLinks = [
    { id: 0, name: t("navbar.allProducts"), url: "/product" },
    ...products.map((product, i) => ({
      id: i + 1,
      name: product.name,
      url: product.href ?? `/product#${product.slug}`,
    })),
  ];
  const serviceLinks = [
    { id: 0, name: t("navbar.allServices"), url: "/services" },
    ...services.map((service, i) => ({ id: i + 1, name: t(service.titleKey), url: `/services#${service.slug}` })),
  ];
  const platformLinks = platformItems.map((link) => ({ ...link, name: t(link.name) }));
  const companyLinks = companyItems.map((link) => ({ ...link, name: t(link.name) }));

  return (
    <footer className="border-t border-white/20 bg-inkDeep-depth text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Brand, app and link columns */}
        <div className="grid gap-12 border-b border-white/15 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative block h-10 w-7">
                <Image src="/img/logo.svg" alt="" fill className="object-contain" />
              </span>
              <span className="font-serif text-2xl font-medium tracking-tight">Receipters</span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">{t("footer.tagline")}</p>

            <div className="mt-8 text-[15px] font-semibold">{t("footer.getTheApp")}</div>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://apps.apple.com/gb/app/receipters/id6740431170" target="_blank" rel="noopener noreferrer" aria-label="App Store">
                <span className="relative block h-[46px] w-[150px] overflow-hidden">
                  <Image src="/assets/app-store.svg" alt="Download on the App Store" width={150} height={150} className="absolute left-0 top-1/2 size-[150px] max-w-none -translate-y-1/2" />
                </span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.receipters.app" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                <span className="relative block h-[46px] w-[150px] overflow-hidden">
                  <Image src="/assets/google-play.svg" alt="Get it on Google Play" width={150} height={150} className="absolute left-0 top-1/2 size-[150px] max-w-none -translate-y-1/2" />
                </span>
              </a>
            </div>

            <div className="mt-8 text-[15px] font-semibold">{t("footer.connectWithUs")}</div>
            <div className="mt-4 flex flex-wrap gap-5 text-white/70">
              {socials.map(({ label, href, Icon }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="size-5 transition-colors hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterLinksSection title={t("footer.products")} data={productLinks} />
            <FooterLinksSection title={t("footer.platform")} data={platformLinks} />
            <FooterLinksSection title={t("footer.servicesTitle")} data={serviceLinks} />
            <FooterLinksSection title={t("footer.company")} data={companyLinks} />
          </div>
        </div>

        {/* Contact and offices */}
        <div id="locations" className="grid scroll-mt-32 gap-12 border-b border-white/15 py-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[15px] font-semibold">{t("footer.getInTouch")}</div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{t("footer.getInTouchDescription")}</p>
            <ul className="m-0 mt-5 list-none space-y-3 p-0">
              {contacts.map(({ key, value, href, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 text-[15px] text-white/80 transition-colors hover:text-white"
                  >
                    <Icon className="size-4 shrink-0 text-skyDeep" strokeWidth={1.75} aria-hidden="true" />
                    <span className="w-40 shrink-0 text-white/75">{t(key)}</span>
                    <span className="font-medium group-hover:underline group-hover:underline-offset-4">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              {t("footer.sendMessage")}
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[15px] font-semibold">{t("footer.locations")}</div>
            <div className="mt-5 grid gap-4">
              {offices.map(({ title, address }) => (
                <article
                  key={title}
                  className="group flex gap-5 border border-white/20 border-l-[3px] border-l-skyDeep bg-white/[0.07] p-5 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:border-l-skyDeep hover:bg-white/[0.12] hover:shadow-[0_18px_30px_-16px_rgba(8,12,34,0.7)] sm:p-6"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center bg-white text-primary">
                    <MapPin className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-medium leading-tight text-white">{t(title)}</h3>
                    <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-white/80">{t(address)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-5 py-8 text-sm text-white/75 lg:flex-row lg:items-center lg:justify-between">
          <div>© {new Date().getFullYear()} Receipters Technology. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.url} href={link.url} className="transition-colors hover:text-white">
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
  { nameKey: "footer.legalLinks.privacyPolicy", url: "/privacy-policy" },
  { nameKey: "footer.legalLinks.termsAndConditions", url: "/terms-and-conditions" },
  { nameKey: "legal.nav.cookies", url: "/cookie-policy" },
  { nameKey: "legal.nav.compliance", url: "/compliance" },
  { nameKey: "legal.nav.hub", url: "/legal" },
  { nameKey: "footer.deleteAccount", url: "/delete-account" },
];

const platformItems = [
  { id: 1, name: "landing.features.digitalReceipting.title", url: "/features/digital-receipt-issuance" },
  { id: 2, name: "landing.features.receiptStorage.title", url: "/features/receipt-storage" },
  { id: 3, name: "landing.features.receiptersApp.title", url: "/features/multi-device" },
  { id: 4, name: "landing.features.dataAnalysis.title", url: "/features/data-analysis" },
  { id: 5, name: "landing.howItWorks.newTitle", url: "/#how-it-works" },
  { id: 6, name: "landing.whoWeServe.title", url: "/#sectors" },
  { id: 7, name: "landing.features.builtForCompliance.title", url: "/#compliance" },
];

const companyItems = [
  { id: 1, name: "navbar.link.home", url: "/" },
  { id: 2, name: "navbar.link.about", url: "/about" },
  { id: 3, name: "navbar.link.blogs", url: "/blogs" },
  { id: 4, name: "navbar.link.announcement", url: "/blogs/announcement" },
  { id: 5, name: "navbar.link.careers", url: "/careers" },
  { id: 6, name: "navbar.link.app", url: "/download" },
  { id: 7, name: "navbar.link.contact", url: "/contact" },
];
