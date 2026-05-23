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
    title: "Des offres qui vous correspondent vraiment",
    description:
      "Karria analyse votre profil, vos compétences, vos préférences et vos objectifs pour vous recommander les offres les plus pertinentes. Moins de recherches inutiles, plus d'opportunités qui ont du sens.",
    iconName: "Brain",
    tag: "Matching IA",
    tagColor: "blue",
  },
  {
    id: "cv-generator",
    title: "Un CV professionnel en quelques clics",
    description:
      "Créez rapidement un CV moderne, clair et prêt à envoyer. Karria vous aide à transformer votre parcours en un document professionnel, structuré et adapté aux attentes des recruteurs.",
    iconName: "FileText",
    tag: "CV",
    tagColor: "sky",
  },
  {
    id: "targeted-cv",
    title: "Un CV adapté à chaque offre",
    description:
      "Ne candidatez plus avec le même CV partout. Karria analyse l'offre visée et adapte votre CV pour mettre en avant les compétences, expériences et mots-clés les plus importants.",
    iconName: "Sparkles",
    tag: "IA",
    tagColor: "blue",
    featured: true,
  },
  {
    id: "cover-letter",
    title: "Des lettres de motivation prêtes à envoyer",
    description:
      "Générez des lettres de motivation personnalisées selon votre profil et l'offre ciblée. Un ton professionnel, un contenu pertinent et une candidature complète en quelques secondes.",
    iconName: "PenLine",
    tag: "Lettre",
    tagColor: "ice",
  },
  {
    id: "ats",
    title: "Des candidatures optimisées pour les ATS",
    description:
      "Les CV et lettres générés par Karria sont conçus pour être lisibles par les logiciels de recrutement. Une structure claire, des mots-clés pertinents et une meilleure chance d'arriver jusqu'au recruteur.",
    iconName: "ShieldCheck",
    tag: "ATS",
    tagColor: "sky",
  },
  {
    id: "templates",
    title: "Des templates gratuits et premium",
    description:
      "Choisissez parmi des dizaines de modèles de CV et de lettres de motivation. Des designs modernes, professionnels et adaptés à votre personnalité pour créer une candidature qui vous ressemble.",
    iconName: "Palette",
    tag: "Templates",
    tagColor: "blue",
  },
  {
    id: "dashboard",
    title: "Tout votre parcours de candidature au même endroit",
    description:
      "Suivez vos candidatures, retrouvez vos documents, gérez vos offres favorites et avancez avec plus de clarté. Karria vous aide à rester concentré sur l'essentiel : décrocher des entretiens.",
    iconName: "LayoutDashboard",
    tag: "Suivi",
    tagColor: "ice",
  },
  {
    id: "alerts",
    title: "Ne ratez plus les bonnes opportunités",
    description:
      "Recevez des alertes ciblées lorsqu'une offre correspond réellement à votre profil. Vous gagnez du temps et vous candidatez plus vite sur les opportunités les plus pertinentes.",
    iconName: "Bell",
    tag: "Alertes",
    tagColor: "blue",
  },
];
