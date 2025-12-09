"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function DataAnalysisPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-center">Data Analysis</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">AI-powered insights from every transaction.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Data Analysis is the intelligence layer on top of your Receipters Vault. Once your receipts are flowing in and securely stored, our analytics engine and AI Agent help you understand what's really happening in your business – in real time.
              This is a premium add-on that activates advanced analytics features and AI-driven dashboards for merchants and, where relevant, consumers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Interactive Dashboards:</strong> Visualize sales, margins, category performance, and customer trends across outlets, time periods, and channels.</li>
              <li><strong>AI Agent for Insights:</strong> Ask natural-language questions like "Which products have the highest margin this month?" or "Where are my discounts eroding profitability?" and get clear answers, charts, and explanations.</li>
              <li><strong>Segmentation and Behavior Analysis:</strong> See which customers buy what, when, and where – and identify cross-sell or loyalty opportunities.</li>
              <li><strong>Anomaly and Fraud Detection:</strong> Spot unusual patterns in pricing, returns, voids, or discounts that may indicate errors or fraud.</li>
              <li><strong>Reporting and Exports:</strong> Generate automated reports for management, investors, and regulators; export data to your BI tools or data warehouse if needed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Businesses</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Make informed decisions backed by real transaction data</li>
              <li>Optimize product assortments, pricing, and promotions</li>
              <li>Improve cash flow and margins through better visibility</li>
              <li>Reduce revenue leakage and shrinkage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Consumers (optional features)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Personal spending analytics across categories and merchants</li>
              <li>Budget tracking and alerts based on real purchase data</li>
              <li>Smarter recommendations and offers from participating merchants</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-700">
              Data-driven retailers, multi-branch chains, hospitality groups, universities and institutions, and any business serious about leveraging transaction data for growth and efficiency.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}