import { projectsContent } from "@/util/constants";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      {projectsContent.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
export default ProjectList;
