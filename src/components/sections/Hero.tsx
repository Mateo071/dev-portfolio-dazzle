
import { motion } from "framer-motion";
import SpotlightButton from "../ui/SpotlightButton";
import { ArrowDown } from "lucide-react";
import { SparklesCore } from "../ui/aceternity/SparklesCore";
import { TextHoverEffect } from "../ui/aceternity/TextHoverEffect";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-purple/20 via-transparent to-blue/10" />
        <SparklesCore
          id="sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleCount={150}
          particleSpeed={0.3}
          className="h-full w-full"
        />
      </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <h3 className="text-xl md:text-2xl text-purple-light mb-4">
              Full-Stack Developer
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-shadow">
              <TextHoverEffect
                words={["Crafting", "digital", "experiences", "with", "code"]}
                className="inline"
              />
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-light/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build modern, responsive web applications with cutting-edge technologies 
            that deliver exceptional user experiences.
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SpotlightButton
              className="px-8 py-3 text-lg font-medium hover:bg-purple-light/10"
              onClick={() => document.getElementById("projects")?.scrollIntoView()}
              type="button"
            >
              View My Work
            </SpotlightButton>
            
            <SpotlightButton
              className="px-8 py-3 text-lg font-medium hover:bg-purple-light/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
              type="button"
            >
              Get In Touch
            </SpotlightButton>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowDown className="h-8 w-8 text-purple-light/70" />
        </motion.div>
    </section>
  );
}
