import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import StorytellingScroll from "@/components/sections/StorytellingScroll";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Plateforme IA pour votre carrière",
  description:
    "Karria transforme votre recherche d'emploi grâce à l'IA : matching personnalisé, CV optimisé, lettres ciblées. Lancez-vous gratuitement.",
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
      <Hero />
      <StorytellingScroll />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </>
  );
}
