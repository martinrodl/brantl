import { navLinks } from "./utils/constants";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/ui/language-switcher";
import NavbarHorizontalButton from "@/components/navbar/navbar-horizontal-button";

export default function NavbarMenuHorizontal({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center", className)}>
      {navLinks.map((navLink) => (
        <NavbarHorizontalButton key={`header-${navLink.href}`} navLink={navLink} />
      ))}
      <LanguageSwitcher buttonClassName="h-auto p-1" />
    </nav>
  );
}
