"use client";

import { PLACES, placeBySlug, placeName, type Place, type Period } from "./states";
import type { Lang } from "./copy";

const usd = (n: number) => "$" + n.toLocaleString("en-US");
const pct = (n: number, lang: Lang) =>
  (lang === "es" ? n.toLocaleString("es-ES", { maximumFractionDigits: 2 }) : n.toLocaleString("en-US", { maximumFractionDigits: 2 })) + "%";

const T = {
  en: {
    statesLabel: "States",
    choose: "Choose a state",
    allStates: "All 54 states and territories",
    checked: "Checked November 2026",
    indexTitle: "Sales tax rules for online sellers, state by state",
    indexLead:
      "The 50 states, Washington DC, Puerto Rico, Guam and the US Virgin Islands: the 54 dots in our seal. Pick one to see when an online seller has to start collecting sales tax there, and what to do next.",
    groupThreshold: "Sales tax, with a limit for online sellers",
    groupNone: "No statewide sales tax",
    groupTerritory: "Territories",
    limit: "Sales limit",
    txns: "Number of sales",
    rule: "How the tests work",
    either: "Either test is enough",
    both: "You must pass both tests",
    dollarOnly: "Dollar test only",
    noTxn: "None",
    period: "Measured over",
    periods: {
      cy: "The current or previous calendar year",
      py: "The previous calendar year",
      "12m": "The previous 12 months",
      "4q": "The previous four quarters",
      ct: "The 12 months ending September 30",
    } as Record<Period, string>,
    marketplace: "Marketplace sales (Amazon, Etsy, eBay)",
    mpIn: "Count toward your limit",
    mpOut: "Do not count toward your limit",
    mpUnknown: "Not stated by the state; check its guidance",
    stateRate: "State rate",
    avgRate: "Average combined rate",
    maxLocal: "Local taxes add up to",
    noLocal: "No local sales taxes",
    whatTitle: "What this means for you",
    countsTitle: "Which sales count",
    counts: {
      all: "All your sales into the state count, including sales for resale and exempt sales.",
      retail: "Retail sales count. Sales for resale (wholesale) do not.",
      taxable: "Only taxable sales count. Sales for resale and exempt sales do not.",
    },
    countsUnknown: "The state does not say exactly which sales count. Most sellers count all their sales delivered into the state, which is the safer reading.",
    localTitle: "Local taxes",
    worthKnowing: "Worth knowing",
    stepsTitle: "When you cross the limit",
    steps: [
      "Register for a sales tax permit with the state before you collect any tax. Collecting without a permit is not allowed in most states.",
      "Start charging tax on sales into the state. Most states use the rate where your buyer receives the order, including local taxes.",
      "File returns on the schedule the state gives you (monthly, quarterly or yearly), even for periods with no sales.",
      "Keep your records: orders, receipts and returns. States can usually audit several years back.",
    ],
    stepsNone: [
      "You do not collect sales tax on orders shipped here.",
      "Your sales here still count as revenue for your income taxes, so keep the receipts.",
      "If you open an office, warehouse or store here, check the local business taxes.",
    ],
    agency: "Official source",
    sourceNote: "Figures checked in November 2026 against state guidance, the Tax Foundation's midyear 2026 rates and published state-by-state nexus tables. Rules change, so confirm with the state or a tax professional before you rely on them.",
    ctaTitle: "Let StateProof watch this for you",
    ctaBody: "StateProof adds up your sales from every channel, state by state, and warns you before you cross a limit.",
    cta: "Join the waitlist",
    back: "All states",
    noneHeadline: (n: string) => `${n} has no statewide sales tax`,
    alaskaHeadline: "No state sales tax, but local sales taxes apply",
    whatState: (p: Place, n: string) => {
      const amt = usd(p.amount!);
      if (p.logic === "and") return `You have to collect ${n} sales tax once your sales into ${n} pass ${amt} and you also make more than ${p.txns} sales there, ${periodLower("en", p.period!)}. Below either, you do not need to register.`;
      if (p.txns) return `You have to collect ${n} sales tax once your sales into ${n} reach ${amt}, or once you make ${p.txns} separate sales there, ${periodLower("en", p.period!)}. A store with many small orders can reach the ${p.txns}-sale test long before the dollar limit.`;
      return `You have to collect ${n} sales tax once your sales into ${n} reach ${amt}, ${periodLower("en", p.period!)}. The number of orders does not matter here, only the dollar total.`;
    },
    whatAlaska: "You collect local sales tax for the Alaska cities and boroughs that belong to the Remote Seller Sales Tax Commission once your sales into Alaska as a whole reach $100,000 in the current or previous calendar year.",
    whatNone: (n: string) => `Orders you ship to ${n} do not carry sales tax, so there is no limit to watch. Your sales here do not count toward any other state's limit either.`,
    whatTerritoryNone: (n: string) => `${n} has no sales tax that an online seller shipping from elsewhere has to collect.`,
  },
  es: {
    statesLabel: "Estados",
    choose: "Elige un estado",
    allStates: "Los 54 estados y territorios",
    checked: "Revisado en noviembre de 2026",
    indexTitle: "Reglas del impuesto sobre las ventas para vendedores en línea, estado por estado",
    indexLead:
      "Los 50 estados, Washington D. C., Puerto Rico, Guam y las Islas Vírgenes de EE. UU.: los 54 puntos de nuestro sello. Elige uno para ver cuándo un vendedor en línea debe empezar a cobrar el impuesto allí y qué hacer después.",
    groupThreshold: "Impuesto sobre las ventas, con límite para vendedores en línea",
    groupNone: "Sin impuesto estatal sobre las ventas",
    groupTerritory: "Territorios",
    limit: "Límite de ventas",
    txns: "Número de ventas",
    rule: "Cómo funcionan las pruebas",
    either: "Basta con una de las dos",
    both: "Debes superar ambas",
    dollarOnly: "Solo la prueba en dólares",
    noTxn: "Ninguno",
    period: "Periodo de medición",
    periods: {
      cy: "El año natural actual o el anterior",
      py: "El año natural anterior",
      "12m": "Los 12 meses anteriores",
      "4q": "Los cuatro trimestres anteriores",
      ct: "Los 12 meses que terminan el 30 de septiembre",
    } as Record<Period, string>,
    marketplace: "Ventas en marketplaces (Amazon, Etsy, eBay)",
    mpIn: "Cuentan para tu límite",
    mpOut: "No cuentan para tu límite",
    mpUnknown: "El estado no lo indica; revisa su guía",
    stateRate: "Tasa estatal",
    avgRate: "Tasa combinada promedio",
    maxLocal: "Los impuestos locales suman hasta",
    noLocal: "Sin impuestos locales sobre las ventas",
    whatTitle: "Qué significa para ti",
    countsTitle: "Qué ventas cuentan",
    counts: {
      all: "Cuentan todas tus ventas al estado, incluidas las de reventa y las exentas.",
      retail: "Cuentan las ventas al por menor. Las ventas para reventa (al por mayor) no.",
      taxable: "Solo cuentan las ventas gravables. Las de reventa y las exentas no.",
    },
    countsUnknown: "El estado no indica exactamente qué ventas cuentan. La mayoría de los vendedores cuentan todas sus ventas entregadas en el estado, que es la lectura más segura.",
    localTitle: "Impuestos locales",
    worthKnowing: "Conviene saber",
    stepsTitle: "Cuando superas el límite",
    steps: [
      "Regístrate para obtener un permiso de impuesto sobre las ventas antes de cobrar ningún impuesto. En la mayoría de los estados no se permite cobrar sin permiso.",
      "Empieza a cobrar el impuesto en las ventas al estado. La mayoría de los estados usan la tasa del lugar donde el comprador recibe el pedido, incluidos los impuestos locales.",
      "Presenta declaraciones con la frecuencia que te asigne el estado (mensual, trimestral o anual), incluso en periodos sin ventas.",
      "Guarda tus registros: pedidos, recibos y devoluciones. Los estados suelen poder auditar varios años atrás.",
    ],
    stepsNone: [
      "No cobras impuesto sobre las ventas en los pedidos enviados aquí.",
      "Tus ventas aquí siguen contando como ingresos para tus impuestos sobre la renta, así que guarda los recibos.",
      "Si abres una oficina, almacén o tienda aquí, revisa los impuestos locales a las empresas.",
    ],
    agency: "Fuente oficial",
    sourceNote: "Cifras revisadas en noviembre de 2026 con la guía de cada estado, las tasas de mitad de 2026 de la Tax Foundation y tablas publicadas de nexo por estado. Las reglas cambian, así que confírmalas con el estado o con un profesional fiscal antes de basarte en ellas.",
    ctaTitle: "Deja que StateProof lo vigile por ti",
    ctaBody: "StateProof suma tus ventas de todos los canales, estado por estado, y te avisa antes de que superes un límite.",
    cta: "Unirme a la lista de espera",
    back: "Todos los estados",
    noneHeadline: (n: string) => `${n} no tiene impuesto estatal sobre las ventas`,
    alaskaHeadline: "Sin impuesto estatal sobre las ventas, pero con impuestos locales",
    whatState: (p: Place, n: string) => {
      const amt = usd(p.amount!);
      if (p.logic === "and") return `Debes cobrar el impuesto sobre las ventas de ${n} cuando tus ventas a ${n} superen ${amt} y además hagas más de ${p.txns} ventas allí, ${periodLower("es", p.period!)}. Si no cumples ambas, no necesitas registrarte.`;
      if (p.txns) return `Debes cobrar el impuesto sobre las ventas de ${n} cuando tus ventas a ${n} lleguen a ${amt}, o cuando hagas ${p.txns} ventas separadas allí, ${periodLower("es", p.period!)}. Una tienda con muchos pedidos pequeños puede llegar a las ${p.txns} ventas mucho antes que al límite en dólares.`;
      return `Debes cobrar el impuesto sobre las ventas de ${n} cuando tus ventas a ${n} lleguen a ${amt}, ${periodLower("es", p.period!)}. Aquí no importa el número de pedidos, solo el total en dólares.`;
    },
    whatAlaska: "Cobras el impuesto local de las ciudades y municipios de Alaska que pertenecen a la Remote Seller Sales Tax Commission cuando tus ventas a todo Alaska llegan a 100 000 USD en el año natural actual o el anterior.",
    whatNone: (n: string) => `Los pedidos que envías a ${n} no llevan impuesto sobre las ventas, así que no hay límite que vigilar. Tus ventas aquí tampoco cuentan para el límite de otro estado.`,
    whatTerritoryNone: (n: string) => `${n} no tiene un impuesto sobre las ventas que deba cobrar un vendedor en línea que envía desde otro lugar.`,
  },
};

