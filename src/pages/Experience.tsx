import React from "react";
import { experiences } from "../lib/utils";
import ExperienceTimeline from "../components/ExperienceTimeline";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="flex flex-col space-y-8 ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="h-2 rounded-full bg-primary w-14"></div>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
