"use client";

import { motion } from "framer-motion";
import { Bell, ListFilter, Search, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const SOLUTIONS = [
  {
    icon: Search,
    title: "Karria cherche pour toi",
    description:
        "Tu dis ce que tu veux, elle lance la recherche.",
    highlight: "Recherche",
  },
  {
    icon: ListFilter,
    title: "Un fil trié",
    description:
        "Les offres les plus pertinentes d’abord.",
    highlight: "Pertinence",
  },
  {
    icon: Sparkles,
    title: "Des candidatures prêtes",
    description:
        "Un CV adapté et une lettre par offre.",
    highlight: "Gain de temps",
  },
  {
    icon: Bell,
    title: "Une alerte au bon moment",
    description:
        "Dès qu’une nouvelle offre correspond.",
    highlight: "Alertes",
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
                    Une assistante{" "}
                    <span className="text-gradient-blue">pour ta recherche</span>
                  </>
                }
                subtitle="Elle cherche, trie et prépare avec toi."
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