"use client";

import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

const LanguageToggleButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  console.log(locale);

  const handleToggleLanguage = () => {
    const nextLocale = locale === "en" ? "de" : "en";
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
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
