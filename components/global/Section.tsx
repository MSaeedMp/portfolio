import { cn } from "@/lib/utils";

const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section
      className={cn("pt-24 lg:pb-20 sm:pb-6 md:pb-12 pb-0 relative", className)}
      {...(id ? { id } : {})}
    >
      {children}
    </section>
  );
};
export default Section;
