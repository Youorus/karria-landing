"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PlatformLogoMarquee } from "@/components/sections/PlatformLogoMarquee";
import {AuroraText} from "@/components/ui/aurora-text";
import {AppDownloadCTA} from "@/components/ui/AppDownloadCTA";
import {Particles} from "@/components/ui/particles";
import {BorderBeam} from "@/components/ui/border-beam";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";


const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
      <section
          className="relative flex min-h-screen flex-col items-center overflow-hidden pt-24 lg:pt-32"
          aria-label="Section principale"
      >
        <div className="absolute inset-0 -z-30 bg-background" />
        <div className="grid-bg absolute inset-0 -z-20 opacity-[0.1] dark:opacity-20" />
        
        <Particles
            className="absolute inset-0 -z-10"
            quantity={150}
            ease={80}
            color={color}
            refresh
        />

        <div className="pointer-events-none absolute top-[-10%] left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-900/10" />

        <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6"
        >
          <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="relative mb-6 flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 backdrop-blur-md overflow-hidden"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              🇫🇷 Disponible uniquement en France
            </span>
            <BorderBeam size={100} duration={8} borderWidth={1.5} colorFrom="var(--primary)" colorTo="transparent" />
          </motion.div>

          <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              className="mb-6 max-w-5xl font-bold tracking-[-0.055em] text-foreground"
              style={{
                fontSize: "clamp(3.4rem, 10vw, 6.6rem)",
                lineHeight: 0.94,
              }}
          >
          Arrêtez de chercher.
            <br />
            <AuroraText>Commencez à trouver.</AuroraText>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Karria trouve les meilleures opportunités,
            optimise vos candidatures et propulse votre carrière grâce à l’IA.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
              className="mb-12 flex w-full flex-col items-center gap-6"
          >
            <AppDownloadCTA
                appStoreHref="#"
                googlePlayHref="#"
            />
            <p className="text-[13px] font-medium text-muted-foreground/60">
              * Actuellement optimisé pour le marché de l&apos;emploi en France.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative z-30 mt-auto w-full border-t border-border/40 bg-background/50 py-4 backdrop-blur-md"
        >
          <PlatformLogoMarquee />
        </motion.div>
      </section>
  );
}