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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSignupSuccess(false);

    try {
      const response = await axios.post('https://engine.receipters.com/api/v1/users/signup', {
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
      });

      if (response.data.status === 'succeeded') {
 toast.success('Signup successful! Redirecting to OTP verification.');
        router.push('/otp-login');
      } else {
 toast.error(response.data.message || 'Signup failed.');
      }
    } catch (err: any) {
 toast.error(err.response?.data?.message || 'An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
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