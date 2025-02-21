"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";

const LanguageToggleButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const handleToggleLanguage = () => {
    const nextLocale = (locale === "en" ? "de" : "en") as Locale;
    const currentParams = new URLSearchParams(searchParams.toString());
    const currentHash = window.location.hash;

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = nextLocale;

    const newPathname = `/${segments.join("/")}`;

    startTransition(() => {
      router.replace(
        `${newPathname}?${currentParams.toString()}${currentHash}`,
        { scroll: false }
      );
      router.refresh();
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={isPending}
      className="hover:bg-transparent hover:scale-110 w-full transition-all duration-200 group"
      onClick={handleToggleLanguage}
    >
      <div className="flex items-center gap-1 font-inter">
        <span
          className={cn(
            "text-sm text-muted-foreground",
            locale === "en"
              ? "!text-primary font-semibold group-hover:!text-muted-foreground group-hover:font-normal"
              : "group-hover:!text-primary font-semibold"
          )}
        >
          EN
        </span>
        <span>/</span>
        <span
          className={cn(
            "text-sm text-muted-foreground",
            locale === "de"
              ? "!text-primary font-semibold group-hover:!text-muted-foreground group-hover:font-normal"
              : "group-hover:!text-primary font-semibold"
          )}
        >
          DE
        </span>
      </div>
    </Button>
  );
};

export default LanguageToggleButton;
