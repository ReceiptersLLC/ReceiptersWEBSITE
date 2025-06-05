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
    Cookies.set(COOKIE_NAME, 'true', { expires: 365 }); // Cookie expires in 365 days
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f0f0f0',
      padding: '10px 20px',
      textAlign: 'center',
      boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      <p style={{ margin: '0 20px 0 0', fontSize: '14px' }}>
        This website uses cookies to improve your experience. By using our website you agree to our use of cookies.
      </p>
      <button
        onClick={handleAccept}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '14px',
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;