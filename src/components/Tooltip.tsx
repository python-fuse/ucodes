import React from "react";

type Props = {
  label: string;
};

const Tooltip: React.FC<Props> = ({ label }) => {
  return (
    <div className="p-2 bg-secondary text-xs rounded-md text-center absolute -top-11 shadow-md left-4 translate-x-[-50%] ">
      {label}
    </div>
  );
};

export default Tooltip;
