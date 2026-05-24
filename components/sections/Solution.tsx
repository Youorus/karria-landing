"use client";

import { motion } from "framer-motion";
import {Brain, FileText, PenLine, BarChart3, Bell, Shield, Target, Sparkles, Search} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const SOLUTIONS = [
  {
    icon: Search,
    title: "Karria cherche les bonnes offres pour vous",
    description:
        "Plus besoin de passer des heures sur des dizaines de sites. Karria rassemble et sélectionne les opportunités qui correspondent réellement à votre profil.",
    highlight: "Moins de recherche inutile",
  },
  {
    icon: Brain,
    title: "L’IA apprend à vous connaître",
    description:
        "Karria comprend vos compétences, votre expérience et vos objectifs pour vous proposer des offres plus pertinentes au fil du temps.",
    highlight: "Offres plus adaptées",
  },
  {
    icon: Sparkles,
    title: "Vos candidatures se préparent plus vite",
    description:
        "CV, lettres et contenus sont adaptés automatiquement selon l’offre visée pour vous faire gagner un temps énorme.",
    highlight: "Gain de temps réel",
  },
  {
    icon: Bell,
    title: "Soyez alerté au bon moment",
    description:
        "Recevez uniquement les opportunités importantes pour votre profil, afin de postuler plus vite et avant les autres candidats.",
    highlight: "Opportunités ciblées",
  },
];

export default function Solution() {
  return (
      <section
          id="solution"
          className="relative py-24 sm:py-32 md:py-40 overflow-hidden"
          aria-labelledby="solution-heading"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute inset-0 bg-hero-glow opacity-30 dark:opacity-50 pointer-events-none" />

        <div className="section-container relative z-10 px-4 sm:px-6">

          <Reveal variant="fadeUp">
            <SectionHeader
                eyebrow="La solution Karria"
                title={
                  <>
                    Une nouvelle intelligence{" "}
                    <span className="text-gradient-blue">pour votre carrière</span>
                  </>
                }
                subtitle="Karria réinvente chaque étape de votre recherche d'emploi avec une IA pensée pour vous aider à décrocher plus d'entretiens, plus vite."
            />
          </Reveal>

          <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className={cn(
                  "mt-12 sm:mt-16",
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                  "gap-px bg-border/40",
                  "rounded-2xl overflow-hidden",
                  "border border-border/40",
              )}
          >
            {SOLUTIONS.map((item) => (
                <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={cn(
                        "group relative flex flex-col gap-3 p-6",
                        "bg-card/60 backdrop-blur-sm",
                        "transition-colors duration-200 hover:bg-card",
                    )}
                >
                  {/* Icône */}
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-500/10 shrink-0">
                    <item.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Badge highlight */}
                  <div className="inline-flex items-center gap-1.5 w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
                    <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                  {item.highlight}
                </span>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}