import { icons } from "@/util/constants";
import { StatType } from "@/util/types";

const ResearchStat = ({ stat }: { stat: StatType }) => {
  const { id, value, title } = stat;
  const Icon = icons[id];

  return (
    <div className="flex flex-col sm:gap-3 gap-2 items-center p-4 border rounded-b-xl shadow-lg shadow-primary/30 group font-inter bg-background/40 h-full">
      <Icon className="w-9 h-9 text-primary group-hover:text-foreground" />
      <p className="font-medium text-foreground/80 text-base text-center">
        {title}
      </p>
      <p className="sm:text-2xl text-xl font-bold group-hover:text-primary">{value}</p>
    </div>
  );
};

export default ResearchStat;
