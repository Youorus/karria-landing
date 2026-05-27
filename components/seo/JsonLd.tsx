import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/utils";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-full.svg`,
      width: 577,
      height: 203,
    },
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    areaServed: "FR",
    sameAs: [
      "https://twitter.com/karriaapp",
      "https://linkedin.com/company/karria",
      "https://instagram.com/karria.app",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
      email: "hello@karria.fr",
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.svg`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    founder: {
      "@type": "Person",
      name: "Marc Takoumba",
      url: "https://instagram.com/marctakoumba",
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
        description: "Trouvez les meilleures offres d'emploi grâce à notre algorithme de matching intelligent.",
        url: `${SITE_URL}/matching-emploi-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "CV IA",
        description: "Générez un CV optimisé pour les ATS en quelques secondes avec l'IA.",
        url: `${SITE_URL}/cv-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Lettre de Motivation IA",
        description: "Créez des lettres de motivation personnalisées et percutantes pour chaque offre.",
        url: `${SITE_URL}/lettre-motivation-ia`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Blog Carrière",
        description: "Conseils, guides et actualités sur le recrutement et l'IA.",
        url: `${SITE_URL}/blog`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "À Propos",
        description: "Découvrez la vision de Karria et l'équipe derrière la plateforme.",
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Tarifs",
        description: "Découvrez nos plans et commencez à propulser votre carrière gratuitement.",
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Career Management",
    operatingSystem: ["iOS", "Android", "Web"],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        name: "Plan Gratuit",
        description: "Accès aux fonctionnalités essentielles de Karria",
      },
      {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "EUR",
        name: "Plan Premium",
        description: "Accès complet aux fonctionnalités Karria IA",
        billingPeriod: "P1M",
      },
    ],
    featureList: [
      "Matching emploi IA",
      "Génération de CV IA",
      "Génération de lettres de motivation IA",
      "Optimisation ATS",
      "Dashboard candidatures",
      "Alertes emploi personnalisées",
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
