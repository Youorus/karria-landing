"use client";

import { Settings } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookiePreferencesButton() {
  const { consent, reset } = useCookieConsent();

  return (
    <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
      <p className="text-sm font-semibold text-foreground mb-1">Vos préférences actuelles</p>
      <p className="text-sm text-muted-foreground mb-4">
        {consent === true && "Vous avez accepté les cookies d'analyse."}
        {consent === false && "Vous avez refusé les cookies d'analyse."}
        {consent === null && "Vous n'avez pas encore fait de choix."}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all duration-200"
      >
        <Settings className="w-4 h-4" />
        Modifier mes préférences
      </button>
    </div>
  );
}
