import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <NavBar />
    </>
  );
};

export default Layout;
