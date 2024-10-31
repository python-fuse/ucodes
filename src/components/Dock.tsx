import { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import Tooltip from "./Tooltip";
import BlurFade from "./magicui/blur-fade";
import { handleHoverIn, handleHoverOut, HandB, GLXY } from "../lib/utils";
import { motion } from "framer-motion";

const Dock = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  

  useEffect(() => {
    setAnimate(true);
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      className={`fixed ${animate ? "navbar-animate" : "navbar-hide"}
      } bottom-4 flex items-center duration-500 bg-white max-w-[350px] min-w-[350px] h-14 justify-evenly shadow-md rounded-full left-[50%] opacity-0 translate-x-[-50%] border`}
    >
      <div className="flex items-center gap-x-2 border-r-2">
        {HandB.map((item, idx) => (
          <a
            key={idx}
            className="m-2 cursor-pointer nav-btn relative"
            onMouseEnter={() => handleHoverIn(setShowToolTip)}
            onMouseLeave={() => handleHoverOut(setShowToolTip)}
            href="#home"
          >
            {showToolTip && (
              <BlurFade inView delay={0.0025} blur={"0px"}>
                <Tooltip label={item.label} />
              </BlurFade>
            )}
            {item.icon}
          </a>
        ))}
      </div>

      <div className=" flex items-center gap-x-2 border-r-2 ">
        {GLXY.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            className="m-2 nav-btn relative"
            onMouseEnter={() => handleHoverIn(setShowToolTip)}
            onMouseLeave={() => handleHoverOut(setShowToolTip)}
          >
            {showToolTip && (
              <BlurFade inView delay={0.005}>
                <Tooltip label={item.label} />
              </BlurFade>
            )}

            {item.icon}
          </a>
        ))}
      </div>

      <div
        className=" flex items-center "
        onMouseEnter={() => handleHoverIn(setShowToolTip)}
        onMouseLeave={() => handleHoverOut(setShowToolTip)}
      >
        <button className="m-2 nav-btn relative">
          {showToolTip && (
            <BlurFade inView delay={0.005} blur="0px">
              <Tooltip label="Theme" />
            </BlurFade>
          )}

          <BsMoon className="nav-icon" />
        </button>
      </div>
    </motion.div>
  );
};

export default Dock;
