import { socialMediaLinks } from "@/util/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialMediaLinks = () => {
  const linkStyle =
    "hover:scale-110 inline-block transition-transform duration-200 p-3";
  const iconStyle = "w-8 h-8";

  return (
    <TooltipProvider>
      <div className="flex items-center justify-center md:justify-start">
        {socialMediaLinks.map((link, index) => {
          const { name, href, icon: Icon } = link;

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  <Icon className={iconStyle} />
                </a>
              </TooltipTrigger>
              <TooltipContent className="bg-foreground">
                <p className="text-sm text-background">{name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
export default SocialMediaLinks;
