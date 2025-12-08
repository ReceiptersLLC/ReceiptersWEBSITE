"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function ReceiptStoragePage() {
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
          <h1 className="text-4xl font-bold mb-4 text-center">Receipt Storage</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">A secure, searchable vault for all your receipts.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Receipt Storage turns Receipters into your single source of truth for receipts. All digital receipts, and any legacy paper receipts scanned via the app, are stored in a secure, centralized vault.
              Merchants and customers can quickly find what they need using flexible search tools – without digging through folders, files, or boxes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Centralized Receipt Vault:</strong> Store every receipt – digital or scanned – in one place.</li>
              <li><strong>Advanced Search & Filters:</strong> Find receipts by date, store, customer, SKU, amount, payment method, or tax reference.</li>
              <li><strong>Role-Based Access Control:</strong> Assign access levels to staff (e.g., finance, audit, branch managers) to ensure the right people see the right data.</li>
              <li><strong>Retention Policies & Audit Trails:</strong> Configure how long data is kept and track who accessed or exported what.</li>
              <li><strong>Multi-Tenant Design:</strong> Support multiple outlets, branches, merchants, and even white-label scenarios under one architecture.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Businesses</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Faster responses to customer queries and audits</li>
              <li>Stronger accountability and governance</li>
              <li>Simplified records management and retrieval</li>
              <li>A foundation for future analytics and AI add-ons</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Consumers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>One place to view and download receipts from multiple merchants</li>
              <li>Easier warranty claims, returns, and expense reimbursement</li>
              <li>Clear history of personal spending</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-700">
              Businesses that need clean, long-term records; institutions preparing for stricter digital record-keeping and tax transparency; consumers who want their spending organized.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}