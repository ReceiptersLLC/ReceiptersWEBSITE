"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
import TextInput from '@/components/TextInput';
import { toast } from 'sonner';

const API_URL = 'https://engine.receipters.com/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { t } = useTranslation('common');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/v1/auth`, { email, password });
      toast.success('Login successful!');
      router.push('/success');
    } catch (err: any) {
      const message = err.response?.data?.message || t('login.toast.failed');
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{t('login.title')}</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <TextInput label={t('login.emailLabel')} type="email" value={email} onTextChange={setEmail} required />
            <TextInput label={t('login.passwordLabel')} type="password" value={password} onTextChange={setPassword} required />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" disabled={loading}>{loading ? t('login.button.signingIn') : t('login.button.signIn')}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
