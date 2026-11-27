// Privacy notice and cookie notice for getstateproof.com, in English and Spanish.
// Keep these in step with what the site actually does: today it sets no cookies,
// runs no analytics, and stores only the visitor's language choice in their browser.

type Doc = { title: string; updated: string; intro: string; sections: { h: string; p: string[] }[] };

const CONTACT = "info@receipters.com";
const ADDRESS = "Receipters LLC, 355 Ridgewood Ave, Suite 1, Newark, NJ 07112";

const en: { privacy: Doc; cookies: Doc; terms: Doc } = {
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
  terms: {
    title: "Terms of use",
    updated: "Last updated: 27 November 2026",
    intro:
      "These terms apply to your use of getstateproof.com and to joining the StateProof waitlist. By using the site, you agree to them. StateProof is a product of Receipters LLC.",
    sections: [
      {
        h: "Who we are",
        p: [`${ADDRESS}. Email: ${CONTACT}.`],
      },
      {
        h: "What this site is",
        p: [
          "StateProof is not yet launched. This site describes the product we are building and lets you join a waitlist. Features, pricing and launch dates may change before launch.",
          "Separate terms will apply when you sign up for the StateProof service. We will show you those terms before you sign up.",
        ],
      },
      {
        h: "The waitlist and the free check",
        p: [
          "Joining the waitlist is free and does not commit you or us to anything. You can ask to leave it at any time by emailing us.",
          "If we send you a free check of where your store stands, it is an estimate based on the information you give us and the state rules we have at that time. It is for your information only.",
        ],
      },
      {
        h: "Not tax or legal advice",
        p: [
          "StateProof monitors sales and keeps records. Nothing on this site, in the free check or in our emails is tax, legal or accounting advice. Talk to a qualified tax professional before you register, collect or file in any state.",
          "The state figures and examples on this site are illustrations. State rules change, and you should check them with the state or a tax professional before you rely on them.",
        ],
      },
      {
        h: "Using the site",
        p: [
          "Please do not misuse the site: for example, do not try to break or overload it, get into parts of it you are not meant to reach, submit someone else's details to the waitlist, or copy the site's content to pass it off as your own.",
        ],
      },
      {
        h: "Our name and content",
        p: [
          "The StateProof name, the seal logo, and the text and design of this site belong to Receipters LLC. You may link to the site and quote short parts with credit, but you may not use our name or logo in a way that suggests we endorse you.",
        ],
      },
      {
        h: "Links to other sites",
        p: ["We link to other sites, such as state tax agencies. We do not control them and are not responsible for their content."],
      },
      {
        h: "No guarantee",
        p: [
          "We work to keep the site accurate and available, but we provide it as it is, without warranties of any kind, to the extent the law allows.",
          "To the extent the law allows, Receipters LLC is not liable for any loss that comes from using or relying on this site, including tax, interest or penalties owed to any state.",
        ],
      },
      {
        h: "Governing law",
        p: ["These terms are governed by the laws of the State of New Jersey, USA. Any dispute will be handled by the courts of New Jersey, unless the law where you live says otherwise."],
      },
      {
        h: "Changes",
        p: ["We may update these terms. We will change the date at the top when we do. The version on this page is the one that applies."],
      },
      {
        h: "Questions",
        p: [`Email ${CONTACT}.`],
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
  terms: {
    title: "Términos de uso",
    updated: "Última actualización: 27 de noviembre de 2026",
    intro:
      "Estos términos se aplican al uso de getstateproof.com y a la inscripción en la lista de espera de StateProof. Al usar el sitio, los aceptas. StateProof es un producto de Receipters LLC.",
    sections: [
      {
        h: "Quiénes somos",
        p: [`${ADDRESS}. Correo: ${CONTACT}.`],
      },
      {
        h: "Qué es este sitio",
        p: [
          "StateProof aún no se ha lanzado. Este sitio describe el producto que estamos creando y te permite unirte a una lista de espera. Las funciones, los precios y las fechas de lanzamiento pueden cambiar antes del lanzamiento.",
          "Cuando te registres en el servicio StateProof se aplicarán términos distintos. Te los mostraremos antes de que te registres.",
        ],
      },
      {
        h: "La lista de espera y la revisión gratuita",
        p: [
          "Unirte a la lista de espera es gratis y no te compromete a nada, ni a nosotros. Puedes pedir salir de ella en cualquier momento escribiéndonos.",
          "Si te enviamos una revisión gratuita de la situación de tu tienda, es una estimación basada en la información que nos das y en las normas estatales que tenemos en ese momento. Es solo informativa.",
        ],
      },
      {
        h: "No es asesoría fiscal ni legal",
        p: [
          "StateProof supervisa las ventas y guarda registros. Nada de este sitio, de la revisión gratuita ni de nuestros correos es asesoría fiscal, legal o contable. Consulta a un profesional fiscal cualificado antes de registrarte, cobrar o declarar en cualquier estado.",
          "Las cifras estatales y los ejemplos de este sitio son ilustrativos. Las normas estatales cambian y debes comprobarlas con el estado o con un profesional fiscal antes de basarte en ellas.",
        ],
      },
      {
        h: "Uso del sitio",
        p: [
          "No hagas un mal uso del sitio: por ejemplo, no intentes dañarlo o sobrecargarlo, acceder a partes a las que no debes llegar, inscribir datos de otra persona en la lista de espera ni copiar el contenido del sitio para presentarlo como tuyo.",
        ],
      },
      {
        h: "Nuestro nombre y contenido",
        p: [
          "El nombre StateProof, el logotipo del sello y el texto y diseño de este sitio pertenecen a Receipters LLC. Puedes enlazar al sitio y citar partes breves mencionando la fuente, pero no puedes usar nuestro nombre o logotipo de forma que sugiera que te respaldamos.",
        ],
      },
      {
        h: "Enlaces a otros sitios",
        p: ["Enlazamos a otros sitios, como las agencias tributarias estatales. No los controlamos y no somos responsables de su contenido."],
      },
      {
        h: "Sin garantía",
        p: [
          "Trabajamos para que el sitio sea preciso y esté disponible, pero lo ofrecemos tal cual, sin garantías de ningún tipo, en la medida en que la ley lo permita.",
          "En la medida en que la ley lo permita, Receipters LLC no es responsable de ninguna pérdida derivada del uso del sitio o de confiar en él, incluidos impuestos, intereses o sanciones adeudados a cualquier estado.",
        ],
      },
      {
        h: "Ley aplicable",
        p: ["Estos términos se rigen por las leyes del estado de Nueva Jersey, EE. UU. Cualquier disputa la resolverán los tribunales de Nueva Jersey, salvo que la ley de donde vives disponga otra cosa."],
      },
      {
        h: "Cambios",
        p: ["Podemos actualizar estos términos. Cuando lo hagamos, cambiaremos la fecha de arriba. Se aplica la versión publicada en esta página."],
      },
      {
        h: "Preguntas",
        p: [`Escribe a ${CONTACT}.`],
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
