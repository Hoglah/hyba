import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-themeblue text-2xl font-bold font-poppins">
            HYBA <span className="text-white">.</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
            Building modern websites, creative designs, and digital solutions
            that help brands stand out.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-white text-lg font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#home" className="hover:text-themeblue">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-themeblue">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-themeblue">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-themeblue">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-themeblue">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-white text-lg font-semibold">Get In Touch</h2>
          <div className="flex gap-4">
            <a
              href="tel:+233556898951"
              className="bg-themeblue hover:bg-white hover:text-themebg py-2 px-4 rounded-md text-sm font-semibold transition-colors"
            >
              Call Me
            </a>
            <a
              href="https://wa.me/233556898951"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-white hover:text-green-700 py-2 px-4 rounded-md text-sm font-semibold transition-colors"
            >
              WhatsApp Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-themeblue"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-themeblue"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-themeblue"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-themeblue"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HYBA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
