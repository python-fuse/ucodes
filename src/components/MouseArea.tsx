import React, { useEffect } from "react";

const MouseArea = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        top: mousePosition.y - 36, // Center the element (half of 72px)
        left: mousePosition.x - 36, // Center the element (half of 72px)
        position: "fixed",
        width: "72px",
        height: "72px",
        borderRadius: "50%",
        background:
          "conic-gradient(from 180deg at 50% 50%, #00ff00, #008000, #004d00, #00ff00)",
        zIndex: -50,
      }}
      className="-z-50"
    ></div>
  );
};

export default MouseArea;
