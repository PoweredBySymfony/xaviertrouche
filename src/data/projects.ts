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
    description:
      "Developpement d'une version en ligne du jeu Les Aventuriers du Rail avec une methode incrementale en trois phases.",
    technologies: ["Java", "HTML", "JUnit", "GitLab"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart1",
    context:
      "Projet realise dans le cadre des SAE S2.01 et S2.02 du BUT Informatique pour construire un moteur de jeu fidele aux regles officielles.",
    methods: [
      "Methodologie incrementale en trois phases : mecanique de jeu, algorithmes de graphes, interface JavaFX.",
      "GitLab pour la gestion de version et la collaboration.",
      "JUnit pour les tests unitaires.",
      "JavaFX pour l'interface graphique."
    ],
    results: [
      "Un moteur de jeu respectant les regles officielles.",
      "Une interface graphique intuitive pour visualiser les actions des joueurs.",
      "Un systeme de tests unitaires validant la robustesse du code."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Developpement oriente objet avec Java.",
        "Implementation d'algorithmes de graphes pour optimiser le jeu."
      ],
      "C2 : Optimiser des applications": [
        "Analyse et amelioration des performances de l'application."
      ],
      "C5 : Conduire un projet": [
        "Organisation des taches et respect des echeances.",
        "Suivi et validation des fonctionnalites via des tests unitaires."
      ],
      "C6 : Collaborer au sein d'une equipe informatique": [
        "Utilisation de Git pour le travail collaboratif.",
        "Participation active aux phases de conception et de developpement."
      ]
    },
    images: [
      { src: "/img/portfolio/aventuriersRailsPt1.png", alt: "Interface du jeu" },
      { src: "/img/railPt1Test.png", alt: "Resultats des tests" },
      { src: "/img/railPt1Test2.png", alt: "Suite des tests" }
    ]
  },
  railsPt2: {
    slug: "railsPt2",
    title: "Les Aventuriers du Graphe - Partie 2",
    description:
      "Modelisation du plateau sous forme de graphe et implementation d'algorithmes pour optimiser les trajets.",
    technologies: ["Java", "JavaScript", "Python", "SCSS", "HTML"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart2",
    context:
      "Suite de la phase 1, cette etape visait a representer le plateau en graphe et a implementer des algorithmes de parcours pour determiner les chemins optimaux.",
    methods: [
      "Iterations hebdomadaires pour valider chaque fonctionnalite.",
      "GitHub pour la gestion de version.",
      "JUnit pour les tests unitaires.",
      "IntelliJ IDEA comme IDE principal."
    ],
    results: [
      "Modelisation du plateau en tant que graphe.",
      "Algorithmes de parcours operationnels pour les chemins optimaux.",
      "Interface mise a jour pour afficher les routes en surbrillance."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Implementation d'algorithmes de graphes.",
        "Tests et validation des fonctionnalites."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Manipulation et structuration des graphes.",
        "Analyse des performances des algorithmes."
      ],
      "C5 : Conduire un projet": [
        "Gestion des taches et respect des echeances.",
        "Suivi des objectifs avec des tests reguliers."
      ],
      "C6 : Collaborer au sein d'une equipe informatique": [
        "Utilisation de Git pour la collaboration.",
        "Travail en binome sur les algorithmes et tests."
      ]
    },
    images: [
      { src: "/img/portfolio/graphe.png", alt: "Modele de graphe" },
      { src: "/img/portfolio/graphePt3.png", alt: "Exemple d'algorithme de Dijkstra" },
      { src: "/img/portfolio/graphePt2.png", alt: "Simulation de trajet" },
      { src: "/img/portfolio/graphePt1.png", alt: "Representation du plateau" }
    ]
  },
  railsPt3: {
    slug: "railsPt3",
    title: "Les Aventuriers du Rail - Partie 3 : Interface Graphique",
    description: "Interface graphique JavaFX pour le jeu Les Aventuriers du Rail.",
    technologies: ["JavaFX", "CSS"],
    categories: ["Java"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart3",
    context:
      "Phase finale du projet visant a proposer une experience utilisateur fluide grace a une interface JavaFX connectee au moteur de jeu.",
    methods: [
      "Implementation progressive des composants graphiques.",
      "GitLab pour la gestion de version.",
      "Scene Builder pour la conception des vues.",
      "IntelliJ IDEA comme environnement principal."
    ],
    results: [
      "Interface utilisateur ergonomique et intuitive.",
      "Vues integrees pour le plateau, les cartes et la gestion des joueurs.",
      "Interactions dynamiques pour la selection des routes et l'affichage des scores."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Creation et gestion des composants graphiques JavaFX.",
        "Developpement de fonctionnalites interactives."
      ],
      "C2 : Concevoir des interfaces utilisateur": [
        "Mise en place d'une IHM responsive et intuitive.",
        "Utilisation des bindings et des evenements pour synchroniser l'interface."
      ],
      "C5 : Conduire un projet": [
        "Planification des taches et respect des echeances.",
        "Integration des fonctionnalites en equipe."
      ],
      "C6 : Collaborer au sein d'une equipe informatique": [
        "Utilisation de GitLab pour la gestion collaborative.",
        "Participation aux revues de code et aux tests."
      ]
    },
    images: [
      { src: "/img/portfolio/img.png", alt: "Vue d'ensemble" },
      { src: "/img/portfolio/IHMinfoJoueur.png", alt: "Vue joueur" },
      { src: "/img/portfolio/IHMchoixCarte.png", alt: "Vue choix carte" }
    ]
  },
  saeWeb: {
    slug: "sae-web",
    title: "Projet SAE - Plateforme Stage/Alternance",
    description:
      "Plateforme qui facilite la recherche de stages et d'alternances pour les etudiants.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "Trello"],
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
      "Projet realise au semestre 3 pour centraliser les offres de stage et d'alternance et faciliter les echanges avec les entreprises.",
    methods: [
      "Organisation Scrum avec PO et Scrum Master.",
      "Suivi des taches sur Trello avec estimation des priorites.",
      "Developpement en iterations avec validations regulieres."
    ],
    results: [
      "Interface claire pour consulter et postuler aux offres.",
      "Espace entreprise pour publier et gerer les candidatures.",
      "Tableau de bord administrateur pour la moderation."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Conception et developpement des fonctionnalites cles.",
        "Tests unitaires et validation des parcours."
      ],
      "C2 : Concevoir des interfaces utilisateur": [
        "Creation d'une interface ergonomique et responsive.",
        "Integration des retours utilisateurs pour ameliorer l'experience."
      ],
      "C3 : Gerer un projet": [
        "Organisation des sprints hebdomadaires.",
        "Respect des delais et des priorites."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Conception d'une base MySQL.",
        "Optimisation des requetes pour les performances."
      ],
      "C5 : Collaborer au sein d'une equipe informatique": [
        "Participation aux reunions et revues de code.",
        "Utilisation de Git pour la gestion collaborative."
      ],
      "C6 : Assurer la qualite et la securite des services informatiques": [
        "Mise en place de validations et de bonnes pratiques de securite."
      ]
    },
    images: [
      { src: "/img/portfolio/saeWeb.png", alt: "Page d'accueil" },
      { src: "/img/portfolio/saeWeb2.png", alt: "Liste et gestion des offres" },
      { src: "/img/portfolio/saeWeb3.png", alt: "Tableau de bord admin" },
      { src: "/img/portfolio/saeWeb4.png", alt: "Gestion des etudiants" }
    ]
  },
  musicPromo: {
    slug: "music-promo",
    title: "Promotion Musicale",
    description: "Site web personnel pour la promotion d'artistes et d'evenements musicaux.",
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    year: "2022",
    githubUrl: "https://github.com/BakaAsta/Personal_MusicProject",
    context:
      "Projet personnel pour experimenter les bases du web et mettre en avant des evenements musicaux.",
    methods: [
      "Integration statique responsive.",
      "Mise en valeur des contenus multimedia.",
      "Optimisation basique des temps de chargement."
    ],
    results: [
      "Site vitrine clair et accessible.",
      "Structure reutilisable pour d'autres evenements."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Integration HTML/CSS/JS.",
        "Mise en page responsive."
      ]
    },
    images: [{ src: "/img/portfolio/music.png", alt: "Page d'accueil Promotion Musicale" }]
  },
  leonn: {
    slug: "leonn",
    title: "Projet Leonn - Gestion de prets et inventaire",
    description:
      "Application interne pour suivre les prets de materiel, les retours et l'inventaire informatique.",
    technologies: [
      "Symfony 6.4",
      "PHP 8.2",
      "Tailwind CSS",
      "ReactJS",
      "API Platform",
      "Typesense",
      "JWT",
      "Docker",
      "Twig Live Components"
    ],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/BakaAsta/leonn",
    context:
      "Projet realise au sein du service informatique de l'ECIR pour ameliorer la gestion des prets et du parc materiel.",
    methods: [
      "Sprints hebdomadaires avec livraisons iteratives.",
      "Microsoft Teams pour la communication et Planner pour les taches.",
      "Docker pour isoler les services."
    ],
    results: [
      "Tableau de bord interactif avec alertes en temps reel.",
      "Gestion efficace du parc informatique.",
      "Liste dynamique des produits disponibles.",
      "Interface utilisateur intuitive et adaptee.",
      "Mecanismes pour optimiser le temps des utilisateurs."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Conception et implementation des interfaces utilisateur.",
        "Tests unitaires et validation des fonctionnalites."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Conception et administration d'une base relationnelle.",
        "Optimisation des requetes SQL."
      ],
      "C5 : Conduire un projet": [
        "Gestion des echeances et suivi des taches.",
        "Formalisation des besoins et validation des livrables."
      ],
      "C6 : Collaborer au sein d'une equipe informatique": [
        "Participation aux reunions hebdomadaires.",
        "Partage d'informations et resolution collaborative."
      ]
    },
    images: [
      { src: "/img/portfolio/leonn.png", alt: "Dashboard Leonn" },
      { src: "/img/listeProductAvailableUser.png", alt: "Gestion d'inventaire" },
      { src: "/img/scanLeonn.png", alt: "Systeme de tickets" },
      { src: "/img/scan.png", alt: "Processus de scan" },
      { src: "/img/dockerLeonn.png", alt: "Docker" }
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
      "Projet de groupe pour construire un annuaire complet avec gestion des droits et securisation des acces.",
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
      "C4 : Gerer des donnees": ["Optimisation des requetes et index."],
      "C1 : Developpement d'application": ["Structure MVC Symfony."]
    },
    images: [
      { src: "/img/portfolio/annuaire.png", alt: "Ecran annuaire" },
      { src: "/img/portfolio/annuaire2.png", alt: "Liste des contacts" },
      { src: "/img/portfolio/annuaire3.png", alt: "Fiche profil" }
    ]
  },
  apiRestPt2: {
    slug: "api-rest-pt2",
    title: "API REST (Projet pt-2)",
    description: "API REST pour la gestion d'evenements musicaux avec securisation JWT.",
    technologies: ["Symfony", "API Platform", "JWT", "Doctrine ORM"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/PoweredBySymfony/Projet-API-REST",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Projet realise dans le cadre du TD4 Symfony pour creer une API REST de gestion d'evenements musicaux.",
    methods: [
      "Developpement avec Symfony et API Platform.",
      "Authentification JWT pour securiser les acces.",
      "Versionnage et collaboration via GitHub."
    ],
    results: [
      "Gestion complete des evenements et des scenes.",
      "Routes pour consulter les evenements publics et les details.",
      "Fixtures pour peupler la base de donnees."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Conception et implementation d'une API REST.",
        "Gestion des routes, serialisation et validation."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Modelisation des relations entre entites.",
        "Optimisation des requetes."
      ],
      "C5 : Conduire un projet": [
        "Organisation des taches et suivi des echeances.",
        "Documentation et tests unitaires."
      ],
      "C6 : Collaborer au sein d'une equipe informatique": [
        "Utilisation d'outils collaboratifs et partage des avancements."
      ]
    },
    images: [
      { src: "/img/listeEventApi.png", alt: "Liste des evenements" },
      { src: "/img/jwtApi.png", alt: "Authentification JWT" },
      { src: "/img/fixtures.png", alt: "Fixtures" }
    ]
  },
  frontVuePt3: {
    slug: "front-vue-pt3",
    title: "Front VueJS (Projet pt-3)",
    description:
      "Interface Vue.js pour consommer l'API REST des evenements musicaux.",
    technologies: ["Vue.js", "Tailwind CSS", "PrimeVue", "Axios", "TypeScript"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/lisaachr/api_front",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" }
    ],
    context:
      "Projet front-end permettant aux utilisateurs de consulter et gerer leur participation aux evenements musicaux.",
    methods: [
      "Vue Router pour la gestion des routes.",
      "Composants reutilisables avec PrimeVue.",
      "Integration API avec Axios et design responsive Tailwind CSS."
    ],
    results: [
      "Interface intuitive pour consulter les evenements.",
      "Inscription, authentification et gestion de profil.",
      "Gestion des inscriptions et notifications."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Conception et developpement de l'interface front-end.",
        "Integration avec l'API REST."
      ],
      "C3 : Concevoir une interface utilisateur": [
        "Creation de composants dynamiques.",
        "Navigation fluide et UX soignee."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Affichage et validation des donnees utilisateurs."
      ],
      "C5 : Conduire un projet": [
        "Planification des etapes et collaboration via GitHub."
      ]
    },
    images: [
      { src: "/img/portfolio/frontVueJs.png", alt: "Interface d'accueil" },
      { src: "/img/portfolio/frontVueJs2.png", alt: "Liste des evenements" },
      { src: "/img/portfolio/frontVueJs3.png", alt: "Liste des scenes" },
      { src: "/img/portfolio/frontVueJs4.png", alt: "Formulaire d'inscription" },
      { src: "/img/portfolio/frontVueJs5.png", alt: "Formulaire de connexion" }
    ]
  },
  trelloTrolle: {
    slug: "trello-trolle",
    title: "Trello Trolle",
    description:
      "Amelioration d'une application type Trello avec refactorisation et ajouts JS natif.",
    technologies: ["PHP", "CSS", "JavaScript", "Docker"],
    categories: ["Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/trellotrolle-code-de-base",
    collaborators: [{ name: "Theo" }, { name: "Lisa", url: "https://github.com/lisaachr" }],
    context:
      "Projet du semestre 4 pour corriger un code volontairement imparfait et renforcer les bonnes pratiques.",
    methods: [
      "Refactorisation PHP et nettoyage CSS.",
      "Ajout d'interactions dynamiques en JavaScript natif.",
      "Communication asynchrone entre frontend et backend."
    ],
    results: [
      "Interface fluide et interactive.",
      "Amelioration des performances et de la maintenabilite.",
      "Backend plus robuste et conforme aux standards."
    ],
    skills: {
      "C1 : Realiser un developpement d'application": [
        "Refactorisation et correction des bugs PHP.",
        "Ajout de nouvelles fonctionnalites serveur et client."
      ],
      "C2 : Concevoir des interfaces utilisateur": [
        "Creation d'une interface intuitive avec CSS et JS natif.",
        "Amelioration de l'ergonomie et de la fluidite."
      ],
      "C3 : Gerer un projet": [
        "Gestion des taches en equipe et respect des delais.",
        "Suivi de l'avancement sur Trello."
      ],
      "C4 : Gerer des donnees de l'information": [
        "Optimisation des requetes SQL.",
        "Architecture de base de donnees efficace."
      ],
      "C5 : Collaborer au sein d'une equipe informatique": [
        "Utilisation de Git pour le versionnage.",
        "Revues de code regulieres."
      ],
      "C6 : Assurer la qualite et la securite des services informatiques": [
        "Validation des entrees utilisateur et prevention XSS/SQLi.",
        "Amelioration de la maintenabilite du code."
      ]
    },
    images: [
      { src: "/img/portfolio/trello.png", alt: "Interface Trello Trolle" }
    ]
  }
} satisfies Record<string, ProjectDetail>;

export const projects = Object.values(projectDetails);
