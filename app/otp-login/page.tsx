"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios.post(`${API_URL}/v1/auth/lotp`, {
        identifier,
        destination,
      });

      if (response.data.verificationId) {
        setVerificationId(response.data.verificationId);
        toast.success("OTP sent to your email.");
      } else {
        toast.error("OTP request failed.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "OTP request error.");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`${API_URL}/v1/auth/lotp/v`, {
        verificationId,
        code,
      });

      toast.success("OTP verified! Redirecting...");
      router.push("/success");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "OTP verification failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">OTP Login</h1>

      {!verificationId ? (
        <>
          <TextInput
            label="Email or Phone Number"
            value={identifier}
            onTextChange={setIdentifier}
            placeholder="e.g. john@example.com"
            required
          />
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value as "EMAIL" | "PHONE_NUMBER")}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="EMAIL">Email</option>
            <option value="PHONE_NUMBER">Phone Number</option>
          </select>
          <Button onClick={requestOtp} className="mt-4 w-full">Request OTP</Button>
        </>
      ) : (
        <>
          <TextInput
            label="Enter OTP"
            value={code}
            onTextChange={setCode}
            placeholder="Enter the OTP you received"
            required
          />
          <Button onClick={verifyOtp} className="mt-4 w-full">Verify OTP</Button>
        </>
      )}

      {message && <p className="text-red-500 mt-2 text-sm text-center">{message}</p>}
    </div>
  );
}
