"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { APP_LINKS } from "@/lib/constants";

const PLANS = [
  {
    id: "free",
    name: "Gratuit",
    price: { monthly: 0, annual: 0 },
    description: "Pour commencer votre recherche intelligemment.",
    badge: null,
    highlighted: false,
    features: [
      "5 matchings IA par mois",
      "1 CV généré",
      "3 lettres de motivation",
      "Tableau de bord candidatures",
      "Alertes emploi (limité)",
      "Templates basiques",
    ],
    cta: "Commencer gratuitement",
    ctaStyle: "secondary",
  },
  {
    id: "premium",
    name: "Premium",
    price: { monthly: 9.99, annual: 7.99 },
    description: "Pour les candidats qui veulent décrocher plus vite.",
    badge: "Le plus populaire",
    highlighted: true,
    features: [
      "Matchings IA illimités",
      "CV illimités + optimisation IA",
      "Lettres illimitées",
      "Score ATS en temps réel",
      "Analytics de candidatures",
      "Alertes prioritaires",
      "Templates premium",
      "Support prioritaire",
    ],
    cta: "Démarrer Premium",
    ctaStyle: "primary",
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 19.99, annual: 15.99 },
    description: "Pour les professionnels qui ne laissent rien au hasard.",
    badge: null,
    highlighted: false,
    features: [
      "Tout Premium inclus",
      "Coaching carrière IA",
      "Analyse de profil LinkedIn",
      "Préparation entretien IA",
      "Veille concurrentielle",
      "Export multi-format",
      "Accès API développeurs",
      "Support dédié 24/7",
    ],
    cta: "Démarrer Pro",
    ctaStyle: "secondary",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section
      id="pricing"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="pricing-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute inset-0 bg-hero-glow opacity-30 dark:opacity-50 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <SectionHeader
            eyebrow="Tarifs"
            title={
              <>
                Investissez dans{" "}
                <span className="text-gradient-blue">votre carrière</span>
              </>
            }
            subtitle="Commencez gratuitement, évoluez selon vos ambitions. Sans engagement."
          />
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
          className="flex justify-center mt-8 mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-card border border-border/50">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                billing === "monthly"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                billing === "annual"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annuel
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
              className={cn(
                "relative rounded-3xl p-7 flex flex-col transition-all duration-500",
                plan.highlighted
                  ? "border border-karria-700/60 bg-card dark:bg-gradient-to-b dark:from-karria-950/60 dark:to-card shadow-glow"
                  : "card bg-card/50 backdrop-blur-sm hover:border-border"
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-karria-600 text-white shadow-glow-sm">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <p className="font-display font-semibold text-muted-foreground text-sm mb-3">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display font-bold text-foreground text-4xl leading-none">
                    {plan.price[billing] === 0
                      ? "0€"
                      : `${plan.price[billing].toFixed(2).replace(".", ",")}€`}
                  </span>
                  {plan.price[billing] > 0 && (
                    <span className="text-muted-foreground text-sm mb-1.5">/mois</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="divider border-border/50 mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.highlighted
                        ? "bg-karria-600/20 border border-karria-600/40"
                        : "bg-muted/50 border border-border"
                    )}>
                      <Check className={cn("w-3 h-3", plan.highlighted ? "text-karria-400" : "text-muted-foreground")} />
                    </div>
                    <span className="text-muted-foreground text-sm leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={APP_LINKS.webapp}
                className={cn(
                  "w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold font-display transition-all duration-300",
                  plan.highlighted
                    ? "btn-primary shadow-glow"
                    : "btn-secondary"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.6, ease: EASE }}
          className="text-center text-muted-foreground/80 text-sm mt-10"
        >
          Paiement sécurisé · Sans engagement · Annulable à tout moment
        </motion.p>
      </div>
    </section>
  );
}
