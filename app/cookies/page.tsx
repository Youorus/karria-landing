import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = buildMetadata({
  title: "Gestion des Cookies",
  description: "Apprenez-en plus sur l'utilisation des cookies sur Karria et comment vous pouvez les gérer pour une expérience personnalisée.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Préférences"
            title="Politique des Cookies"
            subtitle="Nous utilisons des cookies pour améliorer votre expérience et personnaliser nos services."
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
                    Ces cookies sont indispensables au bon fonctionnement de Karria. Ils vous permettent de rester connecté à votre compte et de naviguer en toute sécurité.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">3. Cookies de performance et d&apos;analyse</h3>
                  <p>
                    Nous utilisons ces cookies pour comprendre comment nos utilisateurs interagissent avec la plateforme, afin d&apos;identifier les points d&apos;amélioration et d&apos;optimiser nos parcours.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">4. Cookies de personnalisation</h3>
                  <p>
                    Ces cookies nous permettent de vous proposer des offres d&apos;emploi et du contenu adaptés à vos recherches précédentes et à votre profil.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Gestion de vos choix</h3>
                  <p>
                    Vous pouvez modifier vos préférences en matière de cookies à tout moment via les réglages de votre navigateur ou directement sur notre bandeau de consentement.
                  </p>
                </section>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
