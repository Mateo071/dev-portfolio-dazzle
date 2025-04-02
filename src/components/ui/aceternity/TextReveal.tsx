
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextReveal = ({ 
  text,
  className,
  delay = 0,
}: { 
  text: string;
  className?: string;
  delay?: number;
}) => {
  const controls = useAnimation();
  const textArray = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="overflow-hidden">
        {textArray.map((word, i) => {
          return (
            <div key={i} className="inline-block">
              <motion.div
                className="inline-block"
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 0.5,
                  delay: delay + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                {word}
              </motion.div>
              <span> </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
