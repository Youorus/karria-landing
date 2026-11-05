import Link from "next/link";
import { APP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Les deux badges des magasins — les mêmes que sur la page d'accueil
 * (`MobileApp.tsx`), avec les `utm_*` de la page qui les montre.
 * Google Play reste « Bientôt » tant que `APP_LINKS.googlePlayAvailable` est faux.
 */
export function StoreBadges({ utm, className }: { utm?: string; className?: string }) {
  const suffixe = utm ? `?${utm}` : "";
  const playDisponible = APP_LINKS.googlePlayAvailable && APP_LINKS.googlePlay !== "#";
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Link
        href={`${APP_LINKS.appStore}${suffixe}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/50 border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-300"
        aria-label="Télécharger Karria sur l'App Store"
      >
        <svg className="w-7 h-7 text-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <p className="text-[10px] text-muted-foreground leading-none">Disponible sur</p>
          <p className="font-semibold text-foreground text-sm leading-tight">App Store</p>
        </div>
      </Link>

      {playDisponible ? (
        <Link
          href={`${APP_LINKS.googlePlay}${suffixe}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/50 border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-300"
          aria-label="Télécharger Karria sur Google Play"
        >
          <PlayIcon className="w-7 h-7 text-foreground" />
          <div>
            <p className="text-[10px] text-muted-foreground leading-none">Disponible sur</p>
            <p className="font-semibold text-foreground text-sm leading-tight">Google Play</p>
          </div>
        </Link>
      ) : (
        <span
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/30 border border-dashed border-border cursor-not-allowed"
          aria-label="Karria bientôt disponible sur Google Play"
          title="Bientôt disponible sur Google Play"
        >
          <PlayIcon className="w-7 h-7 text-muted-foreground opacity-50" />
          <div>
            <p className="text-[10px] text-muted-foreground leading-none">Bientôt sur</p>
            <p className="font-semibold text-muted-foreground text-sm leading-tight">Google Play</p>
          </div>
        </span>
      )}
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.68-7.31-2.83-2.83-10.86 10zM.5 1.93C.19 2.33 0 2.89 0 3.61v16.78c0 .72.19 1.28.51 1.68l.09.09 9.39-9.39v-.22L.59 3.16.5 1.93zM20.49 10.37l-2.7-1.56-3.17 3.17 3.17 3.17 2.72-1.57c.78-.45.78-1.76-.02-2.21zM4.19.1L16.87 7.4l-2.83 2.83L3.18.23C3.5.14 3.87.17 4.19.3V.1z" />
    </svg>
  );
}
