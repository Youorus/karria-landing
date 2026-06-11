import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Suppression de compte Karria",
  description: "Découvrez comment supprimer définitivement votre compte Karria et les données associées directement depuis l’application.",
  path: "/suppression-compte",
});

export default function AccountDeletionPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Support"
            headingLevel={1}
            title="Suppression de compte"
            subtitle="Vous pouvez supprimer définitivement votre compte Karria et les données associées directement depuis l’application."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Pour supprimer votre compte :</h3>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Ouvrez l’application Karria.</li>
                    <li>Connectez-vous à votre compte.</li>
                    <li>Accédez à <strong>Profil</strong> ou <strong>Paramètres</strong>.</li>
                    <li>Appuyez sur <strong>Supprimer mon compte</strong>.</li>
                    <li>Confirmez la suppression.</li>
                  </ol>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Conséquences de la suppression</h3>
                  <p>
                    La suppression entraîne la suppression de votre compte et des données associées, notamment votre profil, vos préférences, vos CV, vos lettres de motivation et les données liées à votre utilisation de l’application.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Conservation des données</h3>
                  <p>
                    Certaines données peuvent être conservées temporairement lorsque la loi l’exige, notamment pour des raisons de sécurité, de facturation, de prévention de la fraude ou d’obligations légales.
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
                  Si vous rencontrez une difficulté, vous pouvez nous contacter.
                </p>
                <Link 
                  href={`mailto:${CONTACT_EMAILS.support}`}
                  className="text-primary font-medium hover:underline text-sm"
                >
                  {CONTACT_EMAILS.support}
                </Link>
                
                <div className="mt-10 pt-10 border-t border-border/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Dernière mise à jour</p>
                  <p className="text-sm">11 Juin 2026</p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
