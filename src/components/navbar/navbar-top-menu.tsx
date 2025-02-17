import { cn } from "@/lib/utils";

import { navLinks } from "./utils/constants";
import { NavbarTopButton } from "@/components/navbar/navbar-top-button";
import LanguageSwitcher from "@/components/ui/language-switcher";

export default function NavbarTopMenu({
  positioning = "absolute left-1/2 hidden w-full -translate-x-1/2 justify-between",
}: {
  positioning?: string;
}) {
  return (
    <section
      className={cn(
        positioning,
        "md:bottom-0 md:flex md:max-w-[55%] md:pb-2 lg:bottom-auto lg:max-w-[800px] lg:gap-8 lg:border-b lg:border-inverse lg:pb-0",
      )}
    >
      <p className="text-"></p>
      {navLinks.map((navLink) => (
        <NavbarTopButton key={navLink.href} navLink={navLink} />
      ))}

      <LanguageSwitcher />
    </section>
  );
}
