import Container from "../global/Container";

const About = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-10 -z-10" />
    </>
  );
};
export default About;
