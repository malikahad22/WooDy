import React from 'react'
import { Member } from './data';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Members() {

  return (
    <div className='flex flex-col justify-center items-center h-full max-w-full'>

        <p className='text-5xl font-Roboto text-[#353535] font-bold tracking-wide mt-20'>_Team Members_</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 py-10 gap-5 max-w-full justify-center items-center'>
        {
            Member.map((m)=>
            <div className='group w-full  md:w-60 ' data-aos="fade-up" data-aos-duration="1000"> 
                <div className='overflow-hidden relative'>
                    <img className='group-hover:scale-110 duration-300' src={m.img} alt="" />
                    <div className='-translate-x-10 group-hover:translate-x-0 duration-500 flex flex-col justify-center  absolute top-0 h-full w-full'>
                        <FaFacebook className='h-8  w-8 duration-500  cursor-pointer text-brown bg-white p-2 hover:bg-brown hover:text-white'/>
                        <FaTwitter className='h-8  w-8 duration-500  cursor-pointer text-brown bg-white p-2 hover:bg-brown hover:text-white'/>
                        <FaInstagram className='h-8  w-8 duration-500  cursor-pointer text-brown bg-white p-2 hover:bg-brown hover:text-white'/>
                    </div>
                </div>
                <div className='text-center pt-5 pb-10'>
                    <p className='text-2xl font-Roboto text-[#353535]  tracking-wide font-bold '>{m.name}</p>
                    <p className='text-[#353535]'>{m.des}</p>
                </div>
            </div>
            )
        }
</div>

    </div>
  )
}

export default Members;