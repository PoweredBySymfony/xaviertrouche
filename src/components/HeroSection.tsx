import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[15%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Étudiant en BUT Informatique
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Bonjour, je suis{" "}
          <span className="text-gradient">Xavier Trouche</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Passionné par les jeux vidéo et le développement, je conçois des applications 
          qui allient créativité, esthétique soignée et expériences immersives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 gap-2 shadow-lg"
            asChild
          >
            <a href="https://bakaasta.github.io/portfolio/assets/CV_Master.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            asChild
          >
            <a href="#skills">
              En savoir plus
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-20"
        >
          {[
            { value: "3+", label: "Années d'études" },
            { value: "10+", label: "Projets réalisés" },
            { value: "5+", label: "Technologies" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
