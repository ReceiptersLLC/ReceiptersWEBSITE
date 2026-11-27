// "About us" page and the "Why StateProof" home section, in English and Spanish.
// Everything here must stay true: no invented customer numbers, quotes or certifications.

const en = {
  why: {
    title: "Why sellers choose StateProof",
    intro: "Most small sellers track sales tax one of three ways. Only one of them sees the whole picture.",
    options: [
      {
        name: "Spreadsheets and guesswork",
        verdict: "Misses what matters",
        body: "A spreadsheet only knows what you type into it. It doesn't add up Amazon and Etsy sales by state, doesn't know when a state changes its rules, and doesn't warn you before you cross a line.",
      },
      {
        name: "Enterprise tax suites",
        verdict: "Built for bigger companies",
        body: "Powerful tools for businesses with a tax team, with setup, contracts and per-state pricing to match. More than a growing online store needs before it has its first registration.",
      },
      {
        name: "StateProof",
        verdict: "Built for you",
        body: "One view of every channel, state by state, with alerts before you cross a limit, plain-English next steps, and the receipts to back up your expenses. Priced for small sellers.",
        ours: true,
      },
    ],
    forTitle: "Who it's for",
    segments: [
      { title: "Shopify and own-store brands", body: "Selling across the country from your own site, and not sure which states you've reached." },
      { title: "Amazon and Etsy sellers adding a store", body: "Marketplace sales can count toward your limit in many states, even though the marketplace collects the tax." },
      { title: "Bookkeepers and accountants", body: "One dashboard across your e-commerce clients, so nobody finds out about a state from a notice in the mail." },
    ],
  },
  about: {
    title: "About StateProof",
    lead: "We built StateProof because small online sellers deserve the same early warning that big companies pay tax teams for.",
    storyTitle: "Our story",
    story: [
      "StateProof comes from Receipters, a company that turns receipts into clean, structured records. Our point-of-sale and receipt systems keep tax records correct from the moment a sale happens.",
      "When we looked at the United States, we saw the same problem in a different form. Since 2018, states can require online sellers with no office in the state to collect sales tax once their sales pass a limit. Each state sets its own limit, its own rules on what counts, and its own deadlines. Large companies have software and tax teams for this. Small sellers usually find out from a letter.",
      "StateProof applies what we have built, receipts turned into records and records checked against the rules, to US sales tax limits and IRS record-keeping. It is run by Receipters LLC from Newark, New Jersey.",
    ],
    beliefsTitle: "What we stand by",
    beliefs: [
      { title: "Accuracy you can check", body: "Every result shows the rule it is based on and links to the state's official page. Our rules table is checked against state sources and reviewed by a US tax professional before launch." },
      { title: "Your data stays yours", body: "We connect to your stores with read-only access, encrypt your data, and never sell it. You can export or delete it at any time." },
      { title: "Plain English", body: "No jargon. Every alert says what happened, why it matters and what to do next." },
      { title: "Honest about our limits", body: "StateProof monitors and keeps records. It is not tax advice, and we will always tell you when a question needs a tax professional." },
    ],
    teamTitle: "Who is behind it",
    founderName: "Gordon Odira",
    founderRole: "Founder, Receipters",
    founderBio: "A senior integration engineer with more than 8 years on federal, state and private technology deployments. BSc and Master's in Electrical and Computer Engineering from Rutgers University and NJIT.",
    teamBody: "StateProof is built by the Receipters team in Newark, New Jersey, the same engineers who run Receipters' receipt and point-of-sale systems.",
    securityTitle: "Security from day one",
    securityBody: "Receipters is preparing for ISO/IEC 27001 certification, the international standard for information security. StateProof is being built under the same controls: read-only connections, encryption, access logging and regular reviews.",
    ctaTitle: "Be one of our first sellers",
    ctaBody: "Join the waitlist and we'll send you a free check of where your store stands, state by state.",
    ctaButton: "Join the waitlist",
  },
};

