import React from "react";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-2 py-10 ">
      <Hero />
    </div>
  );
};

export default Home;
