import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LanguageToggleButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState(pathname.startsWith("/en") ? "en" : "de");

  const handleToggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en";
    setLanguage(newLanguage);
    const newPathname = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.push(newPathname, { scroll: false });
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
            language === "en" ? "!text-primary font-semibold group-hover:!text-muted-foreground group-hover:font-normal" : "group-hover:!text-primary font-semibold"
          )}
        >
          EN
        </span>
        <span>/</span>
        <span
          className={cn(
            "text-sm text-muted-foreground",
            language === "de" ? "!text-primary font-semibold group-hover:!text-muted-foreground group-hover:font-normal" : "group-hover:!text-primary font-semibold"
          )}
        >
          DE
        </span>
      </div>
    </Button>
  );
};

export default LanguageToggleButton;
