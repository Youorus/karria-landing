/**
 * KARRIA - Centralized Links & Constants
 * This file contains all links, emails, and external resources used across the application.
 */

export const SITE_CONFIG = {
  name: "Karria",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://karria.app",
  foundingDate: "2024",
  founder: "Marc Takoumba",
  location: "Paris, France",
};

export const CONTACT_EMAILS = {
  general: "hello@karria.app",
  support: "hello@karria.app",
  press: "press@karria.app",
  partners: "partners@karria.app",
  jobs: "jobs@karria.app",
  privacy: "privacy@karria.app",
  legal: "legal@karria.app",
  billing: "billing@karria.app",
  security: "security@karria.app",
};

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/karriaapp",
  linkedin: "https://linkedin.com/company/karria",
  instagram: "https://instagram.com/karria.app",
  github: "https://github.com/karria-app",
  founderTwitter: "https://twitter.com/marctakoumba",
  founderLinkedin: "https://linkedin.com/in/marctakoumba",
};

export const APP_LINKS = {
  appStore: "#",
  googlePlay: "#",
  webapp: "https://app.karria.app",
};

export const NAV_ROUTES = {
  // Product
  matching: "/matching-emploi-ia",
  cv: "/cv-ia",
  letters: "/lettre-motivation-ia",
  search: "/recherche-emploi-ia",
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
};

// Grouped links for Navigation components
export const FOOTER_SECTIONS = {
  product: [
    { label: "Matching IA", href: NAV_ROUTES.matching },
    { label: "CV IA", href: NAV_ROUTES.cv },
    { label: "Lettres IA", href: NAV_ROUTES.letters },
    { label: "Recherche Emploi", href: NAV_ROUTES.search },
    { label: "FAQ", href: NAV_ROUTES.faq },
    { label: "Tarifs", href: NAV_ROUTES.pricing },
  ],
  resources: [
    { label: "Blog", href: NAV_ROUTES.blog },
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
  ],
};
