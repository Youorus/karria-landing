import Link from "next/link";
import { KarriaFull } from "@/components/ui/Logo";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const FOOTER_LINKS = {
  Produit: [
    { label: "Matching IA", href: "/matching-emploi-ia" },
    { label: "CV IA", href: "/cv-ia" },
    { label: "Lettres IA", href: "/lettre-motivation-ia" },
    { label: "Recherche Emploi", href: "/recherche-emploi-ia" },
    { label: "Tarifs", href: "/#pricing" },
  ],
  Ressources: [
    { label: "Blog", href: "/blog" },
    { label: "Guide CV", href: "/ressources/guide-cv" },
    { label: "Alternance", href: "/alternance" },
    { label: "Reconversion", href: "/reconversion" },
    { label: "Jeune diplômé", href: "/jeune-diplome" },
  ],
  Entreprise: [
    { label: "À propos", href: "/about" },
    { label: "Presse", href: "/presse" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Recruteurs", href: "/recrutement-ia" },
    { label: "Contact", href: "/contact" },
  ],
  Légal: [
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
    { label: "Cookies", href: "/cookies" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ],
};

const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "https://twitter.com/karriaapp", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/karria", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/karria.app", icon: Instagram },
  { label: "GitHub", href: "https://github.com/karria-app", icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background mt-0" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-x-8 gap-y-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-3">
            <div className="mb-6">
              <KarriaFull size="sm" className="text-foreground" />
            </div>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-sm mb-10">
              La plateforme d&apos;intelligence artificielle qui réinvente votre carrière. 
              Du matching intelligent à l&apos;optimisation de CV, décrochez le job que vous méritez.
            </p>

            {/* App badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-secondary hover:bg-accent border border-border transition-all duration-300 text-sm font-medium text-foreground w-fit"
                aria-label="Télécharger sur l'App Store"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-secondary hover:bg-accent border border-border transition-all duration-300 text-sm font-medium text-foreground w-fit"
                aria-label="Télécharger sur Google Play"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.68-7.31-2.83-2.83-10.86 10zM.5 1.93C.19 2.33 0 2.89 0 3.61v16.78c0 .72.19 1.28.51 1.68l.09.09 9.39-9.39v-.22L.59 3.16.5 1.93zM20.49 10.37l-2.7-1.56-3.17 3.17 3.17 3.17 2.72-1.57c.78-.45.78-1.76-.02-2.21zM4.19.1L16.87 7.4l-2.83 2.83L3.18.23C3.5.14 3.87.17 4.19.3V.1z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-bold text-foreground uppercase tracking-[0.1em] mb-6">
                {category}
              </h3>
              <ul className="space-y-4" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[13px] text-muted-foreground">
              © 2026 Karria. Fait avec passion en France.
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Systèmes opérationnels
            </span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-5 text-[13px] font-medium text-muted-foreground">
              <Link href="/confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
              <Link href="/cgu" className="hover:text-foreground transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
