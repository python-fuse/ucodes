import React from "react";
interface ExpCardProps {
  experience: Experience;
}
const ExperienceCard: React.FC<ExpCardProps> = ({ experience }) => {
  return <div>{experience.title}</div>;
};

export default ExperienceCard;
