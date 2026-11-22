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
    id: "offers",
    title: "Un fil d’offres pour toi",
    description:
        "Plus de 500 000 offres, mises à jour chaque jour.",
    iconName: "Briefcase",
    tag: "Offres",
    tagColor: "blue",
  },
  {
    id: "assistant",
    title: "Karria, ton assistante",
    description:
        "Écris-lui ou parle-lui : elle cherche.",
    iconName: "MessageCircle",
    tag: "Assistante",
    tagColor: "sky",
  },
  {
    id: "targeted-cv",
    title: "Un CV adapté à chaque offre",
    description:
        "Karria ajuste ton CV au poste et prépare la lettre. Tu relis, tu envoies.",
    iconName: "Sparkles",
    tag: "CV adapté",
    tagColor: "blue",
    featured: true,
  },
  {
    id: "cv-workshop",
    title: "L’atelier CV",
    description:
        "PDF, Word ou photo. 9 modèles, ta couleur.",
    iconName: "FileText",
    tag: "CV",
    tagColor: "ice",
  },
  {
    id: "ats",
    title: "Le score ATS",
    description:
        "Ton CV noté, puis optimisé en un geste.",
    iconName: "ShieldCheck",
    tag: "ATS",
    tagColor: "sky",
  },
  {
    id: "cover-letter",
    title: "La lettre de motivation",
    description:
        "Rédigée pour l’offre, en PDF ou en Word.",
    iconName: "PenLine",
    tag: "Lettre",
    tagColor: "ice",
  },
  {
    id: "alerts",
    title: "Les alertes",
    description:
        "Prévenu dès qu’une offre correspond.",
    iconName: "Bell",
    tag: "Alertes",
    tagColor: "blue",
  },
  {
    id: "folders",
    title: "Les dossiers",
    description: "L’offre, ton CV, ta lettre, ton avancement.",
    iconName: "FolderOpen",
    tag: "Suivi",
    tagColor: "sky",
  },
];
