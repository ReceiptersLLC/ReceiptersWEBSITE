"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CHANNELS, SALES_BANDS, copy, type Lang } from "./copy";

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

export default function StateProofLanding() {
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

  const switchLang = () => {
    const next: Lang = lang === "en" ? "es" : "en";
    setLang(next);
    try {
      localStorage.setItem("sp_lang", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="sp">
      <header className="sp-top">
        <div className="sp-wrap sp-top-row">
          <a href="#top" className="sp-brand" aria-label="StateProof">
            <Mark />
            <span>StateProof</span>
          </a>
          <nav className="sp-top-nav">
            <button type="button" className="sp-lang" onClick={switchLang} aria-label={t.langSwitchLabel}>
              {t.langSwitch}
            </button>
            <a href="#waitlist" className="sp-btn sp-btn-small">
              {t.navJoin}
            </a>
          </nav>
        </div>
      </header>

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

        <section className="sp-section sp-section-tight">
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

        <section className="sp-section">
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

      <footer className="sp-footer">
        <div className="sp-wrap sp-footer-row">
          <div>
            <div className="sp-brand sp-brand-footer">
              <Mark />
              <span>{t.footerBy}</span>
            </div>
            <p>{t.footerAddress}</p>
          </div>
          <div>
            <p>
              {t.footerContact}: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p className="sp-footer-small">{t.footerDisclaimer}</p>
            <p className="sp-footer-small">© {new Date().getFullYear()} Receipters LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Mark() {
  // A boundary line with a check: a state line you can see coming.
  return (
    <svg className="sp-mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="currentColor" />
      <path d="M21 5v22" stroke="var(--sp-paper)" strokeWidth="2.4" strokeDasharray="3 3" />
      <path d="M7 16.5l3.6 3.6L17 13" fill="none" stroke="var(--sp-paper)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
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
