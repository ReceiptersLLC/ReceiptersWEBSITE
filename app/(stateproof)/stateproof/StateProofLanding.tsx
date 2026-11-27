"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CHANNELS, SALES_BANDS, copy, type Lang } from "./copy";
import { legal } from "./legal";

const CONTACT_EMAIL = "info@receipters.com";

// Illustration only: one example store against each state's dollar limit.
const BOARD = [
  { state: "Washington", own: 58000, market: 49000, limit: 100000 },
  { state: "New Jersey", own: 61000, market: 27000, limit: 100000 },
  { state: "Texas", own: 236000, market: 176000, limit: 500000 },
  { state: "Florida", own: 52000, market: 0, limit: 100000 },
  { state: "California", own: 141000, market: 98000, limit: 500000 },
];

const usd = (n: number) => "$" + n.toLocaleString("en-US");

function status(total: number, limit: number) {
  const pct = total / limit;
  if (pct >= 1) return "over" as const;
  if (pct >= 0.8) return "near" as const;
  return "safe" as const;
}

export type View = "home" | "privacy" | "cookies";

export default function StateProofLanding({ view = "home" }: { view?: View }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sp_lang");
      if (saved === "en" || saved === "es") return setLang(saved);
    } catch {
      /* storage can be unavailable */
    }
    if (navigator.language?.toLowerCase().startsWith("es")) setLang("es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // On the legal pages, section links go back to the landing page.
  const home = view === "home" ? "" : "/";

  const chooseLang = (next: Lang) => {
    setLang(next);
    try {
      localStorage.setItem("sp_lang", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="sp">
      <header className="sp-header">
        <div className="sp-strip">
          <div className="sp-wrap sp-strip-row">
            <span className="sp-strip-tag">
              <i aria-hidden="true" />
              {t.stripTag}
            </span>
            <span className="sp-strip-right">
              <a href={`mailto:${CONTACT_EMAIL}`} className="sp-strip-mail">
                {CONTACT_EMAIL}
              </a>
              <span className="sp-langs" role="group" aria-label={t.langGroup}>
                <button type="button" aria-pressed={lang === "en"} onClick={() => chooseLang("en")} lang="en">
                  English
                </button>
                <button type="button" aria-pressed={lang === "es"} onClick={() => chooseLang("es")} lang="es">
                  Español
                </button>
              </span>
            </span>
          </div>
        </div>
        <nav className="sp-navbar" aria-label="StateProof">
          <div className="sp-wrap sp-nav-row">
            <a href={view === "home" ? "#top" : "/"} className="sp-brand" aria-label="StateProof">
              <Mark size="small" />
              <span>StateProof</span>
            </a>
            <div className="sp-nav-links">
              <a href={`${home}#how`}>{t.navHow}</a>
              <a href={`${home}#faq`}>{t.navFaq}</a>
              <a href={`${home}#waitlist`} className="sp-nav-cta">
                {t.navJoin}
              </a>
            </div>
          </div>
        </nav>
      </header>

      {view !== "home" ? (
        <LegalPage view={view} lang={lang} />
      ) : (
      <main id="top">
        <section className="sp-hero">
          <div className="sp-wrap sp-hero-grid">
            <div>
              <p className="sp-kicker">{t.heroKicker}</p>
              <h1 className="sp-h1">{t.heroTitle}</h1>
              <p className="sp-lead">{t.heroBody}</p>
              <div className="sp-hero-actions">
                <a href="#waitlist" className="sp-btn">
                  {t.heroCta}
                </a>
              </div>
              <p className="sp-note">{t.heroNote}</p>
            </div>
            <Board t={t} />
          </div>
        </section>

        <section className="sp-band">
          <div className="sp-wrap">
            <h2 className="sp-h2">{t.problemTitle}</h2>
            <div className="sp-three">
              {t.problems.map((p) => (
                <div key={p.title} className="sp-problem">
                  <h3 className="sp-h3">{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section">
          <div className="sp-wrap">
            <h2 className="sp-h2">{t.doesTitle}</h2>
            <div className="sp-two">
              <div className="sp-panel">
                <h3 className="sp-h3">{t.doesThresholdTitle}</h3>
                <ul className="sp-list">
                  {t.doesThreshold.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sp-panel">
                <h3 className="sp-h3">{t.doesReceiptTitle}</h3>
                <ul className="sp-list">
                  {t.doesReceipt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="sp-section sp-section-tight">
          <div className="sp-wrap">
            <h2 className="sp-h2">{t.stepsTitle}</h2>
            <ol className="sp-steps">
              {t.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="sp-step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="sp-h3">{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Waitlist t={t} lang={lang} />

        <section id="faq" className="sp-section">
          <div className="sp-wrap sp-faq">
            <h2 className="sp-h2">{t.faqTitle}</h2>
            <dl>
              {t.faqs.map((f) => (
                <div key={f.q} className="sp-faq-item">
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      )}

      <footer className="sp-footer">
        <div className="sp-wrap">
          <div className="sp-footer-grid">
            <div className="sp-footer-brand">
              <div className="sp-brand sp-brand-footer">
                <Mark size="small" />
                <span>StateProof</span>
              </div>
              <p className="sp-footer-lead">{t.footerTagline}</p>
              <div className="sp-seal-note">
                <svg className="sp-seal-big" viewBox="0 0 32 32" aria-hidden="true">
                  <circle cx="16" cy="16" r="15" fill="var(--sp-field)" />
                  {SEAL_DOTS.map((d, i) => (
                    <circle key={i} cx={d.cx} cy={d.cy} r="0.46" fill="var(--sp-paper)" />
                  ))}
                  <path d="M10.5 16.3l3.6 3.6 7.4-7.4" fill="none" stroke="var(--sp-paper)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{t.sealNote}</p>
              </div>
            </div>
            <nav className="sp-footer-col" aria-label={t.footerProduct}>
              <h2>{t.footerProduct}</h2>
              <a href={`${home}#how`}>{t.navHow}</a>
              <a href={`${home}#faq`}>{t.navFaq}</a>
              <a href={`${home}#waitlist`}>{t.navJoin}</a>
            </nav>
            <div className="sp-footer-col">
              <h2>{t.footerCompany}</h2>
              <p>Receipters LLC</p>
              <p>{t.footerAddress}</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href="https://www.receipters.com">receipters.com</a>
            </div>
            <nav className="sp-footer-col" aria-label={t.footerLegal}>
              <h2>{t.footerLegal}</h2>
              <a href="/privacy-notice">{t.footerPrivacy}</a>
              <a href="/cookies">{t.footerCookies}</a>
            </nav>
          </div>
          <div className="sp-footer-bottom">
            <p>
              © {new Date().getFullYear()} Receipters LLC. {t.footerRights}
            </p>
            <p>{t.footerDisclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// The seal: 54 dots (the 50 states, Washington DC, Puerto Rico, Guam and the US Virgin Islands) around a check.
const SEAL_DOTS = Array.from({ length: 54 }, (_, i) => {
  const a = -Math.PI / 2 + (2 * Math.PI * i) / 54;
  return { cx: +(16 + 11.6 * Math.cos(a)).toFixed(2), cy: +(16 + 11.6 * Math.sin(a)).toFixed(2) };
});

function Mark({ size }: { size?: "small" }) {
  return (
    <svg className="sp-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      {size === "small" ? (
        <circle cx="16" cy="16" r="11.6" fill="none" stroke="var(--sp-paper)" strokeWidth="1.1" />
      ) : (
        SEAL_DOTS.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r="0.46" fill="var(--sp-paper)" />)
      )}
      <path d="M10.5 16.3l3.6 3.6 7.4-7.4" fill="none" stroke="var(--sp-paper)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Board({ t }: { t: (typeof copy)["en"] }) {
  const labels = { safe: t.boardSafe, near: t.boardNear, over: t.boardOver };
  return (
    <figure className="sp-board" aria-label={t.boardTitle}>
      <figcaption className="sp-board-head">
        <span>{t.boardTitle}</span>
        <span className="sp-legend">
          <i className="sp-key sp-key-own" /> {t.boardYourStore}
          <i className="sp-key sp-key-market" /> {t.boardMarketplace}
        </span>
      </figcaption>
      <ul className="sp-rows">
        {BOARD.map((row, i) => {
          const total = row.own + row.market;
          const s = status(total, row.limit);
          const ownPct = Math.min(100, (row.own / row.limit) * 100);
          const marketPct = Math.min(100 - ownPct, (row.market / row.limit) * 100);
          return (
            <li key={row.state} className={`sp-row sp-${s}`} style={{ ["--i" as string]: i }}>
              <div className="sp-row-top">
                <span className="sp-state">{row.state}</span>
                <span className="sp-status">{labels[s]}</span>
              </div>
              <div className="sp-bar" role="img" aria-label={`${row.state}: ${usd(total)} ${t.boardOf} ${usd(row.limit)}`}>
                <span className="sp-bar-own" style={{ width: `${ownPct}%` }} />
                <span className="sp-bar-market" style={{ width: `${marketPct}%` }} />
              </div>
              <div className="sp-row-figs">
                {usd(total)} <span>{t.boardOf} {usd(row.limit)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="sp-board-note">{t.boardNote}</p>
    </figure>
  );
}

function Waitlist({ t, lang }: { t: (typeof copy)["en"]; lang: Lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [channels, setChannels] = useState<string[]>([]);
  const [sales, setSales] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const toggle = (c: string) => setChannels((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/stateproof-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, channels, sales, website, lang }),
      });
      setState(res.ok ? "sent" : "failed");
    } catch {
      setState("failed");
    }
  };

  return (
    <section id="waitlist" className="sp-waitlist">
      <div className="sp-wrap sp-waitlist-grid">
        <div>
          <h2 className="sp-h2 sp-on-dark">{t.formTitle}</h2>
          <p className="sp-on-dark-muted">{t.formBody}</p>
        </div>
        {state === "sent" ? (
          <p className="sp-form sp-sent" role="status">
            {t.formSent}
          </p>
        ) : (
          <form className="sp-form" onSubmit={submit}>
            <label className="sp-field">
              <span>{t.formName}</span>
              <input required maxLength={120} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label className="sp-field">
              <span>{t.formEmail}</span>
              <input required type="email" maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </label>
            <fieldset className="sp-field">
              <legend>{t.formChannels}</legend>
              <div className="sp-chips">
                {CHANNELS.map((c) => (
                  <label key={c} className={`sp-chip ${channels.includes(c) ? "is-on" : ""}`}>
                    <input type="checkbox" checked={channels.includes(c)} onChange={() => toggle(c)} />
                    {t.channels[c]}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="sp-field">
              <span>{t.formSales}</span>
              <select value={sales} onChange={(e) => setSales(e.target.value)}>
                <option value="">{t.formSalesChoose}</option>
                {SALES_BANDS.map((b) => (
                  <option key={b} value={b}>
                    {t.salesBands[b]}
                  </option>
                ))}
              </select>
            </label>
            {/* Hidden from people; automated spam fills it in. */}
            <input className="sp-hp" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden="true" name="website" />
            <button type="submit" className="sp-btn sp-btn-full" disabled={state === "sending"}>
              {state === "sending" ? t.formSending : t.formSubmit}
            </button>
            {state === "failed" && (
              <p className="sp-error" role="alert">
                {t.formFailed} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            )}
            <p className="sp-privacy">{t.formPrivacy}</p>
          </form>
        )}
      </div>
    </section>
  );
}

function LegalPage({ view, lang }: { view: Exclude<View, "home">; lang: Lang }) {
  const doc = legal[lang][view];
  return (
    <main id="top" className="sp-section">
      <article className="sp-wrap sp-legal">
        <h1 className="sp-h2">{doc.title}</h1>
        <p className="sp-legal-date">{doc.updated}</p>
        <p className="sp-lead sp-legal-intro">{doc.intro}</p>
        {doc.sections.map((sec) => (
          <section key={sec.h}>
            <h2 className="sp-h3">{sec.h}</h2>
            {sec.p.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
