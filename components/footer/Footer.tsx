import { useTranslations } from "next-intl";
import Container from "../global/Container";
import { Separator } from "../ui/separator";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="relative h-14 md:h-20">
      <Container className="h-full">
        <Separator className="bg-primary/50" />
        <p className="flex justify-center items-center text-muted-foreground text-sm sm:text-base h-full">
          {t("footer")}
        </p>
      </Container>
      <div
        className="absolute inset-0 bg-gradient-to-b
           from-blue-700/20 to-background
            -z-10 opacity-20"
      ></div>
    </footer>
  );
};
export default Footer;
