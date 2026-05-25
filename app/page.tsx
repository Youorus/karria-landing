import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import StorytellingScroll from "@/components/sections/StorytellingScroll";
import SocialProof from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Karria - La plateforme IA qui réinvente et propulse votre carrière",
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
        {/* 1. Hero — cinematic first impression */}
        <Hero />

        {/* 2. Storytelling — product narrative & demo */}
        <StorytellingScroll />

        {/* 3. Problem — empathy + friction validation */}
        <Problem />

        {/* 4. Solution — Karria as the answer */}
        <Solution />

        {/* 5. Features — detailed bento grid */}
        <Features />

        {/* 7. Social proof — trust & traction */}
        <SocialProof />

        {/* 8. Pricing — conversion preview */}
        {/*  <Pricing /> */}

        {/* 9. Final CTA — close with power */}
        <FinalCTA />
      </main>
    </>
  );
}
