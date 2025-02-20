import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="self-stretch h-full flex items-center relative w-16 group "
    >
      <p className="text-[27px] font-extrabold w-full">
        <span className="group-hover:text-primary transition-all duration-200 tracking-wider">SM</span>
        <span className="inline-block w-2.5 h-2.5 rounded-full absolute -top-1 right-0 bg-primary group-hover:bg-foreground transition-all duration-200"></span>
      </p>
    </Link>
  );
};
export default Logo;
