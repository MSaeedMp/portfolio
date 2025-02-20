import { TechType } from "@/util/types";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const TechCard = ({ tech }: { tech: TechType }) => {
  const { title, subtitle, tools } = tech;
  return (
    <Card className="group hover:shadow-md rounded-b-md rounded-t-none pb-10 h-full">
      <CardTitle className="flex flex-col items-center justify-center gap-2 bg-foreground/90 w-[80%] mx-auto rounded-b-xl -translate-y-5 p-4 group-hover:translate-y-0 transition-transform duraiton-600 text-center text-background">
        <h3 className="text-xl font-extrabold font-inter tracking-tight">
          {title}
        </h3>
        <Separator />
        <h4 className="text-base font-inter tracking-tighter font-light text-background/90">
          {subtitle}
        </h4>
      </CardTitle>
      <CardContent className="flex flex-wrap items-center justify-center gap-4 font-semibold group-hover:translate-y-5 transition-transform duration-600">
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </CardContent>
    </Card>
  );
};
export default TechCard;
