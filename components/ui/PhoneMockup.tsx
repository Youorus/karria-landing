"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Iphone } from "@/registry/magicui/iphone";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type PhoneMockupProps = {
    className?: string;
    animate?: boolean;
    src?: string;
    alt?: string;
    screenKey?: string;
};

export default function PhoneMockup({
                                        className,
                                        animate = true,
                                        src = "/hero.jpg",
                                        screenKey,
                                    }: PhoneMockupProps) {
    return (
        /*
          className contrôle la LARGEUR du wrapper (ex: w-[300px]).
          Iphone remplit ce wrapper à 100% via w-full,
          et son aspect-ratio (433/882) détermine automatiquement la hauteur.
        */
        <motion.div
            className={cn("relative select-none", className)}
            animate={animate ? { y: [0, -10, 0] } : undefined}
            transition={
                animate
                    ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    : undefined
            }
        >
            {/* Halo */}
            <div className="pointer-events-none absolute -inset-[20%] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

            {/*
              On swap le composant Iphone entier via AnimatePresence.
              Iphone reçoit w-full pour remplir le wrapper parent.
              src active le masking de l'écran (requis selon la doc MagicUI).
            */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={screenKey ?? src}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="w-full"
                >
                    <Iphone
                        src={src}
                        className="w-full"
                    />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}