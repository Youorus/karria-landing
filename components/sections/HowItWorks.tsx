"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, MessageCircle, Rocket, Target } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Dis ce que tu cherches",
    description: "Un métier, un lieu, un contrat.",
    detail: "Écrit ou voix",
  },
  {
    number: "02",
    icon: Target,
    title: "Parcours ton fil",
    description:
      "Les offres qui collent le mieux en premier.",
    detail: "500 000+ offres",
  },
  {
    number: "03",
    icon: FileText,
    title: "Soigne ton CV",
    description: "Un modèle, ta couleur, ton score ATS.",
    detail: "9 modèles",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Postule",
    description:
      "CV adapté, lettre, et un dossier pour suivre.",
    detail: "PDF, Word ou e-mail",
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
            subtitle="De la recherche à la candidature, en quatre étapes."
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
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary-foreground font-mono">{i + 1}</span>
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
            href={NAV_ROUTES.download}
            className="btn-primary px-8 py-4 text-base gap-2.5 shadow-glow"
          >
            Télécharger Karria
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
