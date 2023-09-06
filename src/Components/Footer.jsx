import React from 'react'
import { BiPhone } from 'react-icons/bi';
import { ImFacebook, ImLinkedin, ImLocation, ImTwitter, ImYoutube } from 'react-icons/im';
import { IoIosArrowForward } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='bg-[#353535] h-full'>
    <div className=' flex flex-row flex-wrap justify-between  space-y-5 lg:space-y-0  px-24 pt-20 pb-10 text-slate '>
      {/* 1 */}
      <div>
        <div >
          <p className='font-Roboto text-2xl font-medium tracking-wider'>Address</p>
        </div>

        <div className='space-y-2 pt-5'>
          <p className='flex gap-2 text-md'> <ImLocation  className='text-xl mt-1'/> 123 Street, New York, USA </p>
          <p className='flex gap-2 text-md'><BiPhone  className='text-xl mt-1'/>+012 345 67890</p>
          <p className='flex gap-2 text-md'><MdEmail className='text-xl mt-1' />info@example.com</p>
        </div>

        <div className='flex flex-row gap-2 pt-5'>
          <ImTwitter   className='h-9 w-9 p-2 border border-white hover:bg-white hover:text-brown duration-500 cursor-pointer'/>
          <ImFacebook   className='h-9 w-9 p-2 border border-white hover:bg-white hover:text-brown duration-500 cursor-pointer'/>
          <ImLinkedin className='h-9 w-9 p-2 border border-white hover:bg-white hover:text-brown duration-500 cursor-pointer' />
          <ImYoutube   className='h-9 w-9 p-2 border border-white hover:bg-white hover:text-brown duration-500 cursor-pointer'/>
         
        </div>

      </div>

      {/* 2 */}
      <div>

        <div>
          <p className='font-Roboto text-2xl font-medium tracking-wider'>Services</p>
        </div>

        <div className='pt-5'>
          <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2' />Genral Carpentry</p>
          <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2' />Furniture Remolding</p>
          <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2' />Wooden Floor</p>
          <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2' />Wooden Furniture</p>
          <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2' />Custtom Carpentry</p>
        </div>

      </div>

      {/* 3 */}
      <div>
        <div >
          <p className='font-Roboto text-2xl font-medium tracking-wider'>Quick Links</p>
        </div>

        <div className='pt-5'>
        <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2'/>About </p>
        <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2'/>Contact Us</p>
        <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2'/>Our Services</p>
        <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2'/>Term & Condtion</p>
        <p className=' flex text-md hover:tracking-wider hover:text-brown duration-300 cursor-pointer '><IoIosArrowForward className='font-lg mt-1 mr-2'/>Support</p>


        </div>
      </div>
      {/* 4 */}

      <div>
          <div>
            <p className='font-Roboto text-2xl font-medium tracking-wider'>Newsletter</p>
          </div>

          <div>
            <p className='pt-5 w-56'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          </div>

          <div className='mt-5 flex'>
          <input className='h-12  w-[300px] md:w-[200px] relative outline-none p-5' type="text" placeholder='Your Email' />
          <button className='bg-brown text-white right-20 h-10 mt-1 py-2 px-3 relative'>SignUp</button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Footer;