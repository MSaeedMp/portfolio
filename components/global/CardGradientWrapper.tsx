const CardGradientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-secondary/70 to-primary/70 rounded-t-none rounded-b-xl p-[2.5px] hover:from-secondary/100 hover:to-primary/100">
      {children}
    </div>
  );
};
export default CardGradientWrapper;
