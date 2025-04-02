
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  opacity: number;
}

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleCount,
  particleSpeed,
  className,
}: {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleCount?: number;
  particleSpeed?: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const resizeCanvas = useCallback(() => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
      setDimensions({ width, height });
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, []);
  
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);
  
  const createParticle = useCallback((): Particle => {
    const size = Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1);
    return {
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size,
      speedX: (Math.random() - 0.5) * (particleSpeed || 0.5),
      speedY: (Math.random() - 0.5) * (particleSpeed || 0.5),
      life: 0,
      maxLife: Math.random() * 100 + 50,
      opacity: Math.random(),
    };
  }, [dimensions, minSize, maxSize, particleSpeed]);
  
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const initialParticles: Particle[] = [];
    for (let i = 0; i < (particleCount || 100); i++) {
      initialParticles.push(createParticle());
    }
    setParticles(initialParticles);
  }, [dimensions, createParticle, particleCount]);
  
  const updateParticles = useCallback(() => {
    setParticles((currentParticles) => {
      return currentParticles.map((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life += 1;
        
        // Reset if out of bounds or past life
        if (
          particle.x < 0 ||
          particle.x > dimensions.width ||
          particle.y < 0 ||
          particle.y > dimensions.height ||
          particle.life > particle.maxLife
        ) {
          return createParticle();
        }
        
        return particle;
      });
    });
  }, [dimensions, createParticle]);
  
  const drawParticles = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    particles.forEach((particle) => {
      const lifeFactor = 1 - particle.life / particle.maxLife;
      ctx.globalAlpha = particle.opacity * lifeFactor;
      ctx.fillStyle = "#9b87f5"; // Purple-light color
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [dimensions, particles]);
  
  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [updateParticles, drawParticles]);
  
  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};
