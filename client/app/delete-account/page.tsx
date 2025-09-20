"use client"
import {useState} from "react";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: string, message: string } | null>(null);

  const handleDelete = async () => {
    if (!email || !validateEmail(email)) {
      setStatus({type: "error", message: "Please enter your email address."});
      return;
    }

    setStatus({type: "loading", message: "Processing request..."});

    // Mock API request
    setTimeout(() => {
      // if (email === "test@example.com") {
      setStatus({type: "success", message: "Account deletion request submitted."});
      setEmail("");
      // } else {
      //   setStatus({ type: "error", message: "Error processing request. Try again." });
      // }
    }, 2000);
  };

  return (
    <div className="w-full flex justify-center py-20">
      <div className="grid max-w-xl ">
        <h3
          className="text-2xl font-semibold mb-4">
          Delete Account
        </h3>
        <p className="text-base mb-8">
          You are about to delete your account. Please enter your email address below.
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black py-2 text-base px-4 rounded-lg mb-4"
          placeholder="Email address"
        />
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg">
          Delete Account
        </button>
        {status && (
          <p className={`mt-4 ${status?.type === "error" ? "text-red-600" : "text-green-600"}`}>
            {status?.message}
          </p>
        )}
      </div>
    </div>
  );
}
