import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code2, Cpu, Server, Database, Users, Briefcase, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Competence {
  icon: typeof Code2;
  title: string;
  color: string;
  levels: {
    niveau: string;
    description: string;
    projet: {
      name: string;
      url: string;
      slug: string;
    };
    details: string;
  }[];
}

const competences: Competence[] = [
  {
    icon: Code2,
    title: "Réaliser",
    color: "from-blue-500 to-cyan-500",
    levels: [
      {
        niveau: "Niveau 2",
        description: "Partir des exigences et aller jusqu'à une application complète",
        projet: {
          name: "Les Aventuriers du Rail – Partie 1",
          url: "https://github.com/BakaAsta/RailsIhmPart1",
          slug: "railsPt1",
        },
        details:
          "J'ai conçu une application complète en partant d'un cahier des charges précis. J'ai suivi une approche incrémentale pour garantir la cohérence fonctionnelle tout au long du développement. L'utilisation de GitLab pour la gestion du code et JUnit pour les tests unitaires m'a permis de structurer efficacement le projet et d'assurer sa robustesse.",
      },
      {
        niveau: "Niveau 3",
        description: "Adapter des applications sur un ensemble de supports",
        projet: {
          name: "Front API REST",
          url: "https://github.com/lisaachr/api_front",
          slug: "front-vue-pt3",
        },
        details:
          "En développant une interface responsive avec Vue.js, Tailwind CSS et PrimeVue, j'ai rendu l'application accessible sur mobile et desktop. L'intégration d'API REST m'a permis d'assurer une communication fluide entre le backend et le frontend, garantissant une expérience utilisateur optimale.",
      },
    ],
  },
  {
    icon: Cpu,
    title: "Optimiser",
    color: "from-purple-500 to-pink-500",
    levels: [
      {
        niveau: "Niveau 2",
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        projet: {
          name: "Les Aventuriers du Graphe – Partie 2",
          url: "https://github.com/BakaAsta/RailsIhmPart2",
          slug: "railsPt2",
        },
        details:
          "J'ai mis en œuvre des algorithmes avancés comme Dijkstra pour optimiser les trajets du jeu. Cette expérience m'a permis d'affiner ma compréhension des structures de données et d'améliorer l'efficacité des calculs en optimisant le temps d'exécution.",
      },
      {
        niveau: "Niveau 3",
        description: "Analyser et optimiser des applications",
        projet: {
          name: "SAE - Trello Trollé",
          url: "https://github.com/BakaAsta/trellotrolle-code-de-base",
          slug: "trello-trolle",
        },
        details:
          "Ce projet était centré sur l'amélioration d'un code existant. J'ai analysé et optimisé les performances en refactorisant le code PHP et en mettant en place des requêtes SQL plus efficaces. Cette expérience m'a permis de mieux comprendre l'impact des choix d'implémentation sur les performances globales.",
      },
    ],
  },
  {
    icon: Server,
    title: "Administrer",
    color: "from-orange-500 to-amber-500",
    levels: [
      {
        niveau: "Niveau 2",
        description: "Déployer des services dans une architecture réseau",
        projet: {
          name: "API REST - Gestion d'Événements Musicaux",
          url: "https://github.com/PoweredBySymfony/Projet-API-REST",
          slug: "api-rest-pt2",
        },
        details:
          "J'ai appris à déployer une API sécurisée en utilisant Symfony et API Platform. J'ai configuré une authentification JWT et mis en place des endpoints optimisés pour gérer efficacement les événements.",
      },
    ],
  },
  {
    icon: Database,
    title: "Gérer",
    color: "from-green-500 to-emerald-500",
    levels: [
      {
        niveau: "Niveau 2",
        description:
          "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        projet: {
          name: "Annuaire Symfony",
          url: "https://github.com/projets-xil/s5-web-projet1",
          slug: "annuaire-pt1",
        },
        details:
          "J'ai optimisé la base de données en mettant en place des index et en optimisant les requêtes SQL. J'ai également sécurisé l'application en gérant les rôles et permissions des utilisateurs pour assurer la confidentialité des données.",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Conduire",
    color: "from-red-500 to-rose-500",
    levels: [
      {
        niveau: "Niveau 2",
        description: "Appliquer une démarche de suivi de projet",
        projet: {
          name: "SAE - Plateforme Stage/Alternance",
          url: "https://github.com/BakaAsta/sae-stage-alternance",
          slug: "sae-web",
        },
        details:
          "Ce projet m'a appris à suivre un projet avec la méthodologie Scrum. J'ai utilisé Trello pour gérer les tâches, défini des sprints hebdomadaires et assuré une communication régulière avec l'équipe.",
      },
    ],
  },
  {
    icon: Users,
    title: "Collaborer",
    color: "from-indigo-500 to-violet-500",
    levels: [
      {
        niveau: "Niveau 2",
        description: "Situer son rôle et ses missions au sein d'une équipe informatique",
        projet: {
          name: "Leonn - Gestion de Prêts",
          url: "https://github.com/BakaAsta/leonn",
          slug: "leonn",
        },
        details:
          "J'ai travaillé en collaboration avec une équipe en utilisant Microsoft Teams et Planner. J'ai appris à répartir les responsabilités et à assurer un suivi efficace du projet.",
      },
      {
        niveau: "Niveau 3",
        description: "Manager une équipe informatique",
        projet: {
          name: "SAE - Plateforme Stage/Alternance",
          url: "https://github.com/BakaAsta/sae-stage-alternance",
          slug: "sae-web",
        },
        details:
          "Dans ce projet d'équipe, j'ai pris des responsabilités de coordination et de management, assurant la communication entre les membres et le suivi des objectifs.",
      },
    ],
  },
];

const Apprentissage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio d'apprentissage
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Mes Compétences</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ce portfolio met en relation les compétences acquises avec les projets réalisés
              tout au long de mon parcours.
            </p>
          </motion.div>

          <div className="space-y-12">
            {competences.map((competence, index) => (
              <motion.div
                key={competence.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${competence.color} flex items-center justify-center shadow-lg`}
                  >
                    <competence.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{competence.title}</h2>
                </div>

                <div className="space-y-6">
                  {competence.levels.map((level, levelIndex) => (
                    <motion.div
                      key={levelIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: levelIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="apprentissage-item group"
                    >
                      <div className="apprentissage-dot" />
                      
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                          {level.niveau}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{level.description}</h3>
                      
                      <Link
                        to={`/project/${level.projet.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline mb-3 group"
                      >
                        <span className="font-medium">{level.projet.name}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {level.details}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apprentissage;
