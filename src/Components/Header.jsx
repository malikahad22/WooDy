import React, { useState,useEffect } from "react";
import {
  ImArrowRight2,
  ImClock,
  ImFacebook,
  ImInstagram,
  ImLinkedin,
  ImLocation,
  ImMenu,
  ImPhone,
  ImTwitter,
} from "react-icons/im";
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";

function Header() {
  const [status, setStatus] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {/* nav */}

      <div className="hidden md:flex flex-row justify-between  h-14 items-center bg-[#F5F5F5] px-10">
        <div className="flex gap-3">
          <div className="flex gap-1  justify-center">
            <ImLocation className="text-[#AB7442] mt-1 text-sm" />
            <p className="text-sm  font-light pt-1 font-Roboto">
              123 Street, New York,USA
            </p>
          </div>
          <div className="flex gap-1 h-full items-center">
            <ImClock className="text-[#AB7442] mt-1  text-sm " />
            <p className="text-sm pt-1 font-light font-Roboto">
              Mon-Fri:9.00 AM - 09.00 PM
            </p>
          </div>
        </div>

        <div className="flex gap-5 h-full items-center">
          <div className="flex gap-1 mt-2">
            <ImPhone className="text-[#AB7442]  text-md" />
            <p className="text-sm  font-light font-Roboto">+012 345 6789</p>
          </div>

          <div className="flex gap-1">
            <ImFacebook className="text-[#AB7442] text-xl font-bold bg-white h-8 w-8 p-2" />
            <ImTwitter className="text-[#AB7442] text-xl font-bold bg-white h-8 w-8 p-2" />
            <ImLinkedin className="text-[#AB7442] text-xl font-bold bg-white h-8 w-8 p-2" />
            <ImInstagram className="text-[#AB7442] text-xl font-bold bg-white h-8 w-8 p-2" />
          </div>
        </div>
      </div>

      {/* NAvBar */}
      <div className={` flex z-10 bg-white w-full justify-between h-24 items-center pl-10 
      ${isNavbarFixed ? 'fixed top-0 left-0 right-0 z-50 shadow-sm shadow-white duration-500' : 'relative duration-500 transition-all'}`}>
        <div className="text-3xl  font-bold text-brown ">
          <Link to='/'>WooDY</Link>
        </div>

        <div className=" hidden lg:flex gap-7 h-full items-center text-md font-Roboto ">
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/'>Home</Link>
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/about'>About</Link>
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/service'>Service</Link>
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/projects'>Project</Link>
          <div className="group">
            <Link className="flex hover:text-brown duration-200 uppercase font-normal gap-2 py-14 " to='/'>Page <span className="group"><MdKeyboardArrowDown className="text-md mt-1 group-hover:rotate-180" /></span></Link>
            <div className=" flex-col duration-500  flex translate-y-24  group-hover:translate-y-0 group absolute bg-white top-24 right-72 w-44 opacity-0 group-hover:opacity-100 shadow-lg shadow-white h-52 justify-center space-y-3  py-2  z-10">
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/feature'>Features</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/quote'>Free Quotes</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/team'>Our Team</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/'>Testimonial</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/*'>404 page</Link>
            </div>
          </div>
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/contact'>Contact</Link>
          <Link className="flex gap-4 bg-brown text-white justify-center h-full items-center w-52 font-normal text-center " to='/'>Get A Quote <ImArrowRight2 className=" bg-brown" /></Link>
        </div>
        <div className="flex lg:hidden pr-10  ">
          {status ?  <MdClose className="border z-20 p-2 h-10 w-12 cursor-pointer  group  duration-700 " onClick={() => setStatus(false)} /> :<ImMenu onClick={() => setStatus(true)} className="border p-2 h-10 w-12 z-10 cursor-pointer" size={30} /> }
          {
        status ?
          <div className={` flex-col left-0 py-5 lg:hidden z-10 transition-all duration-500 bg-white ${status ? 'translate-y-14 opacity-100 flex duration-500':'-translate-y-[300px] opacity-0'}   absolute z-10 gap-7  w-full items-center text-md font-Roboto `}>
            <Link className="hover:text-brown duration-200 uppercase font-normal" to='/'>Home</Link>
            <Link className="hover:text-brown duration-200 uppercase font-normal" to='/about'>About</Link>
            <Link className="hover:text-brown duration-200 uppercase font-normal" to='/service'>Service</Link>
            <Link className="hover:text-brown duration-200 uppercase font-normal" to='/projects'>Project</Link>
          <Link className="hover:text-brown duration-200 uppercase font-normal" to='/contact'>Contact</Link>

            <div className="group">
              <Link className="flex hover:text-brown duration-200 uppercase font-normal gap-2 " to='/'>Page <span className="group-hover:rotate-180  duration-300"><MdKeyboardArrowDown className="text-md mt-1" /></span></Link>
              <div className=" flex-col duration-500  flex translate-y-24  group-hover:translate-y-0  absolute bg-brown/30 left-0  w-full opacity-0 group-hover:opacity-100 shadow-lg shadow-white h-52 justify-center space-y-3  py-2  z-10">
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/feature'>Features</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/quote'>Free Quotes</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/team'>Our Team</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/'>Testimonial</Link>
              <Link className=" duration-200 uppercase tracking-wide  hover:bg-slate pl-4" to='/*'>404 page</Link>
            </div>
            </div>
          </div> : null
      }
        </div>

      </div>

     
    </div>
  );
}

export default Header;
