import { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import Tooltip from "./Tooltip";
import BlurFade from "./magicui/blur-fade";
import { handleHoverIn, handleHoverOut, HandB, GLXY } from "../lib/utils";

const Dock = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div
      className={`fixed ${
        animate ? "navbar-animate" : ""
      } bottom-4 flex items-center bg-white max-w-[350px] min-w-[350px] h-14 justify-evenly shadow-md rounded-full left-[50%] opacity-0 translate-x-[-50%] border`}
    >
      <div className="flex items-center gap-x-2 border-r-2">
        {HandB.map((item, idx) => (
          <button
            key={idx}
            className="m-2  nav-btn relative"
            onMouseEnter={() => handleHoverIn(setShowToolTip)}
            onMouseLeave={() => handleHoverOut(setShowToolTip)}
          >
            {showToolTip && (
              <BlurFade inView delay={0.0025} blur={"0px"}>
                <Tooltip label={item.label} />
              </BlurFade>
            )}
            {item.icon}
          </button>
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
    </div>
  );
};

export default Dock;
