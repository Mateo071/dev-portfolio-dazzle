
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-px bg-purple/50 w-12"></div>
        {subtitle && (
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
      <AnimatedText
        text={title}
        className="text-3xl md:text-4xl font-bold"
      />
    </div>
  );
}
