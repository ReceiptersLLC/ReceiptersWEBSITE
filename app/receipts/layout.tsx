import {QueryProvider} from "@/lib/providers/QueryProvider";

interface ReceiptLayoutProps {
  children: React.ReactNode;
}

export default function ReceiptLayout({children}: ReceiptLayoutProps) {
  return (
    <div className="pt-12 pb-16">
      <div className="mx-auto max-w-xl">
        <QueryProvider>
          {children}
        </QueryProvider>
      </div>
    </div>
  )
}
