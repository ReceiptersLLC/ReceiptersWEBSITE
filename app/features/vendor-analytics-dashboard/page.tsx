"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function VendorAnalyticsDashboardPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-center">Vendor Analytics Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">Real-time insights into receipt patterns and business performance.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Vendor Analytics Dashboard provides merchants with comprehensive visibility into their receipt ecosystem. Track transaction volumes, monitor customer behavior patterns, and gain actionable insights to optimize your business operations. This dashboard transforms raw receipt data into strategic business intelligence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Analytics Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Transaction Volume Tracking:</strong> Monitor daily, weekly, and monthly receipt volumes across all locations and channels.</li>
              <li><strong>Revenue Analytics:</strong> Track total revenue, average transaction values, and payment method preferences.</li>
              <li><strong>Customer Behavior Insights:</strong> Understand peak shopping times, popular products, and customer spending patterns.</li>
              <li><strong>Performance Metrics:</strong> Monitor conversion rates, receipt completion rates, and digital adoption metrics.</li>
              <li><strong>Comparative Analysis:</strong> Compare performance across different time periods, locations, or product categories.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits for Vendors</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Data-driven decision making with real-time business insights</li>
              <li>Identify trends and opportunities for revenue optimization</li>
              <li>Monitor operational efficiency and customer satisfaction</li>
              <li>Track digital transformation progress and ROI</li>
              <li>Generate reports for management and stakeholders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-700">
              Multi-location retailers, restaurant chains, hospitality businesses, and any vendor seeking data-driven insights into their operations and customer behavior.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}