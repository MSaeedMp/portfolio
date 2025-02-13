import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CtaButton = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "text-lg font-semibold bg-gradient-to-r from-secondary/70 to-primary/70 px-[3px] py-7 hover:from-secondary/100 hover:to-primary/100 rounded-xl group",
        className
      )}
    >
      <div className="flex justify-center items-center gap-2 bg-slate-900 rounded-lg w-full py-[11px] px-4">
        {label}
        <ArrowRight className="group-hover:rotate-45 transition duration-200" />
      </div>
    </Button>
  );
};
export default CtaButton;
