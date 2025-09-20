import React, { Suspense } from "react";
import OtpLogin from "./OtpLoginClient";

export default function OTPLoginPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading OTP form...</div>}>
      <OtpLogin />
    </Suspense>
  );
}
