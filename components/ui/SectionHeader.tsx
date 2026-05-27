import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  headingLevel?: 1 | 2;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  headingLevel = 2,
}: SectionHeaderProps) {
  const HeadingTag = `h${headingLevel}` as "h1" | "h2";

  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-6",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-primary bg-primary/10 border border-primary/20">
            <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}
      <HeadingTag
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl font-bold text-foreground",
          "tracking-tight leading-[1.1]",
          "mb-6",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl",
            align === "center" ? "mx-auto" : "",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
