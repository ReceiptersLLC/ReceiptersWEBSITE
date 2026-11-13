"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
];

export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n: i18nInstance } = useTranslation("common");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setBlogsDropdownOpen(false);
  }, [pathname]);

  // Close the dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBlogsDropdownOpen(false);
      }
    };
    if (blogsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [blogsDropdownOpen]);

  const handleLanguageChange = async (newLanguage: string) => {
    try {
      await i18nInstance.changeLanguage(newLanguage);
    } catch (error) {
      console.error("Error switching language:", error);
    }
  };

  const isActive = (href: string) => pathname === href;
  const blogsActive = pathname.startsWith("/blogs");

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative block h-9 w-6">
              <Image src="/img/logo.svg" alt="" fill className="object-contain" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-ink">Receipters</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-stretch gap-1 self-stretch lg:flex">
            <NavLink href="/" label={t("navbar.link.home")} active={isActive("/")} />
            <NavLink href="/about" label={t("navbar.link.about")} active={isActive("/about")} />
            <NavLink href="/product" label={t("navbar.link.product")} active={isActive("/product")} />
            <NavLink href="/services" label={t("navbar.link.services")} active={isActive("/services")} />
            <div className="relative flex" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={blogsDropdownOpen}
                onClick={() => setBlogsDropdownOpen(!blogsDropdownOpen)}
                className={`flex items-center gap-1 border-b-2 px-3 text-sm font-medium transition-colors ${
                  blogsActive
                    ? "border-primary text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                <span>{t("navbar.link.blogs")}</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform ${blogsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {blogsDropdownOpen && (
                <div className="absolute left-0 top-full z-50 w-52 border border-line bg-white py-1 shadow-[0_12px_24px_-8px_rgba(14,20,51,0.18)]">
                  <Link href="/blogs" className="block px-4 py-2.5 text-sm text-ink hover:bg-mist">
                    {t("navbar.link.blogs")}
                  </Link>
                  <Link href="/blogs/announcement" className="block px-4 py-2.5 text-sm text-ink hover:bg-mist">
                    {t("navbar.link.announcement")}
                  </Link>
                </div>
              )}
            </div>
            <NavLink href="/careers" label={t("navbar.link.careers")} active={isActive("/careers")} />
            <NavLink href="/contact" label={t("navbar.link.contact")} active={isActive("/contact")} />
          </div>

          {/* Account and language */}
          <div className="hidden items-center gap-3 lg:flex">
            <select
              aria-label="Language"
              className="border border-line bg-white px-2 py-2 text-sm text-ink"
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18nInstance.language}
            >
              {languages.map(({ code }) => (
                <option key={code} value={code}>
                  {code.toUpperCase()}
                </option>
              ))}
            </select>
            <Link href="/login" className="px-3 py-2 text-sm font-semibold text-ink hover:text-primary">
              {t("navbar.button.login")}
            </Link>
            <Link
              href="/signup"
              className="bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              {t("navbar.button.signUp")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-16 z-50 w-full border-b border-line bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            <NavLink href="/" label={t("navbar.link.home")} active={isActive("/")} mobile />
            <NavLink href="/about" label={t("navbar.link.about")} active={isActive("/about")} mobile />
            <NavLink href="/product" label={t("navbar.link.product")} active={isActive("/product")} mobile />
            <NavLink href="/services" label={t("navbar.link.services")} active={isActive("/services")} mobile />
            <NavLink href="/blogs" label={t("navbar.link.blogs")} active={isActive("/blogs")} mobile />
            <NavLink
              href="/blogs/announcement"
              label={t("navbar.link.announcement")}
              active={isActive("/blogs/announcement")}
              mobile
            />
            <NavLink href="/careers" label={t("navbar.link.careers")} active={isActive("/careers")} mobile />
            <NavLink href="/contact" label={t("navbar.link.contact")} active={isActive("/contact")} mobile />

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
              <Link
                href="/login"
                className="border border-ink px-4 py-3 text-center text-sm font-semibold text-ink"
              >
                {t("navbar.button.login")}
              </Link>
              <Link
                href="/signup"
                className="bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {t("navbar.button.signUp")}
              </Link>
            </div>
            <select
              aria-label="Language"
              className="mb-2 mt-3 w-full border border-line bg-white px-3 py-3 text-sm text-ink"
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18nInstance.language}
            >
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  label,
  active,
  mobile = false,
}: {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <Link
        href={href}
        className={`block border-l-2 px-3 py-3 text-base font-medium ${
          active ? "border-primary text-ink" : "border-transparent text-muted"
        }`}
      >
        {label}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`flex items-center border-b-2 px-3 text-sm font-medium transition-colors ${
        active ? "border-primary text-ink" : "border-transparent text-muted hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
