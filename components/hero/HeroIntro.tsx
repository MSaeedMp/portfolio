import { cn } from "@/lib/utils";

const HeroIntro = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col gap-8", className)}>{children}</div>;
};
export default HeroIntro;
