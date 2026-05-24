"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, ShieldCheck, Star, UserCheck } from "lucide-react";
import {AppDownloadCTA} from "@/components/ui/AppDownloadCTA";


const EASE = [0.16, 1, 0.3, 1] as const;

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
];

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    label: "Vos données restent protégées",
  },
  {
    icon: Lock,
    label: "Votre parcours vous appartient",
  },
  {
    icon: UserCheck,
    label: "Vous gardez le contrôle",
  },
];

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
      <section
          ref={ref}
          className="relative overflow-hidden py-36 md:py-52"
          aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60 dark:opacity-100">
          <div className="h-[620px] w-[620px] rounded-full bg-primary/10 blur-[130px]" />
        </div>

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

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE }}
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary"
          >
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="uppercase tracking-wide">
            L’assistant carrière qui reste avec vous
          </span>
            <Star className="h-3.5 w-3.5 fill-current" />
          </motion.div>

          <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: EASE }}
              className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Votre carrière va changer.
            <br />
            <span className="text-gradient-blue">
            Karria sera là.
          </span>
          </motion.h2>

          <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              className="mx-auto mb-14 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl"
          >
            Premier emploi, nouvelle opportunité, reconversion, évolution ou
            nouveau départ : Karria vous accompagne dans les moments importants
            de votre vie professionnelle.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="mb-16"
          >
            <AppDownloadCTA
                appStoreHref="#"
                googlePlayHref="#"
                showWebCTA={false}
            />
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground/70"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary/70" />
                  {label}
            </span>
            ))}
          </motion.div>
        </div>
      </section>
  );
}