const es: typeof en = {
  why: {
    title: "Por qué los vendedores eligen StateProof",
    intro: "La mayoría de los pequeños vendedores controla el impuesto sobre las ventas de una de tres formas. Solo una ve el panorama completo.",
    options: [
      {
        name: "Hojas de cálculo y suposiciones",
        verdict: "Se pierde lo importante",
        body: "Una hoja de cálculo solo sabe lo que escribes en ella. No suma las ventas de Amazon y Etsy por estado, no sabe cuándo un estado cambia sus normas y no te avisa antes de que cruces una línea.",
      },
      {
        name: "Suites fiscales empresariales",
        verdict: "Hechas para empresas grandes",
        body: "Herramientas potentes para empresas con un equipo fiscal, con configuración, contratos y precios por estado acordes. Más de lo que necesita una tienda en línea en crecimiento antes de su primer registro.",
      },
      {
        name: "StateProof",
        verdict: "Hecho para ti",
        body: "Una vista de todos tus canales, estado por estado, con alertas antes de que superes un límite, pasos claros y los recibos que respaldan tus gastos. Con precios para pequeños vendedores.",
        ours: true,
      },
    ],
    forTitle: "Para quién es",
    segments: [
      { title: "Marcas en Shopify y tiendas propias", body: "Vendes a todo el país desde tu propio sitio y no sabes a qué estados ya has llegado." },
      { title: "Vendedores de Amazon y Etsy que abren su tienda", body: "Las ventas en marketplaces pueden contar para tu límite en muchos estados, aunque el marketplace cobre el impuesto." },
      { title: "Contadores y tenedores de libros", body: "Un solo panel para todos tus clientes de comercio electrónico, para que nadie se entere de un estado por una carta." },
    ],
  },
  about: {
    title: "Sobre StateProof",
    lead: "Creamos StateProof porque los pequeños vendedores en línea merecen el mismo aviso anticipado por el que las grandes empresas pagan equipos fiscales.",
    storyTitle: "Nuestra historia",
    story: [
      "StateProof nace de Receipters, una empresa que convierte recibos en registros limpios y estructurados. Nuestros sistemas de punto de venta y recibos mantienen los registros fiscales correctos desde el momento de la venta.",
      "Al mirar a Estados Unidos, vimos el mismo problema con otra forma. Desde 2018, los estados pueden exigir a los vendedores en línea sin oficina en el estado que cobren el impuesto sobre las ventas cuando sus ventas superan un límite. Cada estado fija su propio límite, sus propias reglas sobre qué cuenta y sus propios plazos. Las grandes empresas tienen software y equipos fiscales para esto. Los pequeños vendedores suelen enterarse por una carta.",
      "StateProof aplica lo que hemos construido, recibos convertidos en registros y registros comprobados con las normas, a los límites del impuesto sobre las ventas de EE. UU. y a los registros para el IRS. Lo gestiona Receipters LLC desde Newark, Nueva Jersey.",
    ],
    beliefsTitle: "Lo que defendemos",
    beliefs: [
      { title: "Precisión que puedes comprobar", body: "Cada resultado muestra la norma en la que se basa y enlaza a la página oficial del estado. Nuestra tabla de normas se comprueba con fuentes estatales y la revisa un profesional fiscal de EE. UU. antes del lanzamiento." },
      { title: "Tus datos son tuyos", body: "Nos conectamos a tus tiendas con acceso de solo lectura, ciframos tus datos y nunca los vendemos. Puedes exportarlos o eliminarlos cuando quieras." },
      { title: "Lenguaje claro", body: "Sin tecnicismos. Cada alerta dice qué pasó, por qué importa y qué hacer después." },
      { title: "Honestos sobre nuestros límites", body: "StateProof supervisa y guarda registros. No es asesoría fiscal, y siempre te diremos cuándo una pregunta necesita a un profesional fiscal." },
    ],
    teamTitle: "Quién está detrás",
    founderName: "Gordon Odira",
    founderRole: "Fundador, Receipters",
    founderBio: "Ingeniero de integración sénior con más de 8 años en implementaciones tecnológicas federales, estatales y privadas. Licenciatura y maestría en Ingeniería Eléctrica e Informática por la Universidad Rutgers y NJIT.",
    teamBody: "StateProof lo construye el equipo de Receipters en Newark, Nueva Jersey, los mismos ingenieros que gestionan los sistemas de recibos y punto de venta de Receipters.",
    securityTitle: "Seguridad desde el primer día",
    securityBody: "Receipters se está preparando para la certificación ISO/IEC 27001, la norma internacional de seguridad de la información. StateProof se construye con los mismos controles: conexiones de solo lectura, cifrado, registro de accesos y revisiones periódicas.",
    ctaTitle: "Sé uno de nuestros primeros vendedores",
    ctaBody: "Únete a la lista de espera y te enviaremos una revisión gratuita de la situación de tu tienda, estado por estado.",
    ctaButton: "Únete a la lista de espera",
  },
};

export const aboutCopy = { en, es };
