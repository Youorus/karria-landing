import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Questions Fréquentes (FAQ)",
  description: "Toutes les réponses à vos questions sur Karria : matching IA, génération de CV, abonnement Premium et sécurité des données.",
  path: "/faq",
});

const FAQS = [
  {
    category: "Général",
    questions: [
      {
        q: "Qu'est-ce que Karria ?",
        a: "Karria est une application mobile d'intelligence artificielle qui vous aide à trouver les meilleures offres d'emploi, à optimiser votre CV et vos lettres de motivation, et à piloter votre carrière de manière intelligente."
      },
      {
        q: "Est-ce que Karria est gratuit ?",
        a: "Oui, Karria propose un plan gratuit avec accès aux fonctionnalités de base. Pour les utilisateurs souhaitant une assistance IA illimitée et des fonctionnalités avancées, nous proposons un abonnement Premium."
      }
    ]
  },
  {
    category: "Technologie IA",
    questions: [
      {
        q: "Comment fonctionne le matching ?",
        a: "Notre IA analyse en profondeur votre profil et compare vos compétences avec des milliers d'offres en temps réel. Elle ne se contente pas de mots-clés, elle comprend le sens de vos expériences pour vous proposer des postes où vous avez de réelles chances de réussir."
      },
      {
        q: "Les CV générés sont-ils compatibles ATS ?",
        a: "Absolument. Tous nos templates de CV sont conçus pour être parfaitement lus par les logiciels de recrutement (ATS) tout en restant esthétiques pour les recruteurs humains."
      }
    ]
  },
  {
    category: "Sécurité",
    questions: [
      {
        q: "Mes données sont-elles en sécurité ?",
        a: "La sécurité est notre priorité absolue. Vos données sont chiffrées et nous respectons scrupuleusement le RGPD. Vous restez maître de vos informations à tout moment."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Aide"
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir pour tirer le meilleur parti de Karria."
            className="mb-20"
          />
        </Reveal>

        <div className="space-y-16">
          {FAQS.map((category, catIndex) => (
            <div key={category.category}>
              <Reveal delay={catIndex * 0.1}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8 pb-4 border-b border-border">
                  {category.category}
                </h3>
              </Reveal>
              <div className="space-y-8">
                {category.questions.map((faq, index) => (
                  <Reveal key={faq.q} delay={(catIndex * 0.1) + (index * 0.05)}>
                    <div className="group">
                      <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {faq.q}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-24 p-10 rounded-3xl bg-secondary/50 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Vous n&apos;avez pas trouvé votre réponse ?</h3>
            <p className="text-muted-foreground mb-8">
              Notre équipe est disponible 7j/7 pour vous aider.
            </p>
            <Link 
              href={NAV_ROUTES.contact}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all"
            >
              Contactez le support
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
