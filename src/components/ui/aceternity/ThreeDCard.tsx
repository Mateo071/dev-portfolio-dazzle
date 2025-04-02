
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function ThreeDCard({
  children,
  className,
  backgroundImage,
  icon,
  title,
  subtitle,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    const rotateXValue = mouseY * 20;
    const rotateYValue = mouseX * -20;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "w-full rounded-xl bg-gradient-to-br from-purple/10 to-blue/5 border border-white/10 p-6 relative overflow-hidden group",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1
          }}
        />
      )}
      <div className="relative transform-gpu transition-transform duration-300" style={{ 
        transform: `translateZ(20px)`
      }}>
        <div className="flex justify-between items-start mb-4">
          {icon && (
            <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center text-purple-light mb-4">
              {icon}
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
        <div className="mt-4">{children}</div>
      </div>
    </motion.div>
  );
}
