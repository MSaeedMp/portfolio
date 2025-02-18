import Container from "../global/Container";

const Research = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-50% via-sky-700/80 to-purple-800/90 -z-10 opacity-20"></div>
    </>
  );
};
export default Research;
