export type TagColor = "blue" | "sky" | "ice";

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  tagColor: TagColor;
  featured?: boolean;
}

export const FEATURES_DATA: Feature[] = [
  {
    id: "matching",
    title: "Un matching intelligent",
    description:
        "Karria compare votre profil avec des offres venant de plusieurs plateformes pour trouver celles qui vous correspondent vraiment.",
    iconName: "Brain",
    tag: "Matching IA",
    tagColor: "blue",
  },
  {
    id: "cv-generator",
    title: "Création de CV simplifiée",
    description:
        "Créez facilement un CV moderne, clair et professionnel grâce à des modèles simples à utiliser.",
    iconName: "FileText",
    tag: "CV",
    tagColor: "sky",
  },
  {
    id: "targeted-cv",
    title: "CV adaptés à chaque offre",
    description:
        "Karria adapte automatiquement votre CV selon l’offre choisie pour mettre en avant les éléments les plus importants.",
    iconName: "Sparkles",
    tag: "IA",
    tagColor: "blue",
    featured: true,
  },
  {
    id: "cover-letter",
    title: "Lettres de motivation générées par IA",
    description:
        "Générez des lettres personnalisées et prêtes à envoyer en quelques secondes selon le poste visé.",
    iconName: "PenLine",
    tag: "Lettre",
    tagColor: "ice",
  },
  {
    id: "ats",
    title: "Optimisation pour les recruteurs",
    description:
        "Vos candidatures sont structurées pour être plus lisibles par les logiciels de recrutement et les recruteurs.",
    iconName: "ShieldCheck",
    tag: "ATS",
    tagColor: "sky",
  },
  {
    id: "templates",
    title: "Des modèles modernes et professionnels",
    description:
        "Choisissez parmi plusieurs templates de CV et de lettres adaptés à différents profils et styles.",
    iconName: "Palette",
    tag: "Templates",
    tagColor: "blue",
  },
  {
    id: "alerts",
    title: "Des alertes intelligentes",
    description:
        "Recevez des notifications quand une nouvelle opportunité importante correspond à votre profil.",
    iconName: "Bell",
    tag: "Alertes",
    tagColor: "blue",
  },
];
