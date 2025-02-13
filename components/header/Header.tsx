"use client";
import Container from "@/components/global/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        "w-full fixed h-16 md:h-20 flex itmes-center z-50 transition-colors duration-300 border border-transparent",
        headerMode === "solid" && "bg-background border border-b-primary/10 shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo />
        <Navigation className="hidden lg:flex lg:items-center" />
      </Container>
    </header>
  );
};
export default Header;
