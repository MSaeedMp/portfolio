"use client";

import Container from "@/components/global/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MotionTopToBottom } from "../motion/MotionTopToBottom";
import { usePathname } from "next/navigation";

const Header = () => {
  const [headerMode, setHeaderMode] = useState<"solid" | "transparent">(
    "transparent"
  );

  useEffect(() => {
    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setHeaderMode("solid");
      } else {
        setHeaderMode("transparent");
      }
    };

    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  });

  return (
    <header
      className={cn(
        "w-full fixed h-16 md:h-20 flex justify-center itmes-center z-50 transition-colors duration-300 border border-transparent",
        headerMode === "solid" &&
          "bg-background border border-b-primary/10 shadow-sm"
      )}
    >
      <Container>
        <MotionTopToBottom className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Logo />
            <Navigation className="hidden lg:flex lg:items-center" />
          </div>
          <div className="flex items-center sm:gap-6 gap-3">
            <LanguageToggleButton />
            <ThemeToggleButton />
            <HamburgerMenu className="lg:hidden" />
          </div>
        </MotionTopToBottom>
      </Container>
    </header>
  );
};
export default Header;
