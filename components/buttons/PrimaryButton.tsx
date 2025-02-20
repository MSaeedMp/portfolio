import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import GradientWrapper from "../global/GradientWrapper";

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
      variant="ghost"
      className={cn(
        "text-lg font-semibold group h-12 rounded-xl p-0",
        className
      )}
      onClick={onClick}
    >
      <GradientWrapper className="w-full h-full rounded-xl p-[3.5px]">
        <div className="bg-background text-foreground flex justify-center items-center gap-2  font-bold w-full h-full rounded-xl p-4">
          {label}
          <ArrowRight className="group-hover:-rotate-45 transition duration-200" />
        </div>
      </GradientWrapper>
    </Button>
  );
};
export default PrimaryButton;
