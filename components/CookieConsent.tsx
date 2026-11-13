"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { onOpenCookieSettings, removeLegacyCookies, saveConsent, useConsent } from "@/lib/consent";

export default function CookieConsent() {
  const { t } = useTranslation("common");
  const consent = useConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [chat, setChat] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    removeLegacyCookies();
    return onOpenCookieSettings(() => setSettingsOpen(true));
  }, []);

  // Show the saved choice whenever the dialog opens
  useEffect(() => {
    if (!settingsOpen) return;
    setPreferences(consent?.preferences ?? false);
    setChat(consent?.chat ?? false);
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [settingsOpen, consent]);

  const choose = (next: { preferences: boolean; chat: boolean }) => {
    saveConsent(next);
    setSettingsOpen(false);
  };

  if (consent === undefined) return null; // not read yet

  const primaryButton =
    "bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink";
  const secondaryButton =
    "border border-ink px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist";

  return (
    <>
      {/* First visit: ask once */}
      {consent === null && !settingsOpen && (
        <div
          role="region"
          aria-label={t("cookies.banner.title")}
          className="fixed inset-x-0 bottom-0 z-[1000] max-h-[90vh] overflow-y-auto border-t-[3px] border-primary bg-white shadow-[0_-12px_32px_-16px_rgba(14,20,51,0.35)]"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-lg font-semibold text-ink">{t("cookies.banner.title")}</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{t("cookies.banner.description")}</p>
              <ul className="m-0 mt-3 grid list-none gap-x-8 gap-y-1.5 p-0 text-sm text-muted sm:grid-cols-3">
                <li><span className="font-semibold text-ink">{t("cookies.necessary.title")}</span>: {t("cookies.banner.necessaryCaption")}</li>
                <li><span className="font-semibold text-ink">{t("cookies.preferences.title")}</span>: {t("cookies.banner.preferencesCaption")}</li>
                <li><span className="font-semibold text-ink">{t("cookies.chat.title")}</span>: {t("cookies.banner.chatCaption")}</li>
              </ul>
              <p className="mt-3 text-sm text-muted">
                {t("cookies.banner.changeLater")}{" "}
                <Link href="/privacy-policy" className="font-semibold text-primary underline underline-offset-4">
                  {t("cookies.banner.privacyLink")}
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <button type="button" onClick={() => choose({ preferences: true, chat: true })} className={primaryButton}>
                {t("cookies.banner.acceptAll")}
              </button>
              <button type="button" onClick={() => choose({ preferences: false, chat: false })} className={secondaryButton}>
                {t("cookies.banner.rejectAll")}
              </button>
              <button type="button" onClick={() => setSettingsOpen(true)} className={secondaryButton}>
                {t("cookies.banner.settings")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings dialog */}
      {settingsOpen && (
        <div className="fixed inset-0 z-[1001] flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            tabIndex={-1}
            className="max-h-full w-full max-w-xl overflow-y-auto border-t-[3px] border-primary bg-white outline-none"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line p-6">
              <div>
                <h2 id="cookie-settings-title" className="text-xl font-semibold text-ink">
                  {t("cookies.settings.title")}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t("cookies.settings.description")}</p>
              </div>
              <button
                type="button"
                aria-label={t("cookies.settings.close")}
                onClick={() => setSettingsOpen(false)}
                className="p-1 text-muted hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <div className="divide-y divide-line px-6">
              <Category
                title={t("cookies.necessary.title")}
                description={t("cookies.necessary.description")}
                status={t("cookies.necessary.alwaysOn")}
              />
              <Category
                title={t("cookies.preferences.title")}
                description={t("cookies.preferences.description")}
                checked={preferences}
                onChange={setPreferences}
              />
              <Category
                title={t("cookies.chat.title")}
                description={t("cookies.chat.description")}
                checked={chat}
                onChange={setChat}
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-line p-6 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/privacy-policy" onClick={() => setSettingsOpen(false)} className="text-sm font-semibold text-primary underline underline-offset-4">
                {t("footer.legalLinks.privacyPolicy")}
              </Link>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => choose({ preferences: false, chat: false })} className={secondaryButton}>
                  {t("cookies.banner.rejectAll")}
                </button>
                <button type="button" onClick={() => choose({ preferences: true, chat: true })} className={secondaryButton}>
                  {t("cookies.banner.acceptAll")}
                </button>
                <button type="button" onClick={() => choose({ preferences, chat })} className={primaryButton}>
                  {t("cookies.settings.save")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Category({
  title,
  description,
  status,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  status?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6 py-5">
      <div>
        <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      {onChange ? (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          onClick={() => onChange(!checked)}
          className={`relative mt-0.5 h-6 w-11 shrink-0 border transition-colors ${
            checked ? "border-primary bg-primary" : "border-muted/60 bg-white"
          }`}
        >
          <span
            className={`absolute top-[3px] size-4 transition-all ${
              checked ? "left-[23px] bg-white" : "left-[3px] bg-muted"
            }`}
          />
        </button>
      ) : (
        <span className="mt-0.5 shrink-0 text-xs font-semibold text-signal">{status}</span>
      )}
    </div>
  );
}
