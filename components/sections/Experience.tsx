"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-32 md:py-48 overflow-hidden"
      aria-label="Section expérience Karria"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(37,99,235,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,165,233,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />

      {/* Top / bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon / decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-center mb-10"
        >
          <div className="w-16 h-16 rounded-3xl bg-karria-600/10 border border-karria-600/20 flex items-center justify-center shadow-glow">
            <span className="text-2xl">✦</span>
          </div>
        </motion.div>

        {/* Main quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
          className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em] mb-6"
        >
          Notre mission
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.25, ease: EASE }}
          className="font-display font-bold tracking-tight text-foreground mb-6"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}
        >
          Votre carrière mérite une{" "}
          <span className="text-gradient-blue">intelligence</span>{" "}
          à sa hauteur.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Chaque professionnel mérite une technologie qui comprend son unicité,
          valorise son parcours et l&apos;aide à atteindre ses ambitions.
          Nous croyons que l&apos;IA peut rendre la recherche d&apos;emploi plus humaine, pas moins.
        </motion.p>

        {/* Three values */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.55, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          {[
            { emoji: "🎯", title: "Précision", desc: "Uniquement des offres qui ont du sens pour vous" },
            { emoji: "⚡", title: "Rapidité", desc: "De la recherche à la candidature en quelques minutes" },
            { emoji: "🤝", title: "Confiance", desc: "Votre parcours mis en valeur, vos données respectées" },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-5 border border-border/50 hover:border-border transition-colors duration-300"
            >
              <div className="text-2xl mb-3">{val.emoji}</div>
              <p className="font-display font-semibold text-foreground text-base mb-1">{val.title}</p>
              <p className="text-muted-foreground text-sm">{val.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          <a
            href="#"
            className="btn-primary px-8 py-4 text-base gap-2.5 shadow-glow-lg"
          >
            Rejoindre Karria gratuitement
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
