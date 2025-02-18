"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useSearchParams, useRouter } from "next/navigation";

import { navLinks } from "./utils/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarVerticalButton } from "@/components/navbar/navbar-vertical-button";
import LanguageSwitcher from "@/components/ui/language-switcher";
import Logo from "~/public/logos/brantl-partners-logo.svg";
import Vector from "~/public/icons/vector.svg";

export default function NavbarMenuVertical({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(searchParams.get("open") === "true");

  const toggleMenu = (menuState: boolean) => {
    setOpen(menuState);

    const queryParams = new URLSearchParams(window.location.search);
    if (menuState) {
      queryParams.set("open", "true");
    } else {
      queryParams.delete("open");
    }

    router.replace(window.location.pathname + "?" + queryParams.toString());
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => toggleMenu(!open)}
          variant="ghostInverse"
          size="icon"
          className={cn("group h-10 w-10 rounded-full border-2 border-inverse md:hidden [&_svg]:size-7", className)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Menu className="stroke-icon-inverse" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col justify-between gap-0 overflow-scroll bg-[url('/images/mobile/menu-bg-mobile.webp')] bg-cover bg-center p-0 text-inverse-foreground">
        <VisuallyHidden>
          <SheetTitle>Main Navigation</SheetTitle>
          <SheetDescription>Choose an option from the menu below.</SheetDescription>
        </VisuallyHidden>

        <SheetHeader>
          <div className="flex w-full justify-between border-b-2 border-inverse p-4">
            <Logo className="h-[40px] w-[95px] shrink-0 fill-secondary-foreground" />

            <Button
              onClick={() => toggleMenu(false)}
              variant="ghostInverse"
              size="icon"
              className="group h-10 w-10 rounded-full border-2 border-inverse [&_svg]:size-7"
              aria-label="Close"
            >
              <X className="stroke-icon-inverse" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>

        <nav className="flex flex-1 flex-grow flex-col justify-center gap-4 p-8">
          {navLinks.map((navLink) => (
            <NavbarVerticalButton
              key={navLink.href}
              variant="ghostInverse"
              navLink={navLink}
              onClick={() => toggleMenu(false)}
              className="justify-between"
            >
              <Vector width={20} height={20} className="-rotate-90 fill-menu-icon" />
            </NavbarVerticalButton>
          ))}
          <LanguageSwitcher preserveMenuState buttonClassName="text-2.5xl" />
        </nav>

        <SheetFooter className="flex flex-col items-center gap-4 px-12 pb-12 text-center">
          <p>{t("navbar.sideMenu.footer")}</p>
          <Vector width={24} height={10} className="fill-icon-inverse" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
