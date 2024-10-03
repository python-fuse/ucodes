import React from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";

const ProjectCard: React.FC<projectProps> = ({ project }) => {
  return (
    <BlurFade inView delay={0.5}>
      <motion.div
        className={`flex hover:shadow-md duration-300 ease-in-out border cursor-pointer  p-4 rounded-2xl gap-4 `}
      >
        <div className="w-1/4">
          <img
            src={project.image}
            className="border-2 border-secondary rounded"
            alt={project.title}
          />
        </div>
        <div className="flex flex-1  pl-2 flex-col space-y-2">
          <a
            target="_blank"
            href={project.link}
            className="text-xl hover:text-primary duration-300 font-bold flex items-center gap-2"
          >
            {project.title}

            <FaLink className="text-sm" />
          </a>
          <p className="text-justify text-sm">{project.description}</p>

          <div className="flex gap-2 flex-wrap">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-primary hover:bg-primary/80 duration-300 hover:shadow-md font-bold items-center w-max text-white px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
};

export default ProjectCard;
