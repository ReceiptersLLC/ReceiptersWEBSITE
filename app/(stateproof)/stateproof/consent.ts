// Cookie and storage consent for getstateproof.com.
//
// Rules this module enforces:
// - Nothing optional is stored until the visitor says yes.
// - "Reject all" is as easy as "Accept all", and either choice can be changed at any time.
// - A browser Global Privacy Control signal is treated as "no" to everything optional.
// - A choice expires after 12 months, or when the list of items changes (VERSION), and we ask again.
// Keep this list in step with the cookie notice in legal.ts.

import { useEffect, useState } from "react";

export const CONSENT_KEY = "sp_consent";
export const LANG_KEY = "sp_lang";
/** Raise this when an item is added to the cookie notice, so everyone is asked again. */
export const CONSENT_VERSION = 2;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const OPEN_EVENT = "sp:open-cookie-settings";
const CHANGE_EVENT = "sp:consent-changed";

export type Choices = { preferences: boolean; analytics: boolean };
export type Consent = Choices & {
  version: number;
  /** When the choice was made, ISO 8601. */
  date: string;
  /** How the choice was made, kept as a record. */
  method: "accept-all" | "reject-all" | "custom" | "gpc";
  /** Random ID for this choice, so a visitor can quote it if they ask about their record. */
  id: string;
};

/** True when the browser sends Global Privacy Control. */
export function hasGpc(): boolean {
  if (typeof navigator === "undefined") return false;
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

function makeId() {
  try {
    return crypto.randomUUID();
  } catch {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.version !== CONSENT_VERSION) return null;
    if (!c.date || Date.now() - Date.parse(c.date) > MAX_AGE_MS) return null;
    // A GPC signal switched on after an earlier "yes" wins.
    if (hasGpc() && (c.preferences || c.analytics)) return null;
    return c;
  } catch {
    return null;
  }
}

/** Saves the choice and removes anything the visitor said no to. */
export function saveConsent(choices: Choices, method: Consent["method"]): Consent {
  const gpc = hasGpc();
  const c: Consent = {
    preferences: gpc ? false : choices.preferences,
    analytics: gpc ? false : choices.analytics,
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    method: gpc ? "gpc" : method,
    id: makeId(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    if (!c.preferences) localStorage.removeItem(LANG_KEY);
  } catch {
    /* storage can be unavailable; the choice then lasts for this visit only */
  }
  clearUnconsentedCookies();
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: c }));
  return c;
}

/** Deletes any cookie this site did not declare. The site sets none today, so this removes leftovers. */
function clearUnconsentedCookies() {
  try {
    for (const part of document.cookie.split(";")) {
      const name = part.split("=")[0]?.trim();
      if (!name) continue;
      const base = `${name}=; Max-Age=0; path=/; SameSite=Lax; Secure`;
      document.cookie = base;
      document.cookie = `${base}; domain=.${location.hostname.replace(/^www\./, "")}`;
    }
  } catch {
    /* ignore */
  }
}

/** Stores the language only when the visitor allowed preferences. */
export function rememberLang(lang: string) {
  try {
    if (readConsent()?.preferences) localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function savedLang(): string | null {
  try {
    return readConsent()?.preferences ? localStorage.getItem(LANG_KEY) : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(fn: () => void) {
  window.addEventListener(OPEN_EVENT, fn);
  return () => window.removeEventListener(OPEN_EVENT, fn);
}

/** The current choice: undefined before the browser is read, null when the visitor hasn't chosen. */
export function useConsent(): Consent | null | undefined {
  const [c, setC] = useState<Consent | null | undefined>(undefined);
  useEffect(() => {
    setC(readConsent());
    const onChange = (e: Event) => setC((e as CustomEvent<Consent>).detail);
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) setC(readConsent());
    };
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return c;
}
