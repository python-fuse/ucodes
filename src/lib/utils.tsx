import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Book, Home } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaCode, FaLaptop, FaMobile, FaServer } from "react-icons/fa";
import fbn from "../assets/fbncoll.png";
import studenthub from "../assets/studhub.png";
import heartbridge from "../assets/hear.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const HandB = [
  { icon: <Home className="nav-icon" />, label: "Home" },
  { icon: <Book className="nav-icon" />, label: "Blog" },
];

export const GLXY = [
  {
    icon: <BsGithub className="nav-icon" />,
    label: "Github",
    link: "https://github.com/python-fuse",
  },
  {
    icon: <BsLinkedin className="nav-icon" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/umar-muktar-552a06268",
  },
  {
    icon: <BsTwitterX className="nav-icon" />,
    label: "X",
    link: "https://x.com/UmarMuk83339233",
  },
  {
    icon: <BsYoutube className="nav-icon" />,
    label: "Youtube",
    link: "https://youtube.com/@uCodes880",
  },
];

export const handleHoverIn = (
  setCurrentState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setCurrentState(true);
  console.log("in");
};

export const handleHoverOut = (
  setCurrentState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setCurrentState(false);
  console.log("out");
};

export const skills = [
  {
    name: "Frontend",
    description:
      "Building responsive and intuitive user interfaces and seamless user experiences for web with modern frontend technologies.",
    icon: <FaLaptop className="text-5xl text-card-foreground" />,
  },
  {
    name: "Backend",
    description:
      "Developing server-side logic, APIs, and database management using technologies like Node.js, Express, and MongoDB.",
    icon: <FaServer className="text-5xl text-card-foreground" />,
  },
  {
    name: "Mobile",
    description:
      "Creating mobile applications for Android and iOS using frameworks like React Native and Flutter.",
    icon: <FaMobile className="text-5xl text-card-foreground" />,
  },
  {
    name: "Scripting",
    description:
      "Writing scripts to automate tasks and processes using languages like Python and Bash.",
    icon: <FaCode className="text-5xl text-card-foreground" />,
  },
];

export const projects = [
  {
    title: "Heart Brige",
    description:
      "A crowd-funding platform for orphanges.My submission for Appwrite Hackathon 2024",
    techStack: ["NextJs", "Tailwind CSS", "MUI", "Appwrite"],
    link: "https://heart-bridge.vercel.app",
    image: heartbridge,
  },
  {
    title: "Student Hub",
    description:
      "A fullstack web application for students to connect and share resources.",
    techStack: ["React", "Tailwind CSS", "ChakraUI", "Firebase"],
    link: "https://student-hub-beta.vercel.app/",
    image: studenthub,
  },
  {
    title: "FirstBank Collection System",
    description:
      "A loan collection management system for oldest the bank in Nigeria. I worked as a Frontend Engineer on this Project at Bloocode Technologies",
    techStack: [
      "NextJS",
      "React Query",
      "Tailwind CSS",
      "Headless UI",
      "NextUI",
    ],
    link: "https://firstbank-collection-frontend.vercel.app/",
    image: fbn,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Upwork",
    duration: "December 2023 - Present",
    description:
      "Providing freelance software development services on Upwork, specializing in building dynamic web applications. Collaborating with clients globally to deliver high-quality full-stack projects and tailored solutions for their business needs.",
  },
  {
    title: "Software Engineer",
    company: "Bloocode Technologies",
    duration: "June 2024 - Present",
    description:
      "Contributing as a Frontend Engineer, responsible for creating intuitive and responsive user interfaces. Collaborating closely with cross-functional teams to develop scalable, performant web applications that enhance the user experience.",
    techStack: [
      // "TypeScript",
      // "JavaScript",
      // "React",
      "Next.js",
      "React Query",
      "Tailwind CSS",
      "Headless UI",
      "NextUI",
    ],
  },
  {
    title: "Software Development Intern",
    company: "HNGxAfrica",
    duration: "December 2023 - July 2024",
    description:
      "Strengthened my software engineering skills by building full-stack web applications as part of a large-scale internship program. Collaborated with interns across various tracks, including UI/UX Design, to deliver complete web solutions from concept to deployment.",
    techStack: ["React", "Firebase", "Appwrite", "Tailwind CSS"],
  },
  {
    title: "Software Development Intern",
    company: "Code Alpha",
    duration: "September 2023 - December 2024",
    description:
      "Worked as a software development intern, focused on building and improving user interfaces. Contributed to fixing bugs and enhancing existing pages to create more functional and visually appealing web experiences.",
    techStack: ["React", "Tailwind CSS", "ChakraUI", "Firebase"],
  },
  {
    title: "Software Development Intern",
    company: "Oasis InfoByte",
    duration: "July 2022 - October 2022",
    description:
      "Worked as a web development intern, building website and user interfaces using HTML,CSS and Javascript.",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];
