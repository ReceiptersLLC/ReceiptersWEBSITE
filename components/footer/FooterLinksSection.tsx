import Link from "next/link";

interface FooterLinksSectionProps {
  title: string,
  data: {
    id: number
    name: string
    url: string
  }[]
}

export default function FooterLinksSection({
                                             title,
                                             data
                                           }: FooterLinksSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="h5 mb-3">{title}</div>
      {data.map((item, i) => (
        <Link
          key={`footer-${item.name}-${i}-${item.id}`}
          href={item.url}
          className="text-sm hover:text-primary py-2 font-medium">
          {item.name}
        </Link>
      ))}
    </div>
  )

}
