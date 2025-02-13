"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggleButton = () => {
  const { setTheme, theme } = useTheme();
  const iconStyle = "!w-6 !h-6";
  const buttonStyle =
    "hover:bg-transparent hover:scale-110 hover:text-primary transition-all duration-200";

  if (theme === "light")
    return (
      <Button
        variant="ghost"
        size="icon"
        className={buttonStyle}
        onClick={() => setTheme("dark")}
      >
        <IoMoonOutline className={iconStyle} />
      </Button>
    );

  if (theme === "dark")
    return (
      <Button
        variant="ghost"
        size="icon"
        className={buttonStyle}
        onClick={() => setTheme("light")}
      >
        <IoSunnyOutline className={iconStyle} />
      </Button>
    );
};
export default ThemeToggleButton;
