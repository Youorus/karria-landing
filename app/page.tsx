import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import MobileApp from "@/components/sections/MobileApp";
import Experience from "@/components/sections/Experience";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Karria — La plateforme IA qui réinvente votre carrière",
  description:
    "Karria est la plateforme d'intelligence artificielle qui transforme votre recherche d'emploi : matching IA, génération de CV, lettres de motivation personnalisées et accompagnement carrière intelligent.",
  path: "/",
  keywords: [
    "plateforme carrière IA",
    "recherche emploi intelligence artificielle",
    "matching emploi IA",
    "CV IA automatique",
    "lettre motivation IA",
    "coaching carrière intelligent",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main id="main-content">
        {/* 1. Hero — first impression, emotional hook */}
        <Hero />

        {/* 2. Problem — empathy + friction validation */}
        <Problem />

        {/* 3. Solution — Karria as the answer */}
        <Solution />

        {/* 4. Features — detailed bento grid */}
        <Features />

        {/* 5. How it works — clarity & simplicity */}
        <HowItWorks />

        {/* 6. Mobile App — mobile-first storytelling */}
        <MobileApp />

        {/* 7. Experience — emotional section */}
        <Experience />

        {/* 8. Social proof — trust & traction */}
        <SocialProof />

        {/* 9. Pricing — conversion preview */}
        <Pricing />

        {/* 10. Final CTA — close with power */}
        <FinalCTA />
      </main>
    </>
  );
}
