"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BellRing,
    Brain,
    BriefcaseBusiness,
    CheckCircle2,
    FileCheck2,
    Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const ORBIT_DURATION = 40;

const FLOATING_BADGES = [
    {
        icon: BriefcaseBusiness,
        label: "Match IA",
        value: "Nouveau match 97%",
        tone: "blue",
        // desktop positions (orbit ring)
        position: "top-6 left-1/2 -translate-x-1/2",
        delay: 0.1,
    },
    {
        icon: Brain,
        label: "IA active",
        value: "Profil analysé",
        tone: "violet",
        position: "right-0 top-1/2 -translate-y-1/2",
        delay: 0.25,
    },
    {
        icon: BellRing,
        label: "Alerte",
        value: "Opportunité détectée",
        tone: "amber",
        position: "bottom-6 left-1/2 -translate-x-1/2",
        delay: 0.4,
    },
    {
        icon: FileCheck2,
        label: "CV",
        value: "Score ATS 94/100",
        tone: "emerald",
        position: "left-0 top-1/2 -translate-y-1/2",
        delay: 0.55,
    },
] as const;

// Mobile orbit: rayon réduit, badges positionnés aux 4 points cardinaux
// On utilise des positions absolues centrées via translate, comme sur desktop
// mais dans un conteneur plus petit
const MOBILE_BADGE_POSITIONS = [
    "top-0 left-1/2 -translate-x-1/2",
    "right-0 top-1/2 -translate-y-1/2",
    "bottom-0 left-1/2 -translate-x-1/2",
    "left-0 top-1/2 -translate-y-1/2",
] as const;

type Tone = "blue" | "emerald" | "violet" | "amber";

type HeroLogoStageProps = {
    className?: string;
    logoClassName?: string;
    showFloatingBadges?: boolean;
};

function getTone(tone: Tone) {
    const tones = {
        blue: {
            wrapper: "bg-blue-500/10 border-blue-500/20",
            icon: "text-blue-500",
        },
        emerald: {
            wrapper: "bg-emerald-500/10 border-emerald-500/20",
            icon: "text-emerald-500",
        },
        violet: {
            wrapper: "bg-violet-500/10 border-violet-500/20",
            icon: "text-violet-500",
        },
        amber: {
            wrapper: "bg-amber-500/10 border-amber-500/20",
            icon: "text-amber-500",
        },
    };

    return tones[tone];
}

function ProofBadge({
                        icon: Icon,
                        label,
                        value,
                        tone,
                        className,
                        compact = false,
                    }: {
    icon: React.ElementType;
    label: string;
    value: string;
    tone: Tone;
    className?: string;
    compact?: boolean;
}) {
    const colors = getTone(tone);

    return (
        <div
            className={cn(
                "flex items-center gap-2.5 rounded-2xl border border-border/60",
                "bg-background/85 text-left backdrop-blur-2xl",
                "shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]",
                "dark:bg-background/70 dark:shadow-primary/5",
                compact ? "px-3 py-2.5" : "px-4 py-3",
                className,
            )}
        >
            <div
                className={cn(
                    "flex shrink-0 items-center justify-center rounded-xl border",
                    colors.wrapper,
                    compact ? "h-8 w-8" : "h-10 w-10",
                )}
            >
                <Icon className={cn(colors.icon, compact ? "h-4 w-4" : "h-5 w-5")} />
            </div>

            <div>
                <p
                    className={cn(
                        "font-bold uppercase text-muted-foreground",
                        compact ? "text-[8px] tracking-[0.12em]" : "text-[10px] tracking-[0.16em]",
                    )}
                >
                    {label}
                </p>
                <p
                    className={cn(
                        "mt-0.5 font-bold leading-tight text-foreground",
                        compact ? "text-xs" : "text-sm",
                    )}
                >
                    {value}
                </p>
            </div>
        </div>
    );
}

