import { NavLinks } from "@/components/navbar/types";
import { NavbarTopLink } from "@/components/navbar/navbar-top-link";
import LanguageSwitcher from "@/components/ui/language-switcher";

interface NavbarTopMenuProps {
  links: NavLinks;
  positioning?: string;
}

export default function NavbarTopMenu({
  links,
  positioning = "absolute left-1/2 hidden w-full -translate-x-1/2 justify-between",
}: NavbarTopMenuProps) {
  return (
    <section
      className={`${positioning} md:bottom-0 md:flex md:max-w-[55%] md:pb-2 lg:bottom-auto lg:max-w-[800px] lg:gap-8 lg:border-b lg:pb-0`}
    >
      {links.map((link) => (
        <NavbarTopLink key={link.href} link={link} />
      ))}

      <LanguageSwitcher />
    </section>
  );
}
