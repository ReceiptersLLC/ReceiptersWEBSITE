"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
                  priority
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-6">
              <NavLink href="/" label="Home" active={isActive("/")} />
              <NavLink href="/about" label="About" active={isActive("/about")} />
              <NavLink href="/product" label="Product" active={isActive("/product")} />
              <NavLink href="/contact" label="Contact" active={isActive("/contact")} />
              <NavLink href="/pricing" label="Pricing" active={isActive("/pricing")} />
              <Link href="/signup">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign Up
                </button>
              </Link>
              <Link href="/login">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
              </Link>
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
            <NavLink href="/" label="Home" active={isActive("/")} mobile />
            <NavLink href="/about" label="About" active={isActive("/about")} mobile />
            <NavLink href="/product" label="Product" active={isActive("/product")} mobile />
            <NavLink href="/contact" label="Contact" active={isActive("/contact")} mobile />
            <NavLink href="/pricing" label="Pricing" active={isActive("/pricing")} mobile />
            <Link href="/signup">
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-600 hover:bg-gray-100">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">Login</button>
            </Link>
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
