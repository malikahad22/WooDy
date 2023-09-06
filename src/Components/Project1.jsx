import React from "react";
import { project } from "./data";
import {FaLink} from 'react-icons/fa';
import {AiOutlineEye} from 'react-icons/ai';
function Project() {
  return (
    <div className="py-28 h-full relative">
      <div>
        <p className="text-5xl tracking-wide text-center pb-14 text-[#555555] font-Roboto font-bold">
          <span>_</span>OUR Pojects<span>_</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 px-5 md:px-28 cursor-pointer  ">
        {project.map((item, key) => (
          <div
            key={key}
            className="flex flex-col  relative  overflow-hidden group  items-center"
            data-aos="fade-up" data-aos-duration="1000"
          >
            <div className="relative  overflow-hidden">
        <img
                className="group-hover:scale-110  duration-500"
                src={item.img}
                alt="/"
              />
    
              <div className="group-hover:bg-black/60 absolute flex bottom-0 justify-center items-center gap-2 overflow-hidden h-full w-full overflow-y-hidden top-0">
                <AiOutlineEye className="text-white h-10 w-10 p-2 border hidden group-hover:flex hover:bg-white hover:text-[#555555] duration-300 ease-in"/>
                <FaLink className="text-white h-10 w-10 p-2 border hidden group-hover:flex hover:bg-white hover:text-[#555555] duration-300 ease-in"/>
              </div>
            </div>
            <div className="pl-7 justify-center  border-4 border-slate border-t-none  items-center w-full ">
              <p className="text-xl text-brown pt-5 font-Roboto font-medium tracking-wide">
                {item.title}
              </p>
              <p className="text-xl pt-3 pb-5 font-semibold tracking-wide font-Roboto text-[#555555]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
