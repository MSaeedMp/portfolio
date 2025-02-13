const HeroMainHeading = ({ heading }: { heading: string }) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter md:text-left text-center tracking-tight">
      {heading}
    </h1>
  );
};
export default HeroMainHeading;
