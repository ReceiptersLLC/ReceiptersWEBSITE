"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "./copy";
import { hasGpc, onOpenCookieSettings, saveConsent, useConsent } from "./consent";

const TEXT = {
  en: {
    bannerTitle: "Your privacy choices",
    bannerBody:
      "StateProof keeps only what the site needs to work. With your OK we also remember your language. We never use advertising cookies, and we never sell or share your information.",
    gpc: "Your browser sends Global Privacy Control, so we've switched off everything optional for you.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    choose: "Choose",
    readNotice: "Read the cookie notice",
    settingsTitle: "Cookie settings",
    settingsBody: "Choose what getstateproof.com may keep in your browser. You can change this at any time from “Cookie settings” at the bottom of every page.",
    close: "Close",
    save: "Save my choices",
    alwaysOn: "Always on",
    notUsed: "Not used",
    never: "Never used",
    on: "On",
    off: "Off",
    stored: "What's stored",
    keeps: "Kept for",
    necessaryTitle: "Strictly necessary",
    necessaryBody: "Remembers the choice you make here, so we don't ask on every page. Without it the site can't respect your choice.",
    prefTitle: "Preferences",
    prefBody: "Remembers whether you read the site in English or Spanish.",
    analyticsTitle: "Analytics",
    analyticsBody: "We don't measure visits. If that ever changes, we'll list the tool here and ask you first.",
    adsTitle: "Advertising and social media",
    adsBody: "No ad networks, tracking pixels or social media scripts, now or later.",
    record: "Your record",
    recordBody: "Choice saved {date}. Reference {id}.",
    untilChanged: "until you clear it",
    months12: "12 months",
    changed: "Saved. Your choices are in effect.",
  },
  es: {
    bannerTitle: "Tus opciones de privacidad",
    bannerBody:
      "StateProof guarda solo lo que el sitio necesita para funcionar. Con tu permiso también recordamos tu idioma. Nunca usamos cookies publicitarias y nunca vendemos ni compartimos tu información.",
    gpc: "Tu navegador envía Global Privacy Control, así que desactivamos todo lo opcional por ti.",
    acceptAll: "Aceptar todo",
    rejectAll: "Rechazar todo",
    choose: "Elegir",
    readNotice: "Leer el aviso de cookies",
    settingsTitle: "Configuración de cookies",
    settingsBody: "Elige qué puede guardar getstateproof.com en tu navegador. Puedes cambiarlo cuando quieras desde “Configuración de cookies” al pie de cada página.",
    close: "Cerrar",
    save: "Guardar mis opciones",
    alwaysOn: "Siempre activas",
    notUsed: "No se usan",
    never: "Nunca se usan",
    on: "Sí",
    off: "No",
    stored: "Qué se guarda",
    keeps: "Se guarda",
    necessaryTitle: "Estrictamente necesarias",
    necessaryBody: "Recuerdan la opción que elijas aquí para no preguntarte en cada página. Sin esto el sitio no puede respetar tu elección.",
    prefTitle: "Preferencias",
    prefBody: "Recuerdan si lees el sitio en inglés o en español.",
    analyticsTitle: "Análisis",
    analyticsBody: "No medimos las visitas. Si eso cambia, enumeraremos la herramienta aquí y te preguntaremos primero.",
    adsTitle: "Publicidad y redes sociales",
    adsBody: "Sin redes publicitarias, píxeles de seguimiento ni scripts de redes sociales, ni ahora ni después.",
    record: "Tu registro",
    recordBody: "Opción guardada el {date}. Referencia {id}.",
    untilChanged: "hasta que lo borres",
    months12: "12 meses",
    changed: "Guardado. Tus opciones ya se aplican.",
  },
};

