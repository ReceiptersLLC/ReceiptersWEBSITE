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

  interface FacebookLoginResponse {
    authResponse?: {
      accessToken: string;
    };
  }

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState({ google: false, facebook: false });

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

  const handleFacebookSignup = async () => {
    setOauthLoading((prev) => ({ ...prev, facebook: true }));

    try {
      if (typeof window !== 'undefined' && window.FB) {
        window.FB.login(
          async (response: FacebookLoginResponse) => {
            if (response.authResponse) {
              window.FB.api(
                '/me',
                { fields: 'name,email,first_name,last_name' },
                async (userInfo: Record<string, unknown>) => {
                  try {
                    const signupResponse = await axios.post(
                      'https://engine.receipters.com/api/v1/auth/oauth/facebook',
                      {
                        access_token: response.authResponse!.accessToken,
                        user_info: userInfo,
                      }
                    );

                    if (signupResponse.data.status === 'succeeded') {
                      toast.success('Facebook signup successful!');
                      localStorage.setItem('token', signupResponse.data.token);
                      router.push('/success');
                    }
                  } catch (err: unknown) {
                    if (axios.isAxiosError(err)) {
                      toast.error(err.response?.data?.message || 'Facebook signup failed');
                    } else {
                      toast.error('Facebook signup failed');
                    }
                  } finally {
                    setOauthLoading((prev) => ({ ...prev, facebook: false }));
                  }
                }
              );
            } else {
              toast.error('Facebook login cancelled');
              setOauthLoading((prev) => ({ ...prev, facebook: false }));
            }
          },
          { scope: 'email' }
        );
      } else {
        toast.error('Facebook SDK not initialized');
        setOauthLoading((prev) => ({ ...prev, facebook: false }));
      }
    } catch {
      toast.error('Facebook signup failed');
      setOauthLoading((prev) => ({ ...prev, facebook: false }));
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
                  {/* Google Logo Paths */}
                </svg>
              )}
              Continue with Google
            </button>

            <button
              onClick={handleFacebookSignup}
              disabled={oauthLoading.facebook}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {oauthLoading.facebook ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  {/* Facebook Logo Path */}
                </svg>
              )}
              Continue with Facebook
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
    FB: {
      login: (
        callback: (response: { authResponse?: { accessToken: string } }) => void,
        options: { scope: string }
      ) => void;
      api: (
        path: string,
        options: { fields: string },
        callback: (response: { name?: string; email?: string; first_name?: string; last_name?: string }) => void
      ) => void;
    };
  }
}
