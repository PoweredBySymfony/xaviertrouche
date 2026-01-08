import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ArrowLeft, Github } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = slug ? projects.find((item) => item.slug === slug) : undefined;
  const galleryRef = useRef<ImageGallery | null>(null);
  const navigate = useNavigate();

  if (!project) {
    return <NotFound />;
  }

  const galleryItems = project.images.map((image) => ({
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
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Retour a la page precedente"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card/60">
              <ArrowLeft className="h-4 w-4" />
            </span>
            Retour
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                  Projet
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold mt-2">{project.title}</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl">{project.description}</p>
              </div>
              <Button asChild className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold bg-secondary rounded-full text-muted-foreground">
                {project.year}
              </span>
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-semibold bg-secondary rounded-full text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-muted-foreground leading-relaxed">{project.context}</p>
          </motion.section>

          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Methodes de travail</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.methods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Resultats</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl font-semibold mb-3">Technologies utilisees</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl font-semibold mb-4">Competences mobilisees</h2>
            <div className="space-y-4">
              {Object.entries(project.skills).map(([skillTitle, skillItems]) => (
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
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Preuves visuelles</h2>
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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Pour plus de details, consultez le{" "}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              depot du projet
            </a>
            .
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
