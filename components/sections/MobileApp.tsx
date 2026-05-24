"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Bell, Zap, MapPin } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Link from "next/link";
import { APP_LINKS } from "@/lib/constants";

const MOBILE_FEATURES = [
  {
    icon: Zap,
    title: "Matching en temps réel",
    desc: "Soyez alerté dès qu'une offre vous correspond, où que vous soyez.",
  },
  {
    icon: Bell,
    title: "Notifications intelligentes",
    desc: "Uniquement les alertes qui comptent. Aucun bruit, que du signal.",
  },
  {
    icon: MapPin,
    title: "Géolocalisé et filtré",
    desc: "Offres autour de vous, remote, hybride — vous choisissez.",
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
              Disponible bientôt sur iOS & Android
            </div>

            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              L&apos;intelligence carrière{" "}
              <span className="text-gradient-blue">dans votre poche.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Votre carrière ne s&apos;arrête pas quand vous fermez votre ordinateur.
              Avec Karria Mobile, accédez à votre feed personnalisé, postulez en un tap
              et suivez vos candidatures où que vous soyez.
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

            {/* App Store buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={APP_LINKS.appStore}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/50 border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-300"
                aria-label="Télécharger sur l'App Store"
              >
                <svg className="w-7 h-7 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none">Disponible sur</p>
                  <p className="font-semibold text-foreground text-sm leading-tight">App Store</p>
                </div>
              </Link>

              <Link
                href={APP_LINKS.googlePlay}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/50 border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-300"
                aria-label="Télécharger sur Google Play"
              >
                <svg className="w-7 h-7 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.68-7.31-2.83-2.83-10.86 10zM.5 1.93C.19 2.33 0 2.89 0 3.61v16.78c0 .72.19 1.28.51 1.68l.09.09 9.39-9.39v-.22L.59 3.16.5 1.93zM20.49 10.37l-2.7-1.56-3.17 3.17 3.17 3.17 2.72-1.57c.78-.45.78-1.76-.02-2.21zM4.19.1L16.87 7.4l-2.83 2.83L3.18.23C3.5.14 3.87.17 4.19.3V.1z" />
                </svg>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none">Disponible sur</p>
                  <p className="font-semibold text-foreground text-sm leading-tight">Google Play</p>
                </div>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground/80 mt-4">
              Inscrivez-vous pour être parmi les premiers informés du lancement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
