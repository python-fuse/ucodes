import React, { ReactNode } from "react";
import NavBar from "./Dock";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <MouseArea /> */}
      <NavBar />
    </>
  );
};

export default Layout;
