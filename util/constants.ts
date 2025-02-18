import { FaGithub, FaGoogleScholar, FaLinkedin } from "react-icons/fa6";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  BarChart,
} from "lucide-react";

export const navigationLinks = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Certificates",
    href: "/#certificates",
  },
  {
    name: "Research",
    href: "/#research",
  },
  {
    name: "Awards",
    href: "/#awards",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export const aboutContent = {
  heading: "About Me",
  subHeading: "Skills, Technologies, and Experience",
  description:
    "I am a **software/full-stack developer** with a background in **AI**, **digitalization**, and **web development**, specializing in building intelligent and scalable applications. I earned my **Dr.-Ing./Ph.D. in Engineering** from the **Technical University of Munich (TUM)** and spent four years as a research assistant and postdoctoral researcher. During this time, I worked on cutting-edge projects focused on bringing automation and AI-based solutions to the construction environment. \n\n My expertise extends from frontend to backend development. On the frontend, I specialize in **React**, **Next.js**, **Tailwind CSS**, and **TypeScript** to create seamless and scalable user interfaces. For backend development, I utilize **MongoDB**, **PostgreSQL**, and **Prisma** to design efficient and well-structured databases. My workflow is enhanced with **Docker**, **Git**, and **CI/CD pipelines**, ensuring smooth deployment and maintainability of applications. \n\n  I am currently focused on developing **digital solutions** that streamline workflows, optimize processes, and enhance decision-making in complex industries. I am highly interested in creating **web applications** that are partially or heavyliy supported by **AI**. I am skilled in utilizing the following technologies:",

  techs: [
    {
      title: "Programing",
      subtitle: "Languages, data formats, and Scripting Technologies",
      tools: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C#",
        "C++",
        "SQL",
        "Java",
        "LaTeX",
        "MATLAB",
        "XML",
        "Json",
        "Bash",
      ],
    },
    {
      title: "Frontend",
      subtitle: "Building interactive and responsive user interfaces",
      tools: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "Shadcn",
        "Sass",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
        "Styled-components",
        "Framer Motion",
        "React Query",
      ],
    },
    {
      title: "Backend",
      subtitle:
        "Building scalable, efficient, and secure server-side applications",
      tools: [
        "Node.js",
        "Express",
        "Prisma",
        "Supabase",
        "MongoDB",
        "PostgreSQL",
        "Rest API",
        "GraphQL",
        "Sequelize",
        "Mongoose",
      ],
    },
    {
      title: "Tools and APIs",
      subtitle: "Other tools and APIs",
      tools: [
        "Git",
        "Webpack",
        "ESLint",
        "NextAuth",
        "Prettier",
        "Github",
        "NextAuth",
        "VS Code",
        "Docker",
        "Leaflet",
        "MapboxAPI",
        "Google API",
        "Stripe API",
        "OpenAI API",
      ],
    },
    {
      title: "AI & Machine Learning",
      subtitle: "AI Frameworks and Libraries",
      tools: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "3D Deep learning",
        "Hugging Face Transformers",
        "YOLO",
        "LLM",
        "Transformers",
        "Generative AI",
      ],
    },
  ],
};

