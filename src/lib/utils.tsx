import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Book, Home } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { label } from "framer-motion/client";
import { log } from "console";

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
