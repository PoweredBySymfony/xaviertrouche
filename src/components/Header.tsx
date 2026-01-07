import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Button } from "./ui/button";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Compétences", href: "#skills" },
  { name: "Parcours", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/bakaasta", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/xavier-trouche", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@xaviertrouche.dev", label: "Email" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg transition-transform duration-300 group-hover:scale-110">
            XT
          </div>
          <span className="font-semibold text-foreground hidden sm:block">
            Xavier Trouche
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Social links - desktop only */}
          <div className="hidden lg:flex items-center gap-1 mr-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-border">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
