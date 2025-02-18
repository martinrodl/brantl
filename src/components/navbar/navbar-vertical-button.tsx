"use client";

import * as React from "react";

import { NavLink } from "./utils/types";
import { Button, ButtonProps } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function NavbarVerticalButton({
  navLink,
  children,
  onClick,
  className,
  ...props
}: {
  navLink: NavLink;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
} & ButtonProps) {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => {
        onClick?.();
        setTimeout(() => scrollTo(navLink.href), 300);
      }}
      className={cn("text-2.5xl font-medium", className)}
      {...props}
    >
      {t(navLink.labelKey)}
      {children}
    </Button>
  );
}
