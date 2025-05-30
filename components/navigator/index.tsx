"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation('common');

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="relative h-10 w-8">
                <Image 
                  src="/img/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-6">
              <NavLink href="/" label={t('navbar.link.home')} active={isActive("/")} />
              <NavLink href="/about" label={t('navbar.link.about')} active={isActive("/about")} />
              <NavLink href="/product" label={t('navbar.link.product')} active={isActive("/product")} />
              <NavLink href="/contact" label={t('navbar.link.contact')} active={isActive("/contact")} />
              <NavLink href="/pricing" label={t('navbar.link.pricing')} active={isActive("/pricing")} />
              <Link href="/signup">
 <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
 {t('navbar.button.signUp')}
 </button>
              </Link>
              <Link href="/login">
 <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{t('navbar.button.login')}</button>
              </Link>

              {/* Language Switcher */}
 <select
 className="ml-4 px-2 py-1 border rounded-md text-sm text-gray-700"
 onChange={(e) => i18n.changeLanguage(e.target.value)}
 value={i18n.language}
 >
 <option value="en">English</option>
 <option value="sw">Swahili</option>
 <option value="fr">French</option>
 <option value="de">German</option>
 </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
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
        <div className="md:hidden">
          <div className="space-y-1 px-4 pt-2 pb-3">
            <NavLink href="/" label={t('navbar.link.home')} active={isActive("/")} mobile />
            <NavLink href="/about" label={t('navbar.link.about')} active={isActive("/about")} mobile />
            <NavLink href="/product" label={t('navbar.link.product')} active={isActive("/product")} mobile />
            <NavLink href="/contact" label={t('navbar.link.contact')} active={isActive("/contact")} mobile />
            <NavLink href="/pricing" label={t('navbar.link.pricing')} active={isActive("/pricing")} mobile />
            <Link href="/signup">
 <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-600 hover:bg-gray-100">
 {t('navbar.button.signUp')}
 </button>
            </Link>
            <Link href="/login">
 <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">{t('navbar.button.login')}</button>
            </Link>

            {/* Language Switcher */}
 <select
 className="mt-2 w-full px-3 py-2 border rounded-md text-base text-gray-700"
 onChange={(e) => i18n.changeLanguage(e.target.value)}
 value={i18n.language}
 >
 <option value="en">English</option>
 <option value="sw">Swahili</option>
 <option value="fr">French</option>
 <option value="de">German</option>
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
  return (
    <Link
      href={href}
      className={`relative ${
        mobile
          ? "block px-3 py-2 rounded-md text-base font-medium"
          : "text-sm font-medium"
      } ${active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
    >
      {label}
      {!mobile && active && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"></span>
      )}
    </Link>
  );
}
