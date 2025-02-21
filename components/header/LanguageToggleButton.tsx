import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LanguageToggleButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleToggleLanguage = () => {
    const currentLanguage = pathname.startsWith("/en") ? "en" : "de";
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    router.push(pathname.replace(`/${currentLanguage}`, `/${newLanguage}`), {
      scroll: false,
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
            pathname.startsWith("/en")
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
            pathname.startsWith("/de")
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
