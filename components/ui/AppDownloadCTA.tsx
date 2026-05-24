import Link from "next/link";

import { cn } from "@/lib/utils";

type AppDownloadCTAProps = {
    className?: string;
    appStoreHref?: string;
    googlePlayHref?: string;
    webHref?: string;
    showWebCTA?: boolean;
};

function AppleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function GooglePlayIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M3.609 1.814C3.236 1.595 2.77 1.59 2.392 1.8A1.19 1.19 0 0 0 1.75 2.86v18.28c0 .44.244.845.642 1.06.378.21.844.205 1.217-.014l10.5-6.186-3.85-3.85L3.609 1.814Z" />
            <path d="m15.125 9.304 2.69-1.586L5.567.5l8.166 8.166 1.392.638Z" />
            <path d="m15.125 14.696-1.392.638L5.567 23.5l12.248-7.218-2.69-1.586Z" />
            <path d="m22.028 10.613-3.235-1.905-3.148 3.292 3.148 3.292 3.235-1.905c.83-.489.83-2.285 0-2.774Z" />
        </svg>
    );
}

export function AppDownloadCTA({
                                   className,
                                   appStoreHref = "#",
                                   googlePlayHref = "#",
                                   webHref = "#",
                                   showWebCTA = true,
                               }: AppDownloadCTAProps) {
    return (
        <div className={cn("flex w-full flex-col items-center gap-6", className)}>
            <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                <Link
                    href={appStoreHref}
                    aria-label="Télécharger Karria sur l'App Store"
                    className={cn(
                        "group inline-flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 sm:w-auto",
                        "bg-zinc-950 text-white shadow-2xl shadow-zinc-950/10",
                        "dark:bg-white dark:text-zinc-950 dark:shadow-white/10",
                        "transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                >
                    <AppleIcon className="h-7 w-7 shrink-0" />

                    <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
              Télécharger sur
            </span>
            <span className="mt-1 text-lg font-bold tracking-tight">
              App Store
            </span>
          </span>
                </Link>

                <Link
                    href={googlePlayHref}
                    aria-label="Télécharger Karria sur Google Play"
                    className={cn(
                        "group inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-7 py-4 sm:w-auto",
                        "border-black/10 bg-white/80 text-zinc-950 shadow-xl shadow-black/5 backdrop-blur-xl",
                        "hover:bg-white",
                        "dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:hover:bg-white/[0.11]",
                        "transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                >
                    <GooglePlayIcon className="h-7 w-7 shrink-0" />

                    <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-wide opacity-60">
              Disponible sur
            </span>
            <span className="mt-1 text-lg font-bold tracking-tight">
              Google Play
            </span>
          </span>
                </Link>
            </div>

            {showWebCTA && (
                <Link
                    href={webHref}
                    className={cn(
                        "group inline-flex items-center gap-2 text-sm font-semibold",
                        "text-muted-foreground transition-colors hover:text-primary",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
                    Essayer gratuitement
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
                </Link>
            )}
        </div>
    );
}