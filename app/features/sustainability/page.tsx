"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaLeaf } from "react-icons/fa";

export default function SustainabilityPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl">
        <FaLeaf className="text-primary text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">Sustainability</h1>
        <p className="text-lg text-gray-700 mb-6">
          Join us in our mission to protect the planet. By switching to digital receipts, you can significantly reduce your paper waste and carbon footprint. Our eco-friendly solution helps you stay organized while making a positive impact on the environment.
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
