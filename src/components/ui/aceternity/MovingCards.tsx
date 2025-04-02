
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  
  const [start, setStart] = useState(false);
  
  const speedMap = {
    fast: 30,
    normal: 50,
    slow: 80,
  };
  
  const getDirection = () => {
    if (direction === "left") {
      return "-";
    }
    return "";
  };
  
  const getAnimationDuration = () => {
    if (!scrollerRef.current) return 0;
    const scrollWidth = scrollerRef.current.offsetWidth;
    return scrollWidth / speedMap[speed];
  };

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;
    
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
    
    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}
    >
      <motion.ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 gap-4 py-4"
        initial={{ translateX: direction === "left" ? "0%" : "-100%" }}
        animate={{
          translateX: direction === "left" ? "-100%" : "0%",
        }}
        transition={{
          duration: getAnimationDuration(),
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          ...(pauseOnHover && { pause: "hover" }),
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-border/[0.1] flex-shrink-0 px-8 py-6 md:w-80 glass bg-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              {item.icon && <div className="text-purple-light">{item.icon}</div>}
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
            </div>
            {item.description && (
              <p className="text-muted-foreground">{item.description}</p>
            )}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
