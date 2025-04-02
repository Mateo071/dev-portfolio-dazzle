
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({ 
  words, 
  className,
}: { 
  words: string[]; 
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className={cn("font-bold", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="relative inline-block cursor-pointer transition-all duration-200"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            paddingRight: idx !== words.length - 1 ? "0.4rem" : 0,
          }}
        >
          {word}
          {hoveredIndex === idx && (
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-light to-blue"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
            />
          )}
        </motion.span>
      ))}
    </div>
  );
};
