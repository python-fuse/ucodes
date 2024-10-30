import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-36 my-10 ">
      <Hero />
      <div className="flex flex-col gap-y-36 my-10 p-10">
        <About />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default Home;
