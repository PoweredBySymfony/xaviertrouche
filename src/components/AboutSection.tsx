import { motion } from "framer-motion";
import { Gamepad2, Target, Lightbulb, Heart } from "lucide-react";

const qualities = [
  { icon: Target, text: "Flexible et orienté résultats" },
  { icon: Heart, text: "Esprit d'équipe" },
  { icon: Lightbulb, text: "Envie d'apprendre et créatif" },
  { icon: Gamepad2, text: "Ouvert d'esprit et attentif" },
];

export const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              Passionné par la création numérique
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Étudiant en 3ème année de BUT Informatique, je suis passionné par le domaine des 
                jeux vidéo depuis mon plus jeune âge – un secteur où se rencontrent créativité et 
                innovation technologique.
              </p>
              <p>
                Ce qui me fascine particulièrement, c'est la manière dont les jeux vidéo peuvent 
                transmettre des émotions profondes à travers des graphismes immersifs, des 
                scénarios captivants et une interactivité enrichissante.
              </p>
              <p>
                Mon ambition est de concevoir des projets qui marquent les joueurs, en mêlant 
                une esthétique soignée et des récits percutants. Je vise un Master spécialisé 
                comme le <span className="text-foreground font-medium">Master Jeux Vidéo du CNAM-ENJMIN</span> ou 
                le <span className="text-foreground font-medium">Master Imagine à Montpellier</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Qualities grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-card rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{quality.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
