import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";
import { cn } from "@/lib/utils";

export function NavigationButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === "prev";

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "absolute bottom-0 z-10 rounded-full bg-secondary text-secondary-foreground md:top-1/2 md:-translate-y-1/2",
        isPrev ? "left-1/3 md:left-0 md:translate-x-1/2" : "right-1/3 md:right-0 md:-translate-x-1/2",
      )}
    >
      <Vector className={`${isPrev ? "rotate-90" : "-rotate-90"} fill-secondary-foreground`} />
    </Button>
  );
}
