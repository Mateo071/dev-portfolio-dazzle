
import { cn } from "@/lib/utils";

export function GridPattern({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full select-none bg-background [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-black",
        className
      )}
      {...props}
    >
      <div className="h-full w-full bg-grid-pattern opacity-5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
}
