// Privacy notice and cookie notice for getstateproof.com, in English and Spanish.
// Keep these in step with what the site actually does: today it sets no cookies,
// runs no analytics, and stores only the visitor's language choice in their browser.

type Doc = { title: string; updated: string; intro: string; sections: { h: string; p: string[] }[] };

const CONTACT = "info@receipters.com";
const ADDRESS = "Receipters LLC, 355 Ridgewood Ave, Suite 1, Newark, NJ 07112";

const en: { privacy: Doc; cookies: Doc } = {
  privacy: {
    title: "Privacy notice",
    updated: "Last updated: 27 November 2026",
    intro:
      "This notice explains what StateProof collects on getstateproof.com, why, and what you can ask us to do with it. StateProof is a product of Receipters LLC.",
    sections: [
      {
        h: "Who we are",
        p: [`${ADDRESS}. Email: ${CONTACT}.`],
      },
      {
        h: "What we collect",
        p: [
          "When you join the waitlist: your name, your email address, where you sell (for example Shopify or Amazon) and the sales range you choose. We also note which language you used the page in.",
          "When you visit the site: our hosting provider keeps standard technical logs, such as your IP address, browser type and the pages requested, to keep the site running and secure.",
          "We do not collect payment details, store data or tax records on this site.",
        ],
      },
      {
        h: "Why we use it",
        p: [
          "To contact you about StateProof's pilot and launch, to send you the free check we offer early sellers, and to understand which sellers need StateProof most.",
          "We do not sell your information or share it for advertising.",
        ],
      },
      {
        h: "Who handles it for us",
        p: [
          "Amazon Web Services hosts the site. Your waitlist details are sent by email through our email provider to the Receipters inbox. These providers act on our behalf and may not use your information for their own purposes.",
        ],
      },
      {
        h: "How long we keep it",
        p: [
          "We keep waitlist details until StateProof launches and for up to 12 months after, unless you become a customer or ask us to delete them sooner.",
        ],
      },
      {
        h: "Your choices",
        p: [
          `You can ask us to show you, correct or delete your information, or to stop contacting you, at any time. Email ${CONTACT} from the address you signed up with. Every email we send about StateProof will also let you opt out.`,
        ],
      },
      {
        h: "Children",
        p: ["StateProof is for businesses. It is not meant for anyone under 18, and we do not knowingly collect their information."],
      },
      {
        h: "Changes",
        p: ["If we change how we use your information, we will update this page and the date at the top, and tell waitlist members by email about any significant change."],
      },
    ],
  },
  cookies: {
    title: "Cookies",
    updated: "Last updated: 27 November 2026",
    intro: "getstateproof.com does not use cookies, analytics or advertising trackers.",
    sections: [
      {
        h: "What the site stores in your browser",
        p: [
          "One item only: your language choice (English or Spanish), saved in your browser's local storage under the name \"sp_lang\", so the page opens in the same language next time. It never leaves your device, and nothing else is stored.",
          "You can remove it at any time by clearing this site's data in your browser settings. The site works the same without it.",
        ],
      },
      {
        h: "What we do not use",
        p: ["No analytics tools, no advertising or social media pixels, and no third-party scripts. Fonts and images are served from our own site."],
      },
      {
        h: "If this changes",
        p: [
          "If we add cookies or analytics in the future, for example when the StateProof app launches, we will list them here first and ask for your consent where the law requires it.",
        ],
      },
      {
        h: "Questions",
        p: [`Email ${CONTACT}.`],
      },
    ],
  },
};

const es: typeof en = {
  privacy: {
    title: "Aviso de privacidad",
    updated: "Última actualización: 27 de noviembre de 2026",
    intro:
      "Este aviso explica qué recopila StateProof en getstateproof.com, para qué y qué puedes pedirnos que hagamos con esos datos. StateProof es un producto de Receipters LLC.",
    sections: [
      {
        h: "Quiénes somos",
        p: [`${ADDRESS}. Correo electrónico: ${CONTACT}.`],
      },
      {
        h: "Qué recopilamos",
        p: [
          "Cuando te unes a la lista de espera: tu nombre, tu correo electrónico, dónde vendes (por ejemplo, Shopify o Amazon) y el rango de ventas que elijas. También anotamos el idioma en que usaste la página.",
          "Cuando visitas el sitio: nuestro proveedor de alojamiento guarda registros técnicos habituales, como tu dirección IP, el tipo de navegador y las páginas solicitadas, para mantener el sitio en funcionamiento y seguro.",
          "En este sitio no recopilamos datos de pago, datos de tu tienda ni registros fiscales.",
        ],
      },
      {
        h: "Para qué los usamos",
        p: [
          "Para contactarte sobre el piloto y el lanzamiento de StateProof, enviarte la revisión gratuita que ofrecemos a los primeros vendedores y entender qué vendedores necesitan más StateProof.",
          "No vendemos tu información ni la compartimos con fines publicitarios.",
        ],
      },
      {
        h: "Quién la gestiona por nosotros",
        p: [
          "Amazon Web Services aloja el sitio. Tus datos de la lista de espera se envían por correo electrónico, a través de nuestro proveedor de correo, a la bandeja de entrada de Receipters. Estos proveedores actúan en nuestro nombre y no pueden usar tu información para sus propios fines.",
        ],
      },
      {
        h: "Cuánto tiempo la conservamos",
        p: [
          "Conservamos los datos de la lista de espera hasta el lanzamiento de StateProof y hasta 12 meses después, salvo que te conviertas en cliente o nos pidas eliminarlos antes.",
        ],
      },
      {
        h: "Tus opciones",
        p: [
          `Puedes pedirnos en cualquier momento que te mostremos, corrijamos o eliminemos tu información, o que dejemos de contactarte. Escribe a ${CONTACT} desde la dirección con la que te registraste. Cada correo que enviemos sobre StateProof también te permitirá darte de baja.`,
        ],
      },
      {
        h: "Menores",
        p: ["StateProof es para empresas. No está dirigido a menores de 18 años y no recopilamos conscientemente su información."],
      },
      {
        h: "Cambios",
        p: ["Si cambiamos el uso de tu información, actualizaremos esta página y la fecha de arriba, y avisaremos por correo a los miembros de la lista de espera de cualquier cambio importante."],
      },
    ],
  },
  cookies: {
    title: "Cookies",
    updated: "Última actualización: 27 de noviembre de 2026",
    intro: "getstateproof.com no usa cookies, herramientas de análisis ni rastreadores publicitarios.",
    sections: [
      {
        h: "Lo que el sitio guarda en tu navegador",
        p: [
          "Solo un dato: tu elección de idioma (inglés o español), guardada en el almacenamiento local de tu navegador con el nombre \"sp_lang\", para que la página se abra en el mismo idioma la próxima vez. Nunca sale de tu dispositivo y no se guarda nada más.",
          "Puedes eliminarlo en cualquier momento borrando los datos de este sitio en la configuración de tu navegador. El sitio funciona igual sin él.",
        ],
      },
      {
        h: "Lo que no usamos",
        p: ["Ninguna herramienta de análisis, ningún píxel de publicidad o redes sociales y ningún script de terceros. Las fuentes y las imágenes se sirven desde nuestro propio sitio."],
      },
      {
        h: "Si esto cambia",
        p: [
          "Si en el futuro añadimos cookies o herramientas de análisis, por ejemplo cuando se lance la app de StateProof, las enumeraremos aquí primero y pediremos tu consentimiento cuando la ley lo exija.",
        ],
      },
      {
        h: "Preguntas",
        p: [`Escribe a ${CONTACT}.`],
      },
    ],
  },
};

export const legal = { en, es };
