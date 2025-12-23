'use client';
import { useState } from 'react';
import ContactDetails from "@/app/contact/components/ContactDetails";
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export default function Page() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const { t } = useTranslation('common');
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const API_ENDPOINT = `https://fl-engine-b2b.fitlov.com/api/v1/g/contact-us`;

    const payload = {
      fullname,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // const data = await res.json(); // No need to parse if not using data.message
        toast.success(t('contact.toast.success'));
        // Reset form
        setFullname('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const errorData = await res.json(); // Parse error response
        toast.error(errorData.message || t('contact.toast.failed'));
      }
    } catch (err) {
      console.error(err);
      toast.error(t('contact.toast.error'));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      <h2 className="mt-16 text-3xl max-w-3xl font-semibold text-left w-full text-gray-900 mb-2">
        {t('contact.title')}
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fullName')}</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
          <input
            type="email"
            placeholder="Your e-mail"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.subject')}</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')}</label>
          <textarea
            placeholder="Your message here"
            rows={6}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-900 text-white font-medium py-3 rounded-full hover:opacity-90 transition flex items-center justify-center"
        >
          {t('contact.button.send')}
        </button>
      </form>

      <div className="h-12" />
      <ContactDetails />
    </div>
  );
}
