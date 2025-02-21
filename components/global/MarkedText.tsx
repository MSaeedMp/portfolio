import ReactMarkdown from "react-markdown";

const MarkedText = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      className="text-lg text-foreground bg-background/70 py-4 rounded-b-xl rounded-none leading-8 text-left"
      components={{
        strong: ({ children }) => (
          <span className="text-primary text-lg font-semibold">
            {children}
          </span>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
};
export default MarkedText;
