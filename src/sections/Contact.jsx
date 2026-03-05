import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate sending message (replace with EmailJS or backend integration)
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] bg-themebg gap-10"
    >
      {/* Heading */}
      <h1 className="text-white text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">Reach Me</span> ~
      </h1>
      <p className="text-gray-300 text-center max-w-xl font-poppins">
        Have a project in mind or just want to say hello? Fill out the form
        below or reach me directly.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-5 bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="font-poppins w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-themeblue"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className=" font-poppins w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-themeblue"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-themeblue font-poppins"
        ></textarea>
        <button
          type="submit"
          className="bg-themeblue hover:bg-white hover:text-themebg py-3 px-6 
          text-black text-md font-semibold rounded-md transition-colors font-poppins"
        >
          Send Message
        </button>
      </form>

      {/* Extra Contact Buttons */}
      <div className="flex gap-6 mt-6">
        <a
          href="tel:+233556898951"
          className="bg-themeblue hover:bg-transparent hover:border hover:border-themeblue hover:text-themeblue  py-3 px-6 
          text-white text-md font-semibold rounded-md transition-colors font-poppins"
        >
          Call Me
        </a>
        <a
          href="https://wa.me/233556898951"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent hover:bg-themeblue hover:text-white py-3 px-6 
          text-themeblue border border-themeblue text-md font-semibold rounded-md transition-colors font-poppins"
        >
          WhatsApp Me
        </a>
      </div>

      {/* Status Prompt */}
      {status && (
        <p className="mt-4 text-themeblue font-semibold font-poppins">
          {status}
        </p>
      )}
    </section>
  );
};

export default CTA;
