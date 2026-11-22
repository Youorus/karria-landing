import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CookiePreferencesButton } from "@/components/analytics/CookiePreferencesButton";

export const metadata = buildMetadata({
  title: "Gestion des Cookies",
  description: "Ce que le site karria.fr enregistre dans votre navigateur, à quoi servent les cookies de mesure d'audience et comment modifier votre choix.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Préférences"
            headingLevel={1}
            title="Politique des Cookies"
            subtitle="Ce que le site karria.fr enregistre dans votre navigateur, et comment modifier votre choix."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h3>
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d&apos;un site. Il permet de mémoriser vos préférences et d&apos;améliorer votre navigation.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">2. Cookies essentiels</h3>
                  <p>
                    Le site karria.fr ne demande aucun compte. Il mémorise seulement, dans votre navigateur, votre choix concernant les cookies et le thème d&apos;affichage (clair ou sombre), pour ne pas vous les redemander à chaque visite.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">3. Cookies de performance et d&apos;analyse</h3>
                  <p>
                    Avec votre accord, nous utilisons Google Analytics pour comprendre comment le site est consulté et l&apos;améliorer. Sans votre accord, aucun cookie de mesure n&apos;est déposé.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">4. Cookies publicitaires</h3>
                  <p>
                    Le site n&apos;affiche pas de publicité. En acceptant les cookies, vous autorisez toutefois Google à utiliser les mesures d&apos;audience du site à des fins publicitaires (mesure et personnalisation de ses annonces). Si vous refusez, ces usages restent désactivés.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Gestion de vos choix</h3>
                  <p>
                    Vous pouvez modifier vos préférences en matière de cookies à tout moment avec le bouton ci-dessous, ou via les réglages de votre navigateur.
                  </p>
                </section>
              </div>

              <CookiePreferencesButton />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
