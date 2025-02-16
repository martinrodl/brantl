"use client";

import * as React from "react";

import { NavLink } from "@/components/navbar/utils/types";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";
import { useTranslation } from "react-i18next";

export function NavbarTopButton({ navLink }: { navLink: NavLink }) {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

  return (
    <Button variant="ghostInverse" onClick={() => scrollTo(navLink.href)} className="text-sm font-medium">
      {t(navLink.labelKey)}
    </Button>
  );
}
