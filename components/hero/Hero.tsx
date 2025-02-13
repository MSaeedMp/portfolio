import Container from "../global/Container";
import BgMicroGrid from "../layout/BgMicroGrid";
import BgRadialEffect from "../layout/BgRadialEffect";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container className="relative">
        <BgRadialEffect className="h-[340px] md:h-[400px] left-1/2 -translate-x-1/2 top-4 md:left-20 md:-top-20 md:translate-x-0" />
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-10 gap-x-6">
          {children}
        </div>
      </Container>
      <BgMicroGrid />
    </>
  );
};
export default Hero;
