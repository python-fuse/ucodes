import React, { ReactNode } from "react";
import NavBar from "./Dock";
import Header from "./Header";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
};

export default Layout;
