import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import pp1 from "../assests/p1.jpg";
import pp2 from "../assests/p2.jpg";
import pp4 from "../assests/p4.jpg";
import pp6 from "../assests/p5.jpg";

const Projects = () => {
  const projects = [
    {
      img: pp1,
      title: "Construction Website",
      para: "Built with React, optimized for speed and mobile",
      link: "https://hoglah.github.io/jb-gace",
    },
    {
      img: pp2,
      title: "Photography Website",
      para: "Built with React, optimized for speed and mobile",
      link: "https://hoglah.github.io/Photography-LRC",
    },
    {
      img: pp4,
      title: "Business Flyer",
      para: "Designed in Photoshop, blending modern typography with bold visuals.",
    },
    {
      img: pp6,
      title: "Event Flyer",
      para: "Designed in Photoshop, blending modern typography with bold visuals.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="projects"
      className="w-full h-auto flex flex-col items-center justify-center 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[40px] bg-themebg"
    >
      {/* Section Heading */}
      <h1 className="text-white text-[1.5em] font-poppins font-semibold tracking-wide">
        ~ <span className="text-themeblue">My Works</span> ~
      </h1>

      {/* Projects Grid */}
      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-6"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900 
              hover:shadow-2xl transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-60 h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div
              className="w-[15.5em] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-white text-xl font-bold mb-3">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm mb-4">{project.para}</p>
              {project.link && (
                <button
                  onClick={() => (window.location.href = project.link)}
                  className="bg-themeblue hover:bg-white hover:text-themebg py-2 px-5 
                    text-black text-sm font-semibold rounded-md transition-colors"
                >
                  View Work
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
