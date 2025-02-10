import { LinkLabelEnum, NavLinkHref } from "@/components/navbar/utils/enums";

export interface NavLink {
  href: NavLinkHref;
  labelKey: LinkLabelEnum;
}
