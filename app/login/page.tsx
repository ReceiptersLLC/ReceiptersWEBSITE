"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';

const API_URL = 'https://engine.receipters.com/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { t } = useTranslation('common');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState({ google: false, facebook: false });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/v1/auth`, { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/success');
    } catch (err) {
      const message = (err as AxiosError<{ message?: string }>).response?.data?.message || t('login.toast.failed');
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setOauthLoading({ ...oauthLoading, google: true });
    setError(null);
    
    try {
      if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.oauth2.initTokenClient({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          scope: 'email profile',
          callback: async (response: { access_token: string }) => {
            try {
              // Get user info from Google
              const userInfoResponse = await fetch(
                `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`
              );
              const userInfo = await userInfoResponse.json();
              // Send to your backend
              const loginResponse = await axios.post(`${API_URL}/v1/auth/oauth/google`, {
                access_token: response.access_token,
                user_info: userInfo
              });

              if (loginResponse.data.status === 'succeeded' || loginResponse.data.token) {
                localStorage.setItem('token', loginResponse.data.token);
                router.push('/success');
              }
            } catch (error: any) {
              const message = error.response?.data?.message || 'Google login failed';
              toast.error(message);
              setError(message);
            } finally {
            }
          }
        }).requestAccessToken();
      } else {
        const message = 'Google OAuth not initialized';
        toast.error(message);
        setError(message);
      }
    } catch (error) {
      const message = 'Google login failed';
      setError(message);
      setOauthLoading({ ...oauthLoading, google: false });
    }
  };

  const handleFacebookLogin = async () => {
    setOauthLoading({ ...oauthLoading, facebook: true });
    setError(null);
    
    try {
      if (typeof window !== 'undefined' && window.FB) {
        window.FB.login(async (response: { authResponse?: { accessToken: string } }) => {
          if (response.authResponse) {
            try {
              // Get user info from Facebook
              window.FB.api('/me', { fields: 'name,email,first_name,last_name' }, async (userInfo: { [key: string]: any }) => {
                try {
                  // Send to your backend
                  const loginResponse = await axios.post(`${API_URL}/v1/auth/oauth/facebook`, {
                    user_info: userInfo
                  });

                  if (loginResponse.data.status === 'succeeded' || loginResponse.data.token) {
                    toast.success('Facebook login successful!');
                    localStorage.setItem('token', loginResponse.data.token);
                    router.push('/success');
                  }
                } catch (error: any) {
                  const message = error.response?.data?.message || 'Facebook login failed';
                  toast.error(message);
                  setError(message);
                }
              });
            } catch (error) {
              const message = 'Failed to get Facebook user info';
              toast.error(message);
              setError(message);
            }
          } else {
            const message = 'Facebook login cancelled';
            toast.error(message);
            setError(message);
            setOauthLoading({ ...oauthLoading, facebook: false });
          }
        }, { scope: 'email' });
      } else {
        const message = 'Facebook SDK not initialized';
        toast.error(message);
        setError(message);
        setOauthLoading({ ...oauthLoading, facebook: false });
      }
    } catch (error) {
      const message = 'Facebook login failed';
      toast.error(message);
      setError(message);
      setOauthLoading({ ...oauthLoading, facebook: false });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{t('login.title')}</h2>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-8">
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleLogin}
              disabled={oauthLoading.google}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
              onClick={handleFacebookLogin}
              disabled={oauthLoading.facebook}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

          {/* Regular Login Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <TextInput 
                label={t('login.emailLabel')} 
                type="email" 
                value={email} 
                onTextChange={setEmail} 
                required 
              />
              <TextInput 
                label={t('login.passwordLabel')} 
                type="password" 
                value={password} 
                onTextChange={setPassword} 
                required 
              />
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <Button type="submit" disabled={loading}>
                {loading ? t('login.button.signingIn') : t('login.button.signIn')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Add these type declarations at the top of your file or in a separate types file
declare global {
  interface Window {
    google: { accounts: { oauth2: { initTokenClient: (config: { client_id: string; scope: string; callback: (response: { access_token: string }) => void }) => { requestAccessToken: () => void } } } };
    FB: { login: (callback: (response: { authResponse?: { accessToken: string } }) => void, options: { scope: string }) => void; api: (path: string, options: { fields: string }, callback: (response: { [key: string]: any }) => void) => void };
  }
}