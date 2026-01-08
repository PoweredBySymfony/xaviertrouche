export interface ExperienceImage {
  src: string;
  alt: string;
}

export interface ExperienceProjectDetail {
  title: string;
  context: string;
  methods: string[];
  results: string[];
  technologies: string[];
  skills: Record<string, string[]>;
  githubUrl?: string;
  images: ExperienceImage[];
}

export interface ExperienceDetail {
  slug: string;
  title: string;
  company: string;
  duration: string;
  overview: string;
  serviceDescription: string;
  project: ExperienceProjectDetail;
}

export const experienceDetails = {
  ecir: {
    slug: "ecir",
    title: "Stage Developpeur - Service Informatique ECIR",
    company: "ECIR",
    duration: "Avril a Juillet 2024 (12 semaines)",
    overview:
      "Stage realise dans une equipe informatique chargee du support et du developpement d'outils internes.",
    serviceDescription:
      "Service compose d'une equipe restreinte, en charge des demandes utilisateurs, de la maintenance et des applications internes.",
    project: {
      title: "Projet Leonn - Gestion de prets et inventaire",
      context:
        "Developpement d'une application interne pour suivre les prets de materiel, les retours et l'inventaire du parc.",
      methods: [
        "Recueil des besoins avec les utilisateurs finaux.",
        "Conception d'un tableau de bord et d'un flux de validation.",
        "Iteractions courtes pour ajuster l'interface et les rapports."
      ],
      results: [
        "Suivi fiable des prets et retours.",
        "Reduction des pertes et du temps de recherche.",
        "Reporting clair pour le service informatique."
      ],
      technologies: ["Symfony 6.4", "PHP 8.2", "React", "API Platform", "Tailwind CSS", "Docker"],
      skills: {
        "C1 : Developpement d'application": [
          "Construction d'une application full-stack.",
          "Integration d'API et gestion des roles."
        ],
        "C4 : Gerer des donnees": [
          "Modelisation des entites et suivi d'inventaire."
        ]
      },
      githubUrl: "https://github.com/BakaAsta/leonn",
      images: [
        { src: "/placeholder.svg", alt: "Apercu du tableau de bord Leonn" },
        { src: "/placeholder.svg", alt: "Apercu de la gestion des prets Leonn" }
      ]
    }
  }
} satisfies Record<string, ExperienceDetail>;

export const experiences = Object.values(experienceDetails);
