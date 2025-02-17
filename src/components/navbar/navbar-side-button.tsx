import * as React from "react";

import { NavLink } from "./utils/types";
import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";
import { useScroll } from "@/hooks/useScroll";
import { useTranslation } from "react-i18next";

export function NavbarSideButton({ navLink, onClick }: { navLink: NavLink; onClick: () => void }) {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

  return (
    <Button
      variant="ghostInverse"
      onClick={() => {
        onClick();
        setTimeout(() => scrollTo(navLink.href), 300);
      }}
      className="justify-between p-2 text-2.5xl font-medium"
    >
      {t(navLink.labelKey)}
      <Vector width={20} height={20} className="-rotate-90 fill-menu-icon" />
    </Button>
  );
}
