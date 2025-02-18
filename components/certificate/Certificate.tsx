import Container from "../global/Container";

const Certificate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/90 via-50% via-indigo-700/80 to-background -z-10 opacity-20"></div>
    </>
  );
};
export default Certificate;
