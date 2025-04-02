
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  index,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        className={cn(
          "overflow-hidden rounded-lg border border-white/10 bg-white/5",
          "transition-all duration-300 transform",
          hovered ? "scale-[1.02]" : "scale-100"
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${image})`,
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-8 w-8 rounded-full bg-purple flex items-center justify-center"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </a>
            </motion.div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
