import React from "react";
import BlurFade from "./magicui/blur-fade";

interface SkillCardProps {
  skill: { name: string; description: string; icon: JSX.Element };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <BlurFade inView delay={0.5}>
      <div className="skill-card h-full text-xs md:text-lg border flex flex-col items-center space-y-4 rounded-lg p-6 hover:-translate-y-2 duration-300">
        {skill.icon}
        <h2 className="text-2xl text-primary font-bold">{skill.name}</h2>
        <p className="text-sm text-center">{skill.description}</p>
      </div>
    </BlurFade>
  );
};

export default SkillCard;
