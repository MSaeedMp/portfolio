const ResearchStatList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {children}
    </div>
  );
};
export default ResearchStatList;
