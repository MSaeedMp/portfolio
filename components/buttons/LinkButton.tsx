import { ElementType } from "react";

type LinkButtonProps = {
  link: string;
  icon?: ElementType;
  label: string;
};

const LinkButton = ({ link, icon: IconComponent, label }: LinkButtonProps) => {
  return (
    <div className="bg-gradient-to-br from-secondary/70 hover:from-secondary/100 to-primary/70 hover:to-primary/100 p-[2.5px] rounded-xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-bold"
      >
        {IconComponent && <IconComponent className="w-5 h-5" />}
        <span>{label}</span>
      </a>
    </div>
  );
};

export default LinkButton;
