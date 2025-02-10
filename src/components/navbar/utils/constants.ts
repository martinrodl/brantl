import { NavLink } from "@/components/navbar/utils/types";
import { LinkLabelEnum, NavLinkHref } from "@/components/navbar/utils/enums";

export const navLinks: NavLink[] = [
  { href: NavLinkHref.ABOUT, labelKey: LinkLabelEnum.ABOUT },
  { href: NavLinkHref.SERVICES, labelKey: LinkLabelEnum.SERVICES },
  { href: NavLinkHref.REFERENCES, labelKey: LinkLabelEnum.REFERENCES },
  { href: NavLinkHref.CONTACTS, labelKey: LinkLabelEnum.CONTACTS },
];
