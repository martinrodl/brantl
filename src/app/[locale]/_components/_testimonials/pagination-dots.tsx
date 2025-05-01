import { cn } from "@/lib/utils";

export function PaginationDots({
  totalDots,
  currentIndex,
  itemsPerView,
  onDotClick,
  className,
}: {
  totalDots: number;
  currentIndex: number;
  itemsPerView: number;
  onDotClick: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("space-x-2", className)}>
      {Array.from({ length: totalDots }).map((_, idx) => {
        const startIdx = idx * itemsPerView;
        const endIdx = startIdx + itemsPerView - 1;
        const lastItem = currentIndex + itemsPerView - 1;
        const isActive = lastItem >= startIdx && lastItem <= endIdx;

        return (
          <div className="flex flex-col gap-4" key={`dot-wrapper-${idx}`}>
            <button
              onClick={() => onDotClick(startIdx)}
              className={cn(
                "h-3 w-3 rounded-full transition-colors duration-300",
                isActive ? "bg-primary-inverse" : "bg-muted-foreground",
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
