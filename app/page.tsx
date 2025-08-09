import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receipters",
  description: "Instant Digital Receipts, Zero Paper Waste.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            🚧 Under Construction 🚧
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            We&#39;re working hard to bring you something amazing!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Receipters
            </h2>
            <p className="text-gray-600 mb-6">
              Effortless Expense Management Anywhere.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Coming soon • Stay tuned for updates
          </p>
        </div>
      </div>
    </div>
  );
}
