import Container from "../global/Container";

const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div
        className="absolute inset-0 bg-gradient-to-b
       from-background via-blue-700/40 to-purple-700/20
        -z-10 opacity-20"
      ></div>
    </>
  );
};
export default Project;
