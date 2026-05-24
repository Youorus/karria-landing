"use client";

import { motion } from "framer-motion";
import { X, Clock, Bot, Users, FileCheck2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const PAIN_POINTS = [
  {
    icon: Clock,
    stat: "Des heures perdues",
    title: "Chercher un emploi est devenu épuisant",
    description:
        "Passer des heures sur des dizaines de sites, lire des offres sans fin et essayer de trouver celles qui correspondent vraiment.",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    statColor: "text-orange-500",
  },
  {
    icon: FileCheck2,
    stat: "CV après CV",
    title: "Chaque candidature demande de tout refaire",
    description:
        "Adapter son CV, modifier ses textes, écrire une nouvelle lettre de motivation… encore et encore.",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    statColor: "text-amber-500",
  },
  {
    icon: X,
    stat: "Très peu de réponses",
    title: "La plupart des candidatures restent ignorées",
    description:
        "Des dizaines de candidatures envoyées sans jamais recevoir de réponse ni obtenir un entretien.",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    statColor: "text-red-500",
  },
  {
    icon: Users,
    stat: "Une forte concurrence",
    title: "Des centaines de personnes postulent aux mêmes offres",
    description:
        "Sortir du lot devient presque impossible quand tout le monde postule au même moment.",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    statColor: "text-pink-500",
  },
  {
    icon: Bot,
    stat: "0 aide réelle",
    title: "Les plateformes actuelles ne vous accompagnent pas",
    description:
        "La plupart des sites affichent des offres sans vraiment aider à trouver, préparer et réussir.",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    statColor: "text-violet-500",
  },
] as const;

export default function Problem() {
  return (
      <section
          id="problem"
          className="relative py-24 sm:py-32 md:py-40 overflow-hidden"
          aria-labelledby="problem-heading"
      >
        {/* Fond */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="section-container relative z-10 px-4 sm:px-6">

          {/* Header */}
          <Reveal variant="fadeUp">
            <SectionHeader
                eyebrow="Le problème"
                title={
                  <>
                    La recherche d&apos;emploi{" "}
                    <span className="text-red-500">est cassée.</span>
                  </>
                }
                subtitle="Des millions de candidats investissent des semaines entières dans des candidatures qui ne reçoivent jamais de réponse. Il faut changer ça."
            />
          </Reveal>

          {/* Grille unifiée — séparateurs internes via gap=px + bg sur le wrapper */}
          <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className={cn(
                  "mt-12 sm:mt-16",
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
                  // Séparateurs façon "joined grid" : 1px de fond visible entre les cellules
                  "gap-px bg-border/40",
                  "rounded-2xl overflow-hidden",
                  "border border-border/40",
              )}
          >
            {PAIN_POINTS.map((point) => (
                <motion.div
                    key={point.title}
                    variants={fadeUp}
                    className={cn(
                        "relative flex flex-col gap-3 p-6",
                        "bg-card/60 backdrop-blur-sm",
                        "transition-colors duration-200",
                        "hover:bg-card",
                    )}
                >
                  {/* Icône */}
                  <div
                      className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center",
                          point.iconBg,
                      )}
                  >
                    <point.icon className={cn("w-4 h-4", point.iconColor)} />
                  </div>

                  {/* Stat */}
                  <span
                      className={cn(
                          "text-[10px] font-bold uppercase tracking-[0.14em]",
                          point.statColor,
                      )}
                  >
                {point.stat}
              </span>

                  {/* Titre */}
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
            ))}
          </motion.div>

          {/* Statement final */}
          <Reveal variant="fadeUp" delay={0.4}>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border/40 pt-8">
              <p className="text-xl sm:text-2xl font-semibold text-foreground leading-snug max-w-lg">
                Karria est conçu pour résoudre{" "}
                <span className="text-red-500">chacun de ces problèmes.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  );
}