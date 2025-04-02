
import { Code, LayoutGrid, PanelRight, Zap } from "lucide-react";
import { ThreeDCard } from "../ui/aceternity/ThreeDCard";
import SectionHeading from "../ui/SectionHeading";
import { Badge } from "../ui/badge";

export default function ProjectsHighlight() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with real-time inventory and secure payments.",
      icon: <LayoutGrid className="h-6 w-6" />,
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "An intuitive project management tool with collaborative features and analytics.",
      icon: <PanelRight className="h-6 w-6" />,
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with interactive elements.",
      icon: <Code className="h-6 w-6" />,
      image: "/placeholder.svg",
      tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "API Integration Service",
      description: "A robust backend service connecting multiple systems with high performance.",
      icon: <Zap className="h-6 w-6" />,
      image: "/placeholder.svg",
      tags: ["Node.js", "Express", "GraphQL", "Docker"]
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="My Work"
          className="text-center mx-auto"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projects.map((project, index) => (
            <ThreeDCard 
              key={index}
              title={project.title}
              icon={project.icon}
              backgroundImage={project.image}
            >
              <div className="space-y-3">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="bg-white/5 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
}
