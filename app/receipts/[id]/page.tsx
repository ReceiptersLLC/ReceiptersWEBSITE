"use client";
import React, {useState} from "react";
import {useParams} from "next/navigation"
import {useGetReceiptById} from "@/lib/queries/receipts";
import {format} from "date-fns";
import {QRCodeSVG} from "qrcode.react";
import type {ReceiptPayment} from "@/lib/api/receipts";

const CURRENCY_LABEL = (c: string) => (c ? `Price (${c})` : "Price");

const PAYMENT_METHOD_LABEL: Record<string, string> = {
  CASH: "Cash",
  CARD: "Card",
  MOBILE_MONEY: "Mobile Money",
  OTHER: "Other",
};

function formatPaymentSecondary(p: ReceiptPayment): string | null {
  const method = (p.methodType || "").toUpperCase();
  // For cash transactions always reflect change when present (0 or more)
  if (method === "CASH" && p.change != null) {
    return `Change: ${p.currency} ${p.change.toFixed(2)}`;
  }
  if (method === "CARD") {
    const id = p.displayLabel?.trim() || p.sourceIdentifier?.trim();
    return id || null;
  }
  if (method === "MOBILE_MONEY") {
    return p.displayLabel?.trim() || p.sourceIdentifier?.trim() || null;
  }
  if (method === "OTHER") {
    return p.displayLabel?.trim() || p.sourceIdentifier?.trim() || null;
  }
  return null;
}

