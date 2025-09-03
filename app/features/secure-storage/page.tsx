"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaLock } from "react-icons/fa";

export default function SecureStoragePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl">
        <FaLock className="text-primary text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Secure Storage</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your privacy is our top priority. We use advanced encryption methods to protect your receipts and personal information, ensuring that your data is always safe and accessible only to you. You can trust our platform to be a secure vault for your financial records.
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