function periodLower(lang: Lang, p: Period) {
  const s = T[lang].periods[p];
  const lower = s.charAt(0).toLowerCase() + s.slice(1);
  return lang === "es" ? `medido en ${lower}` : `measured over ${lower}`;
}

export const stateUi = (lang: Lang) => T[lang];

const sorted = (lang: Lang) => [...PLACES].sort((a, b) => placeName(a, lang).localeCompare(placeName(b, lang), lang));

/** The States dropdown in the top strip. */
export function StatePicker({ lang }: { lang: Lang; current?: string }) {
  const t = T[lang];
  return (
    <label className="sp-state-pick">
      <span className="sp-visually-hidden">{t.choose}</span>
      <select
        aria-label={t.choose}
        value=""
        onChange={(e) => {
          const v = e.target.value;
          // Open the state in a new tab; this page stays where it is and the menu goes back to "States".
          if (v) window.open(v === "__all" ? "/states" : `/states/${v}`, "_blank", "noopener");
          e.target.value = "";
        }}
      >
        <option value="">{t.statesLabel}</option>
        <option value="__all">{t.allStates}</option>
        {sorted(lang).map((p) => (
          <option key={p.slug} value={p.slug}>
            {placeName(p, lang)}
          </option>
        ))}
      </select>
    </label>
  );
}

