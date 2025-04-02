
import { useRef } from "react";
import { useInView } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task manager with drag and drop UI and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2669&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics platform for tracking engagement across multiple social platforms.",
      tags: ["Vue.js", "GraphQL", "D3.js", "OAuth"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Weather Visualization",
      description: "Interactive 3D weather visualization with historical data analysis.",
      tags: ["Three.js", "TypeScript", "Weather API", "WebGL"],
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2574&auto=format&fit=crop",
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      </div>
      
      <div className="container px-4 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="My Work"
          className="text-center"
        />
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
