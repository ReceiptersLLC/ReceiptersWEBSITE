"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export default function SignupPage() {
  // Define types for OAuth responses
  interface GoogleTokenResponse {
    access_token: string;
    // Add other relevant properties if needed
  }

  interface GoogleUserInfo {
    email: string;
    // Add other relevant properties if needed
  }

  interface FacebookLoginResponse {
    authResponse?: {
      accessToken: string;
      // Add other relevant properties if needed
    };
  }

  const { t } = useTranslation('common');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState({ google: false, facebook: false });
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
          toast.success(t('signup.successNoOTP'));
          router.push('/otp-login');
        }
      } else {
        toast.error(response.data.message || t('signup.failed'));
      }
    } catch (err: any) { // Consider refining this error type
      toast.error(err.response?.data?.message || t('signup.error'));
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleSignup = async () => {
    setOauthLoading({ ...oauthLoading, google: true });
    try {
      // Initialize Google OAuth
      if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.oauth2.initTokenClient({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          scope: 'email profile',
          callback: async (response: GoogleTokenResponse) => {
            try {
              // Get user info from Google
              const userInfoResponse = await fetch(
                `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`
              );
              const userInfo = await userInfoResponse.json();

              // Send to your backend
              const signupResponse = await axios.post(
                'https://engine.receipters.com/api/v1/auth/oauth/google',
                {
                  access_token: response.access_token,
                  user_info: userInfo
                },
              );

              if (signupResponse.data.status === 'succeeded') {
                toast.success('Google signup successful!');
                localStorage.setItem('token', signupResponse.data.token);
                router.push('/success');
              }
            } catch (error: any) { // Consider refining this error type
              toast.error(error.response?.data?.message || 'Google signup failed');
            } finally {
              setOauthLoading({ ...oauthLoading, google: false });
            }
          }
        }).requestAccessToken();
      } else {
        toast.error('Google OAuth not initialized');
      } 
    } catch (error) {
      toast.error('Google signup failed');
      setOauthLoading({ ...oauthLoading, google: false });
    }
  };

  const handleFacebookSignup = async () => {
    setOauthLoading({ ...oauthLoading, facebook: true });
    try {
      if (typeof window !== 'undefined' && window.FB) {
        window.FB.login(async (response: FacebookLoginResponse) => {
          if (response.authResponse) {
            try {
              // Get user info from Facebook
              window.FB.api('/me', { fields: 'name,email,first_name,last_name' }, async (userInfo: any) => { // Consider refining this userInfo type
                try {
                  // Send to your backend
                  const signupResponse = await axios.post(
                    'https://engine.receipters.com/api/v1/auth/oauth/facebook',
                    {
                      access_token: response.authResponse.accessToken,
                      user_info: userInfo
                    }
                  );

                  if (signupResponse.data.status === 'succeeded') {
                    toast.success('Facebook signup successful!');
                    localStorage.setItem('token', signupResponse.data.token);
                    router.push('/success');
                  }
                } catch (error: any) { // Consider refining this error type
                  toast.error(error.response?.data?.message || 'Facebook signup failed');
                }
              });
            } catch (error) {
              toast.error('Failed to get Facebook user info');
            } finally {
              setOauthLoading({ ...oauthLoading, facebook: false });
            }
          } else {
            toast.error('Facebook login cancelled');
            setOauthLoading({ ...oauthLoading, facebook: false });
          }
        }, { scope: 'email' });
      } else {
        toast.error('Facebook SDK not initialized');
        setOauthLoading({ ...oauthLoading, facebook: false });
      }
    } catch (error) {
      toast.error('Facebook signup failed');
      setOauthLoading({ ...oauthLoading, facebook: false });
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{t('signup.title')}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleSignup}
              disabled={oauthLoading.google}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {oauthLoading.google ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
              ) : (
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              Continue with Google
            </button>

            <button
              onClick={handleFacebookSignup}
              disabled={oauthLoading.facebook}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {oauthLoading.facebook ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              Continue with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Regular Form */}
          <form className="space-y-6" onSubmit={handleSignup}>
            <TextInput label="First Name" value={firstName} onTextChange={setFirstName} required />
            <TextInput label="Middle Name" value={middleName} onTextChange={setMiddleName} />
            <TextInput label="Last Name" value={lastName} onTextChange={setLastName} required />
            <TextInput label="Email" type="email" value={email} onTextChange={setEmail} required />
            <TextInput label="Phone Number" type="tel" value={phoneNumber} onTextChange={setPhoneNumber} required />
            <TextInput label="Password" type="password" value={password} onTextChange={setPassword} required />
            <Button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Add these type declarations at the top of your file or in a separate types file
declare global {
  interface Window {
    google: any;
    FB: any;
  }
}