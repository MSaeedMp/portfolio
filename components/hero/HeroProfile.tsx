import { cn } from "@/lib/utils";

const HeroProfile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};
export default HeroProfile;
