"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { STORE_LINKS } from "@/lib/karria";
import { trackDownloadClick } from "@/lib/analytics-events";

type Store = "app_store" | "google_play";
type BadgeSize = "md" | "sm";

type AppDownloadCTAProps = {
    className?: string;
    /** Ligne de réassurance sous les badges. */
    showNote?: boolean;
};

function AppleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

/** Triangle Google Play aux quatre couleurs. */
function GooglePlayIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <path fill="#00C3FF" d="M3.6 1.75A1.5 1.5 0 0 0 3 2.96v18.08c0 .5.24.94.6 1.21L13.8 12 3.6 1.75Z" />
            <path fill="#00F076" d="M17.2 8.6 5.3 1.72a1.5 1.5 0 0 0-1.7.03L13.8 12l3.4-3.4Z" />
            <path fill="#FF3A44" d="M3.6 22.25c.47.34 1.13.4 1.7.03L17.2 15.4 13.8 12 3.6 22.25Z" />
            <path fill="#FFD500" d="m21.25 10.94-4.05-2.34L13.8 12l3.4 3.4 4.05-2.34a1.22 1.22 0 0 0 0-2.12Z" />
        </svg>
    );
}

const STORES: Record<
    Store,
    { href: string; kicker: string; name: string; label: string; Icon: typeof AppleIcon }
> = {
    app_store: {
        href: STORE_LINKS.appStore,
        kicker: "Télécharger dans l’",
        name: "App Store",
        label: "Télécharger Karria dans l'App Store",
        Icon: AppleIcon,
    },
    google_play: {
        href: STORE_LINKS.googlePlay,
        kicker: "Disponible sur",
        name: "Google Play",
        label: "Télécharger Karria sur Google Play",
        Icon: GooglePlayIcon,
    },
};

/**
 * Badge de store. Les deux badges partagent exactement la même boîte
 * (hauteur, largeur minimale, rayon, typographie) pour rester alignés.
 */
export function StoreBadge({
    store,
    size = "md",
    className,
}: {
    store: Store;
    size?: BadgeSize;
    className?: string;
}) {
    const { href, kicker, name, label, Icon } = STORES[store];
    const sm = size === "sm";

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={() => trackDownloadClick(store)}
            className={cn(
                "group relative inline-flex items-center overflow-hidden text-left",
                sm
                    ? "h-11 min-w-[150px] gap-2.5 rounded-xl px-3.5"
                    : "h-[60px] w-full gap-3.5 rounded-2xl px-6 sm:w-[212px]",
                "bg-gradient-to-b from-zinc-800 to-zinc-950 text-white ring-1 ring-white/10",
                "shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)]",
                "dark:from-white dark:to-zinc-200 dark:text-zinc-950 dark:ring-black/5 dark:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.25)]",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.55)] active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                className,
            )}
        >
            {/* reflet animé au survol */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-black/10" />

            <Icon className={cn("relative shrink-0", sm ? "h-5 w-5" : "h-7 w-7")} />

            <span className="relative flex flex-col items-start leading-none">
                <span
                    className={cn(
                        "font-medium tracking-[0.02em] opacity-70",
                        sm ? "text-[9px]" : "text-[11px]",
                    )}
                >
                    {kicker}
                </span>
                <span
                    className={cn(
                        "font-semibold tracking-tight",
                        sm ? "mt-0.5 text-sm" : "mt-1 text-lg",
                    )}
                >
                    {name}
                </span>
            </span>
        </Link>
    );
}

export function AppDownloadCTA({ className, showNote = true }: AppDownloadCTAProps) {
    return (
        <div className={cn("flex w-full flex-col items-center gap-5", className)}>
            <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
                <StoreBadge store="app_store" />
                <StoreBadge store="google_play" />
            </div>

            {showNote && (
                <p className="text-xs font-medium text-muted-foreground">
                    Gratuit · iPhone et Android
                </p>
            )}
        </div>
    );
}
