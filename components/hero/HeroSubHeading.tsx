const HeroSubHeading = ({ heading }: { heading: string }) => {
  return (
    <h2 className="text-lg sm:text-xl font-semibold md:text-left text-center tracking-tight text-foreground/90">
      {heading}
    </h2>
  );
};
export default HeroSubHeading;
