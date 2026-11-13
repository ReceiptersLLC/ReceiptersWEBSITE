"use client";

import { QRCodeSVG } from "qrcode.react";
import type { CSSProperties } from "react";

// An illustrative receipt and the record Receipters stores for it. The field
// names match the Receipt type in lib/api/receipts.ts.
const items = [
  { name: "Maize flour 2kg", qty: 2, unit: "189.00", total: "378.00" },
  { name: "Fresh milk 500ml", qty: 4, unit: "65.00", total: "260.00" },
  { name: "Cooking oil 1L", qty: 1, unit: "342.00", total: "342.00" },
];

type Token = { k?: string; s?: string; n?: string; p?: string };

const record: { indent: number; tokens: Token[] }[] = [
  { indent: 0, tokens: [{ p: "{" }] },
  { indent: 1, tokens: [{ k: "receiptNo" }, { s: "004218" }, { p: "," }] },
  { indent: 1, tokens: [{ k: "date" }, { s: "2026-11-13T09:41:00+03:00" }, { p: "," }] },
  { indent: 1, tokens: [{ k: "currency" }, { s: "KES" }, { p: "," }] },
  { indent: 1, tokens: [{ k: "store" }, { p: "{ " }, { k: "pinNo" }, { s: "P000000000X" }, { p: " }," }] },
  { indent: 1, tokens: [{ k: "items" }, { p: "[" }] },
  { indent: 2, tokens: [{ p: "{ " }, { k: "name" }, { s: "Maize flour 2kg" }, { p: "," }] },
  { indent: 2, tokens: [{ p: "  " }, { k: "quantity" }, { n: "2" }, { p: ", " }, { k: "totalPrice" }, { n: "378.00" }, { p: " }," }] },
  { indent: 2, tokens: [{ p: "… 2 more" }] },
  { indent: 1, tokens: [{ p: "]," }] },
  { indent: 1, tokens: [{ k: "taxInfo" }, { p: "[{ " }, { k: "taxType" }, { s: "VAT" }, { p: "," }] },
  { indent: 2, tokens: [{ k: "taxRate" }, { n: "16" }, { p: ", " }, { k: "taxAmount" }, { n: "135.17" }, { p: " }]," }] },
  { indent: 1, tokens: [{ k: "payments" }, { p: "[{" }] },
  { indent: 2, tokens: [{ k: "methodType" }, { s: "MOBILE_MONEY" }, { p: " }]," }] },
  { indent: 1, tokens: [{ k: "amount" }, { n: "980.00" }] },
  { indent: 0, tokens: [{ p: "}" }] },
];

function Row({ left, right, strong = false }: { left: string; right: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-3 ${strong ? "font-medium text-ink" : ""}`}>
      <span>{left}</span>
      <span className="tabular-nums">{right}</span>
    </div>
  );
}

export default function ReceiptArtifact({ caption }: { caption: string }) {
  return (
    <figure className="m-0">
      <div className="grid items-start gap-0 sm:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)]">
        {/* The receipt as the customer sees it */}
        <div className="receipt-paper relative z-10 bg-white px-5 pb-8 pt-6 font-mono text-[11.5px] leading-[1.7] text-muted shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] sm:mt-6">
          <div className="text-center text-ink">
            <div className="text-[13px] font-medium tracking-wide">SAMPLE SUPERMARKET LTD</div>
            <div>Westlands Branch, Nairobi</div>
            <div>PIN P000000000X</div>
          </div>
          <div className="my-3 border-t border-dashed border-muted/50" />
          <Row left="13/11/2026 09:41" right="No. 004218" />
          <div className="my-3 border-t border-dashed border-muted/50" />
          {items.map((item) => (
            <div key={item.name} className="mb-1.5">
              <div className="text-ink">{item.name}</div>
              <Row left={`${item.qty} x ${item.unit}`} right={item.total} />
            </div>
          ))}
          <div className="my-3 border-t border-dashed border-muted/50" />
          <Row left="Subtotal" right="844.83" />
          <Row left="VAT 16%" right="135.17" />
          <Row left="TOTAL KES" right="980.00" strong />
          <Row left="Mobile money" right="980.00" />
          <div className="my-3 border-t border-dashed border-muted/50" />
          <div className="flex items-end justify-between gap-3">
            <div>
              <div>Digital receipt</div>
              <div className="flex items-center gap-1.5 text-signal">
                <span className="inline-block size-1.5 bg-signal" aria-hidden="true" />
                Delivered
              </div>
            </div>
            <QRCodeSVG value="https://www.receipters.com" size={52} fgColor="#0E1433" bgColor="#FFFFFF" />
          </div>
        </div>

        {/* The same receipt as stored */}
        <div className="border border-white/15 bg-inkDeep sm:-ml-3 sm:pl-3">
          <div className="flex items-center justify-between border-b border-white/15 px-5 py-2.5 font-mono text-[11px] text-white/55">
            <span>GET /receipts/004218</span>
            <span className="text-[#7BE0B5]">200</span>
          </div>
          <pre className="m-0 overflow-x-auto px-5 py-4 font-mono text-[11.5px] leading-[1.75] text-white/60">
            {record.map((line, i) => (
              <div
                key={i}
                className="record-line whitespace-pre"
                style={{ "--i": i, paddingLeft: `${line.indent * 1.1}rem` } as CSSProperties}
              >
                {line.tokens.map((tok, j) => {
                  if (tok.k) return <span key={j}>&quot;{tok.k}&quot;: </span>;
                  if (tok.s) return <span key={j} className="text-[#B4BCFF]">&quot;{tok.s}&quot;</span>;
                  if (tok.n) return <span key={j} className="text-[#7BE0B5]">{tok.n}</span>;
                  return <span key={j} className="text-white/40">{tok.p}</span>;
                })}
              </div>
            ))}
          </pre>
        </div>
      </div>
      <figcaption className="mt-4 text-xs text-white/45">{caption}</figcaption>
    </figure>
  );
}
