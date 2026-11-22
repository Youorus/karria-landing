import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";
import { PRICING, STORE_LINKS } from "@/lib/karria";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    areaServed: "FR",
    sameAs: [
      SOCIAL_LINKS.x,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["French"],
      email: "hello@karria.fr",
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
      logo: `${SITE_URL}/icons/icon-512.png`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };

  const sitenavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Matching Emploi IA",
        description: "Un fil d'offres personnalisé parmi plus de 500 000 offres en France.",
        url: `${SITE_URL}/matching-emploi-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "CV IA",
        description: "Atelier CV, 9 modèles, score ATS et CV adapté à chaque offre.",
        url: `${SITE_URL}/cv-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Lettre de Motivation IA",
        description: "Une lettre de motivation rédigée pour chaque offre.",
        url: `${SITE_URL}/lettre-motivation-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Blog Carrière",
        description: "Conseils sur la recherche d'emploi, le CV et la lettre de motivation.",
        url: `${SITE_URL}/blog`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "À Propos",
        description: "L'histoire de Karria et sa mission.",
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Tarifs",
        description: "Karria est gratuite. Karria sans pub : 4,99 € par mois ou 49,90 € par an.",
        url: `${SITE_URL}/#pricing`,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "fr-FR",
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Career Management",
    operatingSystem: "iOS, Android",
    inLanguage: "fr-FR",
    countriesSupported: "FR",
    installUrl: STORE_LINKS.appStore,
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        name: "Karria (gratuit)",
        description:
          "Recherche d'offres illimitée. Version gratuite financée par des annonces, avec des limites mensuelles sur les CV, les lettres et l'optimisation ATS.",
      },
      {
        "@type": "Offer",
        price: PRICING.monthly.toFixed(2),
        priceCurrency: "EUR",
        name: `${PRICING.planName} (mensuel)`,
        description: "Retire les annonces et lève les limites mensuelles. Sans engagement.",
      },
      {
        "@type": "Offer",
        price: PRICING.yearly.toFixed(2),
        priceCurrency: "EUR",
        name: `${PRICING.planName} (annuel)`,
        description: "Retire les annonces et lève les limites mensuelles. Sans engagement.",
      },
    ],
    featureList: [
      "Fil d'offres personnalisé",
      "Assistante de recherche à l'écrit ou à la voix",
      "Alertes sur les recherches enregistrées",
      "Atelier CV avec 9 modèles",
      "Score ATS et optimisation",
      "CV adapté et lettre de motivation pour chaque offre",
      "Export PDF ou Word, envoi par e-mail",
      "Dossiers de suivi des candidatures",
    ],
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitenavigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}
