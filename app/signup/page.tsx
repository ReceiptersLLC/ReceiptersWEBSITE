"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';

export default function SignupPage() {
  interface GoogleTokenResponse {
    access_token: string;
  }

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState({ google: false });

  const router = useRouter();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const payload = {
      email,
      firstName,
      lastName,
      middleName,
      phoneNumber,
      password,
    };

    try {
      await axios.post('https://engine.receipters.com/api/v1/users/signup', payload);

      const otpResponse = await axios.post('https://engine.receipters.com/api/v1/auth/lotp', {
        identifier: email,
        destination: 'EMAIL',
      });

      const verificationId: string | undefined = otpResponse.data.verificationId;

      if (verificationId) {
        toast.success('Signup successful! Please enter the OTP sent to your email.');
        router.push(`/otp-login?verificationId=${verificationId}`);
      } else {
        toast.success('Signup successful! Please continue to login.');
        router.push('/otp-login');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || 'Signup failed. Please try again.');
      } else {
        toast.error('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setOauthLoading((prev) => ({ ...prev, google: true }));

    try {
      if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.oauth2
          .initTokenClient({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            scope: 'email profile',
            callback: async (response: GoogleTokenResponse) => {
              try {
                const userInfoResponse = await fetch(
                  `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`
                );
                const userInfo = await userInfoResponse.json();

                const signupResponse = await axios.post(
                  'https://engine.receipters.com/api/v1/auth/oauth/google',
                  {
                    access_token: response.access_token,
                    user_info: userInfo,
                  }
                );

                if (signupResponse.data.status === 'succeeded') {
                  toast.success('Google signup successful!');
                  localStorage.setItem('token', signupResponse.data.token);
                  router.push('/success');
                }
              } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                  toast.error(err.response?.data?.message || 'Google signup failed');
                } else {
                  toast.error('Google signup failed');
                }
              } finally {
                setOauthLoading((prev) => ({ ...prev, google: false }));
              }
            },
          })
          .requestAccessToken();
      } else {
        toast.error('Google OAuth not initialized');
        setOauthLoading((prev) => ({ ...prev, google: false }));
      }
    } catch {
      toast.error('Google signup failed');
      setOauthLoading((prev) => ({ ...prev, google: false }));
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleSignup}
              disabled={oauthLoading.google}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              {oauthLoading.google ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
              ) : (
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              Continue with Google
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput name="firstName" label="First Name" value={firstName} onTextChange={setFirstName} required />
              <TextInput name="middleName" label="Middle Name" value={middleName} onTextChange={setMiddleName} />
              <TextInput name="lastName" label="Last Name" value={lastName} onTextChange={setLastName} required />
              <TextInput name="email" label="Email" type="email" value={email} onTextChange={setEmail} required />
              <TextInput name="phoneNumber" label="Phone Number" type="tel" value={phoneNumber} onTextChange={setPhoneNumber} required />
              <TextInput name="password" label="Password" type="password" value={password} onTextChange={setPassword} required />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    google: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token: string }) => void;
          }) => { requestAccessToken: () => void };
        };
      };
    };
  }
}
