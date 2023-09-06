import React from 'react'
import {service} from '../Components/data';
import { Link } from 'react-router-dom';
import {BsArrowRightShort} from 'react-icons/bs';
function OurServices() {
  return (
    <div className='py-28 h-full relative' >
        <div>

            <p className='text-5xl tracking-wide text-center pb-14 text-[#555555] font-Roboto font-bold'><span>_</span>OUR Services<span>_</span></p>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 px-5 md:px-28 cursor-pointer  '>
            {
                service.map((item,key)=>
                <div key={key} data-aos="fade-up" data-aos-duration="1000" className='flex flex-col flex-grow  overflow-hidden group  items-center'>
                    <div>
                        <img className=' group-hover:scale-105 duration-500 overflow-hidden' src={item.img} alt="/" />
                    </div>
                    <div className='h-full justify-center  border-4 border-slate border-t-none  items-center w-full '>
                        <p className='text-xl py-5 text-[#5C5C5C] uppercase tracking-2 text-center font-bold'>{item.title}</p>
                        <p className='font-Roboto font-light text-lg text-[5C5C5C] text-center px-5'>{item.text}</p>
                        <div className='w-full text-brown flex  justify-center'>
                        <Link className='flex text-lg py-5'>Read More <span><BsArrowRightShort className='text-3xl '/></span></Link>
                        </div>
                    </div>
                    
                </div>
                )
            }
        </div>
    </div>
  )
}

export default OurServices;