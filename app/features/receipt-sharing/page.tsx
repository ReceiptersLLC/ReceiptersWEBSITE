"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function ReceiptSharingPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-center">Receipt Sharing</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">Share receipts securely for returns, reimbursements, and collaboration.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Receipt Sharing enables seamless collaboration by allowing users to securely share digital receipts with others. Whether it's for expense reimbursement, warranty claims, group purchases, or business record-keeping, our sharing features ensure that the right people have access to the right receipts at the right time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Secure Link Sharing:</strong> Generate secure, time-limited links to share receipts without exposing personal information.</li>
              <li><strong>Group Sharing:</strong> Share receipts with multiple people simultaneously for expense splitting and group purchases.</li>
              <li><strong>Permission Controls:</strong> Set view-only or download permissions based on the recipient's needs.</li>
              <li><strong>Integration Ready:</strong> Connect with accounting software, expense management tools, and business applications.</li>
              <li><strong>Audit Trail:</strong> Track who has accessed shared receipts and when, maintaining security and accountability.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Expense Reimbursement:</strong> Share receipts with employers or accountants for quick reimbursement processing.</li>
              <li><strong>Warranty Claims:</strong> Provide proof of purchase to manufacturers for warranty service.</li>
              <li><strong>Business Travel:</strong> Share expense receipts with finance teams for approval and processing.</li>
              <li><strong>Group Purchases:</strong> Split expenses among friends or colleagues with transparent receipt sharing.</li>
              <li><strong>Tax Preparation:</strong> Share relevant receipts with tax professionals securely.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Eliminate paper receipts and physical mailing</li>
              <li>Speed up reimbursement and approval processes</li>
              <li>Maintain security and privacy with controlled access</li>
              <li>Improve collaboration for shared expenses</li>
              <li>Keep detailed records of all shared transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
            <p className="text-gray-700">
              Businesses with expense reimbursement processes, frequent travelers, shared household expenses, warranty-dependent products, and anyone who needs to share receipt information securely with others.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}