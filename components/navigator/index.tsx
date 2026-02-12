"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { useTranslation } from "react-i18next";

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBlogsDropdownOpen(false);
      }
    };

    if (blogsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [blogsDropdownOpen]);

  const handleLanguageChange = async (newLanguage: string) => {
    try {
      console.log('Switching language from', i18nInstance.language, 'to', newLanguage);
      await i18nInstance.changeLanguage(newLanguage);
      console.log('Language switched successfully to', i18nInstance.language);
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-8">
              <Image src="/img/logo.svg" alt="Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <NavLink href="/" label={t('navbar.link.home')} active={isActive("/")} />
            <NavLink href="/about" label={t('navbar.link.about')} active={isActive("/about")} />
            <NavLink href="/product" label={t('navbar.link.product')} active={isActive("/product")} />
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBlogsDropdownOpen(!blogsDropdownOpen)}
                className={`flex items-center space-x-1 text-sm font-medium px-3 py-1 ${
                  isActive("/blogs") || pathname.startsWith("/blogs")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span>{t('navbar.link.blogs')}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${blogsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {blogsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <Link
                    href="/blogs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setBlogsDropdownOpen(false)}
                  >
                    {t('navbar.link.blogs')}
                  </Link>
                  <Link
                    href="/blogs/announcement"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setBlogsDropdownOpen(false)}
                  >
                    {t('navbar.link.announcement')}
                  </Link>
                </div>
              )}
              {(isActive("/blogs") || pathname.startsWith("/blogs")) && !blogsDropdownOpen && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"></span>
              )}
            </div>
            <NavLink href="/careers" label={t('navbar.link.careers')} active={isActive("/careers")} />
            <NavLink href="/contact" label={t('navbar.link.contact')} active={isActive("/contact")} />
          </div>

          {/* Right Buttons and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {t('navbar.button.signUp')}
              </button>
            </Link>
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {t('navbar.button.login')}
              </button>
            </Link>
            <select
              className="px-3 py-1 text-sm border rounded-md text-gray-700"
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18nInstance.language}
            >
              <option value="en">EN</option>
              <option value="sw">SW</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Slide-down Menu */}
          <div className="absolute top-16 left-0 w-full z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg py-4 px-6 space-y-2 animate-slide-down transition-all duration-300 ease-out">
              <NavLink href="/" label={t("navbar.link.home")} active={isActive("/")} mobile />
              <NavLink href="/about" label={t("navbar.link.about")} active={isActive("/about")} mobile />
              <NavLink href="/product" label={t("navbar.link.product")} active={isActive("/product")} mobile />
              <div className="space-y-1">
                <NavLink href="/blogs" label={t("navbar.link.blogs")} active={isActive("/blogs")} mobile />
                <Link
                  href="/blogs/announcement"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("navbar.link.announcement")}
                </Link>
              </div>
              <NavLink href="/careers" label={t("navbar.link.careers")} active={isActive("/careers")} mobile />
              <NavLink href="/contact" label={t("navbar.link.contact")} active={isActive("/contact")} mobile />

              <div className="pt-2 border-t border-gray-200">
                <Link href="/signup">
                  <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition">
                    {t("navbar.button.signUp")}
                  </button>
                </Link>
                <Link href="/login">
                  <button className="w-full mt-2 text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 transition">
                    {t("navbar.button.login")}
                  </button>
                </Link>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <select
                  className="w-full px-3 py-2 mt-2 border rounded-md text-base text-gray-700 focus:outline-none"
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  value={i18nInstance.language}
                >
                  <option value="en">English</option>
                  <option value="sw">Swahili</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>
        </>
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
  return (
    <Link
      href={href}
      className={`relative block ${mobile
        ? "px-3 py-2 rounded-md text-base font-medium"
        : "text-sm font-medium px-3 py-1"
        } ${active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
    >
      {label}
      {!mobile && active && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"></span>
      )}
    </Link>
  );
}
