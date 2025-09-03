"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaBolt } from "react-icons/fa";


export default function InstantDeliveryPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl">
        <FaBolt className="text-primary text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Instant Delivery</h1>
        <p className="text-lg text-gray-700 mb-6">
          Never worry about lost or misplaced receipts again. Our system ensures that all your receipts are delivered to your account instantly after every purchase. This means you have immediate access to your transaction history, making it easy to track spending, manage expenses, and stay organized in real time.
        </p>
        <button 
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-full shadow hover:bg-opacity-90 transition-colors">
          Go Back
        </button>
      </div>
    </div>
  );
}
