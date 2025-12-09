"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function DigitalReceiptIssuancePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors">
          ← Go Back
        </button>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Digital Receipting</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">Goodbye paper. Hello smart, compliant receipts.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Digital Receipting is your first step into the Receipters ecosystem. Replace paper slips with smart, secure digital receipts that are instantly delivered to your customers and stored in a structured format for your business.
              Receipts can be triggered from POS, SoftPOS, e-commerce platforms, or the Receipters app – all feeding into a single, standardized system.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Instant Digital Issuance:</strong> Generate and send receipts via SMS, email, app, or QR code at checkout.</li>
              <li><strong>Structured Data by Default:</strong> Every receipt is automatically converted into structured JSON: merchant, outlet, timestamp, line items, taxes, totals, and payment method.</li>
              <li><strong>Tax and Compliance Ready:</strong> Capture the right fields for your jurisdiction to simplify VAT/tax reporting and audits.</li>
              <li><strong>Multi-Channel Support:</strong> Works with physical stores, online shops, delivery apps, and more.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Businesses</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Reduce paper and printer costs</li>
              <li>Decrease receipt loss and disputes</li>
              <li>Improve customer experience at checkout</li>
              <li>Create a clean, consistent data trail for finance and compliance teams</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-700">
              Retailers, supermarkets, restaurants, hotels, pharmacies, service providers, and any business issuing high volumes of receipts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}