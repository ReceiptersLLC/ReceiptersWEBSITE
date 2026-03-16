"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function Step3Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl">
        <FaBolt className="text-primary text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Step 3 – Search and Retrieve</h1>
        <p className="text-lg text-gray-700 mb-6">
          Merchants and consumers can instantly search for receipts using web dashboards or the Receipters App. Filter by date, store, amount, SKU, payment method, and more.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors">
          Go Back
        </button>
      </div>
    </div>
  );
}