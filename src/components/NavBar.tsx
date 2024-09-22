import { useEffect, useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsSun,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaBlog, FaHome } from "react-icons/fa";

const NavBar = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div
      className={`fixed ${
        animate ? "navbar-animate" : ""
      } bottom-4 flex items-center max-w-[350px] min-w-[350px] h-14 justify-between shadow-md rounded-full left-[50%] opacity-0 translate-x-[-50%]  p-2 divide-x-2 border`}
    >
      <div className="p-2 flex items-center gap-x-1">
        <button className="p-2 nav-btn">
          <FaHome className="nav-icon" />
        </button>
        <button className="p-2 nav-btn">
          <FaBlog className="nav-icon" />
        </button>
      </div>

      <div className="p-2 flex items-center gap-x-1">
        <a
          href="https://github.com/python-fuse"
          target="_blank"
          className="p-2 nav-btn"
        >
          <BsGithub className="nav-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/umar-muktar-552a06268"
          className="p-2 nav-btn"
        >
          <BsLinkedin className="nav-icon" />
        </a>
        <a
          target="_blank"
          href="https://x.com/UmarMuk83339233"
          className="p-2 nav-btn"
        >
          <BsTwitterX className="nav-icon" />
        </a>
        <a
          target="_blank"
          href="https://youtube.com/@uCodes880"
          className="p-2 nav-btn"
        >
          <BsYoutube className="nav-icon" />
        </a>
      </div>

      <div className="p-2 flex items-center gap-x-1">
        <button className="p-2 nav-btn">
          <BsSun className="nav-icon" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
