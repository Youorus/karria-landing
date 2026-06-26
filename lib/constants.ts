/**
 * KARRIA - Centralized Links & Constants
 * This file contains all links, emails, and external resources used across the application.
 */

export const SITE_CONFIG = {
  name: "Karria",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://karria.fr",
  foundingDate: "2024",
  founder: "Marc Takoumba",
  location: "Paris, France",
};

export const CONTACT_EMAILS = {
  general: "hello@karria.fr",
  support: "hello@karria.fr",
  press: "hello@karria.fr",
  partners: "hello@karria.fr",
  jobs: "hello@karria.fr",
  privacy: "hello@karria.fr",
  legal: "hello@karria.fr",
  billing: "hello@karria.fr",
  security: "hello@karria.fr",
};

export const SOCIAL_LINKS = {
  x: "https://x.com/karriaapp",
  linkedin: "https://linkedin.com/company/karria",
  instagram: "https://instagram.com/karria.app",
  tiktok: "https://tiktok.com/@karria.fr",
  github: "https://github.com/karria-app",
  founderInstagram: "https://instagram.com/marctakoumba",
};

export const APP_LINKS = {
  appStore: "https://apps.apple.com/app/karria/id6776608930",
  googlePlay: "#",
  webapp: "https://app.karria.fr",
  // Google Play n'est pas encore disponible — bascule à true au lancement
  googlePlayAvailable: false,
};

export const NAV_ROUTES = {
  // Product
  matching: "/matching-emploi-ia",
  cv: "/cv-ia",
  letters: "/lettre-motivation-ia",
  search: "/recherche-emploi-ia",
  comparatifs: "/comparatifs",
  pricing: "/#pricing",
  howItWorks: "/#how-it-works",
  features: "/#features",

  // Resources
  blog: "/blog",
  faq: "/faq",
  guideCv: "/ressources/guide-cv",
  ressources: "/ressources",
  alternance: "/alternance",
  reconversion: "/reconversion",
  jeuneDiplome: "/jeune-diplome",
  
  // Company
  about: "/about",
  contact: "/contact",
  careers: "/carrieres",
  press: "/presse",
  partners: "/partenaires",
  recruiting: "/recrutement-ia",
  
  // Legal
  privacy: "/confidentialite",
  cgu: "/cgu",
  cgv: "/cgv",
  legalNotice: "/mentions-legales",
  cookies: "/cookies",
  security: "/securite",
  accountDeletion: "/suppression-compte",
};

// Grouped links for Navigation components
export const FOOTER_SECTIONS = {
  product: [
    { label: "Matching IA", href: NAV_ROUTES.matching },
    { label: "CV IA", href: NAV_ROUTES.cv },
    { label: "Lettres IA", href: NAV_ROUTES.letters },
    { label: "Recherche Emploi", href: NAV_ROUTES.search },
    { label: "Recrutement IA", href: NAV_ROUTES.recruiting },
    { label: "Comparatifs", href: NAV_ROUTES.comparatifs },
    { label: "FAQ", href: NAV_ROUTES.faq },
    { label: "Tarifs", href: NAV_ROUTES.pricing },
  ],
  resources: [
    { label: "Blog", href: NAV_ROUTES.blog },
    { label: "Ressources", href: NAV_ROUTES.ressources },
    { label: "Alternance", href: NAV_ROUTES.alternance },
    { label: "Reconversion", href: NAV_ROUTES.reconversion },
    { label: "Jeune diplômé", href: NAV_ROUTES.jeuneDiplome },
    { label: "Sécurité", href: NAV_ROUTES.security },
  ],
  company: [
    { label: "À propos", href: NAV_ROUTES.about },
    { label: "Carrières", href: NAV_ROUTES.careers },
    { label: "Presse", href: NAV_ROUTES.press },
    { label: "Partenaires", href: NAV_ROUTES.partners },
    { label: "Contact", href: NAV_ROUTES.contact },
  ],
  legal: [
    { label: "Confidentialité", href: NAV_ROUTES.privacy },
    { label: "CGU", href: NAV_ROUTES.cgu },
    { label: "CGV", href: NAV_ROUTES.cgv },
    { label: "Cookies", href: NAV_ROUTES.cookies },
    { label: "Mentions légales", href: NAV_ROUTES.legalNotice },
    { label: "Suppression de compte", href: NAV_ROUTES.accountDeletion },
  ],
};
