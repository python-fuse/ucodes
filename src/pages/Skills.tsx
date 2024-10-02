import React from "react";
import SkillCard from "../components/SkillCard";
import { skills } from "../lib/utils";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="h-2 rounded-full bg-primary w-14"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
