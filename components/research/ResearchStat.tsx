import CardGradientWrapper from "../global/CardGradientWrapper";

type StatType = {
  label: string;
  value: string;
  icon: React.ElementType;
};

const ResearchStat = ({ stat }: { stat: StatType }) => {
  const { label, value, icon: Icon } = stat;
  return (
    <CardGradientWrapper>
      <div className="flex flex-col gap-3 items-center p-4 border rounded-b-xl shadow-lg shadow-primary/70 group font-inter bg-background h-full">
        <Icon className="w-10 h-10 text-primary group-hover:text-foreground" />
        <p className="font-medium text-muted-foreground text-base text-center">
          {label}
        </p>
        <p className="text-2xl font-bold group-hover:text-primary">
          {value}
        </p>
      </div>
    </CardGradientWrapper>
  );
};

export default ResearchStat;
