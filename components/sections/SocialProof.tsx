"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
  {
    value: 100000,
    suffix: "+",
    label: "Offres analysées par jour",
    description: "Karria agrège et traite des milliers d’offres partout en France.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Plateformes connectées",
    description: "Les opportunités sont récupérées depuis plusieurs sources d’emploi.",
  },
  {
    value: 5,
    suffix: "×",
    label: "Recherche plus rapide",
    description: "Moins de temps perdu à chercher, trier et comparer les offres.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Documents optimisés",
    description: "CV et lettres générés pour être clairs, professionnels et adaptés.",
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Designer UX",
    stars: 5,
    quote:
        "Avant, je passais mes soirées à chercher des offres. Avec Karria, je vois directement celles qui me correspondent vraiment.",
  },
  {
    name: "Thomas R.",
    role: "Développeur full-stack",
    stars: 5,
    quote:
        "Ce que j’aime, c’est le gain de temps. Les offres sont mieux ciblées et mes candidatures sont prêtes beaucoup plus vite.",
  },
  {
    name: "Léa K.",
    role: "Marketing manager",
    stars: 5,
    quote:
        "Karria m’a aidée à y voir plus clair. Je savais quoi postuler, comment adapter mon CV et quoi faire ensuite.",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="traction"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="proof-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <SectionHeader
            eyebrow="Traction"
            title={
              <>
                Des résultats{" "}
                <span className="text-gradient-blue">qui parlent.</span>
              </>
            }
            subtitle="Des milliers de professionnels font déjà confiance à Karria pour réinventer leur recherche d'emploi."
          />
        </motion.div>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
              className="relative group card card-hover text-center py-8 px-6 bg-card/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-karria-600/0 group-hover:bg-karria-600/4 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <div className="font-display font-bold text-foreground mb-1 leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-semibold text-muted-foreground text-sm mb-1">{stat.label}</p>
                <p className="text-muted-foreground/80 text-xs leading-tight">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE }}
              className="relative group card card-hover flex flex-col bg-card/50 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-karria-800 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
