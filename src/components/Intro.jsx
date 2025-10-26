import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { leftImg } from "../assets/img";


const Intro = () => {
  const navigat = useNavigate();

  const submitHandler = () => {
    navigat("/Contact");
  };
  return (
    <>
      <div className="w-full   pt-24 sm:h-full sm:pt-28  sm:flex sm:items-center sm:justify-center gap-5 overflow-hidden">
        <div className="flex-col mb-5 justify-center w-full sm:mb-0  sm:mt-8 sm:w-1/3 sm:h-3/4 p-5   ">
          <h1 className="font-black text-3xl">Hi, I’m Safina Begum,</h1>
          <h2 className="text-slate-600 my-2 text-lg">Front-End Developer</h2>
          <p className="text-slate-500">
            I enjoy learning new technologies and designing responsive,
            user-friendly websites that work beautifully across all devices.
          </p>
          <div className="item-center flex mt-10  justify-around">
            <button
              onClick={() => window.open("Safina_Begum_Resume.pdf", "_blank")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3   rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover "
            src={leftImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
