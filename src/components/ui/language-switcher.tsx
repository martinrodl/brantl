"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import i18nConfig from "~/i18nConfig";
import { LANGUAGES } from "@/constants/locales";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher({
  preserveMenuState = false,
  containerClassName,
  buttonClassName,
}: {
  preserveMenuState?: boolean;
  containerClassName?: string;
  buttonClassName?: string;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (preserveMenuState) {
      queryParams.set("open", "true");
    }

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname + (preserveMenuState ? "?" + queryParams.toString() : ""), {
        scroll: false,
      });
    } else {
      const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
      router.push(newPathname + (preserveMenuState ? "?" + queryParams.toString() : ""), { scroll: false });
    }

    router.refresh();
  };

  return (
    <div className={cn("flex items-center", containerClassName)}>
      {Object.values(LANGUAGES).map(({ locale, label }) => (
        <React.Fragment key={locale}>
          <Button
            type="button"
            role="link"
            variant="ghostInverse"
            onClick={() => changeLanguage(locale)}
            className={cn({ "font-bold": currentLocale === locale }, buttonClassName)}
          >
            {label}
          </Button>

          {locale !== Object.values(LANGUAGES).at(-1)?.locale && <span className="text-inverse-foreground">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
