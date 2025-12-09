"use client";

import { useTranslation } from "react-i18next";
import { FaBolt, FaLock, FaLeaf } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Define the data for each feature card
const features = [
  {
    icon: <FaBolt className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.captureReceipts.header",
    descriptionKey: "landing.features.data.captureReceipts.description",
    slug: "instant-delivery",
  },
  {
    icon: <FaLock className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.trackAndAnalyze.header",
    descriptionKey: "landing.features.data.trackAndAnalyze.description",
    slug: "secure-storage",
  },
  {
    icon: <FaLeaf className="text-primary text-3xl mb-4" />,
    titleKey: "landing.features.data.generateReports.header",
    descriptionKey: "landing.features.data.generateReports.description",
    slug: "sustainability",
  },
];

export default function FeatureCards() {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Value Proposition Strip */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One platform. Four products. Endless possibilities.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Digital Receipting</h3>
              <p className="text-gray-600 text-sm">Instantly issue smart, tax-compliant digital receipts from POS, SoftPOS, or online channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Receipt Storage</h3>
              <p className="text-gray-600 text-sm">Store and retrieve all receipts in a secure, searchable vault.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Receipters App</h3>
              <p className="text-gray-600 text-sm">A simple, mobile-first interface for merchants and consumers to capture, view, and manage receipts.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Data Analysis</h3>
              <p className="text-gray-600 text-sm">Unlock deep insights with AI-powered analytics on top of your transaction data.</p>
            </div>
          </div>
        </div>

        {/* Why Receipters Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Receipters?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Receipters sits at the intersection of payments, compliance, and data intelligence. We don't just replace paper receipts – we upgrade your entire post-transaction experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Built for Compliance</h3>
              <p className="text-gray-600 text-sm">Receipters is designed to work hand-in-hand with modern tax and fiscalization regimes. From proper tax fields to audit-ready records, we help you stay aligned with regulatory requirements without extra admin work.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Secure by Design</h3>
              <p className="text-gray-600 text-sm">Your data is encrypted, access-controlled, and fully traceable. With role-based permissions and audit logs, you always know who has seen what, and why.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">AI-Ready Data</h3>
              <p className="text-gray-600 text-sm">Every receipt is converted into structured, machine-readable data (JSON line items, totals, taxes, timestamps, merchant IDs, and more). That means you can plug into analytics, machine learning, and automation from day one.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Developer-Friendly APIs</h3>
              <p className="text-gray-600 text-sm">Modern REST APIs, webhooks, and SDKs make it easy to integrate Receipters into your POS, SoftPOS, e-commerce platforms, and custom systems—without disrupting your existing workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
