import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdCloudDone } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";

const Services = () => {
  const services = [
    {
      icon: IoMdCloudDone,
      title: "Web Development",
      descrip:
        " Building responsive, fast, and modern websites using HTML, CSS, JavaScript, React.. ",
    },
    {
      icon: FaUserEdit,
      title: "UI/UX Design",
      descrip:
        " Designing clean, user‑friendly interfaces that enhance the user experience ",
    },
    {
      icon: TbReportAnalytics,
      title: "Graphic Design",
      descrip:
        " Creating professional flyers, posters, and digital graphics with Photoshop and GIMP. ",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="services"
      className="w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[40px] bg-themebg"
    >
      <h1 className="text-white text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">My Services</span> ~
      </h1>
      <div
        className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center 
      items-center gap-6 mt-6"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {services.map((service, index) => (
          <div
            className="flex flex-col justify-center items-start gap-4 p-10 
            hover:border-2 hover:border-themeblue bg-white bg-opacity-10  rounded-md cursor-pointer"
            key={index}
          >
            <service.icon className="size-[35px] mb-5 text-white" />
            <h1 className="text-themeblue text-[23px] capitalize font-semibold font-poppins">
              {service.title}
            </h1>
            <p className="text-gray-300 text-sm font-poppins">
              {service.descrip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
