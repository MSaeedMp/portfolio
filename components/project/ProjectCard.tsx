import LinkButton from "../buttons/LinkButton";
import CardMedia from "./CardMedia";
import { buttonLables } from "@/util/constants";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

type ProjectType = {
  title: string;
  subtitle: string;
  githubLink: string;
  demoLink: string;
  description: string;
  media: string;
  technologies: string[];
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const {
    title,
    subtitle,
    media,
    description,
    technologies,
    demoLink,
    githubLink,
  } = project;

  return (
    <Card className="group rounded-t-none rounded-b-md h-full">
      <CardContent className="flex flex-col gap-4 p-4 h-full">
        <CardMedia media={media} alt={title} />
        <h2 className="font-extrabold text-2xl font-inter">{title}</h2>
        <Separator />
        <p className="font-medium">{description}</p>
        <h3 className="font-extrabold text-lg font-inter mt-2">{subtitle}</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block font-semibold text-foreground/70 border px-2 py-1 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <LinkButton
            link={demoLink}
            icon={TbWorld}
            label={buttonLables.demo}
          />
          <LinkButton
            link={githubLink}
            icon={FaGithub}
            label={buttonLables.src}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
