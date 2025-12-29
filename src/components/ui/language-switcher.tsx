"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import i18nConfig from "~/i18nConfig";
import { LANGUAGES } from "@/constants/locales";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher({
  preserveMenuState = false,
  containerClassName,
  buttonClassName,
  isInverse = true,
}: {
  preserveMenuState?: boolean;
  containerClassName?: string;
  buttonClassName?: string;
  isInverse?: boolean;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    // Pro statický export - jednoduše nahraď první segment (locale) za nový
    const segments = currentPathname.split('/').filter(Boolean);
    
    // Pokud první segment je locale, nahraď ho
    if (segments.length > 0 && Object.keys(LANGUAGES).includes(segments[0])) {
      segments[0] = newLocale;
      const newPathname = '/' + segments.join('/');
      router.push(newPathname, { scroll: false });
    } else {
      // Pokud není locale v cestě, přidej ho
      router.push(`/${newLocale}`, { scroll: false });
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
            variant={isInverse ? "ghostInverse" : "ghost"}
            onClick={() => changeLanguage(locale)}
            className={cn({ "font-bold": currentLocale === locale }, buttonClassName)}
          >
            {label}
          </Button>

          {locale !== Object.values(LANGUAGES).at(-1)?.locale && (
            <span className={isInverse ? "text-inverse-foreground" : "text-foreground"}>/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
