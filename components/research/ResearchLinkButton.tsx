import GradientWrapper from "../global/GradientWrapper";
import { IoIosArrowForward } from "react-icons/io";

type ResearchLinkButtonProps = {
  link: string;
  label: string;
};

const ResearchLinkButton = ({ link, label }: ResearchLinkButtonProps) => {
  return (
    <GradientWrapper className="rounded-none rounded-b-xl p-[3.5px] animate-pulse hover:animate-none h-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2 bg-background text-foreground hover:bg-background/90 px-4 py-2 font-extrabold h-full rounded-b-xl text-center relative text-lg shadow-lg shadow-primary/40  hyphens-auto"
      >
        <span className="relative z-20">{label}</span>
        <IoIosArrowForward className="!w-48 !h-48 text-primary/30 absolute z-10 animate-pulse" />
      </a>
    </GradientWrapper>
  );
};

export default ResearchLinkButton;
