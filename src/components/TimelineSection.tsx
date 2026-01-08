import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Music } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface TimelineItem {
  icon: LucideIcon;
  title: string;
  place: string;
  description: string;
  date: string;
  type: "education" | "work" | "certification";
  detailHref?: string;
}

const timelineItems: TimelineItem[] = [
  {
    icon: Briefcase,
    title: "Alternance Nocika",
    place: "Développeur Full-Stack",
    description: "Alternance en cours - Développement d'applications web modernes.",
    date: "2024 - Présent",
    type: "work",
    detailHref: "/experience/nocika"
  },
  {
    icon: Briefcase,
    title: "Stage ECIR - Projet Leonn",
    place: "Mallemort",
    description: "Développement d'un logiciel de gestion de matériel avec Symfony, API Platform et React.",
    date: "2024",
    type: "work",
    detailHref: "/experience/ecir"
  },
  {
    icon: GraduationCap,
    title: "BUT Informatique",
    place: "IUT de Sète",
    description: "Formation approfondie en développement, bases de données et gestion de projets.",
    date: "2022 - 2025",
    type: "education"
  },
  {
    icon: Award,
    title: "BAFA",
    place: "Ifac Formation / Centre de Pélissanne",
    description: "Brevet d'Aptitude aux Fonctions d'Animateur.",
    date: "2022",
    type: "certification"
  },
  {
    icon: GraduationCap,
    title: "Bac Général",
    place: "Lycée L'Emperi",
    description: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
    date: "2022",
    type: "education"
  },
  {
    icon: Music,
    title: "Cycle 3 Batterie",
    place: "Conservatoire Manitas De Plata / Pélissanne",
    description: "Formation musicale avancée en percussions et batterie.",
    date: "2019",
    type: "certification"
  }
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const Icon = item.icon;
  const cardContent = (
    <div className="skill-card rounded-xl p-5 group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            {item.detailHref ? (
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </span>
            ) : (
              <h3 className="font-semibold text-foreground">{item.title}</h3>
            )}
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
              {item.date}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{item.place}</p>
          <p className="text-sm text-muted-foreground/80">{item.description}</p>
        </div>
      </div>
    </div>
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="timeline-item"
    >
      <div className="timeline-dot">
        <span className="absolute -left-1 -top-1 w-6 h-6 bg-primary/20 rounded-full animate-ping" />
      </div>

      {item.detailHref ? (
        <Link
          to={item.detailHref}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl"
          aria-label={`Voir le detail ${item.title}`}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
};

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Formations & Expériences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et professionnel, de mes études à mes expériences en entreprise.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineCard key={item.title + item.date} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
