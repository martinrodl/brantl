import { cn } from "@/lib/utils";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";

export function TriangleClusterRow({
  count = 3,
  className,
  triangleClassName,
}: {
  count?: number;
  className?: string;
  triangleClassName?: string;
}) {
  return (
    <div className={cn("flex fill-muted", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <TriangleCluster key={index} className={cn("h-auto w-4", triangleClassName)} />
      ))}
    </div>
  );
}
