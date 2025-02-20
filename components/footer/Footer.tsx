import { useTranslations } from "next-intl";
import Container from "../global/Container";
import { Separator } from "../ui/separator";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="relative">
      <Container>
        <Separator className="bg-primary/50" />
        <footer className="flex justify-center items-center sm:py-10 py-6 text-muted-foreground text-sm sm:text-base">
          {t("footer")}
        </footer>
      </Container>
      <div
        className="absolute inset-0 bg-gradient-to-b
           from-blue-700/20 to-background
            -z-10 opacity-20"
      ></div>
    </div>
  );
};
export default Footer;
