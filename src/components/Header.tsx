import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="home"
      className="flex border-b border-stone-200 p-4 md:py-4 justify-between"
    >
      <Link to={"/"}>
        <h2 className="text-2xl font-bold text-primary">uCodes</h2>
      </Link>
    </div>
  );
};

export default Header;