export function StatesIndex({ lang }: { lang: Lang }) {
  const t = T[lang];
  const list = sorted(lang);
  const groups: { title: string; items: Place[] }[] = [
    { title: t.groupThreshold, items: list.filter((p) => p.kind === "state" || p.kind === "alaska") },
    { title: t.groupNone, items: list.filter((p) => p.kind === "none") },
    { title: t.groupTerritory, items: list.filter((p) => p.kind === "territory-sales" || p.kind === "territory-none") },
  ];
  return (
    <main id="top">
      <section className="sp-hero sp-about-hero sp-state-hero">
        <div className="sp-wrap">
          <h1 className="sp-h1 sp-about-h1">{t.indexTitle}</h1>
          <p className="sp-lead">{t.indexLead}</p>
        </div>
      </section>
      <section className="sp-section">
        <div className="sp-wrap">
          {groups.map((g) => (
            <div key={g.title} className="sp-states-group">
              <h2 className="sp-h3">{g.title}</h2>
              <ul className="sp-states-grid">
                {g.items.map((p) => (
                  <li key={p.slug}>
                    <a href={`/states/${p.slug}`} target="_blank" rel="noopener">
                      <span className="sp-state-abbr">{p.abbr}</span>
                      <span className="sp-state-name">{placeName(p, lang)}</span>
                      <span className="sp-state-limit">{summary(p, lang)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="sp-source-note">{t.sourceNote}</p>
        </div>
      </section>
    </main>
  );
}

function summary(p: Place, lang: Lang) {
  const es = lang === "es";
  if (p.kind === "none" || p.kind === "territory-none") return es ? "Sin impuesto sobre las ventas" : "No sales tax";
  if (p.kind === "alaska") return es ? "100 000 USD (impuestos locales)" : "$100,000 (local taxes)";
  const amt = usd(p.amount!);
  if (!p.txns) return amt;
  return `${amt} ${p.logic === "and" ? (es ? "y" : "and") : es ? "o" : "or"} ${p.txns} ${es ? "ventas" : "sales"}`;
}

export function StatePage({ slug, lang }: { slug: string; lang: Lang }) {
  const t = T[lang];
  const p = placeBySlug(slug);
  if (!p) return null;
  const n = placeName(p, lang);
  const taxes = p.kind === "state" || p.kind === "alaska" || p.kind === "territory-sales";

  let headline: string;
  if (p.kind === "none") headline = t.noneHeadline(n);
  else if (p.kind === "territory-none") headline = t.noneHeadline(n);
  else if (p.kind === "alaska") headline = t.alaskaHeadline;
  else headline = `${t.limit}: ${summary(p, lang)}`;

  let what: string;
  if (p.kind === "none") what = t.whatNone(n);
  else if (p.kind === "territory-none") what = t.whatTerritoryNone(n);
  else if (p.kind === "alaska") what = t.whatAlaska;
  else what = t.whatState(p, n);

  const facts: { k: string; v: string }[] = [];
  if (taxes) {
    facts.push({ k: t.limit, v: usd(p.amount!) });
    facts.push({ k: t.txns, v: p.txns ? `${p.txns}` : t.noTxn });
    facts.push({ k: t.rule, v: p.txns ? (p.logic === "and" ? t.both : t.either) : t.dollarOnly });
    facts.push({ k: t.period, v: t.periods[p.period!] });
    if (p.kind !== "territory-sales")
      facts.push({ k: t.marketplace, v: p.marketplace === "in" ? t.mpIn : p.marketplace === "out" ? t.mpOut : t.mpUnknown });
  }
  if (p.stateRate !== undefined && p.kind === "state") {
    facts.push({ k: t.stateRate, v: pct(p.stateRate, lang) });
    if (p.avgLocal !== undefined && p.avgLocal > 0) facts.push({ k: t.avgRate, v: pct(+(p.stateRate + p.avgLocal).toFixed(2), lang) });
  }

  return (
    <main id="top">
      <section className="sp-hero sp-about-hero sp-state-hero">
        <div className="sp-wrap">
          <p className="sp-crumb">
            <a href="/states">{t.back}</a> / {p.abbr}
          </p>
          <h1 className="sp-h1 sp-about-h1">{n}</h1>
          <p className="sp-state-headline">{headline}</p>
          <p className="sp-state-checked">{t.checked}</p>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-wrap sp-state-layout">
          <div className="sp-state-main">
            <h2 className="sp-h3">{t.whatTitle}</h2>
            <p className="sp-state-what">{what}</p>

            {p.note && (
              <>
                <h2 className="sp-h3">{t.worthKnowing}</h2>
                <p>{p.note[lang]}</p>
              </>
            )}

            {p.kind === "state" && (
              <>
                <h2 className="sp-h3">{t.countsTitle}</h2>
                <p>{p.counts ? t.counts[p.counts] : t.countsUnknown}</p>
              </>
            )}

            {p.kind === "state" && p.maxLocal !== undefined && (
              <>
                <h2 className="sp-h3">{t.localTitle}</h2>
                <p>
                  {p.maxLocal > 0
                    ? lang === "es"
                      ? `Además de la tasa estatal del ${pct(p.stateRate!, lang)}, las ciudades y condados pueden añadir hasta un ${pct(p.maxLocal, lang)}. La tasa combinada promedio es del ${pct(+(p.stateRate! + p.avgLocal!).toFixed(2), lang)}, así que cobra la tasa de la dirección de entrega, no solo la estatal.`
                      : `On top of the ${pct(p.stateRate!, lang)} state rate, cities and counties can add up to ${pct(p.maxLocal, lang)}. The average combined rate is ${pct(+(p.stateRate! + p.avgLocal!).toFixed(2), lang)}, so charge the rate for the delivery address, not just the state rate.`
                    : lang === "es"
                      ? `No hay impuestos locales sobre las ventas: se aplica la misma tasa del ${pct(p.stateRate!, lang)} en todo el estado.`
                      : `There are no local sales taxes: the same ${pct(p.stateRate!, lang)} rate applies everywhere in the state.`}
                </p>
              </>
            )}

            <h2 className="sp-h3">{taxes ? t.stepsTitle : t.worthKnowing}</h2>
            <ol className="sp-state-steps">
              {(taxes ? t.steps : t.stepsNone).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <p className="sp-source-note">
              {t.agency}:{" "}
              <a href={p.agencyUrl} rel="noopener" target="_blank">
                {p.agency}
              </a>
              . {t.sourceNote}
            </p>
          </div>

          <aside className="sp-state-facts" aria-label={n}>
            <dl>
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="sp-state-cta">
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaBody}</p>
              <a href="/#waitlist" className="sp-btn sp-btn-light">
                {t.cta}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
