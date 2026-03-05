import React, { useEffect } from "react";
import hero from "../assests/hero3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center 
    text-center px-[20px] py-[60px] bg-themebg gap-[40px]"
    >
      {/* Image Section */}
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        className="flex justify-center items-center"
      >
        <div className="">
          <img
            src={hero}
            alt="Portfolio"
            className="rounded-full w-32 h-32 object-cover 
            object-top border-4 border-themeblue shadow-xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-[20px] items-center justify-center max-w-[700px]">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-white uppercase text-sm font-poppins tracking-widest"
        >
          Hi, I’m Hoglah Animhene
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-themeblue lg:text-[30px] text-[20px] capitalize 
          font-poppins leading-[1.2em] font-bold"
        >
          <Typewriter
            words={[
              "Creative Web Designer",
              "Graphic Designer",
              "UI/UX Enthusiast",
              "Frontend Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-gray-300 text-md font-poppins"
        >
          I craft modern websites and digital experiences that help brands stand
          out. With a passion for clean design and efficient code, I turn ideas
          into impactful solutions.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-themeblue hover:bg-white hover:text-themebg py-3 px-6 
          text-themebg text-md font-semibold rounded-md transition-colors"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="350"
            className="border border-themeblue text-themeblue hover:bg-themeblue hover:text-themebg py-3 px-6 
          text-md font-semibold rounded-md transition-colors"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
