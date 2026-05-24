"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Iphone } from "@/registry/magicui/iphone";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type PhoneMockupProps = {
    className?: string;
    animate?: boolean;
    // Passe directement le src de l'image active depuis le parent
    src?: string;
    alt?: string;
    // Clé unique pour déclencher la transition à chaque changement d'écran
    screenKey?: string;
};

export default function PhoneMockup({
                                        className,
                                        animate = true,
                                        src = "/screens/dashboard.jpg",
                                        alt = "Aperçu de l'application Karria",
                                        screenKey,
                                    }: PhoneMockupProps) {
    return (
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
            <div className="pointer-events-none absolute inset-[-12%] rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" />

            <Iphone className="h-[610px] w-[300px] rounded-[3.2rem] border-[8px] border-zinc-950 bg-zinc-950 shadow-2xl shadow-black/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-primary/10">
                {/* Zone écran — overflow:hidden + border-radius identique au inner */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.55rem]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={screenKey ?? src}
                            initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                            transition={{ duration: 0.65, ease: EASE }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                priority
                                sizes="300px"
                                className="object-cover object-top"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Iphone>
        </motion.div>
    );
}