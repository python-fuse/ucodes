import React from "react";
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="h-24  bg-primary rounded-t-2xl p-4 flex items-center justify-between">
      <div className="text-white text-center w-full">
        uCodes &copy; {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
