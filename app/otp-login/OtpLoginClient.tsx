'use client';

import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const API_URL = "https://engine.receipters.com/api";

export default function OtpLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [identifier, setIdentifier] = useState("");
  const [destination, setDestination] = useState<"EMAIL" | "PHONE_NUMBER">("EMAIL");
  const [verificationId, setVerificationId] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryId = searchParams.get("verificationId");
    if (queryId) {
      setVerificationId(queryId);
    }
  }, [searchParams]);

  const requestOtp = async () => {
    try {
      const { data } = await axios.post<{ verificationId: string }>(`${API_URL}/v1/auth/lotp`, {
        identifier,
        destination,
      });

      if (data.verificationId) {
        setVerificationId(data.verificationId);
        toast.success("OTP sent to your email.");
      } else {
        toast.error("Failed to send OTP.");
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "OTP request error.");
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post(`${API_URL}/v1/auth/lotp/v`, {
        verificationId,
        code,
      });

      toast.success("OTP verified! Redirecting...");
      router.push("/success");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      setMessage(err.response?.data?.message || "OTP verification failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">OTP Login</h1>

      {!verificationId ? (
        <>
          <TextInput
            name="identifier"
            label="Email or Phone Number"
            value={identifier}
            onTextChange={setIdentifier}
            placeholder="e.g. john@example.com"
            required
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value as "EMAIL" | "PHONE_NUMBER")}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="EMAIL">Email</option>
            <option value="PHONE_NUMBER">Phone Number</option>
          </select>

          <Button onClick={requestOtp} className="mt-4 w-full">
            Request OTP
          </Button>
        </>
      ) : (
        <>
          <TextInput
            name="otp"
            label="Enter OTP"
            value={code}
            onTextChange={setCode}
            placeholder="Enter the OTP you received"
            required
          />

          <Button onClick={verifyOtp} className="mt-4 w-full">
            Verify OTP
          </Button>
        </>
      )}

      {message && <p className="text-red-500 mt-2 text-sm text-center">{message}</p>}
    </div>
  );
}
