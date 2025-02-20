"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { NavType } from "@/util/types";
import { links } from "@/util/constants";

const Navigation = ({ className }: { className?: string }) => {
  const t = useTranslations();

  return (
    <nav className={cn("h-full", className)}>
      {t.raw("navigation").map((nav: NavType) => (
        <Link
          className="h-full self-stretch flex justify-center items-center px-4 hover:text-primary hover:scale-110 transition-all duration-200 font-medium"
          key={nav.id}
          href={links[nav.id]}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};
export default Navigation;
