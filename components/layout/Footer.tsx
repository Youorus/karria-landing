import Link from "next/link";
import { KarriaFull } from "@/components/ui/Logo";
import { Linkedin, Instagram, Github } from "lucide-react";
import { SVGProps } from "react";
import { FOOTER_SECTIONS, SOCIAL_LINKS, APP_LINKS, NAV_ROUTES } from "@/lib/constants";

// Custom X (formerly Twitter) Icon
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-9.56-6.638 9.56H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

// Custom TikTok Icon
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99 0-1.48.18-1.96.99-3.86 2.45-5.18 1.5-1.36 3.53-2.04 5.54-1.82.01 1.38-.02 2.76 0 4.14-.84-.06-1.71.04-2.47.5-.58.35-1.04.91-1.28 1.56-.21.57-.24 1.2-.18 1.8.1.91.54 1.79 1.25 2.39.73.61 1.68.91 2.63.85.94-.02 1.86-.39 2.53-1.03.63-.61.94-1.48.97-2.35.03-3.75-.01-7.49.02-11.24z" />
  </svg>
);

const SOCIAL_ICONS = [
  { label: "X", href: SOCIAL_LINKS.x, icon: XIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: TikTokIcon },
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
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
              La plateforme d&apos;intelligence artificielle qui réinvente votre carrière en France. 
              Du matching intelligent à l&apos;optimisation de CV, décrochez le job que vous méritez.
            </p>

            {/* App badges */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={APP_LINKS.appStore}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-secondary hover:bg-accent border border-border transition-all duration-300 text-sm font-medium text-foreground w-fit"
                aria-label="Télécharger sur l'App Store"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </Link>
              <Link
                href={APP_LINKS.googlePlay}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-secondary hover:bg-accent border border-border transition-all duration-300 text-sm font-medium text-foreground w-fit"
                aria-label="Télécharger sur Google Play"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.68-7.31-2.83-2.83-10.86 10zM.5 1.93C.19 2.33 0 2.89 0 3.61v16.78c0 .72.19 1.28.51 1.68l.09.09 9.39-9.39v-.22L.59 3.16.5 1.93zM20.49 10.37l-2.7-1.56-3.17 3.17 3.17 3.17 2.72-1.57c.78-.45.78-1.76-.02-2.21zM4.19.1L16.87 7.4l-2.83 2.83L3.18.23C3.5.14 3.87.17 4.19.3V.1z"/>
                </svg>
                Google Play
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_SECTIONS).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-[11px] font-bold text-foreground uppercase tracking-[0.1em] mb-6">
                {key === 'product' ? 'Produit' : key === 'resources' ? 'Ressources' : key === 'company' ? 'Entreprise' : 'Légal'}
              </h3>
              <ul className="space-y-4" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-300"
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
              © 2026 Karria. Disponible exclusivement en France pour le moment.
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL_ICONS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
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
              <Link href={NAV_ROUTES.privacy} className="hover:text-foreground transition-colors">Confidentialité</Link>
              <Link href={NAV_ROUTES.cgu} className="hover:text-foreground transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
