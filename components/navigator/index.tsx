"use client"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/">
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

          {/* Left Side - Links */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-primary hover:text-blue-500 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-primary hover:text-blue-500 font-medium">
                About
              </Link>
              <Link href="#" className="text-primary hover:text-blue-500 font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-primary hover:text-blue-500 font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side - Logo */}


          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block text-primary hover:text-blue-500 font-medium">
              Home
            </a>
            <a href="#" className="block text-primary hover:text-blue-500 font-medium">
              About
            </a>
            <a href="#" className="block text-primary hover:text-blue-500 font-medium">
              Services
            </a>
            <a href="#" className="block text-primary hover:text-blue-500 font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
