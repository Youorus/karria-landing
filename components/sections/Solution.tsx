"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, FileText, PenLine, BarChart3, Bell, Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const SOLUTIONS = [
  {
    icon: Brain,
    title: "Matching IA de précision",
    description:
      "Notre moteur IA analyse 40+ signaux de votre profil pour vous connecter uniquement aux offres qui vous correspondent vraiment.",
    highlight: "40+ signaux analysés",
  },
  {
    icon: FileText,
    title: "CV IA adaptatif",
    description:
      "Générez un CV professionnel et optimisez-le automatiquement pour chaque offre. Résultat : 3× plus de réponses.",
    highlight: "3× plus de réponses",
  },
  {
    icon: PenLine,
    title: "Lettres en secondes",
    description:
      "Karria génère des lettres de motivation personnalisées, ciblées et prêtes à envoyer en quelques secondes.",
    highlight: "< 10 secondes",
  },
  {
    icon: Shield,
    title: "100% ATS-optimisé",
    description:
      "Tous vos documents sont conçus pour passer les filtres ATS des recruteurs et atteindre les bons interlocuteurs.",
    highlight: "Score ATS 95+",
  },
  {
    icon: Bell,
    title: "Alertes intelligentes",
    description:
      "Soyez notifié en temps réel dès qu'une opportunité correspondant à votre profil est publiée.",
    highlight: "Temps réel",
  },
  {
    icon: BarChart3,
    title: "Analytics carrière",
    description:
      "Suivez l'avancement de vos candidatures, analysez vos performances et affinez votre stratégie.",
    highlight: "Tableau de bord complet",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solution"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="solution-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {/* Central glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 dark:opacity-50 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
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
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
              className="group relative card card-hover cursor-default bg-card/50 backdrop-blur-sm"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-karria-600/0 group-hover:bg-karria-600/5 transition-colors duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-karria-950/60 border border-karria-800/50 flex items-center justify-center mb-4 group-hover:border-karria-700/60 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-karria-400" />
                </div>

                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight badge */}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-karria-400 bg-karria-950/60 border border-karria-800/40 rounded-full px-2.5 py-1">
                  <span className="w-1 h-1 rounded-full bg-karria-400" />
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
