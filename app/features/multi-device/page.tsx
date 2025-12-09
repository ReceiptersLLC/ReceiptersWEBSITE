"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa"; // eslint-disable-line @typescript-eslint/no-unused-vars


export default function MultiDevicePage() {
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
          <h1 className="text-4xl font-bold mb-4 text-center">Receipters App</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">Receipts in your pocket – for merchants and consumers.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Receipters App is the front door to the Receipters Vault. It gives both merchants and consumers a simple, mobile-first way to capture, view, and manage receipts in real time.
              For merchants, the app can be used to capture high-resolution images of receipts from legacy tills, issue digital receipts where POS integration is still in progress, and quickly look up past transactions.
              For consumers, the app becomes a personal receipt wallet – a single place to find every receipt from participating merchants, track spending, and access warranties or expense records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features (Merchant Mode)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Receipt Image Capture:</strong> Snap high-resolution photos of long or short receipts; our engine stitches and reads them into structured JSON for storage.</li>
              <li><strong>Quick Digital Issuance:</strong> Send digital receipts via SMS, email, or QR when your POS or SoftPOS is not yet fully integrated.</li>
              <li><strong>Instant Lookup:</strong> Search for receipts by date, customer, amount, or SKU when handling queries, returns, or disputes – right from your phone or tablet.</li>
              <li><strong>Branch and Role Support:</strong> Log in as a Merchant User with the correct outlet and role permissions, aligned with your organization&apos;s access rules.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features (Consumer Mode)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Personal Receipt Wallet:</strong> Automatically collect digital receipts from participating merchants and store them in the cloud.</li>
              <li><strong>Smart Search and Filters:</strong> Find receipts by store, category, date, or amount – ideal for returns, claims, reimbursements, and tax filings.</li>
              <li><strong>Spending Snapshots:</strong> Get a simple overview of how much you&apos;ve spent and where (full analytics unlocks with the Data Analysis product where enabled).</li>
              <li><strong>Secure Sharing:</strong> Share receipts with employers, insurers, or accountants via secure links or exports instead of forwarding screenshots.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Businesses</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Faster rollout in environments where POS/SoftPOS integrations take time</li>
              <li>A direct digital channel to customers post-transaction</li>
              <li>Reduced friction when resolving customer queries and returns</li>
              <li>More complete data capture from mixed or legacy environments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Consumers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No more lost receipts</li>
              <li>Easy proof of purchase for returns and warranties</li>
              <li>Clear view of personal spending in one app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-700">
              Merchants at any stage of digital transformation, and consumers who want a clean, organized view of their financial life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}