export function HeroLogoStage({
                                  className,
                                  logoClassName,
                                  showFloatingBadges = true,
                              }: HeroLogoStageProps) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col items-center justify-center overflow-hidden py-8 sm:overflow-visible sm:py-12",
                className,
            )}
        >
            {/* Halo radial — couche externe */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10 sm:h-[560px] sm:w-[560px]"
                animate={{ scale: [1, 1.10, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            {/* Halo radial — couche interne */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25 sm:h-[380px] sm:w-[380px]"
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ── DESKTOP ── */}
            <div className="relative hidden h-[520px] w-full max-w-[720px] items-center justify-center sm:flex">
                {/* Anneaux décoratifs */}
                <div className="pointer-events-none absolute">
                    <div
                        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ border: "1px dashed rgba(99,102,241,0.08)" }}
                    />
                    <div
                        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ border: "0.5px solid rgba(99,102,241,0.14)" }}
                    />
                </div>

                {/* Badges orbitaux */}
                {showFloatingBadges && (
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                    >
                        {FLOATING_BADGES.map((badge) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ delay: badge.delay, duration: 0.8, ease: EASE }}
                                className={cn("absolute", badge.position)}
                            >
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                                >
                                    <ProofBadge
                                        icon={badge.icon}
                                        label={badge.label}
                                        value={badge.value}
                                        tone={badge.tone}
                                        className="min-w-[220px]"
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Logo */}
                <motion.div
                    animate={{ y: [0, -12, 0], scale: [1, 1.028, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className={cn(
                        "relative z-20 flex h-[300px] w-[300px] items-center justify-center",
                        logoClassName,
                    )}
                >
                    <Image
                        src="/karria_light_icon.png"
                        alt="Logo Karria"
                        width={1024}
                        height={1024}
                        priority
                        className="h-full w-full object-contain drop-shadow-[0_8px_32px_rgba(99,102,241,0.30)]"
                    />
                </motion.div>

                {/* Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
                    className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/85 px-4 py-2 shadow-xl backdrop-blur-2xl"
                >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">Assistant carrière IA</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </motion.div>
            </div>

            {/* ── MOBILE ── */}
            <div className="relative flex h-[420px] w-full items-center justify-center sm:hidden">
                {/* Anneaux décoratifs mobile */}
                <div className="pointer-events-none absolute">
                    <div
                        className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ border: "1px dashed rgba(99,102,241,0.08)" }}
                    />
                    <div
                        className="absolute left-1/2 top-1/2 h-[268px] w-[268px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ border: "0.5px solid rgba(99,102,241,0.14)" }}
                    />
                </div>

                {/* Badges orbitaux mobile — rayon plus serré, badges compacts */}
                {showFloatingBadges && (
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                    >
                        {FLOATING_BADGES.map((badge, i) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ delay: badge.delay, duration: 0.8, ease: EASE }}
                                className={cn("absolute", MOBILE_BADGE_POSITIONS[i])}
                            >
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                                >
                                    <ProofBadge
                                        icon={badge.icon}
                                        label={badge.label}
                                        value={badge.value}
                                        tone={badge.tone}
                                        compact
                                        className="min-w-[130px] max-w-[148px]"
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Logo mobile */}
                <motion.div
                    animate={{ y: [0, -10, 0], scale: [1, 1.025, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className={cn(
                        "relative z-20 flex h-[160px] w-[160px] items-center justify-center",
                        logoClassName,
                    )}
                >
                    <Image
                        src="/karria_light_icon.png"
                        alt="Logo Karria"
                        width={1024}
                        height={1024}
                        priority
                        className="h-full w-full object-contain drop-shadow-[0_8px_32px_rgba(99,102,241,0.30)]"
                    />
                </motion.div>
            </div>

            {/* Pill mobile — sous la scène orbitale */}
            <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
                className="mt-2 flex items-center gap-2 rounded-full border border-border bg-background/85 px-4 py-2 shadow-lg backdrop-blur-2xl sm:hidden"
            >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-foreground">Assistant carrière IA</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </motion.div>
        </div>
    );
}