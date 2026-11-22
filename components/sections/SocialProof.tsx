"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, ShieldCheck, Zap } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";
import { FACTS, PRICING } from "@/lib/karria";

const STATS = [
  {
    value: FACTS.activeOffers,
    suffix: "+",
    label: "Offres actives en France",
    description: "Mises à jour chaque jour : CDI, CDD, alternance, stage, intérim.",
  },
  {
    value: FACTS.cvTemplates,
    suffix: "",
    label: "Modèles de CV",
    description: "Avec ta couleur, et chaque ligne retouchable.",
  },
];

const COMMITMENTS = [
  {
    icon: Gift,
    title: "La recherche d’offres est gratuite",
    description:
        "Et illimitée. Karria est financée par des annonces discrètes.",
  },
  {
    icon: Zap,
    title: `Sans pub pour ${PRICING.monthlyLabel} par mois`,
    description:
        `« ${PRICING.planName} » retire les annonces et lève les limites mensuelles. Sans engagement.`,
  },
  {
    icon: ShieldCheck,
    title: "Tes données t’appartiennent",
    description:
        "Tu décides si l’IA peut lire ton CV, et ton compte s’efface depuis l’app.",
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
            eyebrow="En chiffres"
            title={
              <>
                Des faits,{" "}
                <span className="text-gradient-blue">pas des promesses.</span>
              </>
            }
            subtitle="Ce que tu trouves dans l’app aujourd’hui."
          />
        </motion.div>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 max-w-xl mx-auto xs:grid-cols-2">
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
                <p className="text-muted-foreground text-xs leading-tight">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMMITMENTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE }}
              className="relative group card card-hover flex flex-col bg-card/50 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-karria-600/10 border border-karria-600/20 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-karria-500" />
              </div>

              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                {c.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
