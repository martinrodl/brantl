import { cn } from "@/lib/utils";

import Vector from "~/public/icons/vector.svg";

export function SectionHeader({ header, className }: { header: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      <h2 className="text-2.5xl font-medium md:text-4xl">{header}</h2>
      <Vector width={24} height={10} />
    </div>
  );
}
