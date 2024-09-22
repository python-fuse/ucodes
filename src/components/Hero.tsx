import avatar from "../assets/umar.jpg";
const Hero = () => {
  return (
    <div className="flex text-start mt-20 space-x-4 items-center mx-auto">
      <div>
        <img src={avatar} alt="Umar Muktar" className="size-64 rounded-full" />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-[0.2px]">
          <h2 className="text-2xl font-semibold text-primary">Umar Muktar</h2>
          <p className="font-semibold">Software Engineer</p>
        </div>

        <p>
          Building Beautiful Digital Experiences. <br /> I{" "}
          <span className="text-primary">specialize</span> in creating{" "}
          <span className="text-primary">intuitive</span> <br /> user interfaces
          and <span className="text-primary">seamless</span> user <br />
          experiences for <span className="text-primary">web</span> and{" "}
          <span className="text-primary">mobile</span> <br /> applications.
        </p>
        <div className="flex space-x-2">
          <a
            href="https://www.upwork.com/freelancers/~0196ca847293cdf4f7"
            target="_blank"
            className="btn-primary"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <a
            href="src/assets/Umar_Muktar.pdf"
            target="_blank"
            className="btn-outline"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
