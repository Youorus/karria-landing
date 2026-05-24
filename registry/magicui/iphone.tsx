import Image from "next/image";
import { cn } from "@/lib/utils";

export interface IphoneProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

export function Iphone({ src, className, children, ...props }: IphoneProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[350/712] w-full max-w-[350px] rounded-[10%] border-[8px] sm:border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl dark:border-zinc-800 dark:bg-zinc-800",
        className,
      )}
      {...props}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-[1.5%] z-30 h-[4%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
      
      {/* Volume & Power Buttons */}
      <div className="absolute -left-[11px] sm:-left-[13px] top-[15%] h-[5.5%] w-[3px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -left-[11px] sm:-left-[13px] top-[24%] h-[7.5%] w-[3px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -left-[11px] sm:-left-[13px] top-[33%] h-[7.5%] w-[3px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -right-[11px] sm:-right-[13px] top-[22%] h-[11%] w-[3px] rounded-r-lg bg-zinc-800 dark:bg-zinc-700" />
      
      {/* Inner Screen Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[8%] bg-background">
        {src ? (
          <Image
            src={src}
            alt="Iphone screen content"
            fill
            className="object-cover"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
