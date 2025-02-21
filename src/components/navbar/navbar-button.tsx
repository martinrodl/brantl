"use client";

import * as React from "react";

import { useTranslation } from "react-i18next";

import { NavLink } from "./utils/types";
import { useScroll } from "@/hooks/useScroll";
import { Button, ButtonProps } from "@/components/ui/button";

export default function NavbarButton({
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
    <Button onClick={() => scrollTo(navLink.href)} className={className} {...props}>
      {t(navLink.labelKey)}
    </Button>
  );
}
