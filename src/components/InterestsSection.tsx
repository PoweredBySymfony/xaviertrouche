import { motion } from "framer-motion";
import { Gamepad2, Tv, Dumbbell, Trophy, Calendar } from "lucide-react";

interface Interest {
  icon: typeof Gamepad2;
  title: string;
  description: string;
  items: string[];
  color: string;
}

const interests: Interest[] = [
  {
    icon: Gamepad2,
    title: "Jeux Vidéo",
    description: "Passionné par les jeux compétitifs et coopératifs",
    items: ["Call of Duty Warzone", "Overwatch 2", "EA FC"],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Tv,
    title: "Anime & Manga",
    description: "Fan de culture japonaise",
    items: ["My Hero Academia", "Haikyu!!", "Dr. Stone"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Dumbbell,
    title: "Sport",
    description: "Pratique régulière d'arts martiaux",
    items: ["Karaté", "Football"],
    color: "from-orange-500 to-amber-500",
  },
];

const events = [
  {
    icon: Trophy,
    title: "Code Game Jam",
    description: "4ème édition - IUT de Montpellier",
    date: "Janvier 2020",
  },
  {
    icon: Calendar,
    title: "La Nuit de l'Info",
    description: "Compétition nationale de développement",
    date: "Décembre 2022",
  },
];

export const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 relative">
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
            Centres d'intérêt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Au-delà du Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes passions et activités qui me définissent en dehors du développement.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card rounded-xl p-6 group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <interest.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{interest.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {interest.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs bg-secondary rounded-full text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center mb-8">Événements & Compétitions</h3>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card rounded-xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <event.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <p className="text-xs text-primary mt-1">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
