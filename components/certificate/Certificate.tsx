import Container from "../global/Container";

const Certificate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div
        className="absolute inset-0 bg-gradient-to-b
       from-blue-800/20 via-blue-700/40 to-indigo-700/20
        -z-10 opacity-20"
      ></div>
    </>
  );
};
export default Certificate;
