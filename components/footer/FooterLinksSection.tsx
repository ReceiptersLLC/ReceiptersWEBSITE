import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Disc3, // used as a TikTok placeholder
} from "lucide-react";

interface FooterLinksSectionProps {
  title: string;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
}

const iconMap: Record<string, React.ReactElement> = {
  Facebook: <Facebook className="hover:text-blue-500" />,
  Instagram: <Instagram className="hover:text-pink-500" />,
  X: <Twitter className="hover:text-blue-400" />,
  LinkedIn: <Linkedin className="hover:text-blue-600" />,
  TikTok: <Disc3 className="hover:text-gray-300" />,
  YouTube: <Youtube className="hover:text-red-500" />,
};

export default function FooterLinksSection({
  title,
  data,
}: FooterLinksSectionProps) {
  const isSocial = title.toLowerCase().includes("social") || title.toLowerCase().includes("connect");

  return (
    <div className="flex flex-col">
      <div className="mb-3 text-[15px] font-semibold">{title}</div>
      <div className={`flex ${isSocial ? "flex-col gap-4" : "flex-col"}`}>
        {data.map((item, i) => {
          const isExternal = item.url.startsWith("http");
          const Icon = iconMap[item.name] || null;

          if (isSocial && Icon) {
            return (
              <Link
                key={`footer-icon-${item.name}-${i}-${item.id}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon}
              </Link>
            );
          }

          return isExternal ? (
            <a
              key={`footer-${item.name}-${i}-${item.id}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 text-[15px] text-white/78 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={`footer-${item.name}-${i}-${item.id}`}
              href={item.url}
              className="py-1.5 text-[15px] text-white/78 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
