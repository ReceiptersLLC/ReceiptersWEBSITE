"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CHANNELS, SALES_BANDS, copy, type Lang } from "./copy";
import { legal } from "./legal";
import { aboutCopy } from "./about";
import { StatePage, StatePicker, StatesIndex } from "./StatePages";
import CookieConsent from "./CookieConsent";
import { openCookieSettings, rememberLang, savedLang } from "./consent";

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

export type View = "home" | "about" | "privacy" | "terms" | "cookies" | "states" | "state";

export default function StateProofLanding({ view = "home", slug }: { view?: View; slug?: string }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  useEffect(() => {
    const saved = savedLang();
    if (saved === "en" || saved === "es") return setLang(saved);
    if (navigator.language?.toLowerCase().startsWith("es")) setLang("es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // On the legal pages, section links go back to the landing page.
  const home = view === "home" ? "" : "/";

  const chooseLang = (next: Lang) => {
    setLang(next);
    rememberLang(next);
  };

  return (
    <div className="sp">
      <CookieConsent lang={lang} />
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
              <StatePicker lang={lang} current={view === "state" ? slug : undefined} />
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
              <a href="/" aria-current={view === "home" ? "page" : undefined}>
                {t.navHome}
              </a>
              <a href="/about" aria-current={view === "about" ? "page" : undefined}>
                {t.navAbout}
              </a>
              <a href={`${home}#how`}>{t.navHow}</a>
              <a href={`${home}#faq`}>{t.navFaq}</a>
              <a href={`${home}#waitlist`} className="sp-nav-cta">
                {t.navJoin}
              </a>
            </div>
          </div>
        </nav>
      </header>

      {view === "states" ? (
        <StatesIndex lang={lang} />
      ) : view === "state" && slug ? (
        <StatePage slug={slug} lang={lang} />
      ) : view === "about" ? (
        <AboutPage lang={lang} />
      ) : view === "privacy" || view === "terms" || view === "cookies" ? (
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
              <div className="sp-panel sp-panel-ai">
                <h3 className="sp-h3">{t.doesAiTitle}</h3>
                <ul className="sp-list">
                  {t.doesAi.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sp-panel">
                <h3 className="sp-h3">{t.doesBooksTitle}</h3>
                <ul className="sp-list">
                  {t.doesBooks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WhySection lang={lang} />

        <section id="how" className="sp-section">
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
          <AppBand t={t} />
          <div className="sp-footer-grid">
            <div className="sp-footer-brand">
              <a href={view === "home" ? "#top" : "/"} className="sp-brand sp-brand-footer" aria-label="StateProof">
                <Mark size="small" />
                <span>StateProof</span>
              </a>
              <p className="sp-footer-lead">{t.footerTagline}</p>
              <a href={`${home}#waitlist`} className="sp-btn sp-btn-light sp-footer-cta">
                {t.navJoin}
              </a>
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
              <a href={`${home}#why`}>{t.footerWhy}</a>
              <a href={`${home}#who`}>{t.footerWho}</a>
              <a href={`${home}#faq`}>{t.navFaq}</a>
              <a href="/states">{lang === "es" ? "Reglas por estado" : "Rules by state"}</a>
              <a href={`${home}#waitlist`}>{t.navJoin}</a>
            </nav>
            <nav className="sp-footer-col" aria-label={t.footerCompany}>
              <h2>{t.footerCompany}</h2>
              <a href="/about">{t.navAbout}</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{t.footerContactUs}</a>
              <a href="https://www.receipters.com">{t.footerParent}</a>
            </nav>
            <nav className="sp-footer-col" aria-label={t.footerLegal}>
              <h2>{t.footerLegal}</h2>
              <a href="/privacy-notice" aria-current={view === "privacy" ? "page" : undefined}>{t.footerPrivacy}</a>
              <a href="/terms-of-service" aria-current={view === "terms" ? "page" : undefined}>{t.footerTerms}</a>
              <a href="/cookies" aria-current={view === "cookies" ? "page" : undefined}>{t.footerCookies}</a>
              <button type="button" className="sp-footer-linkbtn" onClick={openCookieSettings}>
                {lang === "es" ? "Configuración de cookies" : "Cookie settings"}
              </button>
              <span className="sp-footer-note">{lang === "es" ? "No vendemos ni compartimos tu información" : "We don't sell or share your information"}</span>
            </nav>
            <div className="sp-footer-col">
              <h2>{t.footerContact}</h2>
              <p className="sp-footer-label">{t.footerWrite}</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <p className="sp-footer-label">{t.footerVisit}</p>
              <address>
                Receipters LLC
                <br />
                355 Ridgewood Ave, Suite 1
                <br />
                Newark, NJ 07112
              </address>
            </div>
          </div>
          <div className="sp-footer-bottom">
            <p>
              © {new Date().getFullYear()} Receipters LLC. {t.footerRights} {t.footerMade}
            </p>
            <div className="sp-footer-tools">
              <span className="sp-langs" role="group" aria-label={t.footerLanguage}>
                <button type="button" aria-pressed={lang === "en"} onClick={() => chooseLang("en")} lang="en">
                  English
                </button>
                <button type="button" aria-pressed={lang === "es"} onClick={() => chooseLang("es")} lang="es">
                  Español
                </button>
              </span>
              <a href="#top" className="sp-footer-top">{t.footerTop} ↑</a>
            </div>
          </div>
          <p className="sp-footer-disclaimer">{t.footerDisclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

// The seal: 54 dots (the 50 states, Washington DC, Puerto Rico, Guam and the US Virgin Islands) around a check.
const SEAL_DOTS = Array.from({ length: 54 }, (_, i) => {
  const a = -Math.PI / 2 + (2 * Math.PI * i) / 54;
  return { cx: +(16 + 12.7 * Math.cos(a)).toFixed(2), cy: +(16 + 12.7 * Math.sin(a)).toFixed(2) };
});

function Mark({ size }: { size?: "small" }) {
  // Always the full seal: 54 dots for the 50 states, DC, Puerto Rico, Guam and the US Virgin Islands.
  return (
    <svg className={`sp-mark${size === "small" ? " sp-mark-small" : ""}`} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15.5" fill="currentColor" />
      {SEAL_DOTS.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="0.47" fill="var(--sp-paper)" />
      ))}
      <path d="M10.6 16.3l3.6 3.6 7.2-7.2" fill="none" stroke="var(--sp-paper)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
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

function WhySection({ lang }: { lang: Lang }) {
  const w = aboutCopy[lang].why;
  return (
    <section id="why" className="sp-band">
      <div className="sp-wrap">
        <h2 className="sp-h2">{w.title}</h2>
        <p className="sp-section-intro">{w.intro}</p>
        <div className="sp-compare">
          {w.options.map((o) => (
            <div key={o.name} className={`sp-option${"ours" in o && o.ours ? " is-ours" : ""}`}>
              <p className="sp-option-verdict">{o.verdict}</p>
              <h3 className="sp-h3">{o.name}</h3>
              <p>{o.body}</p>
            </div>
          ))}
        </div>
        <h3 id="who" className="sp-h3 sp-for-title">{w.forTitle}</h3>
        <div className="sp-three">
          {w.segments.map((s) => (
            <div key={s.title} className="sp-problem">
              <h4 className="sp-h4">{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage({ lang }: { lang: Lang }) {
  const a = aboutCopy[lang].about;
  return (
    <main id="top">
      <section className="sp-hero sp-about-hero">
        <div className="sp-wrap">
          <h1 className="sp-h1 sp-about-h1">{a.title}</h1>
          <p className="sp-lead">{a.lead}</p>
        </div>
      </section>
      <section className="sp-band">
        <div className="sp-wrap sp-about-story">
          <h2 className="sp-h2">{a.storyTitle}</h2>
          <div>
            {a.story.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="sp-section">
        <div className="sp-wrap">
          <h2 className="sp-h2">{a.beliefsTitle}</h2>
          <div className="sp-two">
            {a.beliefs.map((b) => (
              <div key={b.title} className="sp-panel">
                <h3 className="sp-h3">{b.title}</h3>
                <p className="sp-panel-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sp-section sp-section-tight">
        <div className="sp-wrap sp-two">
          <div className="sp-panel">
            <h2 className="sp-h3">{a.teamTitle}</h2>
            <p className="sp-founder">
              <strong>{a.founderName}</strong>
              <span>{a.founderRole}</span>
            </p>
            <p className="sp-panel-body">{a.founderBio}</p>
            <p className="sp-panel-body">{a.teamBody}</p>
          </div>
          <div className="sp-panel">
            <h2 className="sp-h3">{a.securityTitle}</h2>
            <p className="sp-panel-body">{a.securityBody}</p>
          </div>
        </div>
      </section>
      <section className="sp-waitlist">
        <div className="sp-wrap sp-about-cta">
          <div>
            <h2 className="sp-h2 sp-on-dark">{a.ctaTitle}</h2>
            <p className="sp-on-dark-muted">{a.ctaBody}</p>
          </div>
          <a href="/#waitlist" className="sp-btn sp-btn-light">
            {a.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}

function LegalPage({ view, lang }: { view: "privacy" | "terms" | "cookies"; lang: Lang }) {
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
            {sec.table && (
              <div className="sp-legal-scroll">
                <table className="sp-legal-table">
                  <thead>
                    <tr>
                      {sec.table.head.map((h) => (
                        <th key={h} scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (i === 0 ? <th key={i} scope="row"><code>{cell}</code></th> : <td key={i}>{cell}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </article>
    </main>
  );
}

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

// "Get the app" band: installs the StateProof web app where the browser allows it,
// and explains Add to Home Screen where it doesn't (iPhone and iPad).
function AppBand({ t }: { t: (typeof copy)["en"] }) {
  const [deferred, setDeferred] = useState<InstallEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
    if (window.matchMedia?.("(display-mode: standalone)").matches) setInstalled(true);
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as InstallEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === "accepted") setInstalled(true);
    setDeferred(null);
  };

  return (
    <div className="sp-appband">
      <div className="sp-appband-text">
        <h2>{t.footerAppTitle}</h2>
        <p>{t.footerAppBody}</p>
      </div>
      <div className="sp-appband-actions">
        {installed ? (
          <p className="sp-app-done">{t.footerInstalled}</p>
        ) : deferred ? (
          <button type="button" className="sp-btn sp-btn-light" onClick={install}>
            {t.footerInstall}
          </button>
        ) : (
          <p className="sp-app-help">{ios ? t.footerIosHelp : t.footerOtherHelp}</p>
        )}
        <ul className="sp-stores">
          <li>
            <span className="sp-store-name">{t.footerIos}</span>
            <span className="sp-store-soon">{t.footerSoon}</span>
          </li>
          <li>
            <span className="sp-store-name">{t.footerAndroid}</span>
            <span className="sp-store-soon">{t.footerSoon}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