export const projectsContent = {
  heading: "Projects",
  subHeading: "Selected works and projects ",
  projects: [
    {
      title: "Next Cabin",
      subtitle: "Technologies",
      githubLink: "",
      demoLink: "https://next-cabin-app.vercel.app/",
      description:
        "An e-commerce app for reserving cabins, featuring a user dashboard, geolocation, complex filtering and search system, secure authentication, and more.",
      media: "/next-cabin.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Zod",
        "React Hook Form",
        "Leaflet",
        "Shadcn",
        "TypeScript",
        "NextAuth",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "Vercel",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Next Store",
      subtitle: "Technologies",
      githubLink: "",
      demoLink: "https://next-store-app-pi.vercel.app/",
      description:
        "An e-commerce platform for purchasing products, featuring an admin dashboard, seamless payments, secure authentication, and more.",
      media: "/next-store.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "React Hook Form",
        "Stripe",
        "Shadcn",
        "TypeScript",
        "NextAuth",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "Vercel",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Next Robot",
      subtitle: "Technologies",
      githubLink: "",
      demoLink: "https://next-robot-app.vercel.app/",
      description:
        "An industrial application built for a robotics company, providing detailed information about robots, their applications, and a contact form for inquiries.",
      media: "/next-robot.mp4",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Nodemailer",
        "Mailtrap",
        "Zod",
        "React Hook Form",
        "Framer Motion",
        "Shadcn",
        "TypeScript",
        "Vercel",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Next Chat",
      subtitle: "Technologies",
      githubLink: "",
      demoLink: "https://next-chat-app-umber.vercel.app/",
      description:
        "A Next.js-powered API for integrating large language models (LLMs), offering functionality similar to ChatGPT with the added flexibility to choose from 10 different LLMs.",
      media: "/next-chat.mp4",
      technologies: [
        "AI",
        "LLM",
        "Next.js",
        "Tailwind CSS",
        "Groq API",
        "React Markdown",
        "Highlight.js",
        "Shadcn",
        "TypeScript",
        "Vercel",
        "Git",
        "GitHub",
      ],
    },
  ],
};

export const certificateContent = {
  heading: "Certificates",
  subHeading: "Internationally valid certificates",
  certificates: [
    {
      id: 1,
      title: "TensorFlow Developer Certificate",
      subtitle: "Deep Learning and Machine Learning Certification",
      description:
        "Awarded upon passing a five-hour online programming exam that tests proficiency in TensorFlow, including the ability to build and train neural networks for computer vision, NLP, and time-series forecasting.",
      awardedBy: "TensorFlow, Google",
      issueDate: "30/06/2023",
      certificateId: "76696257",
      badge: "/tensorflow-badge.png",
      image: "/tensorflow-certificate.png",
      sourceLink:
        "https://www.credential.net/c6f7c1c8-f2f6-48de-ad17-2f9e9ad7092b#acc.8gVYQGBR",
    },
    {
      id: 2,
      title: "Dr.-Ing./Ph.D. Certificate",
      subtitle: "Qualification Program in Engineering and Design",
      description:
        "Awarded upon the successful completion of a four-year research program at the Technical University of Munich (TUM), Munich, Germany, specializing in engineering and design.",
      awardedBy: "Technical University of Munich (TUM), TUM Graduate School",
      issueDate: "08/08/2024",
      badge: "/tum-badge.png",
      image: "/tum-certificate.png",
    },
  ],
};

export const researchContent = {
  heading: "Research",
  subHeading: "Research records and publications",
  linkToGoogleScholar:
    "https://scholar.google.com/citations?hl=en&user=ZueFqBkAAAAJ&view_op=list_works",
  linkLable: "Full List of Papers",
  stats: [
    {
      label: "Journal Papers",
      value: "8",
      icon: BookOpen,
    },
    {
      label: "Conference Papers",
      value: "13",
      icon: FileText,
    },

    {
      label: "H-Index",
      value: "11",
      icon: BarChart,
    },
    {
      label: "i10-Index",
      value: "12",
      icon: GraduationCap,
    },
    {
      label: "Citations",
      value: "+1700",
      icon: Users,
    },
  ],
};

export const heroIntro = {
  heading: "Dr.-Ing. M. Saeed Mafipour",
  subHeading:
    "A software developer based in Munich, Germany, creating seamless apps for digital experiences. Explore my works and let's get into touch for collaboration.",
};

export const socialMediaLinks = [
  {
    name: "Google scholar",
    href: "https://scholar.google.com/citations?user=ZueFqBkAAAAJ&hl=en&authuser=3",
    icon: FaGoogleScholar,
  },
  {
    name: "Github",
    href: "https://github.com/MSaeedMp",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
];

export const buttonLables = {
  cta: "Contact Me",
  demo: "Live Demo",
  src: "Source Code",
};
