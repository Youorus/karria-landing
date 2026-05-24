"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { KarriaFull } from "@/components/ui/Logo";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <div className="mb-8 opacity-50 grayscale">
          <KarriaFull size="md" className="mx-auto" />
        </div>
      </Reveal>
      
      <Reveal delay={0.1}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-destructive">Erreur Système</h1>
      </Reveal>
      
      <Reveal delay={0.2}>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Une turbulence imprévue a été détectée.
        </h2>
      </Reveal>
      
      <Reveal delay={0.3}>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Nos algorithmes travaillent déjà à la résolution du problème. 
          En attendant, vous pouvez essayer de rafraîchir la page.
        </p>
      </Reveal>
      
      <Reveal delay={0.4}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ShimmerButton onClick={() => reset()}>
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Réessayer
            </span>
          </ShimmerButton>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-all duration-300 font-medium"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
