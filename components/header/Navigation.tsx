import { navigationLinks } from "@/util/constants";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-full", className)}>
      {navigationLinks.map((link, index) => (
        <Link
          className="h-full self-stretch flex justify-center items-center px-4 hover:text-primary hover:scale-110 transition-all duration-200 font-medium"
          key={index}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      <ThemeToggleButton />
    </div>
  );
};
export default Navigation;
