"use client";
import CloseMenuButton from "./CloseMenuButton";
import Link from "next/link";
import BgRadialEffect from "../layout/BgRadialEffect";
import BgMicroGrid from "../layout/BgMicroGrid";
import { useTranslations } from "next-intl";
import { NavType } from "@/util/types";
import { HiOutlineMenu } from "react-icons/hi";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { links } from "@/util/constants";

const HamburgerMenu = ({ className }: { className?: string }) => {
  const t = useTranslations();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuVisible]);

  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon"
        className="p-2"
        onClick={() => setIsMenuVisible(true)}
      >
        <HiOutlineMenu className="!w-8 !h-8" />
      </Button>
      <div
        className={cn(
          "fixed bg-background transition-all duration-300 z-[500] flex justify-center items-center",
          isMenuVisible
            ? "opacity-100 w-full h-full visible top-0 right-0 "
            : "opacity-0 invisible w-10 h-10 top-4 right-5"
        )}
      >
        <div className="w-full h-full bg-gradient-to-br from-sky-700/10 to-purple-700/10 flex justify-center">
          <BgMicroGrid />
          <CloseMenuButton onClick={() => setIsMenuVisible(false)} />
          <div className="flex flex-col gap-8 font-semibold tracking-tight text-xl justify-center -translate-y-3 text-foreground">
            {t.raw("navigation").map((nav: NavType) => (
              <Link
                onClick={() => setIsMenuVisible(false)}
                key={nav.id}
                href={links[nav.id]}
                className="hover:scale-110 hover:translate-x-5 transition-transform duration-200"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
