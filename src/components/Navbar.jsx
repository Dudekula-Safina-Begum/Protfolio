import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between px-6 py-4 z-50">
      <h1 className="text-2xl font-bold text-blue-500">SAFINA BEGUM</h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
        >
          Contact
        </ScrollLink>
        <a
          href="/Safina_Begum_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Resume
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)}>{open ? "✖" : "☰"}</button>
      </div>

      {open && (
        <div className="flex flex-col absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 md:hidden">
          <ScrollLink
            onClick={() => setOpen(false)}
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
          >
            Home
          </ScrollLink>
          <ScrollLink
            onClick={() => setOpen(false)}
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
          >
            About
          </ScrollLink>
          <ScrollLink
            onClick={() => setOpen(false)}
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            onClick={() => setOpen(false)}
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            onClick={() => setOpen(false)}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold"
          >
            Contact
          </ScrollLink>
          <a
          href="Safina_Begum_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Resume
        </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
