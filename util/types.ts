export type TechType = {
  id: string;
  title: string;
  subtitle: string;
  tools: string[];
};

export type ProjectType = {
  id: string;
  title: string;
  subtitle: string;
  githubLink: string;
  demoLink: string;
  description: string;
  media: string;
  technologies: string[];
};

export type StatType = {
  id: string;
  title: string;
  value: string;
};

export type CertificateType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  awardedBy: string;
  issueDate: string;
  certificateId?: string;
};

export type ContactType = {
  id: string;
  name: string;
};

export type NavType = {
  id: string;
  name: string;
};

export type SocialMediaType = {
  id: string;
  name: string;
};

export type MediaFile = {
  badge: string;
  image: string;
};
