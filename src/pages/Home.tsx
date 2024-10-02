import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-36 my-10 ">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
