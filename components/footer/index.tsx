"use client"
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import TextInput from "@/components/TextInput";
import {useState} from "react";
import FooterLinksSection from "@/components/footer/FooterLinksSection";

export default function Footer() {
  const [email, setEmail] = useState('')
  return (
    <div className="section bg-[#151516] text-white">
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-b-white pb-12">
          <div className="grid gap-6 lg:col-span-2">
            <Link
              href="/">
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
            <div className="">
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
                <Button
                  onClick={() => console.log("")}
                  className="!rounded-full">
                  Join now
                </Button>
              </div>
              <div className="text-xs">
                By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our
                company.
              </div>
            </div>
          </div>
          {/*  right side*/}
          <div className="w-full grid grid-cols-2 gap-x-4 sm:gap-x-8">
            <FooterLinksSection
              title="Product"
              data={productLinks}/>
            <FooterLinksSection
              title="Social Media"
              data={socialMediaLinks}/>

          </div>

        </div>
        <div className="w-full flex flex-row items-center space-x-5 mt-12 mb-5">
          {legalLinks.map((link, index) => (
            <Link
              key={`legal-link-${index}`}
              href={link.url}
              className="text-sm hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="text-center text-base">
          © {new Date().getFullYear()} Receipters LLC. All Rights Reserved
        </div>
      </div>
    </div>
  )
}


const legalLinks = [
  {
    id: 1,
    name: "Privacy Policy",
    url: "privacy-policy",
  },
  {
    id: 2,
    name: "Terms of Service",
    url: "terms-and-conditions",
  }
]


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
  }
]


const socialMediaLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "/",
  },
  {
    id: 3,
    name: "Instagram",
    url: "/",
  },
  {
    id: 3,
    name: "X",
    url: "/",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "/",
  },

 {
    id: 4,
    name: "TikTok",
 url: "/",
  },
  {
    id: 5,
    name: "YouTube",
    url: "/",
  },
]
