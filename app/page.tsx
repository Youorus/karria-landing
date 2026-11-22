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
  title: "Trouve ton job, soigne ton CV",
  description:
    "Karria trouve les offres qui te correspondent, t'aide à faire un CV qui passe et te prévient dès qu'une nouvelle offre arrive. Gratuite, sur iPhone et Android.",
  path: "/",
  keywords: [
    "application recherche emploi",
    "offres d'emploi France",
    "alternance stage intérim",
    "CV IA",
    "score ATS",
    "lettre de motivation IA",
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
