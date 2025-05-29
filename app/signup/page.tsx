"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';

import { useTranslation } from 'react-i18next';

export default function SignupPage() {
  const { t } = useTranslation('common');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      email,
      firstName,
      lastName,
      middleName,
      phoneNumber,
      password,
    };

    try {
      const response = await axios.post(
        'https://engine.receipters.com/api/v1/users/signup',
        payload
      );

      if (response.data.status === 'succeeded') {
        const otpResponse = await axios.post(
          'https://engine.receipters.com/api/v1/auth/lotp',
          { identifier: email, destination: 'EMAIL' }
        );

        const verificationId = otpResponse.data.verificationId;

        if (verificationId) {
 toast.success(t('signup.successOTP'));
          router.push(`/otp-login?verificationId=${verificationId}`);
        } else {
 toast.error(t('signup.successNoOTP'));
          router.push('/otp-login');
        }
      } else {
 setError(response.data.message || t('signup.failed'));
 toast.error(response.data.message || t('signup.failed'));
      }
    } catch (err: any) {
 setError(err.response?.data?.message || t('signup.error'));
 toast.error(err.response?.data?.message || t('signup.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{t('signup.title')}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignup}>
            <TextInput label="First Name" value={firstName} onTextChange={setFirstName} required />
            <TextInput label="Middle Name" value={middleName} onTextChange={setMiddleName} />
            <TextInput label="Last Name" value={lastName} onTextChange={setLastName} required />
            <TextInput label="Email" type="email" value={email} onTextChange={setEmail} required />
            <TextInput label="Phone Number" type="tel" value={phoneNumber} onTextChange={setPhoneNumber} required />
            <TextInput label="Password" type="password" value={password} onTextChange={setPassword} required />
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            <Button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
