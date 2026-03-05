import React, { useEffect } from "react";
import ss from "../assests/s.png";
import ss1 from "../assests/s1.png";
import ss2 from "../assests/s2.png";
import ss3 from "../assests/s3.png";
import ss4 from "../assests/s4.png";
import ss5 from "../assests/s5.png";
import ss6 from "../assests/s6.png";
import ss7 from "../assests/s7.png";
import ss8 from "../assests/s8.png";
import ss9 from "../assests/s9.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  const skills = [
    {
      img: ss,
      name: "GIMP",
      percent: "85%",
    },
    {
      img: ss1,
      name: "Canva",
      percent: "90%",
    },
    {
      img: ss2,
      name: "React",
      percent: "98%",
    },
    {
      img: ss3,
      name: "Python",
      percent: "90%",
    },
    {
      img: ss4,
      name: "Tailwind",
      percent: "92%",
    },
    {
      img: ss5,
      name: "Figma",
      percent: "95%",
    },
    {
      img: ss6,
      name: "HTML",
      percent: "98%",
    },
    {
      img: ss7,
      name: "CSS",
      percent: "97%",
    },
    {
      img: ss8,
      name: "JavaScript",
      percent: "92%",
    },
    {
      img: ss9,
      name: "Photoshop",
      percent: "90%",
    },
  ];
  return (
    <div
      className="bg-themebg w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[8px]"
    >
      <h1 className="text-white text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">My Skills</span> ~
      </h1>
      <p
        className="text-gray-400 font-poppins capitalize text-sm"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Explore the tools behind my designs
      </p>
      <div
        className="w-full grid lg:grid-cols-5 grid-cols-2 justify-center 
            items-center gap-10 mt-8 ml-[.7em] lg:ml-0"
      >
        {skills.map((skill, index) => (
          <div className="" key={index}>
            <div
              className="bg-themeblue bg-opacity-10 flex flex-col 
            py-6 px-4 gap-4 rounded-md hover:border hover:border-white cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-row gap-[1em] items-center justify-between">
                <img src={skill.img} alt="" className="w-[3em]" />
                <h1 className="text-white text-sm font-poppins font-bold">
                  {skill.name}
                </h1>
              </div>

              <div className="flex flex-row gap-1 justify-between items-center">
                <h1 className="text-themeblue font-poppins text-sm font-semibold">
                  Percentage
                </h1>
                <h1 className="text-white font-poppins text-sm font-bold">
                  {skill.percent}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
