import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiCheckboxSquare } from 'react-icons/bi';

function Crousal({ children: slides, autoSlide = true, autoSlideInterval = 3000 }) {
    const [slide, setSlide] = useState(0);
   
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    })
    const prev = () => setSlide(slide => slide === 0 ? slides.length - 1 : slide - 1)
    const next = () => setSlide(slide => slide === slides.length - 1 ? 0 : slide + 1)
    return (
        <div className=' overflow-hidden relative  h-full' >
            <div className='flex transition-transform duration-700  ease-in' style={{ transform: `translateX(-${slide * 100}%)` }}> {slides}</div>
            <div className=' bg-black/60 absolute flex text-center  flex-col justify-center items-center h-full w-full pb-3  md:pt-20 top-0 left-0'>

                <div className='text-white space-y-1 md:space-y-3 lg:space-y-5  '>
                    <p  className=' tracking-wide font-medium uppercase text-sm md:text-lg lg:text-xl font-Roboto'>Welcome To WooDY</p>
           
                     <p data-aos="fade-down" data-aos-duration='1000' className='lg:text-6xl md:text-4xl text-2xl font-bold font-Roboto [line-height:40px] lg:[line-height:70px] tracking-wider'>Best Carpenter &<br /><span className='text-[2rem] md:text-[4rem] '> Craftman Services</span></p>
                      
                    <p className=' text-md sm:text-lg md:text-xl tracking-wide font-medium w-[500px] md:w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio sapiente voluptates. Veniam, eveniet velit!</p>
                </div>

                <div className='mt-10 space-x-5 hidden lg:flex'>
                    <button data-aos="fade-right" data-aos-duration='1000' className='bg-brown hover:opacity-80 duration-300 py-4 px-12 text-white font-medium text-lg'>Read More</button>
                    <button  data-aos="fade-left" data-aos-duration='1000' className='bg-white py-4 px-12  font-medium text-lg'>Free Quote</button>
                </div>
                <div className='flex justify-center  absolute mx-auto w-full bottom-5  gap-5'>
                    <button>
                        <IoIosArrowBack onClick={prev} className='text-4xl font-extralight cursor-pointer border h-10 w-10 text-center text-white hover:bg-brown/70 hover:border-brown/70 transition-all duration-300 ease-in-out' />
                    </button>
                    <div className='w-16 flex items-center justify-center'>
                        {
                            slides.map((i, key) =>
                                <div>
                                    <BiCheckboxSquare className={` text-xl ${slide === key ? "text-brown" : "text-white"}`} />
                                </div>
                            )
                        }
                    </div>
                    <button>
                        <IoIosArrowForward onClick={next} className='text-4xl font-extralight cursor-pointer border h-10 w-10 text-center text-white hover:bg-brown/70 hover:border-brown/70 transition-all duration-300 ease-in-out' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Crousal;