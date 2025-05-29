"use client";

import React, { useState } from "react";
import axios from "axios";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const API_URL = "https://engine.receipters.com/api";

export default function OtpLogin() {const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [destination, setDestination] = useState<"EMAIL" | "PHONE_NUMBER">("EMAIL");
  const [verificationId, setVerificationId] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const queryVerificationId = searchParams.get('verificationId');
    if (queryVerificationId) {
      setVerificationId(queryVerificationId);
    }
  }, [searchParams]);

  const requestOtp = async () => {
    try {
      setMessage("");
      const data = {
        identifier: identifier,
        destination,
      };

      const response = await axios.post(`${API_URL}/v1/auth/lotp`, data);
      setVerificationId(response.data.verificationId);
      toast.success("OTP requested. Please check your email.");
    } catch (error: any) {
      toast.error(`Error requesting OTP: ${error.response?.data?.message || error.message}`);
    }
  };

  const verifyOtp = async () => {
    try {
      setMessage("");
      const data = {
        verificationId,
        code,
      };

      const response = await axios.post(`${API_URL}/v1/auth/lotp/v`, data);
      toast.success("OTP verified successfully!");
      router.push("/success");
    } catch (error: any) {
      setMessage(`Error verifying OTP: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">OTP Login</h1>

      {!verificationId ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">
              Enter Email or Phone Number
            </label>
            <TextInput
              required
              type="text"
              placeholder="Email or Phone Number"
              value={identifier}
              onTextChange={setIdentifier}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value as "EMAIL" | "PHONE_NUMBER")}
              className="w-full p-2 border rounded-md"
            >
              <option value="EMAIL">Email</option>
              <option value="PHONE_NUMBER">Phone Number</option>
            </select>
          </div>
          <Button onClick={requestOtp} className="w-full">
            Request OTP
          </Button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">
              Enter OTP
            </label>
            <TextInput
              required
              type="text"
              placeholder="Enter OTP"
              value={code}
              onTextChange={setCode}
              className="w-full"
            />
          </div>
          <Button onClick={verifyOtp} className="w-full">
            Verify OTP
          </Button>
        </>
      )}

      {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
    </div>
  );
}