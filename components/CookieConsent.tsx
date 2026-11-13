"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'cookies_accepted';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = Cookies.get(COOKIE_NAME);
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, 'true', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000] border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="m-0 text-sm leading-relaxed text-muted">
          This website uses cookies to improve your experience. By using our website you agree to our use of cookies.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mist"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
