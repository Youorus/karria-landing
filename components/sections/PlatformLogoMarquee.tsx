"use client";

import Image from "next/image";
import { Marquee } from "@/registry/magicui/marquee";
import { cn } from "@/lib/utils";

const PLATFORMS = [
    {
        name: "LinkedIn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    { name: "Indeed", logo: "https://www.indeed.com/favicon.ico" },
    {
        name: "Welcome to the Jungle",
        logo: "https://www.welcometothejungle.com/favicon.ico",
    },
    { name: "HelloWork", logo: "https://www.hellowork.com/favicon.ico" },
    { name: "Glassdoor", logo: "https://www.glassdoor.com/favicon.ico" },
    { name: "Meteojob", logo: "https://www.meteojob.com/favicon.ico" },
    { name: "France Travail", logo: "https://www.francetravail.fr/favicon.ico" },
    { name: "Apec", logo: "https://www.apec.fr/favicon.ico" },
];

function PlatformLogoCard({
                              name,
                              logo,
                          }: {
    name: string;
    logo: string;
}) {
    return (
        <div
            className={cn(
                "mx-2 flex h-14 min-w-max items-center gap-3 rounded-2xl border px-5",
                "border-black/10 bg-white/70 shadow-sm backdrop-blur-xl",
                "dark:border-white/10 dark:bg-white/[0.06]",
                "transition-all duration-300 hover:scale-[1.03] hover:bg-white dark:hover:bg-white/[0.1]",
            )}
        >
            <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    unoptimized
                    className="object-contain"
                />
            </div>

            <span className="whitespace-nowrap text-sm font-semibold text-foreground/75">
        {name}
      </span>
        </div>
    );
}

export function PlatformLogoMarquee() {
    return (
        <div className="relative w-full overflow-hidden py-7">
            <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground/70">
                Des opportunités agrégées depuis les plateformes majeures
            </p>

            <div className="relative w-full">
                <Marquee className="[--duration:28s] [--gap:0.75rem]" repeat={4}>
                    {PLATFORMS.map((platform) => (
                        <PlatformLogoCard
                            key={platform.name}
                            {...platform}
                        />
                    ))}
                </Marquee>

                {/* Second row for mobile to increase density, reverse direction */}
                <Marquee
                    reverse
                    className="mt-4 [--duration:34s] [--gap:0.75rem] md:hidden"
                    repeat={4}
                >
                    {PLATFORMS.map((platform) => (
                        <PlatformLogoCard
                            key={`mobile-${platform.name}`}
                            {...platform}
                        />
                    ))}
                </Marquee>

                {/* Refined gradient mask for edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent md:w-48" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent md:w-48" />
            </div>
        </div>
    );
}