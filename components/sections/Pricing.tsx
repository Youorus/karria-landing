"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

const PLANS = [
  {
    id: "free",
    name: "Gratuit",
    price: 0,
    description: "Pour commencer votre recherche d'emploi sans limite sur le matching.",
    highlighted: false,
    features: [
      "Matching et recommandations d'offres illimités",
      "3 CV générés par mois",
      "3 lettres de motivation générées par mois",
      "Accès illimité aux templates",
      "2 photos de profil professionnelles par mois",
    ],
    cta: "Commencer gratuitement",
  },
  {
    id: "illimite",
    name: "Illimité",
    price: 4.99,
    description: "Pour ne plus jamais être limité dans vos candidatures.",
    highlighted: true,
    features: [
      "Tout le plan Gratuit inclus",
      "CV générés illimités",
      "Lettres de motivation illimitées",
      "Soutient le développement de Karria et le maintien de la plateforme",
    ],
    cta: "Passer à l'illimité",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
            subtitle="Le matching reste gratuit pour tout le monde. Passez à l'illimité quand vous en avez besoin."
          />
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-14">
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
              {/* Plan name + price */}
              <div className="mb-6">
                <p className="font-display font-semibold text-muted-foreground text-sm mb-3">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display font-bold text-foreground text-4xl leading-none">
                    {plan.price === 0
                      ? "0€"
                      : `${plan.price.toFixed(2).replace(".", ",")}€`}
                  </span>
                  {plan.price > 0 && (
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
                href={NAV_ROUTES.download}
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
