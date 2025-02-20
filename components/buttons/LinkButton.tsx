import { ElementType } from "react";
import GradientWrapper from "../global/GradientWrapper";

type LinkButtonProps = {
  link: string;
  icon?: ElementType;
  label: string;
};

const LinkButton = ({ link, icon: IconComponent, label }: LinkButtonProps) => {
  return (
    <GradientWrapper className="rounded-xl p-[3.5px]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2 bg-background text-foreground px-4 py-2 rounded-xl font-bold text-lg"
      >
        {IconComponent && <IconComponent className="w-6 h-6" />}
        <span>{label}</span>
      </a>
    </GradientWrapper>
  );
};

export default LinkButton;
