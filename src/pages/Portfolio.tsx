import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github, Users } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  year: string;
  githubUrl: string;
  collaborators?: { name: string; url?: string }[];
}

const projects: Project[] = [
  {
    title: "Les Aventuriers du Rail - Partie 1",
    description: "Application complète développée à partir d'un cahier des charges précis avec une approche incrémentale.",
    technologies: ["Java", "GitLab", "JUnit"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart1",
  },
  {
    title: "Les Aventuriers du Rail - Orienté Graphes",
    description: "Implémentation d'algorithmes avancés comme Dijkstra pour optimiser les trajets du jeu.",
    technologies: ["Java", "Algorithmes", "Graphes"],
    categories: ["Java", "Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart2",
  },
  {
    title: "Les Aventuriers du Rail - Version IHM",
    description: "Version avec interface graphique complète orientée objet.",
    technologies: ["Java", "JavaFX", "POO"],
    categories: ["Java"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/RailsIhmPart3",
  },
  {
    title: "SAE Application Web",
    description: "Plateforme de recherche de stage et alternance développée en équipe.",
    technologies: ["Web", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/sae-stage-alternance",
    collaborators: [
      { name: "Hugo", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/crepinh" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
      { name: "Lucas", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/vrignaudl" },
      { name: "Alexandre", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/chateauvieuxa" },
    ],
  },
  {
    title: "Promotion Musicale",
    description: "Site web personnel pour la promotion d'artistes et événements musicaux.",
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    year: "2022",
    githubUrl: "https://github.com/BakaAsta/Personal_MusicProject",
  },
  {
    title: "Gestionnaire Leonn",
    description: "Application de gestion de prêts développée en solo.",
    technologies: ["Web", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/BakaAsta/leonn",
  },
  {
    title: "Annuaire (Projet pt-1)",
    description: "Application Symfony de gestion d'annuaire.",
    technologies: ["Symfony", "PHP", "MySQL"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/projets-xil/s5-web-projet1",
    collaborators: [
      { name: "Ilan", url: "https://github.com/ivelter" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
    ],
  },
  {
    title: "API REST (Projet pt-2)",
    description: "API REST sécurisée avec authentification JWT.",
    technologies: ["Symfony", "API Platform", "JWT"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/PoweredBySymfony/Projet-API-REST",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
    ],
  },
  {
    title: "Front VueJS (Projet pt-3)",
    description: "Interface responsive développée avec Vue.js, Tailwind CSS et PrimeVue.",
    technologies: ["Vue.js", "Tailwind CSS", "PrimeVue"],
    categories: ["Web"],
    year: "2024",
    githubUrl: "https://github.com/lisaachr/api_front",
    collaborators: [
      { name: "Maxime", url: "https://github.com/MaxChelseaFC" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
    ],
  },
  {
    title: "Trello Trollé",
    description: "Amélioration et optimisation d'une application existante de type Trello.",
    technologies: ["PHP", "SQL", "Refactoring"],
    categories: ["Web"],
    year: "2023",
    githubUrl: "https://github.com/BakaAsta/trellotrolle-code-de-base",
    collaborators: [
      { name: "Théo" },
      { name: "Lisa", url: "https://github.com/lisaachr" },
    ],
  },
];

const categories = ["Tous", "Java", "Web"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "Tous" ? true : project.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Mes Projets
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les projets sur lesquels j'ai travaillé, allant du développement Java
              aux applications web modernes.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-2 mb-12 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card rounded-xl p-6 h-full flex flex-col group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.collaborators && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-4">
                        <Users className="w-3.5 h-3.5" />
                        <span>
                          Avec {project.collaborators.map((c) => c.name).join(", ")}
                        </span>
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground mt-2">{project.year}</div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
