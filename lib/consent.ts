"use client";

// Cookie consent for the website.
//
// Necessary cookies always apply. The visitor chooses whether the site may
// also remember their language ("preferences") and load the WhatsApp support
// chat, which is served by a third party ("chat").

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export type Consent = { preferences: boolean; chat: boolean };

const CONSENT_COOKIE = "rc_consent";
const LANGUAGE_COOKIE = "rc_lang";
const CHANGE_EVENT = "rc-consent-change";
const OPEN_EVENT = "rc-open-cookie-settings";
const ONE_YEAR = 365;
const SIX_MONTHS = 182;

const cookieOptions = { sameSite: "lax" as const, secure: typeof window !== "undefined" && window.location.protocol === "https:" };

/** The visitor's saved choice, or null when they have not chosen yet. */
export function readConsent(): Consent | null {
  try {
    const raw = Cookies.get(CONSENT_COOKIE);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { preferences: parsed.preferences === true, chat: parsed.chat === true };
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  Cookies.set(CONSENT_COOKIE, JSON.stringify({ v: 1, ...consent }), { ...cookieOptions, expires: SIX_MONTHS });
  if (!consent.preferences) Cookies.remove(LANGUAGE_COOKIE);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Opens the cookie settings dialog from anywhere on the site. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

/** Remembers the chosen language, only when the visitor allowed preferences. */
export function rememberLanguage(language: string) {
  if (readConsent()?.preferences) {
    Cookies.set(LANGUAGE_COOKIE, language, { ...cookieOptions, expires: ONE_YEAR });
  }
}

export function rememberedLanguage(): string | undefined {
  return readConsent()?.preferences ? Cookies.get(LANGUAGE_COOKIE) : undefined;
}

/** Removes cookies set by earlier versions of the site without a choice. */
export function removeLegacyCookies() {
  Cookies.remove("cookies_accepted");
  Cookies.remove("i18next");
}

/** Current consent, re-rendering when the visitor changes it. `undefined` until read on the client. */
export function useConsent(): Consent | null | undefined {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  useEffect(() => {
    const update = () => setConsent(readConsent());
    update();
    window.addEventListener(CHANGE_EVENT, update);
    return () => window.removeEventListener(CHANGE_EVENT, update);
  }, []);
  return consent;
}
