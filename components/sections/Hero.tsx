"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, Briefcase, Play, Star, Zap } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { PlatformLogoMarquee } from "@/components/sections/PlatformLogoMarquee";
import {AuroraText} from "@/components/ui/aurora-text";
import {AppDownloadCTA} from "@/components/ui/AppDownloadCTA";
import { HeroLogoStage } from "@/components/sections/HeroPhoneStage";


const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  return (
      <section
          className="relative flex min-h-screen flex-col items-center overflow-hidden pt-24 lg:pt-32"
          aria-label="Section principale"
      >
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="grid-bg absolute inset-0 -z-10 opacity-[0.1] dark:opacity-20" />

        <div className="pointer-events-none absolute top-[-10%] left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-900/10" />

        <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6"
        >

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
            <AuroraText>Arrêtez de chercher.</AuroraText>
            <br />
            Commencez à trouver.
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
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.5, ease: EASE }}
              className="relative mt-2 flex w-full justify-center"
          >
            <HeroLogoStage />
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