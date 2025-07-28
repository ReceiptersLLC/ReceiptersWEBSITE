import Cookies from 'js-cookie';

const COOKIE_NAME = 'user_preferences';

export const setUserPreferences = (preferences: any) => {
  Cookies.set(COOKIE_NAME, JSON.stringify(preferences), { expires: 365 }); // Expires in 365 days
};

export const getUserPreferences = () => {
  const preferencesCookie = Cookies.get(COOKIE_NAME);
  if (preferencesCookie) {
    return JSON.parse(preferencesCookie);
  }
  return null; // Or return a default preferences object
};

export const removeUserPreferences = () => {
  Cookies.remove(COOKIE_NAME);
};