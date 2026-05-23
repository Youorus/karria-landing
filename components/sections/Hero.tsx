"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Star, Zap } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { PlatformLogoMarquee } from "@/components/sections/PlatformLogoMarquee";

const FLOATING_TAGS = [
  { text: "Matching IA", x: "10%", y: "20%", delay: 0.8 },
  { text: "CV Optimisé", x: "75%", y: "15%", delay: 1.0 },
  { text: "ATS Ready",   x: "5%",  y: "70%", delay: 1.2 },
  { text: "Score 97%",   x: "80%", y: "72%", delay: 1.4 },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY       = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
      <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
          aria-label="Section principale"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="grid-bg absolute inset-0 opacity-[0.2] dark:opacity-40" />

        <div className="pointer-events-none absolute top-[-10%] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
        <div className="animate-glow-pulse pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/20" />
        <div className="animate-glow-pulse pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-900/20" style={{ animationDelay: "2s" }} />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {FLOATING_TAGS.map((tag) => (
            <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: tag.delay, duration: 1, ease: EASE }}
                className="pointer-events-none absolute hidden rounded-full border border-border bg-card/50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-muted-foreground uppercase shadow-sm backdrop-blur-md xl:block"
                style={{ left: tag.x, top: tag.y }}
            >
              {tag.text}
            </motion.div>
        ))}

        <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8"
        >
          <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:gap-24 lg:py-32">

            {/* ── Colonne texte ── */}
            <div className="flex flex-col items-start lg:justify-center">
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: EASE }}
                  className="mb-8"
              >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary backdrop-blur-sm">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <Zap className="h-3.5 w-3.5 fill-current" />
                </span>
                L&apos;IA qui trouve votre prochain job
              </span>
              </motion.div>

              <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
                  className="mb-8 font-bold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.02 }}
              >
                Votre future <br />carrière, <br />
                <span className="text-gradient-blue">propulsée par l&apos;IA.</span>
              </motion.h1>

              <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                  className="mb-10 max-w-xl text-xl leading-relaxed font-medium text-muted-foreground md:text-2xl"
              >
                Karria connecte intelligemment votre talent aux meilleures
                opportunités. CV optimisé, lettres ciblées, matching de précision.
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
                  className="mb-12 flex flex-col items-start gap-6"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-6 py-3.5 text-background shadow-xl shadow-foreground/10 transition-all duration-300 hover:opacity-90"
                      aria-label="Télécharger sur l'App Store"
                  >
                    <span className="text-lg font-bold">App Store</span>
                  </a>
                  <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-2xl border border-border bg-secondary px-6 py-3.5 shadow-xl shadow-black/5 transition-all duration-300 hover:bg-accent"
                      aria-label="Télécharger sur Google Play"
                  >
                    <span className="text-lg font-bold">Google Play</span>
                  </a>
                </div>

                <button className="group flex items-center gap-1.5 pl-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Ou essayez la version web gratuitement
                  <span className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">→</span>
                </button>
              </motion.div>
            </div>

            {/* ── Colonne phone ── */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: EASE }}
                className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="pointer-events-none absolute h-[450px] w-[450px] rounded-full border border-primary/5" />
              <div className="pointer-events-none absolute h-[600px] w-[600px] rounded-full border border-primary/5" />

              {/*
             * Wrapper des bulles flottantes.
             * overflow:visible explicite — les bulles sortent librement sans clipper.
             */}
              <div className="relative" style={{ overflow: "visible" }}>

                <PhoneMockup animate className="relative z-10 scale-95 sm:scale-100 lg:scale-110" />

                {/* Bulle droite — positionnée par rapport à ce wrapper, PAS au phone */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6, ease: EASE }}
                    className="absolute top-20 -right-4 z-20 w-44 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-200/60 lg:-right-16"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[10px] bg-indigo-50">
                      <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold leading-tight text-slate-800">Nouveau match 97%</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">Lead Designer · Spotify</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bulle gauche */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
                    className="absolute bottom-28 -left-4 z-20 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 shadow-xl shadow-slate-200/60 lg:-left-16"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-emerald-50">
                    <Star className="h-3.5 w-3.5 fill-current text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold leading-none text-slate-800">CV Optimisé</p>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">Score ATS : 94/100</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
            className="relative z-30 w-screen border-y border-border/60 bg-background/70 backdrop-blur-xl"
        >
          <PlatformLogoMarquee />
        </motion.div>
      </section>
  );
}