const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter flex flex-col gap-2 w-full text-center mb-10">
      {children}
    </div>
  );
};
export default SectionHeading;
