import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Product Overview Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Introducing <span className="text-primary">Receipters:</span>
            <br />
            Your AI-Powered Expense Solution
          </h1>
          <p className="text-gray-800 mb-6 max-w-md">
            Streamline your expense tracking and reporting with the intelligence of AI. Receipters is designed to save you time, reduce errors, and provide clear financial insights.
          </p>
          <button
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary transition"
          >
            Learn More →
          </button>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/img/dashboard-example.webp"
              alt="Receipters Dashboard Example"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <FeatureCard
              title="AI-Powered Receipt Scanning"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              description="Simply snap a photo of your receipt and our advanced AI extracts all the crucial details automatically. No more manual data entry."
            />

            {/* Feature 2 */}
            <FeatureCard
              title="Automatic Categorization"
              icon={
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m0 0h2" />
                </svg>
              }
              description="Receipters intelligently categorizes your expenses, making it easy to track spending across different areas of your life or business."
            />

            {/* Feature 3 */}
            <FeatureCard
              title="Customizable Reporting"
              icon={
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-5m3 5v-5m3 5v-5M9 21V3a1 1 0 011-1h4a1 1 0 011 1v18l-2-1-2 1-2-1z" />
                </svg>
              }
              description="Generate detailed reports tailored to your needs for tax purposes, budgeting, or business analysis. Export in various formats."
            />

            {/* Feature 4 */}
            <FeatureCard
              title="Real-Time Spending Insights"
              icon={
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m2 0H7m0 0a2 2 0 10-4 0m4 0v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2h-5m-2-11v11" />
                </svg>
              }
              description="Visualize your spending patterns with intuitive charts and graphs. Understand where your money is going instantly."
            />

            {/* Feature 5 */}
            <FeatureCard
              title="Secure Cloud Storage"
              icon={
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m0 0h2" />
                </svg>
              }
              description="All your receipts and financial data are stored securely in the cloud, accessible anytime, anywhere."
            />

            {/* Feature 6 */}
            <FeatureCard
              title="Multi-Currency Support"
              icon={
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m0-6l3-3m6 13V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2z" />
                </svg>
              }
              description="Easily manage expenses in different currencies, perfect for travel or international business."
            />
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-gray-400">The Power of AI</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How Receipters&apos; AI Transforms Your Expenses</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Image src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821f_img3.webp" alt="Timeline" width={500} height={400} />
          <div>
            <h3 className="text-xl font-semibold mb-4">Effortless Receipt Scanning</h3>
            <p className="text-gray-800 mb-8">
              Our advanced AI technology automatically scans, reads, and categorizes your receipts with unmatched accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, icon, description }: { title: string, icon: JSX.Element, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 text-center">{title}</h3>
      <p className="text-gray-800 text-center">{description}</p>
    </div>
  );
}
