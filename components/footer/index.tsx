"use client";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import FooterLinksSection from "@/components/footer/FooterLinksSection";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="section bg-[#151516] text-white">
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-b-white pb-12">
          {/* Left Section */}
          <div className="grid gap-6 lg:col-span-2">
            <Link href="/">
              <div className="relative w-[138px] h-[29.117px]">
                <Image
                  src="/img/logo_full_w.svg"
                  alt="Logo"
                  priority
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            <div>
              Join our newsletter to stay up to date on features and releases.
            </div>
            <div>
              <div className="flex mb-3">
                <TextInput
                  required
                  type="text"
                  name="color"
                  placeholder="Enter your email"
                  value={email}
                  onTextChange={setEmail}
                  className="flex-1 mr-6"
                />
                <Button onClick={() => console.log("")} className="!rounded-full">
                  Join now
                </Button>
              </div>
              <div className="text-xs">
                By subscribing you agree to our Privacy Policy and provide consent to receive updates from our
                company.
              </div>
              <div className="flex flex-col items-start">
              <div className="h6 mt-3 mb-3">Connect With Us</div>
              <div className="flex flex-row gap-4">
                <Link href="https://www.facebook.com/profile.php?id=61576378047776" target="_blank"><Facebook className="hover:text-blue-500 mx-auto" /></Link>
                <Link href="https://www.instagram.com/receipters_llc" target="_blank"><Instagram className="hover:text-pink-500 mx-auto" /></Link>
                <Link href="https://www.x.com/receipters_llc" target="_blank"><FaXTwitter className="w-5 h-5 hover:text-blue-400 mx-auto" /></Link>
                <Link href="https://www.linkedin.com/in/receipters-llc" target="_blank"><Linkedin className="hover:text-blue-600 mx-auto" /></Link>
                <Link href="https://www.tiktok.com/@receipters_llc" target="_blank"><FaTiktok className="w-5 h-5 hover:text-gray-300 mx-auto" /></Link>
                <Link href="https://www.youtube.com/@Receipters_llc" target="_blank"><Youtube className="hover:text-red-500 mx-auto" /></Link>
              </div>
            </div>
              
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full grid grid-cols-2 gap-x-4 sm:gap-x-8">
            <FooterLinksSection title="Quick Links" data={productLinks} />
            <div className="text-sm text-gray-300 mt-4">
                <strong>Our Office:</strong><br />
                355 Ridgewood Ave, Suite 1<br />
                Newark, NJ 07112
              </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="w-full flex flex-row flex-wrap gap-4 mt-12 mb-5">
          {legalLinks.map((link, index) => (
            <Link
              key={`legal-link-${index}`}
              href={link.url}
              className="text-sm hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="text-center text-base">
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
    name: "Pricing",
    url: "/pricing",
  },
];
