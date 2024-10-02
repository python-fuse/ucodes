import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Book, Home } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaCode, FaLaptop, FaMobile, FaServer } from "react-icons/fa";
import fbn from "../assets/fbncoll.png";
import studenthub from "../assets/studhub.png";

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
