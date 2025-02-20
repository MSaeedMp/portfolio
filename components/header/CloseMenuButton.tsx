const CloseMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-3.5 w-10 h-10 flex items-center justify-center z-[1000] group"
    >
      <div className="relative w-6 h-6">
        <div
          className="rounded-sm absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 
      rotate-45 top-1/2 -translate-y-1/2 group-hover:rotate-0 group-hover:top-2"
        ></div>

        <div
          className="rounded-sm absolute left-0 w-6 h-0.5 bg-foreground opacity-0 transition-all duration-300 
      group-hover:opacity-100 group-hover:top-[15px]"
        ></div>

        <div
          className="rounded-sm absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 
      -rotate-45 top-1/2 -translate-y-1/2 group-hover:rotate-0 group-hover:top-6"
        ></div>
      </div>
    </button>
  );
};
export default CloseMenuButton;
