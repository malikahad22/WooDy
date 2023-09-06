import React from "react";
import { TiTick } from "react-icons/ti";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaHeadphones, FaDraftingCompass } from "react-icons/fa";
import featureImg from "../Assetes/img/feature.jpg";
function Choose() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  bg-slate ">
      <div className="h-full max-w-full flex flex-col justify-center pl-16 bg-slate py-5 md:py-0">
        <div>
          <p className="text-6xl font-bold text-[#555555]">Why Choose Us _</p>
          <p className="text-lg font-Roboto text-[#555555] pr-20 font-light mt-7">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5   mt-7 ">
          <div className="flex flex-row ">
            <div>
              <TiTick className="text-brown text-6xl bg-white p-2" />
            </div>
            <div className="pl-5">
              <p className="text-xl text-[#555555] tracking-normal">Quality</p>
              <p className="text-2xl font-medium font-Roboto text-[#555555]">Services</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className>
              <BsFillPersonCheckFill className="text-brown text-6xl bg-white p-2" />
            </div>
            <div className="pl-5">
              <p  className="text-xl text-[#555555] tracking-normal">
                Creative
              </p>
              <p className="text-2xl font-medium font-Roboto text-[#555555]">Designer</p>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className>
              <FaDraftingCompass className="text-brown text-6xl bg-white p-2" />
            </div>
            <div className="pl-5">
              <p  className="text-xl text-[#555555] tracking-normal">
                Free
              </p>
              <p className="text-2xl font-medium font-Roboto text-[#555555]">Consultation</p>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className>
              <FaHeadphones className="text-brown text-6xl bg-white p-2" />
            </div>
            <div className="pl-5">
              <p  className="text-xl text-[#555555] tracking-normal">
                Customer
              </p>
              <p className="text-2xl font-medium font-Roboto text-[#555555]">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full">
        <img
          className="h-[500px] w-full  object-cover"
          src={featureImg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Choose;
