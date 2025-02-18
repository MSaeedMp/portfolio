import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
// import { ArrowRight } from "lucide-react";

const PrimaryButton = ({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      className={cn(
        "text-lg font-semibold bg-gradient-to-r from-secondary/70 to-primary/70 px-[3px] py-6 hover:from-secondary/100 hover:to-primary/100 rounded-xl group",
        className
      )}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-2 bg-slate-950 hover:bg-slate-900 rounded-lg w-full py-[7px] px-4">
        {label}
        {/* <ArrowRight className="group-hover:rotate-45 transition duration-200" /> */}
      </div>
    </Button>
  );
};
export default PrimaryButton;
