"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { KarriaFull } from "@/components/ui/Logo";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <div className="mb-8">
          <KarriaFull size="md" className="mx-auto" />
        </div>
      </Reveal>
      
      <Reveal delay={0.1}>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">404</h1>
      </Reveal>
      
      <Reveal delay={0.2}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Oups ! Cette page semble s&apos;être égarée.
        </h2>
      </Reveal>
      
      <Reveal delay={0.3}>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Même la meilleure IA peut se tromper de chemin. 
          Laissez-nous vous ramener vers votre prochaine opportunité.
        </p>
      </Reveal>
      
      <Reveal delay={0.4}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RainbowButton asChild>
            <Link href="/">
              <span className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Retour à l&apos;accueil
              </span>
            </Link>
          </RainbowButton>
          
          <Link 
            href="/recherche-emploi-ia"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-all duration-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voir les offres
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
