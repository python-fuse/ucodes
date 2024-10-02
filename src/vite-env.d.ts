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
