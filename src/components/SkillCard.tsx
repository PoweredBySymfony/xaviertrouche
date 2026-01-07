import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const SkillCard = ({ icon: Icon, title, description, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="skill-card rounded-2xl p-6 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};
