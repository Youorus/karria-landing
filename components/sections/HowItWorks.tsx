"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCircle, BrainCircuit, Target, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    icon: UserCircle,
    title: "Créez votre profil",
    description:
      "Renseignez votre parcours, vos compétences, vos ambitions et vos préférences en quelques minutes. Karria construit votre identité professionnelle.",
    detail: "Profil enrichi automatiquement",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "L'IA comprend votre parcours",
    description:
      "Notre moteur IA analyse en profondeur votre profil : compétences techniques, soft skills, évolution de carrière et objectifs à court et long terme.",
    detail: "Analyse en temps réel",
  },
  {
    number: "03",
    icon: Target,
    title: "Karria trouve vos opportunités",
    description:
      "Recevez uniquement des offres qui correspondent vraiment à votre profil, avec un score de matching détaillé pour chaque opportunité.",
    detail: "Matching précis à 97%",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Postulez avec vos meilleurs atouts",
    description:
      "CV adapté, lettre personnalisée, profil optimisé — Karria génère les documents parfaits pour chaque candidature, en quelques secondes.",
    detail: "Documents prêts en < 10s",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="how-it-works-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-section-glow opacity-30 dark:opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <SectionHeader
            eyebrow="Comment ça marche"
            title={
              <>
                Simple. Intelligent.{" "}
                <span className="text-gradient-blue">Efficace.</span>
              </>
            }
            subtitle="En 4 étapes, Karria transforme votre recherche d'emploi en une expérience fluide et personnalisée."
          />
        </motion.div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-karria-800/20 via-karria-600/30 to-karria-800/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE }}
                className="relative flex flex-col items-center text-center lg:items-center group"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center group-hover:border-karria-700/50 group-hover:bg-muted transition-all duration-300 group-hover:shadow-glow-sm">
                    <step.icon className="w-7 h-7 text-karria-400 group-hover:text-karria-300 transition-colors" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-karria-600 border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white font-mono">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-56">
                  {step.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-karria-400 bg-karria-950/50 border border-karria-800/40 rounded-full px-2.5 py-1">
                  <span className="w-1 h-1 rounded-full bg-karria-400" />
                  {step.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-16 flex justify-center"
        >
          <Link
            href={NAV_ROUTES.pricing}
            className="btn-primary px-8 py-4 text-base gap-2.5 shadow-glow"
          >
            Commencer maintenant — c&apos;est gratuit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
