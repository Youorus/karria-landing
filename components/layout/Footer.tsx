import Link from "next/link";
import { KarriaFull } from "@/components/ui/Logo";
import { Linkedin, Instagram } from "lucide-react";
import { StoreBadge } from "@/components/ui/AppDownloadCTA";
import { SVGProps } from "react";
import { FOOTER_SECTIONS, SOCIAL_LINKS, NAV_ROUTES } from "@/lib/constants";

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
              L&apos;app française pour trouver ton job et soigner ton CV :
              offres, CV, lettres et alertes. Sur iPhone et Android.
            </p>

            {/* App badges */}
            <div className="flex flex-wrap gap-3">
              <StoreBadge store="app_store" size="sm" />
              <StoreBadge store="google_play" size="sm" />
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
              © 2026 Karria. Disponible en France.
            </p>
            <div className="flex items-center gap-1">
              {SOCIAL_ICONS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Karria sur ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              iPhone et Android
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
