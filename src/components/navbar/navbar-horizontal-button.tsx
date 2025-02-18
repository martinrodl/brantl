"use client";

import * as React from "react";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { NavLink } from "./utils/types";
import { Button, ButtonProps } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";

export default function NavbarHorizontalButton({
  navLink,
  className,
  ...props
}: {
  navLink: NavLink;
  className?: string;
  onClick?: () => void;
} & ButtonProps) {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      role="link"
      variant="ghostInverse"
      onClick={() => scrollTo(navLink.href)}
      className={cn("text-sm font-medium", className)}
      {...props}
    >
      {t(navLink.labelKey)}
    </Button>
  );
}
