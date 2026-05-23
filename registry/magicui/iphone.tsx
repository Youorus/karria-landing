import Image from "next/image";
import { cn } from "@/lib/utils";

export interface IphoneProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

export function Iphone({ src, className, children, ...props }: IphoneProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[712px] w-[350px] rounded-[3.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl dark:border-zinc-800 dark:bg-zinc-800",
        className,
      )}
      {...props}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
      
      {/* Volume & Power Buttons */}
      <div className="absolute -left-[12px] top-28 h-10 w-[4px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -left-[12px] top-44 h-14 w-[4px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -left-[12px] top-60 h-14 w-[4px] rounded-l-lg bg-zinc-800 dark:bg-zinc-700" />
      <div className="absolute -right-[12px] top-40 h-20 w-[4px] rounded-r-lg bg-zinc-800 dark:bg-zinc-700" />
      
      {/* Inner Screen Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-background">
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
