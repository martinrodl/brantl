"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/public/logo-brantl.svg";

const links = [
  { href: "#", label: "KDO JSME" },
  { href: "#", label: "SLUŽBY" },
  { href: "#", label: "REFERENCE" },
  { href: "#", label: "KONTAKTY" },
  { href: "#", label: "CZ/ENG" },
];

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="relative mx-5 flex min-h-20 items-center justify-between border-b border-white lg:mx-0 lg:min-h-16 lg:border-none">
      <Logo className="ml-5 h-[40px] w-[95px] lg:ml-16 lg:mt-14 lg:h-[72px] lg:w-[172px]" />

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="border-b-none flex items-center text-white lg:border-b">
          {links.map((link, idx) => (
            <a
              key={`${link.href}-${idx}`}
              href={link.href}
              className="whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors hover:text-primary lg:px-11 lg:first:pl-4 lg:last:pr-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full border border-white text-white md:hidden">
            <Menu className="h-8 w-8 text-white" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="sm:w-[400px] w-[300px]">
          <nav className="flex flex-col gap-4">
            {links.map((link, idx) => (
              <a
                key={`${link.href}-${idx}`}
                href={link.href}
                className="block text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
