import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Book, Home } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaCode, FaLaptop, FaMobile, FaServer } from "react-icons/fa";
// import fbn from "../assets/fbncoll.png";
import studenthub from "../assets/studhub.png";
import heartbridge from "../assets/hear.png";
import quackdebug from "../assets/quack.png";
import miniMe from "../assets/mini.png";
import tubeBuddy from "../assets/tube.png";

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
    title: "QuackDebug – Voice-Powered Debugging Companion",
    description:
      "A productivity tool that transcribes your spoken thoughts during debugging sessions, inspired by rubber duck debugging. Features voice-to-text transcription, audio recording, and session management to streamline problem-solving.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Web Speech API"],
    link: "https://quackdebug.vercel.app",
    image: quackdebug,
  },
  {
    title: "Mini.me – URL Shortener with Analytics",
    description:
      "A customizable full-stack URL shortener with support for dynamic QR codes and real-time click analytics.",
    techStack: [
      "Next.js",
      "PostgreSQL (Prisma)",
      "Tailwind CSS",
      "IPAPI",
      "Auth.js",
    ],
    link: "https://mini-me-kappa.vercel.app/",
    image: miniMe,
  },
  {
    title: "Tube Buddy – YouTube Reminder Tool",
    description:
      "A productivity tool that sends daily reminders to watch saved YouTube videos. Built with real-time updates and cron-scheduled emails.",
    techStack: [
      "Next.js",
      "Express.js",
      "PostgreSQL (Prisma)",
      "Socket.IO",
      "Nodemailer",
      "YouTube API",
    ],
    link: "https://tubebuddy.vercel.app",
    image: tubeBuddy,
  },
  {
    title: "Heart Bridge",
    description:
      "A crowd-funding platform for orphanages. Submission for Appwrite Hackathon 2024.",
    techStack: ["Next.js", "Tailwind CSS", "MUI", "Appwrite"],
    link: "https://heart-bridge.vercel.app",
    image: heartbridge,
  },
  {
    title: "Student Hub",
    description:
      "A full-stack web application for students to connect and share resources.",
    techStack: ["React", "Tailwind CSS", "ChakraUI", "Firebase"],
    link: "https://student-hub-beta.vercel.app/",
    image: studenthub,
  },
  // {
  //   title: "FirstBank Collection System",
  //   description:
  //     "A loan management tool built for First Bank Nigeria. Developed the Loan Customer Management Suite, dashboards, and RBAC system.",
  //   techStack: [
  //     "Next.js",
  //     "React Query",
  //     "Tailwind CSS",
  //     "Headless UI",
  //     "NextUI",
  //   ],
  //   link: "https://firstbank-collection-frontend.vercel.app/",
  //   image: fbn,
  // },
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Payportal",
    duration: "December 2024 – April 2025",
    description:
      "Built and shipped the entire frontend of a batch payment platform using Next.js, TypeScript, Tailwind CSS, and ShadCN. Integrated TanStack Query and Axios for efficient data fetching. Implemented RBAC, dynamic forms, and virtualized tables for 1,000+ records.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "TanStack Query",
      "Axios",
      "Redux Toolkit",
    ],
  },
  {
    title: "Software Developer",
    company: "uCodes",
    duration: "January 2024 – Present",
    description:
      "Delivered 10+ client projects including automation tools and full-stack web apps. Specialized in building modern, scalable UIs and backend integrations. Built custom tools to reduce manual work by up to 80%.",
    techStack: [
      "Next.js",
      "Express.js",
      "Tailwind CSS",
      "Python",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bloocode Technologies",
    duration: "June 2024 – October 2024",
    description:
      "Worked on a loan management tool for First Bank Nigeria. Built the Loan Customer Management Suite, dashboards, and modals. Implemented RBAC, protected routes, and analytics.",
    techStack: [
      "Next.js",
      "React Query",
      "Tailwind CSS",
      "Headless UI",
      "NextUI",
    ],
  },
  {
    title: "Software Engineer",
    company: "Upwork",
    duration: "December 2023 – Present",
    description:
      "Providing freelance development services globally. Built dashboards, automation tools, and full-stack web apps with a 90% satisfaction rate.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Development Intern",
    company: "HNGxAfrica",
    duration: "December 2023 – July 2024",
    description:
      "Built full-stack web apps as part of a large-scale internship. Collaborated across tracks to deliver complete solutions.",
    techStack: ["React", "Firebase", "Appwrite", "Tailwind CSS"],
  },
  {
    title: "Software Development Intern",
    company: "Code Alpha",
    duration: "September 2023 – December 2024",
    description:
      "Focused on building and improving UI components. Enhanced performance and functionality across several web pages.",
    techStack: ["React", "Tailwind CSS", "ChakraUI", "Firebase"],
  },
  {
    title: "Software Development Intern",
    company: "Oasis InfoByte",
    duration: "July 2022 – October 2022",
    description:
      "Built websites and user interfaces using foundational frontend technologies.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];
