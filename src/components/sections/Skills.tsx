
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Code, Server, Palette, Cpu } from "lucide-react";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
      icon: <Code className="h-8 w-8 text-purple-light" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with scalable architectures.",
      icon: <Server className="h-8 w-8 text-purple-light" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "RESTful APIs"]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and aesthetically pleasing user experiences.",
      icon: <Palette className="h-8 w-8 text-purple-light" />,
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Accessibility"]
    },
    {
      title: "DevOps & Tools",
      description: "Streamlining development workflows and deployment processes.",
      icon: <Cpu className="h-8 w-8 text-purple-light" />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Firebase", "Testing"]
    }
  ];
  
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        <SectionHeading
          title="My Skills & Expertise"
          subtitle="What I Do"
          className="text-center"
        />
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-md bg-white/5 backdrop-blur-sm">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-light/70 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
