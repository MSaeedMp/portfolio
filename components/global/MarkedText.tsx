import ReactMarkdown from "react-markdown";

const MarkedText = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      className="text-lg text-foreground"
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
