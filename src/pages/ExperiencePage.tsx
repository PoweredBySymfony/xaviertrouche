import { useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Github } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { experienceDetails } from "@/data/experiences";
import NotFound from "./NotFound";

const ExperiencePage = () => {
  const { slug } = useParams();
  const experience = slug ? experienceDetails[slug as keyof typeof experienceDetails] : undefined;
  const galleryRef = useRef<ImageGallery | null>(null);

  if (!experience) {
    return <NotFound />;
  }

  const galleryItems = experience.project.images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    originalAlt: image.alt,
    thumbnailAlt: image.alt,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Experience
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">{experience.title}</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">{experience.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold bg-secondary rounded-full text-muted-foreground">
                {experience.company}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-secondary rounded-full text-muted-foreground">
                {experience.duration}
              </span>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold mb-3">Presentation de l'entreprise</h2>
            <p className="text-muted-foreground leading-relaxed">{experience.serviceDescription}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{experience.project.title}</h2>
                <p className="text-muted-foreground mt-2">{experience.project.context}</p>
              </div>
              {experience.project.githubUrl && (
                <Button asChild className="gap-2">
                  <a href={experience.project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.section>

          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Methodes de travail</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {experience.project.methods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Resultats</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {experience.project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl font-semibold mb-3">Technologies utilisees</h2>
            <div className="flex flex-wrap gap-2">
              {experience.project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold bg-secondary rounded-full text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl font-semibold mb-4">Competences mobilisees</h2>
            <div className="space-y-4">
              {Object.entries(experience.project.skills).map(([skillTitle, skillItems]) => (
                <div key={skillTitle}>
                  <h3 className="font-semibold text-foreground mb-2">{skillTitle}</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {skillItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Souvenirs</h2>
              <span className="text-xs text-muted-foreground">Cliquez pour plein ecran</span>
            </div>
            <ImageGallery
              ref={galleryRef}
              items={galleryItems}
              showThumbnails
              showFullscreenButton
              showPlayButton={false}
              onClick={() => galleryRef.current?.fullScreen()}
            />
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
