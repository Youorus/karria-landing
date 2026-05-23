"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  FileText,
  Sparkles,
  PenLine,
  ShieldCheck,
  Palette,
  LayoutDashboard,
  Bell,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type Feature, FEATURES_DATA } from "@/lib/features";
import SectionHeader from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  FileText,
  Sparkles,
  PenLine,
  ShieldCheck,
  Palette,
  LayoutDashboard,
  Bell,
};

const TAG_STYLES = {
  blue: "tag-blue",
  sky: "tag-sky",
  ice: "tag-ice",
} as const;

const EASE = [0.16, 1, 0.3, 1];

// ─── Featured Card (large) ────────────────────────────────────────────────
function FeaturedCard({ feature }: { feature: Feature }) {
  const Icon = ICON_MAP[feature.iconName] ?? Sparkles;

  return (
    <div className="relative group rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[340px] cursor-default transition-all duration-500 hover:-translate-y-1">
      {/* Rich background */}
      <div
        className="absolute inset-0 bg-card"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(37,99,235,0.1) 0%, rgba(14,165,233,0.05) 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 border border-border/50 rounded-3xl" />

      {/* Shimmer on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -inset-full top-0 h-32 w-64 bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Tag + Icon */}
        <div className="flex items-start justify-between mb-8">
          <span className={cn("feature-tag", TAG_STYLES[feature.tagColor])}>
            <span className="w-1 h-1 rounded-full bg-karria-400" />
            {feature.tag}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-karria-600/10 border border-karria-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-karria-400" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl tracking-tight leading-tight mb-4">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            {feature.description}
          </p>
        </div>

        {/* CTA link */}
        <div className="mt-8 flex items-center gap-2 text-karria-400 text-sm font-semibold group/link">
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-karria-500/40 to-transparent" />
    </div>
  );
}

// ─── Standard Card ────────────────────────────────────────────────────────
function FeatureCard({
  feature,
  size = "md",
}: {
  feature: Feature;
  size?: "sm" | "md";
}) {
  const Icon = ICON_MAP[feature.iconName] ?? Brain;

  return (
    <div
      className={cn(
        "relative group card card-hover flex flex-col cursor-default bg-card/50 backdrop-blur-sm",
        size === "sm" ? "p-5" : "p-6"
      )}
    >
      {/* Hover glow bg */}
      <div className="absolute inset-0 rounded-3xl bg-karria-600/0 group-hover:bg-karria-600/5 transition-colors duration-300 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "rounded-xl flex items-center justify-center transition-colors duration-300",
              "bg-muted/50 border border-border group-hover:border-foreground/20",
              size === "sm" ? "w-9 h-9" : "w-10 h-10"
            )}
          >
            <Icon className={cn("text-muted-foreground", size === "sm" ? "w-4 h-4" : "w-5 h-5")} />
          </div>
          <span className={cn("feature-tag", TAG_STYLES[feature.tagColor])}>
            {feature.tag}
          </span>
        </div>

        <h3
          className={cn(
            "font-display font-semibold text-foreground leading-snug mb-2",
            size === "sm" ? "text-sm" : "text-base"
          )}
        >
          {feature.title}
        </h3>

        <p
          className={cn(
            "text-muted-foreground leading-relaxed flex-1",
            size === "sm" ? "text-xs" : "text-sm"
          )}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

// ─── Main Features Section ────────────────────────────────────────────────
export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featuredFeature = FEATURES_DATA.find((f) => f.featured);
  const otherFeatures = FEATURES_DATA.filter((f) => !f.featured);

  return (
    <section
      id="features"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="features-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <SectionHeader
            eyebrow="Fonctionnalités"
            title={
              <>
                Tout ce dont vous avez besoin
                <br />
                <span className="text-gradient">pour décrocher l&apos;offre.</span>
              </>
            }
            subtitle="Un écosystème complet pensé pour chaque étape de votre recherche d'emploi."
          />
        </motion.div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Featured card - spans 2 cols */}
          {featuredFeature && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="lg:col-span-2"
            >
              <FeaturedCard feature={featuredFeature} />
            </motion.div>
          )}

          {/* Feature 1 */}
          {otherFeatures.slice(0, 1).map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}

          {/* Features 2–4 */}
          {otherFeatures.slice(1, 4).map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 + i * 0.07, ease: EASE }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}

          {/* Features 5–7: last row */}
          {otherFeatures.slice(4).map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 + i * 0.07, ease: EASE }}
            >
              <FeatureCard feature={feature} size="sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
