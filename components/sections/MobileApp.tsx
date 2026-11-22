"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Bell, Zap, MapPin } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { StoreBadge } from "@/components/ui/AppDownloadCTA";

const MOBILE_FEATURES = [
  {
    icon: Zap,
    title: "Un fil d’offres pour toi",
    desc: "Les offres les plus pertinentes en premier, mises à jour chaque jour.",
  },
  {
    icon: Bell,
    title: "Des alertes à la carte",
    desc: "Une notification dès qu’une offre correspond à une recherche enregistrée.",
  },
  {
    icon: MapPin,
    title: "Près de chez toi",
    desc: "Un lieu, un rayon, un contrat : tu choisis.",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function MobileApp() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mobile"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="mobile-heading"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {/* Big glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-karria-700/5 dark:bg-karria-700/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: EASE }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              {/* Second phone (blurred, behind) */}
              <div
                className="absolute -right-8 top-8 opacity-20 dark:opacity-30 blur-sm pointer-events-none scale-90 origin-right"
              >
                <PhoneMockup animate={false} />
              </div>
              <PhoneMockup animate={true} className="relative z-10" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-karria-300 bg-karria-950/70 border border-karria-800/60 mb-6">
              <Smartphone className="w-3.5 h-3.5" />
              Disponible sur iPhone et Android
            </div>

            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Ta recherche d&apos;emploi{" "}
              <span className="text-gradient-blue">dans ta poche.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Ton fil d&apos;offres, ton CV et tes candidatures, partout avec toi.
            </p>

            {/* Mobile features */}
            <div className="space-y-4 mb-10">
              {MOBILE_FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-karria-950/60 border border-karria-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feat.icon className="w-4 h-4 text-karria-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{feat.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Badges de store */}
            <div className="flex flex-wrap gap-3">
              <StoreBadge store="app_store" />
              <StoreBadge store="google_play" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
