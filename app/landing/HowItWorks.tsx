"use client"

import Image from "next/image";
import classNames from "classnames";
import Button from "@/components/Button";
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();

  const steps = [
    {
      title: "Step 1 – Capture",
      description: "Receipts are generated digitally from POS or SoftPOS, captured as high-resolution images via the Receipters App, or received from integrated channels like e-commerce and delivery apps.",
      icon: "📱"
    },
    {
      title: "Step 2 – Structure & Store",
      description: "Our engine extracts and structures line-item data—merchant, outlet, products, quantities, taxes, totals, payment methods, timestamps—and stores it in the Receipters Vault as clean, standardized data.",
      icon: "💾"
    },
    {
      title: "Step 3 – Search & Retrieve",
      description: "Merchants and consumers can instantly search for receipts using web dashboards or the Receipters App. Filter by date, store, amount, SKU, payment method, and more.",
      icon: "🔍"
    },
    {
      title: "Step 4 – Analyse & Act (Optional)",
      description: "With the Data Analysis product enabled, AI-powered dashboards and an intelligent assistant turn your receipt data into insights, alerts, and reports that drive better decisions.",
      icon: "📊"
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* How It Works Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Receipters Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{step.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            AI That Works on Real Transaction Data
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Receipts are one of the richest and most detailed data sources in commerce—but they're usually trapped on paper or scattered across systems. Receipters changes that by turning every receipt into structured, AI-ready data.
          </p>
          <p className="text-center text-gray-700 mb-8">
            Our AI layer helps you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600 mb-2">Understand Performance</h4>
              <p className="text-sm text-gray-600">Track sales, margins, and product performance across outlets, regions, and channels.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600 mb-2">Spot Trends & Opportunities</h4>
              <p className="text-sm text-gray-600">Identify fast-moving products, changing customer behavior, and new cross-sell or upsell opportunities.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600 mb-2">Monitor Risk & Anomalies</h4>
              <p className="text-sm text-gray-600">Detect unusual patterns in pricing, returns, voids, or discounts that could signal errors or fraud.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600 mb-2">Automate Reporting</h4>
              <p className="text-sm text-gray-600">Generate reports for management, auditors, investors, and regulators without chasing spreadsheets.</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">
            You keep full ownership of your data. We give you the tools and intelligence to make it work harder for your business.
          </p>
        </div>

        {/* Receipters App Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Receipters App: Receipts in Your Pocket
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            The Receipters App is the front door to your digital receipt world.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">For Merchants:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Capture high-resolution images of receipts from legacy tills and let Receipters read and store them.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Issue digital receipts via SMS, email, or QR code when full POS integration isn't ready yet.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Look up past transactions quickly when handling queries, returns, or disputes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">For Consumers:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Automatically collect digital receipts from participating merchants into a single, secure personal wallet.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Find any receipt in seconds using smart search and filters.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Use receipts for returns, warranties, reimbursements, and personal budgeting—without keeping stacks of paper.</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            The app connects seamlessly to the Receipters Vault and, where enabled, to our AI-powered Data Analysis tools.
          </p>
        </div>

        {/* Who We Serve Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Built for Modern Businesses & Everyday Consumers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Retailers & Supermarkets</h3>
              <p className="text-gray-600">Reduce paper, simplify audits, and understand SKU-level performance while giving customers a modern digital experience at checkout.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Restaurants & Hospitality</h3>
              <p className="text-gray-600">Issue digital receipts on the spot, streamline expense claims and corporate billing, and see which menu items really drive your margins.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Healthcare & Pharmacies</h3>
              <p className="text-gray-600">Maintain organized, compliant transaction records and give patients easy access to receipts for insurance and claims, while protecting sensitive data.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Universities & Institutions</h3>
              <p className="text-gray-600">Track spending across departments, projects, and vendors with clear, auditable trails—perfect for budgeting, grants reporting, and audits.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Everyday Consumers</h3>
              <p className="text-gray-600">Enjoy a single place to keep all receipts, track spending, and find proof of purchase whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}