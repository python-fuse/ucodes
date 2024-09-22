import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import BlurFade from "./magicui/blur-fade";

const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
