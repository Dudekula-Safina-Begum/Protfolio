import React from "react";
import { rightImg } from "../assets/img";

const About = () => {
  return (
    <section id="about" className="pt-16 bg-gray-100">
      {/* Heading */}
      <div className="flex justify-center mb-10 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 underline">
          ABOUT ME
        </h1>
      </div>

      {/* Content */}
      <div className=" sm:w-full  sm:my-5 md:flex items-center justify-center gap-8 px-4 md:px-20">
        {/* Image */}
        <div className="w-full md:w-1/3   rounded-2xl overflow-hidden">
          <img
            src={rightImg}
            alt="Safina Begum"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full  sm:w-full  md:w-1/3 flex flex-col justify-center">
          <p className="text-slate-600 mb-5">
            Hi, I'm Safina Begum, a passionate Front-End Developer with a keen
            eye for clean design and smooth user experiences. I recently
            completed my MSc in Computer Science and love bringing ideas to life
            using HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy
            learning new technologies and designing responsive, user-friendly
            websites that work beautifully across all devices.
          </p>
          <p className="text-slate-500 ">
            Skills: HTML | CSS | JavaScript | React | Tailwind CSS | Python | SQL | AWS
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
