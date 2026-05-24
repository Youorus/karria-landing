"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const STORY_STEPS = [
  {
    id: "analysis",
    screen: "/analysis.jpg",
    title: "Karria apprend à vous connaître",
    description:
        "L'IA analyse votre profil, vos compétences et vos objectifs pour comprendre ce qui vous correspond vraiment.",
  },
  {
    id: "matching",
    screen: "/matching.jpg",
    title: "Recevez des offres faites pour vous",
    description:
        "Karria détecte automatiquement les opportunités les plus adaptées à votre profil et à vos ambitions.",
  },
  {
    id: "generation",
    screen: "/generation.jpg",
    title: "Vos candidatures sont prêtes plus vite",
    description:
        "CV, lettres et contenus sont optimisés automatiquement pour chaque offre afin de maximiser vos chances.",
  },
  {
    id: "notifications",
    screen: "/notification.jpg",
    title: "Ne manquez plus les bonnes opportunités",
    description:
        "Recevez des alertes intelligentes dès qu'une offre importante correspond à votre profil.",
  },
  {
    id: "apply",
    screen: "/apply.jpg",
    title: "Postulez simplement et efficacement",
    description:
        "Envoyez des candidatures personnalisées, prêtes pour les recruteurs et les systèmes ATS en quelques secondes.",
  },
] as const;

export default function StorytellingScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = STORY_STEPS[activeIndex];

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(
          Math.floor(v * STORY_STEPS.length),
          STORY_STEPS.length - 1,
      );
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  return (
      <section ref={containerRef} className="relative h-[600vh] bg-background">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">

          {/* Halo de fond */}
          <div className="absolute inset-0 -z-10">
            <motion.div
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10 sm:h-[800px] sm:w-[800px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

            {/* ── Texte ── */}
            <div className="relative z-10 mt-12 flex w-full flex-col items-center text-center sm:mt-20 lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
              <div className="relative h-[200px] w-full max-w-2xl sm:h-[260px] lg:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                      key={activeStep.id}
                      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                      transition={{ duration: 0.8, ease: EASE }}
                      className="absolute inset-0 flex flex-col justify-start lg:justify-center"
                  >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 sm:mb-4 sm:text-xs"
                    >
                      Étape {activeIndex + 1}
                    </motion.span>
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:mb-6 sm:text-3xl lg:text-5xl lg:leading-[1.1]">
                      {activeStep.title}
                    </h2>
                    <p className="mx-auto max-w-md text-sm text-muted-foreground sm:text-base lg:mx-0 lg:text-xl">
                      {activeStep.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Indicateurs de progression */}
              <div className="mt-4 flex gap-2 sm:mt-8 lg:mt-12">
                {STORY_STEPS.map((step, i) => (
                    <div
                        key={step.id}
                        className={cn(
                            "h-1 rounded-full transition-all duration-500",
                            i === activeIndex
                                ? "w-8 bg-blue-500 dark:bg-blue-400"
                                : "w-2 bg-border",
                        )}
                    />
                ))}
              </div>
            </div>

            {/* ── Phone ── */}
            {/*
            Iphone MagicUI : taille contrôlée par le wrapper div.
            L'aspect ratio est 433/882 ≈ 0.491 — on fixe la largeur
            et la hauteur s'adapte automatiquement.

            Largeurs par breakpoint :
            - mobile  : 160px → hauteur ≈ 326px
            - sm      : 200px → hauteur ≈ 408px
            - md      : 240px → hauteur ≈ 490px
            - lg      : 300px → hauteur ≈ 612px
          */}
            <div className="relative flex w-full flex-1 items-center justify-center pb-8 pt-6 lg:py-0">

              {/* Anneaux décoratifs */}
              <motion.div
                  className="pointer-events-none absolute h-[240px] w-[240px] rounded-full border border-blue-500/10 sm:h-[340px] sm:w-[340px] lg:h-[500px] lg:w-[500px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                  className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-blue-500/5 sm:h-[420px] sm:w-[420px] lg:h-[600px] lg:w-[600px]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/*
              Le wrapper fixe la taille — Iphone remplit ce wrapper via aspect-ratio.
              PhoneMockup reçoit className pour contrôler la taille du wrapper interne.
            */}
              <PhoneMockup
                  src={activeStep.screen}
                  alt={activeStep.title}
                  screenKey={activeStep.id}
                  animate={false}
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px]"
              />
            </div>

          </div>
        </div>
      </section>
  );
}