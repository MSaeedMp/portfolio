import { cn } from "@/lib/utils";
import GradientWrapper from "../global/GradientWrapper";
import { FaDownload } from "react-icons/fa6";

const DownloadButton = ({
  link,
  label,
  download,
  className,
}: {
  link: string;
  label: string;
  download: string;
  className?: string;
}) => {
  return (
    <GradientWrapper className="rounded-xl p-[3.5px] lg:self-start">
      <a
        href={link}
        download={download}
        className={cn(
          "flex justify-center items-center gap-2 bg-background text-foreground px-4 py-2 rounded-xl font-bold text-lg cursor-pointer",
          className
        )}
      >
        <FaDownload className="w-5 h-5 text-foreground"/>
        <span>{label}</span>

      </a>
    </GradientWrapper>
  );
};
export default DownloadButton;
