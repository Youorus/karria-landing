import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Conditions Générales d'Utilisation",
  description: "Consultez les conditions générales d'utilisation de Karria pour comprendre les règles et engagements liés à l'utilisation de notre plateforme.",
  path: "/cgu",
});

export default function CGUPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Légal"
            title="Conditions Générales d'Utilisation"
            subtitle="Les règles du jeu pour une collaboration saine et transparente entre Karria et vous."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">1. Objet</h3>
                  <p>
                    Les présentes CGU ont pour objet de définir les modalités de mise à disposition des services de Karria et les conditions d&apos;utilisation du service par l&apos;Utilisateur.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">2. Description des services</h3>
                  <p>
                    Karria fournit une assistance à la recherche d&apos;emploi basée sur l&apos;IA, incluant le matching d&apos;offres, la génération de documents (CV, lettres) et le suivi de carrière. L&apos;IA est un outil d&apos;assistance et ne garantit pas l&apos;obtention d&apos;un emploi.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">3. Compte Utilisateur</h3>
                  <p>
                    Pour accéder à certains services, l&apos;Utilisateur doit créer un compte. Il est responsable de la confidentialité de ses identifiants et de toute activité sur son compte.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">4. Propriété Intellectuelle</h3>
                  <p>
                    Tous les éléments du site et de l&apos;application (logiciels, design, textes, logos) sont la propriété exclusive de Karria. Toute reproduction est interdite sans autorisation préalable.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Responsabilité</h3>
                  <p>
                    Karria s&apos;efforce de fournir des informations exactes mais ne peut être tenu responsable des erreurs, de l&apos;indisponibilité du service ou des résultats obtenus via l&apos;IA.
                  </p>
                </section>
              </div>
            </Reveal>
          </div>
          
          <aside className="lg:col-span-4">
            <Reveal delay={0.3}>
              <div className="sticky top-32 p-8 rounded-3xl bg-secondary/50 border border-border">
                <h4 className="text-lg font-bold mb-4">Besoin d&apos;aide ?</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Si vous avez des questions sur nos conditions, notre équipe juridique est à votre disposition.
                </p>
                <Link 
                  href={`mailto:${CONTACT_EMAILS.legal}`}
                  className="text-primary font-medium hover:underline text-sm"
                >
                  {CONTACT_EMAILS.legal}
                </Link>
                
                <div className="mt-10 pt-10 border-t border-border/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Version actuelle</p>
                  <p className="text-sm">V2.1 - Mai 2026</p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
