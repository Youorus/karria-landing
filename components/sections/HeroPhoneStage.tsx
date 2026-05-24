"use client";

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
import PhoneMockup from "@/components/ui/PhoneMockup";

const EASE = [0.16, 1, 0.3, 1] as const;

const FLOATING_BADGES = [
    {
        icon: BriefcaseBusiness,
        label: "Match IA",
        value: "Nouveau match 97%",
        tone: "blue",
        position: "top-[5%] left-[-15%]",
        delay: 0.1,
    },
    {
        icon: Brain,
        label: "IA active",
        value: "Profil analysé",
        tone: "violet",
        position: "right-[-25%] top-[15%]",
        delay: 0.25,
    },
    {
        icon: BellRing,
        label: "Alerte",
        value: "Opportunité détectée",
        tone: "amber",
        position: "bottom-[20%] right-[-20%]",
        delay: 0.4,
    },
    {
        icon: FileCheck2,
        label: "CV",
        value: "Score ATS 94/100",
        tone: "emerald",
        position: "left-[-20%] bottom-[15%]",
        delay: 0.55,
    },
] as const;

type Tone = "blue" | "emerald" | "violet" | "amber";

function getTone(tone: Tone) {
    const tones = {
        blue: { wrapper: "bg-blue-500/10 border-blue-500/20", icon: "text-blue-500" },
        emerald: { wrapper: "bg-emerald-500/10 border-emerald-500/20", icon: "text-emerald-500" },
        violet: { wrapper: "bg-violet-500/10 border-violet-500/20", icon: "text-violet-500" },
        amber: { wrapper: "bg-amber-500/10 border-amber-500/20", icon: "text-amber-500" },
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
        <div className={cn(
            "flex items-center gap-3 rounded-2xl border border-border/60 bg-background/85 p-3 text-left backdrop-blur-2xl shadow-xl",
            compact ? "px-3 py-2" : "px-4 py-3",
            className
        )}>
            <div className={cn("flex shrink-0 items-center justify-center rounded-xl border", colors.wrapper, compact ? "h-8 w-8" : "h-10 w-10")}>
                <Icon className={cn(colors.icon, compact ? "h-4 w-4" : "h-5 w-5")} />
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="font-bold leading-tight text-foreground text-sm">{value}</p>
            </div>
        </div>
    );
}

export function HeroLogoStage({ className }: { className?: string }) {
    return (
        <div className={cn("relative flex w-full flex-col items-center justify-center py-12 sm:py-24", className)}>
            
            {/* --- Scène de Lumière (Background) --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Halo Principal */}
                <motion.div
                    className="h-[400px] w-[300px] sm:h-[700px] sm:w-[500px] rounded-full bg-primary/10 blur-[120px]"
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* --- Conteneur Principal (iPhone + Badges) --- */}
            <div className="relative z-20 flex items-center justify-center w-full max-w-[280px] sm:max-w-[340px]">
                
                {/* iPhone Mockup avec Image Intégrée */}
                <div className="relative group">
                    <PhoneMockup 
                        src="/hero.jpg" 
                        className="w-full drop-shadow-[0_32px_64px_rgba(0,0,0,0.2)]"
                    />
                    
                    {/* Pill Flottante devant l'iPhone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 rounded-full border border-border bg-background/90 px-5 py-2.5 shadow-2xl backdrop-blur-xl min-w-[220px] justify-center"
                    >
                        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-xs font-bold whitespace-nowrap">Assistant carrière IA</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </motion.div>
                </div>

                {/* --- Badges Flottants (Uniquement sur Desktop/Large Tablet) --- */}
                <div className="absolute inset-0 pointer-events-none">
                    {FLOATING_BADGES.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.5, x: i % 2 === 0 ? -40 : 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ 
                                delay: 0.5 + badge.delay, 
                                duration: 1, 
                                ease: EASE 
                            }}
                            className={cn("absolute hidden md:block", badge.position)}
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ 
                                    duration: 5 + i, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: i * 0.2
                                }}
                            >
                                <ProofBadge
                                    icon={badge.icon}
                                    label={badge.label}
                                    value={badge.value}
                                    tone={badge.tone}
                                    className="min-w-[190px] border-primary/10 shadow-primary/5"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Version Mobile des Badges (sous l'iPhone) --- */}
            <div className="flex flex-wrap justify-center gap-3 mt-16 md:hidden px-6">
                {FLOATING_BADGES.slice(0, 2).map((badge) => (
                    <ProofBadge
                        key={badge.label}
                        icon={badge.icon}
                        label={badge.label}
                        value={badge.value}
                        tone={badge.tone}
                        compact
                        className="shadow-sm"
                    />
                ))}
            </div>
        </div>
    );
}
