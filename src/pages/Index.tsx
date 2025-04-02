
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scene from "../components/three/Scene";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import ProjectsHighlight from "../components/sections/ProjectsHighlight";
import Skills from "../components/sections/Skills";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import { GridPattern } from "../components/ui/aceternity/GridPattern";
import { TracingBeam } from "@/components/ui/aceternity/TracingBeam";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TracingBeam className="px-6">
      <div className="relative min-h-screen bg-dark text-light overflow-hidden">
        <AnimatePresence>
          {isLoading ? (
            <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="loader"
            >
              <motion.div
                className="text-4xl font-bold text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                DevPortfolio
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <div className="relative overflow-hidden">
              <GridPattern className="absolute inset-0" />
              <ProjectsHighlight />
            </div>
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </TracingBeam>
  );
}

export default Index;
