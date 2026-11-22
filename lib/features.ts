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
        "Plus de 500 000 offres actives en France, mises à jour chaque jour.",
    iconName: "Briefcase",
    tag: "Offres",
    tagColor: "blue",
  },
  {
    id: "assistant",
    title: "Karria, ton assistante",
    description:
        "Dis-lui ce que tu cherches, à l’écrit ou à la voix : elle lance la recherche.",
    iconName: "MessageCircle",
    tag: "Assistante",
    tagColor: "sky",
  },
  {
    id: "targeted-cv",
    title: "Un CV adapté à chaque offre",
    description:
        "Pour chaque offre qui te plaît, Karria prépare un CV ajusté au poste et la lettre qui va avec. Tu relis, tu modifies, tu envoies.",
    iconName: "Sparkles",
    tag: "CV adapté",
    tagColor: "blue",
    featured: true,
  },
  {
    id: "cv-workshop",
    title: "L’atelier CV",
    description:
        "Importe un PDF, un Word ou une photo. 9 modèles, ta couleur, chaque ligne retouchable.",
    iconName: "FileText",
    tag: "CV",
    tagColor: "ice",
  },
  {
    id: "ats",
    title: "Le score ATS",
    description:
        "Karria note ton CV comme un logiciel de recrutement et l’optimise en un geste.",
    iconName: "ShieldCheck",
    tag: "ATS",
    tagColor: "sky",
  },
  {
    id: "cover-letter",
    title: "La lettre de motivation",
    description:
        "Rédigée pour l’offre, à exporter en PDF ou en Word, ou à envoyer par e-mail.",
    iconName: "PenLine",
    tag: "Lettre",
    tagColor: "ice",
  },
  {
    id: "alerts",
    title: "Les alertes",
    description:
        "Une notification dès qu’une offre correspond. Chaque alerte s’active ou se coupe.",
    iconName: "Bell",
    tag: "Alertes",
    tagColor: "blue",
  },
  {
    id: "folders",
    title: "Les dossiers",
    description: "L’offre, ton CV, ta lettre, et où tu en es.",
    iconName: "FolderOpen",
    tag: "Suivi",
    tagColor: "sky",
  },
];
