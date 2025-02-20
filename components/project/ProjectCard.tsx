import LinkButton from "../buttons/LinkButton";
import CardMedia from "./CardMedia";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
import { ProjectType } from "@/util/types";
import { useTranslations } from "next-intl";
import { icons, links, mediaFiles } from "@/util/constants";

type ProjectLinkType = {
  vercel?: string;
  github?: string;
  paper?: string;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const t = useTranslations();

  const { id, title, subtitle, description, technologies } = project;
  const projectLink = links[id];
  const vercelLink = (projectLink as ProjectLinkType)?.vercel ?? "";
  const githubLink = (projectLink as ProjectLinkType)?.github ?? "";
  const paperLink = (projectLink as ProjectLinkType)?.paper ?? "";
  const media = mediaFiles[id] as string;

  return (
    <Card className="group rounded-t-none rounded-b-md h-full">
      <CardContent className="flex flex-col gap-4 p-4 h-full">
        <CardMedia media={media} alt={title} />
        <h2 className="font-extrabold text-2xl font-inter tracking-tight">
          {title}
        </h2>
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
          {vercelLink && (
            <LinkButton
              link={vercelLink}
              icon={icons["vercel"]}
              label={t("buttons.vercel")}
            />
          )}
          {githubLink && (
            <LinkButton
              link={githubLink}
              icon={icons["github"]}
              label={t("buttons.github")}
            />
          )}
          {paperLink && (
            <LinkButton
              link={paperLink}
              icon={icons["paper"]}
              label={t("buttons.paper")}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
