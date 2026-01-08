import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
                  <div className="skill-card rounded-xl p-6 h-full flex flex-col group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub - ${project.title}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <Link
                      to={`/project/${project.slug}`}
                      className="text-lg font-semibold mb-2 hover:text-primary hover:underline transition-colors"
                    >
                      {project.title}
                    </Link>
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
                  </div>
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
