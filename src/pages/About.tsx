import React from "react";
import IconCloud from "../components/magicui/icon-cloud";

const About: React.FC = () => {
  const slugs = [
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "python",
    "sql",
    "flask",
    "api",
    "git",
    "flutter",
    "firebase",
    "appwrite",
    "tailwindcss",
    "dart",
    "github",
    "scratch",
    "selenium",
    "html",
    "css",
    "ubuntu",
    "linux",
    "VScode",
    "upwork",
    "fiverr",
    "freelancer",
  ];

  return (
    <div className="flex flex-col space-y-5 ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">
          Hey, I'm <span className="text-primary">Umar</span>
        </h2>
        <div className="h-2 rounded-full bg-primary w-14"></div>
      </div>

      <div className="flex flex-col-reverse gap-y-4 md:flex-row md:justify-between items-center">
        <p>
          I’m a second-year Computer Science student in Nigeria with experience
          in developing web pages, from simple landing pages to full-stack
          applications. I strive to create software that functions efficiently
          and provides intuitive user experiences. <br />
          <br /> I love learning new and better ways to create seamless user and
          client experiences using the latest clean, efficient, and scalable
          approaches to software development. <br />
          <br /> I consider work an ongoing education and am always looking for
          opportunities to collaborate with those who are willing to share their
          knowledge. My primary goal is to create something beautiful with
          people who bring out the best in me. <br />
          <br /> In addition to my studies, I also do freelancing, offering my
          skills on platforms like Upwork, Fiverr, and Freelancer. When I'm not
          coding, you can find me swimming, reading, or playing chess.
        </p>

        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg   px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default About;
