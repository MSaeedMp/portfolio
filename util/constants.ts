import {
  FaGithub,
  FaGoogleScholar,
  FaLinkedin,
  FaEnvelope,
  FaOrcid
} from "react-icons/fa6";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  BarChart,
} from "lucide-react";
import { MediaFile } from "./types";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const icons: { [key: string]: IconType } = {
  journalPapers: BookOpen,
  conferencePapers: FileText,
  hIndex: BarChart,
  i10Index: GraduationCap,
  citations: Users,
  email: FaEnvelope,
  linkedIn: FaLinkedin,
  github: FaGithub,
  vercel: TbWorld,
  orcid: FaOrcid,
  paper: IoNewspaperOutline,
  googleScholar: FaGoogleScholar,
};

export const links: { [key: string]: string | { [key: string]: string } } = {
  email: "saeed.mafipour@gmail.com",
  googleScholar:
    "https://scholar.google.com/citations?hl=en&user=ZueFqBkAAAAJ&view_op=list_works",
  orcid: "https://orcid.org/0000-0002-2076-8653",
  github: "https://github.com/MSaeedMp",
  linkedIn: "https://www.linkedin.com/in/m-saeed-mafipour/",
  tfCertificate:
    "https://www.credential.net/c6f7c1c8-f2f6-48de-ad17-2f9e9ad7092b#acc.8gVYQGBR",
  nextCabin: {
    github: "https://github.com/MSaeedMp/next-cabin-app",
    vercel: "https://next-cabin-app.vercel.app/",
  },
  nextRobot: {
    github: "",
    vercel: "https://next-robot-app.vercel.app/",
  },
  nextStore: {
    github: "",
    vercel: "https://next-store-app-pi.vercel.app/",
  },
  nextChat: {
    github: "",
    vercel: "https://next-chat-app-umber.vercel.app/",
  },
  msfdNet: {
    paper: "https://www.itcon.org/paper/2024/40",
  },
  revitPlugin: {
    paper:
      "https://www.sciencedirect.com/science/article/abs/pii/S0926580523003618",
  },
  home: "/#home",
  aboutMe: "/#about-me",
  projects: "/#projects",
  certificates: "/#certificates",
  research: "/#research",
  contactMe: "/#contact-me",
};

export const mediaFiles: {
  [key: string]: string | MediaFile;
} = {
  nextChat: "/next-chat.mp4",
  nextCabin: "/next-cabin.png",
  nextStore: "/next-store.png",
  nextRobot: "/next-robot.mp4",
  msfdNet: "/msfd-net.png",
  revitPlugin: "/revit-plugin.mp4",
  profile: "/Mafipour.png",
  tfCertificate: {
    badge: "/tensorflow-badge.png",
    image: "/tensorflow-certificate.png",
  },
  phdCertificate: {
    badge: "/tum-badge.png",
    image: "/tum-certificate.png",
  },
};
