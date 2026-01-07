import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "xavier.trouche@outlook.fr",
    href: "mailto:xavier.trouche@outlook.fr",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bakaasta",
    href: "https://github.com/bakaasta",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Xavier Trouche",
    href: "https://www.linkedin.com/in/trouche-xavier-918353218/",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Montpellier, France",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez simplement échanger ? 
            N'hésitez pas à me contacter, je serai ravi de discuter avec vous.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="skill-card rounded-xl p-5 flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {link.label}
                      </p>
                      <p className="text-foreground font-medium truncate">{link.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ) : (
                  <div className="skill-card rounded-xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {link.label}
                      </p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 gap-2 shadow-lg"
              asChild
            >
              <a href="mailto:xavier.trouche@outlook.fr">
                <Mail className="w-4 h-4" />
                M'envoyer un message
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
