import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className,
  as: Component = "div",
}: GlassCardProps) {
  return <Component className={cn("glass-card", className)}>{children}</Component>;
}
