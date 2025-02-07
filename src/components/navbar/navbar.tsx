import Logo from "~/public/logo.svg";
import NavbarTopMenu from "@/components/navbar/navbar-top-menu";
import NavbarSideMenu from "@/components/navbar/navbar-side-menu";

const links = [
  { href: "#", label: "KDO JSME" },
  { href: "#", label: "SLUŽBY" },
  { href: "#", label: "REFERENCE" },
  { href: "#", label: "KONTAKTY" },
];

export default function Navbar() {
  return (
    <nav className="relative z-50 flex justify-between border-b border-b-secondary-foreground p-4 md:mx-8 md:px-4 md:py-0 md:pt-9 lg:mx-16 lg:border-none">
      <Logo className="h-[40px] w-[95px] shrink-0 justify-self-start fill-secondary-foreground md:mb-6 lg:mb-0 lg:mt-4 lg:h-[72px] lg:w-[172px]" />
      <NavbarTopMenu links={links} />
      <NavbarSideMenu links={links} />
    </nav>
  );
}
