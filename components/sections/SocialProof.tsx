"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
  { value: 50000, suffix: "+", label: "Candidats actifs", description: "Professionnels qui font confiance à Karria" },
  { value: 3, suffix: "×", label: "Plus de réponses", description: "En moyenne, vs les candidatures classiques" },
  { value: 97, suffix: "%", label: "Satisfaction", description: "Des utilisateurs recommandent Karria" },
  { value: 10000, suffix: "+", label: "Offres matchées", description: "Chaque mois via notre moteur IA" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Designer UX • Paris",
    avatar: "👩‍🎨",
    stars: 5,
    quote:
      "Karria a complètement changé ma façon de chercher un emploi. En une semaine, j'avais 4 entretiens grâce au matching IA. Les CV adaptés à chaque offre font vraiment la différence.",
    company: "Maintenant chez Alan",
    companyColor: "text-emerald-400",
  },
  {
    name: "Thomas R.",
    role: "Développeur Full-Stack • Lyon",
    avatar: "👨‍💻",
    stars: 5,
    quote:
      "J'ai essayé toutes les plateformes classiques. Karria est dans une autre catégorie. Le score de matching est précis, et la génération de lettres de motivation me fait gagner un temps fou.",
    company: "Maintenant chez Mirakl",
    companyColor: "text-karria-400",
  },
  {
    name: "Léa K.",
    role: "Marketing Manager • Bordeaux",
    avatar: "👩‍💼",
    stars: 5,
    quote:
      "En reconversion, j'avais peur de ne pas trouver. Karria a analysé mes compétences transversales et m'a proposé des offres parfaitement adaptées. Incroyable. En 3 semaines, c'était signé.",
    company: "Maintenant chez Contentsquare",
    companyColor: "text-sky-400",
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

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-muted border border-border flex items-center justify-center text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.name}</p>
                    <p className="text-muted-foreground/80 text-xs">{t.role}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold ${t.companyColor}`}>
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.7, ease: EASE }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-muted-foreground/80 uppercase tracking-widest mb-8">
            Utilisé par des professionnels chez
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-30">
            {["Spotify", "Doctolib", "Swile", "Alan", "Contentsquare", "Mirakl", "Mistral"].map((co) => (
              <span key={co} className="font-display font-bold text-muted-foreground text-lg">
                {co}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
