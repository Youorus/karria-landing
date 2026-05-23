"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const CTA_PARTICLES = [
  { id: 1, x: 12, y: 15, size: 2, duration: 4, delay: 0.5 },
  { id: 2, x: 85, y: 10, size: 3, duration: 5, delay: 1.2 },
  { id: 3, x: 5, y: 80, size: 2.5, duration: 6, delay: 0.2 },
  { id: 4, x: 92, y: 75, size: 4, duration: 4.5, delay: 1.8 },
  { id: 5, x: 25, y: 45, size: 2, duration: 5.5, delay: 0.8 },
  { id: 6, x: 70, y: 35, size: 3.5, duration: 7, delay: 2.1 },
  { id: 7, x: 40, y: 90, size: 2, duration: 4.2, delay: 0.3 },
  { id: 8, x: 15, y: 65, size: 3, duration: 5.8, delay: 1.5 },
  { id: 9, x: 80, y: 55, size: 2.5, duration: 6.2, delay: 0.9 },
  { id: 10, x: 50, y: 20, size: 4, duration: 5, delay: 2.5 },
  { id: 11, x: 35, y: 60, size: 2, duration: 4.8, delay: 1.1 },
  { id: 12, x: 65, y: 85, size: 3, duration: 6.5, delay: 0.6 },
  { id: 13, x: 10, y: 30, size: 2.5, duration: 5.2, delay: 1.4 },
  { id: 14, x: 90, y: 25, size: 3.5, duration: 4.6, delay: 0.7 },
  { id: 15, x: 45, y: 75, size: 2, duration: 7.2, delay: 2.0 },
  { id: 16, x: 75, y: 15, size: 3, duration: 5.4, delay: 1.3 },
  { id: 17, x: 20, y: 85, size: 2.5, duration: 6.8, delay: 0.4 },
  { id: 18, x: 55, y: 40, size: 4, duration: 5.6, delay: 1.7 },
  { id: 19, x: 85, y: 65, size: 2, duration: 4.4, delay: 0.9 },
  { id: 20, x: 30, y: 10, size: 3.5, duration: 6.1, delay: 2.3 },
];

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 dark:opacity-100">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating particles */}
      {CTA_PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-semibold mb-10"
        >
          <Star className="w-3.5 h-3.5 fill-current" />
          <span className="tracking-wide uppercase">Rejoignez le futur du recrutement</span>
          <Star className="w-3.5 h-3.5 fill-current" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Construisez la suite
          <br />
          <span className="text-gradient-blue">de votre carrière</span>
          <br />
          avec Karria.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Des milliers de candidats transforment déjà leur recherche d&apos;emploi
          avec l&apos;IA. C&apos;est votre tour.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="#"
            className="btn-primary h-14 px-10 text-lg shadow-2xl shadow-primary/20"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="#"
            className="btn-secondary h-14 px-10 text-lg"
          >
            Voir une démo
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground/60"
        >
          {[
            "Gratuit pour commencer",
            "Aucune carte requise",
            "Données sécurisées",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
