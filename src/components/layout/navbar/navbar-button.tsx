"use client";

import { useTranslation } from "react-i18next";
import { useParams, usePathname, useRouter } from "next/navigation";

import { NavLink } from "./utils/types";
import { useScroll } from "@/hooks/useScroll";
import { Button, ButtonProps } from "@/components/ui/button";

export function NavbarButton({
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
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as string) || "";
  const isStaticPage = pathname?.includes("/cookies") || pathname?.includes("/ochrana-oznamovatelu");

  return (
    <Button
      onClick={() => {
        const el = typeof document !== "undefined" ? document.getElementById(navLink.href) : null;
        if (el && !isStaticPage) {
          scrollTo(navLink.href);
        } else {
          router.push(`/${locale}#${navLink.href}`);
        }
      }}
      className={className}
      {...props}
    >
      {t(navLink.labelKey)}
    </Button>
  );
}
