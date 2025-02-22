import { icons, links } from "@/util/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import { SocialMediaType } from "@/util/types";

const SocialMediaLinks = () => {
  const t = useTranslations();
  const linkStyle =
    "hover:scale-110 inline-block transition-transform duration-200 p-3 hover:text-primary";
  const iconStyle = "w-8 h-8";

  return (
    <div className="flex items-center justify-center md:justify-start">
      {t.raw("socialMedia").map((sm: SocialMediaType) => {
        const { name, id } = sm;
        const smLink = links[sm.id];
        const SmIcon = icons[id];

        return (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <a
                key={id}
                href={smLink as string}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                <SmIcon className={iconStyle} />
              </a>
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p className="text-sm text-background">{name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};
export default SocialMediaLinks;
