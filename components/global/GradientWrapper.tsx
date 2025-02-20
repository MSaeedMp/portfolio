import { cn } from "@/lib/utils";

const GradientWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-secondary/70 to-primary/70 hover:from-secondary/100 hover:to-primary/100",
        className
      )}
    >
      {children}
    </div>
  );
};
export default GradientWrapper;
