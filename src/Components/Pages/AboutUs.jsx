import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img from '../../Assetes/img/carousel-1.jpg';
import Section2 from '../Section2';
function AboutUs() {
  return (
    <div>
        <Header/>
        <div className='w-full '>
                <img className='absolute h-80 w-full object-cover' src={img} alt="/" />
                <div className='relative top-0 left-0 bg-black/30 h-80 w-full'>
                    <p data-aos="fade-down" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-6xl text-white font-Roboto pl-24 pt-24 font-semibold tracking-wide'>About Us</p>
                    <p className='pl-24 text-white text-lg'>Home/Page/ About us</p>
                </div>
            </div>
            <Section2/>
        <Footer/>
    </div>
  )
}

export default AboutUs