import { motion } from "framer-motion";
import { 
  Coffee, 
  Globe, 
  Database, 
  Container, 
  GitBranch, 
  Layout,
  Code2,
  Server
} from "lucide-react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    icon: Coffee,
    title: "Java",
    description: "Tests unitaires, design patterns (Singleton, Factory), principes SOLID pour un code robuste et maintenable."
  },
  {
    icon: Globe,
    title: "HTML / CSS / JS",
    description: "TailwindCSS, Bootstrap, Bulma pour le style. ReactJS et VueJS pour le développement dynamique."
  },
  {
    icon: Server,
    title: "PHP & Symfony",
    description: "Développement backend avec Symfony, API Platform et React pour des applications web modernes."
  },
  {
    icon: Database,
    title: "SQL / NoSQL",
    description: "MySQL, PostgreSQL, Oracle, MariaDB. Bases NoSQL : MongoDB et Cassandra."
  },
  {
    icon: Container,
    title: "Docker",
    description: "Conteneurisation de services : serveurs web, bases de données, Grafana et phpMyAdmin."
  },
  {
    icon: GitBranch,
    title: "Git & CI/CD",
    description: "GitHub et GitLab pour la gestion de versions, issues et collaboration en équipe."
  },
  {
    icon: Layout,
    title: "Management de projet",
    description: "Figma pour les maquettes, Trello et Notion pour l'organisation et le suivi des tâches."
  },
  {
    icon: Code2,
    title: "C / C# / C++",
    description: "Langages essentiels pour le développement de jeux vidéo. Gestion mémoire et concepts avancés."
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Mes Compétences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de technologies et méthodologies maîtrisées au fil de mes études et projets personnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
