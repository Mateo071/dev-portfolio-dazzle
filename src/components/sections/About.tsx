
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import AnimatedText from "../ui/AnimatedText";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/5 to-transparent" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <SectionHeading 
            title="About Me"
            subtitle="My Journey"
          />
          
          <motion.div 
            className="space-y-6 text-lg"
            style={{ y, opacity }}
          >
            <AnimatedText
              text="I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly applications."
              className="font-medium text-xl"
              speed={0.03}
            />
            
            <p className="text-light/80">
              With over 5 years of experience in web development, I've had the opportunity to 
              work on a variety of projects, from small business websites to complex enterprise 
              applications. My approach combines technical expertise with creative problem-solving 
              to deliver solutions that not only meet but exceed client expectations.
            </p>
            
            <p className="text-light/80">
              I'm particularly interested in the intersection of technology and design, creating 
              digital experiences that are both functionally robust and aesthetically pleasing. 
              When I'm not coding, you can find me exploring the latest web technologies, 
              contributing to open-source projects, or sharing my knowledge through blog posts 
              and community events.
            </p>
            
            <p className="text-light/80">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
