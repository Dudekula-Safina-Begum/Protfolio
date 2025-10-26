import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-blue-700 text-gray-200 py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        
        <p className="text-sm mb-3 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold">Safina Begum</span>. All rights reserved.
        </p>
        
        <div className="flex gap-5 text-lg">
          <a href="mailto:safinabegum147@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Dudekula-Safina-Begum" target="_blank" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dudekula-safinabegum/" target="_blank" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
