import React, { useEffect } from "react";
import hero from "../assests/hero.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { BiDownload } from "react-icons/bi";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[40px] bg-themebg"
    >
      <h1 className="text-white text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">About Me</span> ~
      </h1>
      <div
        id="top-box"
        className="w-full flex lg:flex-row flex-col items-center justify-center gap-[2em]"
      >
        <div className="w-[50%] lg:w-[20%] flex mt-4">
          <img
            src={hero}
            alt=""
            className="w-full bg-cover bg-center rounded-[4em] 
            border-4 border-themeblue shadow-xl"
          />
        </div>
        <div
          className="lg:w-[60%] w-full flex flex-col 
        justify-center items-center lg:items-start gap-[1em]"
        >
          <p
            className="text-gray-300 text-md font-poppins lg:w-[85%] 
          lg:text-left text-center"
          >
            I’m a frontend developer passionate about creating clean,
            user‑friendly interfaces. With experience in HTML, CSS, JavaScript,
            React, and Tailwind CSS, I bring ideas to life on the web. Beyond
            coding, I design flyers and graphics using Photoshop and GIMP,
            blending creativity with technology. I build modern, responsive
            websites and design eye‑catching visuals.
          </p>
          <button
            className="bg-themeblue hover:bg-transparent hover:text-themeblue 
            hover:border hover:border-themeblue transition-colors py-4 px-6 
        text-white text-md font-semibold mt-5 rounded-md font-poppins flex 
        flex-row gap-2 align-center items-center "
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Download CV <BiDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
