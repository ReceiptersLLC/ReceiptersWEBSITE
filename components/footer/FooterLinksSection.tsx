import Link from "next/link";

interface FooterLinksSectionProps {
  title: string;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
}

export default function FooterLinksSection({
  title,
  data,
}: FooterLinksSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="h5 mb-3">{title}</div>
      {data.map((item, i) => {
        const isExternal = item.url.startsWith("http");
        return isExternal ? (
          <a
            key={`footer-${item.name}-${i}-${item.id}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary py-2 font-medium"
          >
            {item.name}
          </a>
        ) : (
          <Link
            key={`footer-${item.name}-${i}-${item.id}`}
            href={item.url}
            className="text-sm hover:text-primary py-2 font-medium"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
