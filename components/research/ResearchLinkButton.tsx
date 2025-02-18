import { IoIosArrowForward } from "react-icons/io";
import CardGradientWrapper from "../global/CardGradientWrapper";

type ResearchLinkButtonProps = {
  link: string;
  label: string;
};

const ResearchLinkButton = ({ link, label }: ResearchLinkButtonProps) => {
  return (
    <CardGradientWrapper>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2 bg-background text-foreground hover:bg-background/90 px-4 py-2 font-extrabold h-full rounded-b-xl text-center relative text-lg shadow-lg shadow-primary/70"
      >
        <span className="relative z-20">{label}</span>
        <IoIosArrowForward className="!w-48 !h-48 text-primary/30 absolute z-10 animate-pulse" />
      </a>
    </CardGradientWrapper>
  );
};

export default ResearchLinkButton;
