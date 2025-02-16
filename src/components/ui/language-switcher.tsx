"use client";

import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import { LANGUAGES } from "@/constants/locales";
import i18nConfig from "~/i18nConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher({ preserveMenuState = false }: { preserveMenuState?: boolean }) {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (preserveMenuState) {
      queryParams.set("open", "true");
    }

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname + (preserveMenuState ? "?" + queryParams.toString() : ""));
    } else {
      const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
      router.push(newPathname + (preserveMenuState ? "?" + queryParams.toString() : ""));
    }

    router.refresh();
  };

  /* todo: no refactor colors, replace with ghost buttons */
  return (
    <Select onValueChange={changeLanguage} value={currentLocale}>
      <SelectTrigger className="h-auto w-fit border-none bg-transparent p-4 font-medium text-primary-inverseForeground transition-all duration-300 ease-in-out">
        <SelectValue />
        &nbsp;
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>{t("header.switcher.dropdownHeader")}</SelectLabel>
          <SelectItem value={LANGUAGES.en.locale}>{LANGUAGES.en.label}</SelectItem>
          <SelectItem value={LANGUAGES.cs.locale}>{LANGUAGES.cs.label}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
