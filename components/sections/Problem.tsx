"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Clock, Bot, Users, TrendingDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const PAIN_POINTS = [
  {
    icon: X,
    stat: "72%",
    title: "Des CV ignorés",
    description:
      "Les logiciels ATS rejettent automatiquement la majorité des candidatures avant qu'un recruteur humain ne les lise.",
    color: "text-red-400",
    bg: "bg-red-950/30",
    border: "border-red-900/40",
    glow: "rgba(239,68,68,0.08)",
  },
  {
    icon: Clock,
    stat: "3 mois",
    title: "D'attente en moyenne",
    description:
      "Les candidats passent en moyenne 3 mois à chercher un emploi, perdant des dizaines d'heures chaque semaine.",
    color: "text-orange-400",
    bg: "bg-orange-950/30",
    border: "border-orange-900/40",
    glow: "rgba(249,115,22,0.08)",
  },
  {
    icon: Bot,
    stat: "0",
    title: "Personnalisation réelle",
    description:
      "Les plateformes actuelles proposent les mêmes offres à tous. Aucune intelligence, aucune compréhension de votre profil unique.",
    color: "text-amber-400",
    bg: "bg-amber-950/30",
    border: "border-amber-900/40",
    glow: "rgba(245,158,11,0.08)",
  },
  {
    icon: TrendingDown,
    stat: "1/10",
    title: "Taux de réponse",
    description:
      "En moyenne, seulement 1 candidature sur 10 obtient une réponse. La plupart restent sans suite indéfiniment.",
    color: "text-rose-400",
    bg: "bg-rose-950/30",
    border: "border-rose-900/40",
    glow: "rgba(244,63,94,0.08)",
  },
  {
    icon: Users,
    stat: "×40",
    title: "Plus de concurrence",
    description:
      "La concurrence a explosé. Des centaines de candidats postulent aux mêmes offres, rendant chaque candidature encore plus difficile.",
    color: "text-pink-400",
    bg: "bg-pink-950/30",
    border: "border-pink-900/40",
    glow: "rgba(236,72,153,0.08)",
  },
];

const EASE = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="problem-heading"
      ref={ref}
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <SectionHeader
            eyebrow="Le problème"
            title={
              <>
                La recherche d&apos;emploi{" "}
                <span className="text-gradient">est cassée.</span>
              </>
            }
            subtitle="Des millions de candidats investissent des semaines entières dans des candidatures qui ne reçoivent jamais de réponse. Il faut changer ça."
          />
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {PAIN_POINTS.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="relative group rounded-2xl p-6 border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border"
              style={{
                background: `radial-gradient(circle at top left, ${point.glow} 0%, transparent 60%)`,
              }}
            >
              <div
                className={`w-10 h-10 rounded-xl ${point.bg} border ${point.border} flex items-center justify-center mb-4`}
              >
                <point.icon className={`w-5 h-5 ${point.color}`} />
              </div>

              <div className={`font-display font-bold text-3xl ${point.color} mb-2 leading-none`}>
                {point.stat}
              </div>

              <h3 className="font-display font-semibold text-foreground text-sm mb-2">
                {point.title}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Separator statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.6, ease: EASE }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border/50">
            <span className="text-2xl">✦</span>
            <p className="text-muted-foreground font-medium">
              Karria est conçu pour résoudre chacun de ces problèmes.
            </p>
            <span className="text-2xl">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
