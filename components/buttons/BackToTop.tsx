"use client";

import Link from "next/link";
import GradientWrapper from "../global/GradientWrapper";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import { links } from "@/util/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.125;
      setIsButtonVisible(window.scrollY > scrollThreshold);
    };
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  });

  return (
    <Link href={links["home"]}>
      <GradientWrapper
        className={cn(
          "opacity-0 invisible p-1 rounded-full fixed bottom-5 right-5 hover:cursor-pointer z-50 flex items-center transition-opacity animate-pulse hover:animate-none",
          isButtonVisible && "opacity-100 visible"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background sm:w-14 sm:h-14 w-12 h-12"
        >
          <FaArrowUp className="!w-5 !h-5 text-primary" />
        </Button>
      </GradientWrapper>
    </Link>
  );
};
export default BackToTop;