export default function CookieConsent({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const consent = useConsent();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [saved, setSaved] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setGpc(hasGpc());
    return onOpenCookieSettings(() => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    setPrefs(consent?.preferences ?? false);
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // Keep keyboard focus inside the dialog.
      if (e.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      returnFocus.current?.focus?.();
    };
  }, [open, consent]);

  const choose = (preferences: boolean, method: "accept-all" | "reject-all" | "custom") => {
    saveConsent({ preferences, analytics: false }, method);
    setOpen(false);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 4000);
  };

  if (consent === undefined) return null; // browser not read yet

  const date = consent
    ? new Date(consent.date).toLocaleDateString(lang === "es" ? "es-US" : "en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <>
      {consent === null && !open && (
        <section className="sp-cc-banner" aria-labelledby="sp-cc-title">
          <div className="sp-wrap sp-cc-row">
            <div className="sp-cc-copy">
              <h2 id="sp-cc-title">{t.bannerTitle}</h2>
              <p>{t.bannerBody}</p>
              {gpc && <p className="sp-cc-gpc">{t.gpc}</p>}
              <a href="/cookies">{t.readNotice}</a>
            </div>
            <div className="sp-cc-actions">
              <button type="button" className="sp-cc-btn sp-cc-solid" onClick={() => choose(true, "accept-all")}>
                {t.acceptAll}
              </button>
              <button type="button" className="sp-cc-btn sp-cc-solid" onClick={() => choose(false, "reject-all")}>
                {t.rejectAll}
              </button>
              <button type="button" className="sp-cc-btn" onClick={() => setOpen(true)}>
                {t.choose}
              </button>
            </div>
          </div>
        </section>
      )}

      {saved && (
        <p className="sp-cc-toast" role="status">
          {t.changed}
        </p>
      )}

      {open && (
        <div className="sp-cc-backdrop" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div ref={dialogRef} className="sp-cc-dialog" role="dialog" aria-modal="true" aria-labelledby="sp-cc-dtitle" tabIndex={-1}>
            <div className="sp-cc-head">
              <div>
                <h2 id="sp-cc-dtitle">{t.settingsTitle}</h2>
                <p>{t.settingsBody}</p>
              </div>
              <button type="button" className="sp-cc-x" aria-label={t.close} onClick={() => setOpen(false)}>
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {gpc && <p className="sp-cc-gpc sp-cc-pad">{t.gpc}</p>}

            <div className="sp-cc-cats">
              <Category title={t.necessaryTitle} body={t.necessaryBody} status={t.alwaysOn} item="sp_consent" keeps={t.months12} t={t} />
              <Category
                title={t.prefTitle}
                body={t.prefBody}
                item="sp_lang"
                keeps={t.untilChanged}
                t={t}
                toggle={gpc ? undefined : { checked: prefs, onChange: setPrefs }}
                status={gpc ? t.off : undefined}
              />
              <Category title={t.analyticsTitle} body={t.analyticsBody} status={t.notUsed} t={t} />
              <Category title={t.adsTitle} body={t.adsBody} status={t.never} t={t} />
            </div>

            {consent && (
              <p className="sp-cc-record sp-cc-pad">
                <strong>{t.record}: </strong>
                {t.recordBody.replace("{date}", date).replace("{id}", consent.id.slice(0, 8).toUpperCase())}
              </p>
            )}

            <div className="sp-cc-foot">
              <a href="/cookies">{t.readNotice}</a>
              <div className="sp-cc-actions sp-cc-actions-row">
                <button type="button" className="sp-cc-btn" onClick={() => choose(false, "reject-all")}>
                  {t.rejectAll}
                </button>
                <button type="button" className="sp-cc-btn" onClick={() => choose(true, "accept-all")}>
                  {t.acceptAll}
                </button>
                <button type="button" className="sp-cc-btn sp-cc-solid" onClick={() => choose(prefs, "custom")}>
                  {t.save}
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
  body,
  status,
  item,
  keeps,
  toggle,
  t,
}: {
  title: string;
  body: string;
  status?: string;
  item?: string;
  keeps?: string;
  toggle?: { checked: boolean; onChange: (v: boolean) => void };
  t: (typeof TEXT)["en"];
}) {
  return (
    <div className="sp-cc-cat">
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        {item && (
          <p className="sp-cc-meta">
            {t.stored}: <code>{item}</code> · {t.keeps}: {keeps}
          </p>
        )}
      </div>
      {toggle ? (
        <button
          type="button"
          role="switch"
          aria-checked={toggle.checked}
          aria-label={title}
          className="sp-cc-switch"
          onClick={() => toggle.onChange(!toggle.checked)}
        >
          <span aria-hidden="true" />
          <em>{toggle.checked ? t.on : t.off}</em>
        </button>
      ) : (
        <span className="sp-cc-status">{status}</span>
      )}
    </div>
  );
}