export default function Receipt() {
  const params = useParams()

  const receiptId = (params?.id as string) ?? null

  if (receiptId === null) {
    throw new Error("Receipt id is missing");
  }

  const {data: receipt, isLoading, error} = useGetReceiptById(
    receiptId,
    !!receiptId
  );

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (value: string, field: string) => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // ignore
    }
  };

  // Match app: tel link with cleaned digits and + prefix when non-empty
  const telHref = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    return `tel:${cleaned ? `+${cleaned}` : phone}`;
  };

  const merchantName =
    (receipt?.store?.name != null && receipt?.store?.name !== ""
      ? receipt?.store?.name
      : receipt?.clientName) ?? "--";
  const currency = receipt?.currency ?? "";

  // Match app: prefer payments array; only show paymentModes when no payments array
  const hasPayments =
    receipt?.payments != null && receipt.payments.length > 0;

  const qrCodeValue = receipt?.taxInvoiceDetails?.qrCode;
  const hasTaxInvoiceDetails =
    receipt?.taxInvoiceDetails &&
    (receipt.taxInvoiceDetails.cus ||
      receipt.taxInvoiceDetails.cuin ||
      receipt.buyerPin);

  // Match app: show footer when merchant name or any store/contact field (nested or top-level) is present
  const hasStoreFooter =
    merchantName !== "--" ||
    receipt?.store?.vatNo != null ||
    receipt?.store?.pinNo != null ||
    receipt?.vatNumber != null ||
    receipt?.pinNumber != null ||
    receipt?.branch?.email != null ||
    receipt?.email != null ||
    receipt?.branch?.phoneNumber != null ||
    receipt?.phone != null ||
    receipt?.branch?.address != null ||
    receipt?.address != null;

  // Resolve display/link values with store/branch first, then top-level fallback (match app)
  const footerVat = receipt?.store?.vatNo ?? receipt?.vatNumber;
  const footerPin = receipt?.store?.pinNo ?? receipt?.pinNumber;
  const footerEmail = receipt?.branch?.email ?? receipt?.email;
  const footerPhone = receipt?.branch?.phoneNumber ?? receipt?.phone;
  const footerAddress = receipt?.branch?.address ?? receipt?.address;
  return (
    <div>
      {(isLoading || (receiptId && receipt?.id !== receiptId)) && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-500">
          Failed to load receipt details. Please try again.
        </div>
      )}

      {/* Only render receipt content when loaded receipt matches selected id (avoids showing stale receipt) */}
      {receipt && !isLoading && receipt.id === receiptId && (
        <div key={receiptId ?? undefined} className="space-y-5 pb-6">
          {/* Voided badge - prominent at top */}
          {receipt.voided === true && (
            <div className="flex flex-col items-center mb-5">
              <div className="bg-[#a60f0f] px-5 py-2 rounded-lg border-2 border-[#8c0a08]">
                <span className="text-white text-sm font-extrabold tracking-wider">
                  VOIDED
                </span>
              </div>
              {receipt.voidedReason != null && receipt.voidedReason !== "" && (
                <p className="mt-2 text-sm text-gray-500 text-center italic">
                  {receipt.voidedReason}
                </p>
              )}
            </div>
          )}

          {/* Merchant name */}
          <h2 className="text-xl font-bold text-gray-900">{merchantName}</h2>

          {/* Category tag */}
          {receipt.category?.name != null && receipt.category.name !== "" && (
            <span
              className="inline-block px-3 py-1.5 rounded-2xl text-xs font-semibold text-gray-900 mb-5"
              style={{
                backgroundColor: receipt.category.color || "#e8f5e9",
              }}
            >
              {receipt.category.name}
            </span>
          )}

          {/* Receipt details */}
          <div>
            <h6 className="font-bold text-base text-gray-900 mb-2.5">
              Receipt details
            </h6>
            <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2.5">
              {receipt.receiptNo != null && receipt.receiptNo !== "" && (
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm text-gray-500">Receipt no.</span>
                  <span className="flex items-center gap-2 flex-wrap justify-end">
                    <span className="text-sm font-medium text-gray-900">
                      {receipt.receiptNo}
                    </span>
                    {receipt.voided === true && (
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-extrabold tracking-wider bg-[#a60f0f] text-white border border-[#8c0a08]">
                        VOID
                      </span>
                    )}
                  </span>
                </div>
              )}
              {receipt.date && (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Date</span>
                    <span className="text-sm font-medium text-gray-900">
                      {format(new Date(receipt.date), "dd/MM/yyyy")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Time</span>
                    <span className="text-sm font-medium text-gray-900">
                      {format(new Date(receipt.date), "hh:mm:ss a")}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Items purchased */}
          {receipt.items != null && receipt.items.length > 0 && (
            <div>
              <h6 className="font-bold text-base text-gray-900 mb-2.5">
                Items purchased
              </h6>
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div
                  className="grid grid-cols-[2fr_1fr_0.6fr_1fr] gap-2 bg-gray-50 px-3 py-3 text-xs font-semibold text-gray-500">
                  <span>Description</span>
                  <span className="text-right">{CURRENCY_LABEL(currency)}</span>
                  <span className="text-center">Qty</span>
                  <span className="text-right">Total Price</span>
                </div>
                {receipt.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[2fr_1fr_0.6fr_1fr] gap-2 px-3 py-3 border-t border-gray-100 bg-white text-sm text-gray-900"
                  >
                    <span className="line-clamp-2">{item.name}</span>
                    <span className="text-right">
                      {item.unitPrice?.toFixed(2) ?? "0"}
                    </span>
                    <span className="text-center">{item.quantity}</span>
                    <span className="text-right">
                      {item.totalPrice?.toFixed(2) ?? "0"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary of charges */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            {receipt.subTotal != null && receipt.subTotal > 0 && (
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Sub total</span>
                <span className="text-sm text-gray-900">
                  {receipt.subTotal.toFixed(2)}
                </span>
              </div>
            )}
            {receipt.taxInfo != null &&
              receipt.taxInfo.length > 0 &&
              receipt.taxInfo.map((tax, index) => (
                <div
                  key={tax.id ?? index}
                  className="flex justify-between mb-2"
                >
                  <span className="text-sm text-gray-500">{tax.taxType}</span>
                  <span className="text-sm text-gray-900">
                    {tax.taxAmount?.toFixed(2) ?? "0.00"}
                  </span>
                </div>
              ))}
            <div className="flex justify-between items-center mt-2 pt-3 border-t border-gray-200">
              <span className="text-sm font-bold text-gray-900">
                Total amount
              </span>
              <span className="text-base font-bold text-gray-900">
                {currency} {receipt.amount?.toFixed(2) ?? "0.00"}
              </span>
            </div>
          </div>

          {/* Payment type - payments array */}
          {hasPayments && (
            <div>
              <h6 className="font-bold text-base text-gray-900 mb-2.5">
                Payment type
              </h6>
              <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-3">
                {receipt.payments!.map((p) => {
                  const methodLabel =
                    PAYMENT_METHOD_LABEL[p.methodType?.toUpperCase()] ??
                    p.methodType ??
                    "Payment";
                  const amountStr = `${p.currency} ${(p.amount ?? 0).toFixed(2)}`;
                  const secondary = formatPaymentSecondary(p);
                  return (
                    <div
                      key={p.id}
                      className="flex justify-between items-start"
                    >
                      <div className="flex-1">
                        <span className="text-sm text-gray-500">
                          {methodLabel}
                        </span>
                        {secondary != null && secondary !== "" && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {secondary}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {amountStr}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Fallback: paymentModes if no payments array */}
          {!hasPayments &&
            receipt.paymentModes != null &&
            receipt.paymentModes.length > 0 && (
              <div>
                <h6 className="font-bold text-base text-gray-900 mb-2.5">
                  Payment type
                </h6>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Method</span>
                    <span className="text-sm font-medium text-gray-900">
                      {receipt.paymentModes.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* Tax invoice details */}
          {hasTaxInvoiceDetails && (
            <div>
              <h6 className="font-bold text-base text-gray-900 mb-2.5">
                Tax Invoice Details
              </h6>
              <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2.5">
                {receipt.taxInvoiceDetails?.cuin != null &&
                  receipt.taxInvoiceDetails.cuin !== "" && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">CUIN</span>
                      <span className="text-sm font-medium text-gray-900">
                        {receipt.taxInvoiceDetails.cuin}
                      </span>
                    </div>
                  )}
                {receipt.taxInvoiceDetails?.cus != null &&
                  receipt.taxInvoiceDetails.cus !== "" && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">CUS</span>
                      <span className="text-sm font-medium text-gray-900">
                        {receipt.taxInvoiceDetails.cus}
                      </span>
                    </div>
                  )}
                {receipt.buyerPin != null && receipt.buyerPin !== "" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Buyer PIN</span>
                    <span className="text-sm font-medium text-gray-900">
                      {receipt.buyerPin}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* QR code */}
          {qrCodeValue != null && qrCodeValue !== "" && (
            <div
              className="flex flex-col items-center justify-center py-6 px-4 bg-white rounded-xl border border-gray-200">
              <QRCodeSVG
                value={qrCodeValue}
                size={160}
                level="M"
                includeMargin={false}
              />
            </div>
          )}

          {/* Store footer: name, VAT, PIN, email, phone, address (match app) */}
          {hasStoreFooter && (
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <p className="text-lg font-bold text-gray-900 mb-4">
                {merchantName}
              </p>

              {footerVat != null && footerVat !== "" && (
                <div className="flex justify-between items-center w-full mb-3">
                  <span className="text-sm text-gray-500">VAT</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-900">{footerVat}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(footerVat, "vat")}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                    >
                      {copiedField === "vat" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              )}

              {footerPin != null && footerPin !== "" && (
                <div className="flex justify-between items-center w-full mb-3">
                  <span className="text-sm text-gray-500">PIN</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-900">{footerPin}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(footerPin, "pin")}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                    >
                      {copiedField === "pin" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              )}

              {footerEmail != null && footerEmail !== "" && (
                <div className="flex justify-between items-center w-full mb-3">
                  <span className="text-sm text-gray-500">Email</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${footerEmail}`}
                      className="text-sm text-primary underline"
                    >
                      {footerEmail}
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(footerEmail, "email")
                      }
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                    >
                      {copiedField === "email" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              )}

              {footerPhone != null && footerPhone !== "" && (
                <div className="flex justify-between items-center w-full mb-3">
                  <span className="text-sm text-gray-500">Phone</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={telHref(footerPhone)}
                      className="text-sm text-primary underline"
                    >
                      {footerPhone}
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(footerPhone, "phone")
                      }
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                    >
                      {copiedField === "phone" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              )}

              {footerAddress != null && footerAddress !== "" && (
                <p className="text-sm text-gray-900 text-center mt-2 w-full">
                  {footerAddress}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
