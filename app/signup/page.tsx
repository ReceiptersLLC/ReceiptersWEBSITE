"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSignupSuccess(false);

    const payload = {
      email,
      firstName,
      lastName,
      middleName,
      phoneNumber,
      password,
    };

    console.log('Payload:', payload); // Optional: debug log

    try {
      const response = await axios.post(
        'https://engine.receipters.com/api/v1/users/signup',
        payload
      );

      if (response.data.status === 'succeeded') {
        // Request OTP after successful signup
        const otpRequestPayload = {
          identifier: email,
          destination: 'EMAIL',
        };
        const otpResponse = await axios.post('https://engine.receipters.com/api/v1/auth/lotp', otpRequestPayload);

        if (otpResponse.data.verificationId) {
          toast.success('Signup successful! An OTP has been sent to your email for verification.');
          setSignupSuccess(true);
          router.push(`/otp-login?verificationId=${otpResponse.data.verificationId}`);
        } else {
          toast.error('Signup successful, but failed to request OTP. Please try OTP login manually.');
          router.push('/otp-login'); // Still redirect to OTP login page
        }
      } else {
        toast.error(response.data.message || 'Signup failed.');
        setError(response.data.message || 'Signup failed.');
      }
    } catch (err: any) {
      console.error('Signup error:', err.response?.data);
      toast.error(err.response?.data?.message || 'An error occurred during signup.');
      setError(err.response?.data?.message || 'Signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSignup} className="grid grid-cols-1 gap-4">
        <TextInput
          label="First Name"
          value={firstName}
          onTextChange={setFirstName}
          required
        />
        <TextInput
          label="Middle Name (Optional)"
          value={middleName}
          onTextChange={setMiddleName}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onTextChange={setLastName}
          required
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onTextChange={setEmail}
          required
        />
        <TextInput
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          onTextChange={setPhoneNumber}
          required
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onTextChange={setPassword}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
}
