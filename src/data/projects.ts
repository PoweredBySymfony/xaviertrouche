export interface ProjectCollaborator {
  name: string;
  url?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  year: string;
  githubUrl: string;
  collaborators?: ProjectCollaborator[];
  context: string;
  methods: string[];
  results: string[];
  skills: Record<string, string[]>;
  images: ProjectImage[];
}

export const projectDetails = {
  railsPt1: {
    slug: "railsPt1",
    title: "Les Aventuriers du Rail - Partie 1",
    description: "Application compleete deeveloppeee eo partir d'un cahier des charges preecis avec une approche increementale.",
    technologies: ["Java", "GitLab", "JUnit"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart1",
    context:
      "Projet reealisee dans le cadre des SAE S2.01 et S2.02 du BUT Informatique. Objectif : construire un moteur de jeu fideele aux reegles et une base solide pour les eevolutions suivantes.",
    methods: [
      "Deecoupage increemental du backlog et livraisons reegulieeres.",
      "Versioning GitLab et revues freequentes pour garder une base stable.",
      "Tests unitaires JUnit pour seecuriser les reegles de jeu."
    ],
    results: [
      "Moteur de jeu conforme au cahier des charges.",
      "Architecture modulaire preate pour les extensions (graphes, IHM).",
      "Base de tests facilitant la validation des reegles."
    ],
    skills: {
      "C1 : Deeveloppement d'application": [
        "Programmation orienteee objet en Java.",
        "Conception d'algorithmes meetier."
      ],
      "C2 : Optimisation": [
        "Structuration du code pour limiter les reegressions.",
        "Validation progressive des reegles par tests."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Apercu du projet Aventuriers du Rail partie 1" },
      { src: "/placeholder.svg", alt: "Interface du jeu Aventuriers du Rail partie 1" }
    ]
  },
  railsPt2: {
    slug: "railsPt2",
    title: "Les Aventuriers du Rail - Oriente Graphes",
    description: "Implementation d'algorithmes avances comme Dijkstra pour optimiser les trajets du jeu.",
    technologies: ["Java", "Algorithmes", "Graphes"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart2",
    context:
      "Suite du projet Aventuriers du Rail avec un focus sur la modelisation du plateau et l'optimisation des trajets.",
    methods: [
      "Modelisation du graphe et des poids pour representer le plateau.",
      "Implementation de Dijkstra et validation par scenarios de test.",
      "Comparaison des resultats avec les regles attendues."
    ],
    results: [
      "Optimisation fiable des trajets en fonction des contraintes.",
      "Structures de donnees adaptees aux parcours rapides.",
      "Documentation technique pour faciliter la suite du projet."
    ],
    skills: {
      "C2 : Optimisation": [
        "Selection d'algorithmes adaptes aux problemes.",
        "Analyse de complexite et de performances."
      ],
      "C1 : Developpement d'application": [
        "Integration de modules complexes dans un projet existant."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Apercu du projet Aventuriers du Rail graphes" }
    ]
  },
  railsPt3: {
    slug: "railsPt3",
    title: "Les Aventuriers du Rail - Version IHM",
    description: "Version avec interface graphique complete orientee objet.",
    technologies: ["Java", "JavaFX", "POO"],
    categories: ["Java"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart3",
    context:
      "Finalisation du projet avec une interface graphique JavaFX pour rendre l'experience plus intuitive.",
    methods: [
      "Design des ecrans et des interactions utilisateurs.",
      "Separation MVC pour garder une logique metier claire.",
      "Tests manuels sur les parcours critiques."
    ],
    results: [
      "Interface fluide et accessible pour les joueurs.",
      "Gestion des evenements et etats simplifiee.",
      "Presentation solide pour la soutenance."
    ],
    skills: {
      "C1 : Developpement d'application": [
        "Developpement d'interfaces avec JavaFX.",
        "Organisation MVC."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Interface JavaFX Aventuriers du Rail" }
    ]
  },
  saeWeb: {
    slug: "sae-web",
    title: "SAE Application Web",
    description: "Plateforme de recherche de stage et alternance developpee en equipe.",
    technologies: ["Web", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/sae-stage-alternance",
    collaborators: [
      { name: "Hugo", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/crepinh" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
      { name: "Lucas", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/vrignaudl" },
      { name: "Alexandre", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/chateauvieuxa" }
    ],
    context:
      "Projet d'equipe visant a faciliter la recherche de stage et d'alternance pour les etudiants.",
    methods: [
      "Organisation en sprints courts avec suivi Trello.",
      "Definition de roles pour la conception, le dev et les tests.",
      "Integres de feedback utilisateurs pour ajuster les ecrans."
    ],
    results: [
      "Plateforme fonctionnelle avec recherche et candidature.",
      "Base de donnees structuree pour les offres et profils.",
      "Livraison dans les delais du semestre."
    ],
    skills: {
      "C5 : Conduire un projet": [
        "Planification et suivi agile.",
        "Coordination et communication d'equipe."
      ],
      "C1 : Developpement d'application": [
        "Integration front/back en PHP."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Apercu SAE application web" }
    ]
  },
  musicPromo: {
    slug: "music-promo",
    title: "Promotion Musicale",
    description: "Site web personnel pour la promotion d'artistes et evenements musicaux.",
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    year: "2022",
    githubUrl: "https://github.com/BakaAsta/Personal_MusicProject",
    context:
      "Projet personnel pour experimenter les bases du web et valoriser des evenements musicaux.",
    methods: [
      "Integration statique responsive.",
      "Mise en avant de contenus multimedia.",
      "Optimisation basique du chargement des pages."
    ],
    results: [
      "Site vitrine clair et accessible.",
      "Structure reutilisable pour d'autres evenements."
    ],
    skills: {
      "C1 : Developpement d'application": [
        "Integration HTML/CSS/JS.",
        "Mise en page responsive."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Page d'accueil Promotion Musicale" }
    ]
  },
  leonn: {
    slug: "leonn",
    title: "Gestionnaire Leonn",
    description: "Application de gestion de prets developpee en solo.",
    technologies: ["Web", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/BakaAsta/leonn",
    context:
      "Application interne pour suivre les prets de materiel et l'inventaire informatique.",
    methods: [
      "Recueil des besoins aupres des utilisateurs.",
      "Mise en place d'un tableau de bord pour les responsables.",
      "Tests fonctionnels et retours rapides."
    ],
    results: [
      "Suivi fiable des emprunts et des retours.",
      "Reduction des erreurs de saisie et des pertes materiels."
    ],
    skills: {
      "C4 : Gerer des donnees": [
        "Conception d'un modele de donnees simple et fiable."
      ],
      "C6 : Collaborer": [
        "Adaptation aux retours des utilisateurs metier."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Tableau de bord Leonn" }
    ]
  },
  annuairePt1: {
    slug: "annuaire-pt1",
    title: "Annuaire (Projet pt-1)",
    description: "Application Symfony de gestion d'annuaire.",
    technologies: ["Symfony", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/projets-xil/s5-web-projet1",
    collaborators: [
      { name: "Ilan", url: "https://github.com/ivelter" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Projet de groupe pour construire un annuaire complet avec gestion des droits.",
    methods: [
      "Architecture Symfony et separation des roles.",
      "Mise en place d'API internes pour les fonctions critiques.",
      "Revue de code pour harmoniser les pratiques."
    ],
    results: [
      "CRUD complet et gestion des permissions.",
      "Interface simple pour l'administration."
    ],
    skills: {
      "C4 : Gerer des donnees": [
        "Optimisation des requetes et index."
      ],
      "C1 : Developpement d'application": [
        "Structure MVC Symfony."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Ecran annuaire Symfony" }
    ]
  },
  apiRestPt2: {
    slug: "api-rest-pt2",
    title: "API REST (Projet pt-2)",
    description: "API REST securisee avec authentification JWT.",
    technologies: ["Symfony", "API Platform", "JWT"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/PoweredBySymfony/Projet-API-REST",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Conception d'une API securisee pour la gestion d'entites metier.",
    methods: [
      "Definition des ressources API Platform et des droits.",
      "Mise en place d'une authentification JWT.",
      "Tests avec Postman et validation des contrats."
    ],
    results: [
      "API securisee et documentee.",
      "Endpoints stables pour les front-ends."
    ],
    skills: {
      "C3 : Administrer": [
        "Securisation d'API et gestion des acces."
      ],
      "C1 : Developpement d'application": [
        "Modelisation des ressources API."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Documentation API REST" }
    ]
  },
  frontVuePt3: {
    slug: "front-vue-pt3",
    title: "Front VueJS (Projet pt-3)",
    description: "Interface responsive developpee avec Vue.js, Tailwind CSS et PrimeVue.",
    technologies: ["Vue.js", "Tailwind CSS", "PrimeVue"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/lisaachr/api_front",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Creation d'un front consommatrice d'une API REST avec focus sur l'experience utilisateur.",
    methods: [
      "Composition de composants UI reutilisables.",
      "Responsive design avec Tailwind CSS.",
      "Integration des flux API et gestion des etats."
    ],
    results: [
      "Interface claire et rapide.",
      "Navigation fluide sur mobile et desktop."
    ],
    skills: {
      "C1 : Developpement d'application": [
        "Integration d'un front moderne Vue.js."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Interface front VueJS" }
    ]
  },
  trelloTrolle: {
    slug: "trello-trolle",
    title: "Trello Trolle",
    description: "Amelioration et optimisation d'une application existante de type Trello.",
    technologies: ["PHP", "SQL", "Refactoring"],
    categories: ["Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/trellotrolle-code-de-base",
    collaborators: [
      { name: "Theo" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Projet centre sur l'analyse et l'optimisation d'un code base existant.",
    methods: [
      "Audit de performances et lecture de code.",
      "Refactoring progressif et documentation.",
      "Optimisation des requetes SQL."
    ],
    results: [
      "Performances ameliorees sur les listes.",
      "Code plus lisible et plus stable."
    ],
    skills: {
      "C2 : Optimisation": [
        "Refactoring et amelioration des performances."
      ]
    },
    images: [
      { src: "/placeholder.svg", alt: "Tableau Trello Trolle" }
    ]
  }
} satisfies Record<string, ProjectDetail>;

export const projects = Object.values(projectDetails);
