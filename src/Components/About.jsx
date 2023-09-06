import React from 'react'
import { TiGroup, TiTick } from 'react-icons/ti';
import CountUp from 'react-countup';
import AboutImg from '../Assetes/img/about.jpg';
function About() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  bg-slate '>
            <div className='h-full'>
                <img className='h-[500px] w-full  object-cover' src={AboutImg} alt="" />
            </div>

            <div className='h-full max-w-full flex flex-col justify-center pl-16 bg-slate py-5 md:py-0'>
                <div>
                    <p className='text-6xl font-bold text-[#000]'>About _</p>
                    <p className='text-lg font-Roboto text-[#555555] pr-20 font-light mt-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                </div>

                <div className='flex flex-row gap-5 mt-7 '>
                    <div className='flex flex-row'>
                        <div className>
                            <TiGroup className='text-brown text-6xl bg-white p-2' />
                        </div>
                        <div className='pl-5'>
                        <p className='text-3xl text-brown font-semibold font-Roboto tracking-wide'><CountUp separator='' end={1234} /></p>
                            <p className='text-lg text-[#555555] font-medium'>Happy Clients</p>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className>
                            <TiTick className='text-brown text-6xl bg-white p-2' />
                        </div>
                        <div className='pl-5'>
                        <p className='text-3xl text-brown font-semibold font-Roboto tracking-wide'><CountUp separator='' end={1234} /></p>
                            <p className='text-lg text-[#555555] font-medium'>Project Done</p>
                        </div>
                    </div>



                </div>

                <div>
                    <button className='bg-brown text-white py-5 px-12 mt-8 font-normal hover:bg-brown/70 duration-300 font-Roboto tracking-wide'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About;