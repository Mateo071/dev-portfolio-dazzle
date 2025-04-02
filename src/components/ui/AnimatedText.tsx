
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  speed?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  once = true,
  speed = 0.05
}: AnimatedTextProps) {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once });
  
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: 0.1 * i },
    }),
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={textRef}
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <div key={index} className="mr-2 overflow-hidden">
          <motion.span
            className="inline-block"
            variants={child}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
