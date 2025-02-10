import * as React from "react";

import { NavLink } from "@/components/navbar/utils/types";
import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";
import { useScroll } from "@/hooks/useScroll";
import { useTranslation } from "react-i18next";

export function NavbarSideButton({ navLink, onClick }: { navLink: NavLink; onClick: () => void }) {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        onClick();
        setTimeout(() => scrollTo(navLink.href), 300);
      }}
      className="text-2.5xl justify-between p-2 font-medium"
    >
      {t(navLink.labelKey)}
      <Vector width={20} height={20} className="-rotate-90 fill-menu-icon" />
    </Button>
  );
}
