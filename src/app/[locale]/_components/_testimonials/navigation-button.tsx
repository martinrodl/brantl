import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";

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
      className={`absolute bottom-0 ${isPrev ? "left-1/3" : "right-1/3"} z-10 rounded-full bg-secondary text-secondary-foreground md:${isPrev ? "left-0" : "right-0"} md:top-1/2 md:${isPrev ? "translate-x-1/2" : "-translate-x-1/2"} md:-translate-y-1/2`}
    >
      <Vector className={`${isPrev ? "rotate-90" : "-rotate-90"} fill-secondary-foreground`} />
    </Button>
  );
}
