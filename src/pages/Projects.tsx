import React from "react";
import { projects } from "../lib/utils";
import ProjectCard from "../components/ProjectCard";
import OrbitingCircles from "../components/ui/orbiting-circles";
import { FaGithub, FaNodeJs, FaReact, FaWhatsapp } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="h-2 rounded-full bg-primary w-14"></div>
        <p className="text-sm font-normal">
          A collection my previous personal and paid projects
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-2/4 flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="relative flex h-[400px] flex-1 flex-col items-center justify-center overflow-hidden  ">
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={60}
          >
            <FaWhatsapp />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={60}
          >
            <FaNodeJs />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={150}
            duration={20}
            reverse
          >
            <FaReact />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={150}
            duration={20}
            delay={20}
            reverse
          >
            <FaGithub />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
};

export default Projects;
