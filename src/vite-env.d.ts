/// <reference types="vite/client" />
type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
};

interface projectProps {
  project: ProjectType;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  techStack?: string[]; // Optional, since not all experiences may have a tech stack
}
