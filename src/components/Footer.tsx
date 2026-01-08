import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
              XT
            </div>
            <span className="text-sm text-muted-foreground">
              Xavier Trouche
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Fait avec <Heart className="w-4 h-4 text-primary" /> à Marseille
          </p>
        </div>
      </div>
    </footer>
  );
};
