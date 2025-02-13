import TechCard from "@/components/about/TechCard";
import { aboutContent } from "@/util/constants";

const TechList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
      {aboutContent.techs.map((tech, index) => (
        <TechCard key={index} tech={tech} />
      ))}
    </div>
  );
};
export default TechList;
