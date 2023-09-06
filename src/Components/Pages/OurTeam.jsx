import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img from '../../Assetes/img/carousel-1.jpg';
import Members from '../Members';
function Ourteam() {
    return (
        <div>
            <Header />
            <div className='w-full'>
                <img className='absolute h-80 w-full object-cover' src={img} alt="/" />
                <div className='relative top-0 left-0 bg-black/30 h-80 w-full'>
                    <p data-aos="fade-down" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-6xl text-white font-Roboto pl-24 pt-24 font-semibold tracking-wide'>Our Team</p>
                    <p className='pl-24 text-white text-lg'>Home/Page/Our Team</p>
                </div>
            </div>

            <div className='py-24'>
                <Members />
            </div>
            <Footer />
        </div>
    )
}

export default Ourteam;