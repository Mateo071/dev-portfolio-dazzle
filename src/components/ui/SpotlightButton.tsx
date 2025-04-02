
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function SpotlightButton({
  children,
  className,
  onClick,
  type = "button",
}: SpotlightButtonProps) {
  const divRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      ref={divRef}
      className={cn(
        "relative overflow-hidden rounded-md px-4 py-2 transition-all duration-300",
        "text-light hover:text-white border border-white/10 bg-white/5",
        "cursor-pointer group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      type={type}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(155, 135, 245, 0.15), transparent 40%)`,
          opacity,
        }}
      />
      {children}
    </button>
  );
}
