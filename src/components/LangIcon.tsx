import { cn } from "@/lib/utils";
import Image from "next/image";

export function LangIcon({ svg, png, name, className }: { svg?: boolean, png?: boolean, name: string, className?: string }) {
    return (
      <div className={cn(
        "rounded-full border border-gray-400 p-4 backdrop-blur-sm",
        className
      )}>
        <div className="h-full flex items-center justify-center">
          <Image
            src={`/icons/${name}.${svg ? 'svg' : png ? 'png' : ''}`}
            className="rounded-sm"
            alt={name}
            width={28}
            height={28}
          />
        </div>
      </div>
    )
  }