export interface ExperienceImage {
  src: string;
  alt: string;
}

export interface ExperienceProjectDetail {
  title: string;
  context: string;
  challenges?: string[];
  solutions?: string[];
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
  companyDescription: string;
  serviceDescription: string;
  project: ExperienceProjectDetail;
}

export const experienceDetails = {
  ecir: {
    slug: "ecir",
    title: "Mon stage chez ECIR",
    company: "ECIR",
    duration: "Avril - Juillet 2024 (12 semaines)",
    overview:
      "Stage realise au sein du service informatique pour moderniser la gestion du materiel et des incidents.",
    companyDescription:
      "L'ECIR (Ecole de la construction des infrastructures et des reseaux) a ete fondee en 1972 par Emile Pico. L'institution formatrice des metiers du secteur des travaux publics a evolue en personnel et en equipements.\n\nAujourd'hui, l'ECIR s'organise autour de deux poles : ECIR Apprentissage (CFA en alternance) et ECIR Formations (centre de formation continue, dont le CACES). L'ECIR compte 73 salaries et s'appuie sur des vacataires pour offrir une formation de qualite. Ses revenus proviennent principalement des formations, ainsi que des services de cantine et d'hebergement sur place.",
    serviceDescription:
      "Integre au service informatique sous la supervision de Gilles Gout, responsable du site internet et de la communication, j'ai collabore avec une equipe de trois membres : Gilles Gout, Xavier Bonnabel et Guillaume Carrio. Ensemble, nous assurons le bon fonctionnement et l'innovation des systemes informatiques de l'entreprise.\n\nCette equipe existe grace a la vision numerique ambitieuse de Jean-Francois Chabaud, directeur de l'ECIR, qui met un fort accent sur les progres technologiques depuis sept ans.",
    project: {
      title: "Presentation de Leonn",
      context:
        "Le projet vise a resoudre des problemes de gestion du materiel et des incidents techniques en mettant en place un systeme global et centralise.",
      challenges: [
        "Absence de visibilite en temps reel sur l'inventaire de pret de materiel.",
        "Organisation du stockage insuffisante entrainant pertes et accumulation d'objets.",
        "Manque d'un systeme formel pour gerer les tickets d'incidents techniques."
      ],
      solutions: [
        "Ameliorer la gestion des prets de materiel.",
        "Optimiser le traitement des incidents techniques.",
        "Gerer de maniere proactive le materiel informatique."
      ],
      methods: [
        "Analyse des besoins avec les utilisateurs finaux.",
        "Definition d'un systeme global pour les prets, le stockage et les incidents.",
        "Iterations courtes pour ajuster l'interface et les rapports."
      ],
      results: [
        "Meilleure visibilite sur l'inventaire et les mouvements de materiel.",
        "Processus de traitement des incidents plus clair et trace.",
        "Suivi plus fiable du parc informatique."
      ],
      technologies: [
        "Symfony 6.4",
        "PHP 8.2",
        "React",
        "API Platform",
        "Tailwind CSS",
        "Docker"
      ],
      skills: {
        "C1 : Developpement d'application": [
          "Construction d'une application full-stack.",
          "Integration d'API et gestion des roles."
        ],
        "C4 : Gerer des donnees": ["Modelisation des entites et suivi d'inventaire."]
      },
      githubUrl: "https://github.com/BakaAsta/leonn",
      images: [
        { src: "/img/team/ecir.jpg", alt: "Souvenir ECIR 1" },
        { src: "/img/team/ecir2.jpg", alt: "Souvenir ECIR 2" },
        { src: "/img/team/ecir3.jpg", alt: "Souvenir ECIR 3" }
      ]
    }
  },
  nocika: {
    slug: "nocika",
    title: "Mon alternance chez Nocika",
    company: "Nocika",
    duration: "2024 - Present",
    overview:
      "Alternance axee sur l'amelioration des sites e-commerce et l'outillage interne.",
    companyDescription:
      "Nocika est un groupe importateur, distributeur et fabricant d'articles de sports et loisirs nautiques pour particuliers et professionnels. Fondee en 1998, l'entreprise est basee a Salon-de-Provence et dispose de 7 000 m2 de locaux. Elle exploite 9 sites internet dedies a la vente d'articles de sports et de loisirs nautiques, et compte plus de 60 collaborateurs.\n\nLes principales sources de revenus de Nocika proviennent de la vente en ligne d'articles de sports nautiques via ses plateformes, ainsi que de la distribution de ces produits aux professionnels du secteur.",
    serviceDescription:
      "Integre au service informatique de Nocika, j'ai collabore avec une equipe dediee a la maintenance et au developpement des sites e-commerce de l'entreprise. Le service informatique assure le bon fonctionnement, la securite et l'evolution des plateformes en ligne pour repondre aux besoins des clients et des equipes internes.",
    project: {
      title: "Presentation du projet",
      context:
        "Lors de mon alternance, j'ai contribue a plusieurs initiatives visant a ameliorer les sites e-commerce. Parmi mes realisations figurent la refonte d'un menu pour simplifier la navigation, la creation d'un script PHP pour automatiser certaines taches et la gestion d'inventaire pour optimiser les processus internes.\n\nActuellement, je travaille sur un systeme avance de gestion et d'execution de requetes SQL pour centraliser et parametrer les requetes, renforcer la securite et simplifier leur utilisation par des profils non techniques.",
      methods: [
        "Refonte d'un menu pour simplifier la navigation.",
        "Creation d'un script PHP pour automatiser des taches recurrentes.",
        "Optimisation des flux d'inventaire et de suivi des stocks.",
        "Conception d'un systeme de requetes SQL parametrables."
      ],
      results: [
        "Navigation plus claire pour les utilisateurs.",
        "Gains de temps grace a l'automatisation.",
        "Visibilite accrue sur les donnees et les process internes.",
        "Meilleure exploitation et securisation des requetes SQL."
      ],
      technologies: ["PHP", "SQL", "JavaScript"],
      skills: {
        "C1 : Developpement d'application": [
          "Amelioration de l'experience utilisateur sur les sites e-commerce.",
          "Automatisation de processus internes."
        ],
        "C4 : Gerer des donnees": [
          "Centralisation et parametrage des requetes SQL.",
          "Securisation des acces aux donnees."
        ]
      },
      images: [{ src: "/img/team/nocika.jpg", alt: "Nocika" }]
    }
  }
} satisfies Record<string, ExperienceDetail>;

export const experiences = Object.values(experienceDetails);
