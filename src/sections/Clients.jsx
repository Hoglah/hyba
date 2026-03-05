import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      rating: "4.8",
      about:
        "Working with Hoglah was a fantastic experience. The website was sleek, responsive, and delivered on time.",
      name: "Legend Ray",
      role: "Photographer",
    },
    {
      rating: "4.9",
      about:
        "HYBA has a great eye for design. The flyers created for our event were modern, creative, and got lots of attention.",
      name: "Puregrains",
      role: "Startup business",
    },
    {
      rating: "4.7",
      about:
        "A talented developer who combines technical skill with creativity. Our project turned out better than we imagined.",
      name: "Maclean Antwi",
      role: "Student",
    },
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="testimonials"
      className="w-full h-auto flex flex-col items-center justify-center 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[20px] bg-themebg"
    >
      {/* Heading */}
      <h1 className="text-white text-[1.1em] font-poppins font-medium">
        ~{" "}
        <span className="text-themeblue" data-aos="zoom-in" data-aos-delay="50">
          Clients Voices
        </span>{" "}
        ~
      </h1>

      {/* Review Card */}
      <div
        key={currentIndex}
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col justify-center items-center gap-4 
          bg-themeblue bg-opacity-10 
          lg:py-12 py-5 lg:px-8 px-4 rounded-md cursor-pointer 
          transition-all duration-500 ease-in-out max-w-xl text-center"
      >
        <button className="flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full mx-auto">
          {reviews[currentIndex].rating} <FaStar className="text-yellow-500" />
        </button>
        <p className="text-gray-300 text-sm font-poppins">
          {reviews[currentIndex].about}
        </p>
        <div className="mt-5">
          <h1 className="text-themeblue text-md font-poppins font-semibold">
            {reviews[currentIndex].name}
          </h1>
          <h1 className="text-gray-300 capitalize font-[700] text-sm font-poppins">
            {reviews[currentIndex].role}
          </h1>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-themeblue" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Clients;
