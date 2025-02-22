"use client";

import Link from "next/link";
import GradientWrapper from "../global/GradientWrapper";
import { useTranslations } from "next-intl";
import { RiContactsFill } from "react-icons/ri";

const ContactMeButton = () => {
  const t = useTranslations();
  return (
    <GradientWrapper className="p-[3.5px] rounded-xl">
      <Link
        href="/#contact-me"
        className="flex justify-center items-center gap-2 bg-background px-4 py-2 font-bold cursor-pointer rounded-xl text-lg"
      >
        <RiContactsFill className="w-5 h-5 text-foreground" />
        {t("buttons.contactMe")}
      </Link>
    </GradientWrapper>
  );
};
export default ContactMeButton;
