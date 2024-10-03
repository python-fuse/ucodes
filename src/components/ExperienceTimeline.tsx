import React from "react";
import BlurFade from "./magicui/blur-fade";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => (
  <div className="mb-8 flex flex-col md:flex-row">
    <div className="md:w-1/4 border-r-2 mr-2">
      <p className="font-bold text-lg">{experience.company}</p>
      <p className="text-gray-600/80 text-sm">{experience.duration}</p>
    </div>
    <div className="md:w-3/4 mt-4 md:mt-0 ">
      <h3 className="text-xl text-primary font-semibold">{experience.title}</h3>
      <p className="mt-2 text-gray-700">{experience.description}</p>
      {experience.techStack && (
        <div className="mt-4">
          <h4 className="font-semibold">Tech Stack:</h4>
          <ul className="list-disc list-inside">
            {experience.techStack.map((tech, index) => (
              <li key={index} className="text-sm text-gray-600">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => (
  <div className="">
    <div className="relative">
      {experiences.map((experience, index) => (
        <BlurFade inView delay={0.5}>
          <TimelineItem key={index} experience={experience} />
        </BlurFade>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;
