import { buttonLables } from "@/util/constants";
import CardGradientWrapper from "../global/CardGradientWrapper";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import CardMedia from "./CardMedia";
import { ArrowRight } from "lucide-react";

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
    <CardGradientWrapper>
      <Card className="rounded-t-none h-full">
        <CardContent className="flex flex-col gap-4 p-3 h-full">
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
          <div className="flex justify-between items-center mt-auto">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>{buttonLables.demo}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>{buttonLables.src}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </CardGradientWrapper>
  );
};

export default ProjectCard;
