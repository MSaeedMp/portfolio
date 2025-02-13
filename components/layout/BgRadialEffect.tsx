import { cn } from "@/lib/utils";

const BgRadialEffect = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("blur-[118px] aspect-square absolute -z-10", className)}
      style={{
        background:
          "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 10.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 46.49%, rgba(79, 70, 229, 0.4) 145.91%)",
      }}
    ></div>
  );
};
export default BgRadialEffect;
