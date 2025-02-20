import Container from "../global/Container";

const Contact = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <div
        className="absolute inset-0 bg-gradient-to-b
       from-indigo-700/20 via-indigo-700/40 to-blue-700/20
        -z-10 opacity-20"
      ></div>
    </>
  );
};
export default Contact;
