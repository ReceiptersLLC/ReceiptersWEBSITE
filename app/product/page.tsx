import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Receipters Products</h1>
          <p className="text-lg text-gray-600">
            A complete suite of smart, secure, and scalable digital receipt tools for individuals and businesses.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">“What Receipters Offers”</h2>
          <p className="text-xl text-center mb-8 text-gray-600">Explore our powerful suite of tools and features</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature Cards */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}

          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">The Power of AI</p>
          <h2 className="text-4xl font-bold mb-6">How Receipters&apos; AI Transforms Your Expenses</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our intelligent system categorizes, analyzes, and helps you understand your spending patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {aiBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-sm text-center transition hover:shadow-md">
                <div className="text-3xl mb-4">{benefit.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to go paperless and powerful?</h2>
          <p className="text-lg mb-6">Start using Receipters today to manage your receipts like a pro.</p>
          <a href="/signup" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Get Started for Free
          </a>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ title, icon, description }: { title: string; icon: JSX.Element; description: string; }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 text-center text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

const features = [
  {
    title: "Digital Receipt Issuance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Automatically generate and send digital receipts via email, SMS, or to Receipters accounts."
  },
  {
    title: "Smart Receipt Capture",
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m0 0h2" />
      </svg>
    ),
    description: "Scan or upload images, forward receipts by email. OCR reads and logs them instantly."
  },
  {
    title: "Secure Cloud Storage",
    icon: (
      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-5m3 5v-5m3 5v-5M9 21V3a1 1 0 011-1h4a1 1 0 011 1v18l-2-1-2 1-2-1z" />
      </svg>
    ),
    description: "All receipts safely backed up in the cloud. Access anytime, from any device."
  },
  {
    title: "Powerful Search & Filtering",
    icon: (
      <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m2 0H7m0 0a2 2 0 10-4 0m4 0v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2h-5m-2-11v11" />
      </svg>
    ),
    description: "Filter receipts by merchant, amount, tags, date, or payment method in seconds."
  },
  {
    title: "Integrations & Exports",
    icon: (
      <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m0 0h2" />
      </svg>
    ),
    description: "Connect to QuickBooks, Xero, Google Sheets. Export data as PDF or CSV."
  },
  {
    title: "Analytics & Insights",
    icon: (
      <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m0-6l3-3m6 13V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2z" />
      </svg>
    ),
    description: "Analyze expenses, track trends, monitor returns, and generate visual reports."
  },
  {
    title: "Team & Enterprise Accounts",
    icon: (
      <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0A5.002 5.002 0 0112 8a5.002 5.002 0 015.356 1.143m-7.712 0A5.002 5.002 0 0112 8a5.002 5.002 0 015.356 1.143m-7.712 0L9 10m3-2v4m0 0l3 3m-3-3l-3 3" />
      </svg>
    ),
    description: "Manage multiple users, assign roles, and track team-wide activity with audit logs."
  }
];

const aiBenefits = [
  {
    emoji: "🧠",
    title: "Smart Categorization",
    description: "Automatically classifies receipts based on merchants, dates, and purchase types."
  },
  {
    emoji: "📊",
    title: "Trend Detection",
    description: "Analyzes your purchase patterns and highlights unusual spending."
  },
  {
    emoji: "🔍",
    title: "Instant Retrieval",
    description: "AI search returns the right receipt even from vague descriptions or typos."
  }
];
