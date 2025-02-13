const SectionMainHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex justify-center group">
      <h1 className="text-4xl font-extrabold group-hover:text-primary transition-all duration-300">
        {heading}
      </h1>
      <span className="w-3 h-3 bg-primary rounded-full inline-block  ml-2 -mt-2 group-hover:bg-foreground transition-all duration-300"></span>
    </div>
  );
};
export default SectionMainHeading;
