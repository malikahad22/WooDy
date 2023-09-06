import React from 'react'
import img from '../Assetes/img/carousel-1.jpg';
import Header from './Header';
import Footer from './Footer';
import { ImWarning } from 'react-icons/im';
import { Link } from 'react-router-dom';
function Page() {
    return (
        <div>
            <Header />
            <div className='w-full '>
                <img className='absolute h-80 w-full object-cover' src={img} alt="/" />
                <div className='relative top-0 left-0 bg-black/30 h-80 w-full'>
                    <p data-aos="fade-down" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-6xl text-white font-Roboto pl-24 pt-24 font-semibold tracking-wide'>404 Error</p>
                    <p className='pl-24 text-white text-lg'>Home/Page/ 404 Page</p>
                </div>
            </div>
            <div className='h-screen bg-white w-full  flex flex-col items-center text-center justify-center'>

                <ImWarning className='text-8xl text-brown' />
                <p className='text-6xl py-5 font-semibold tracking-wide text-[#353535]'>404 Page</p>
                <p className='text-lg text-[#353535] w-[600px]'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                <Link className='bg-brown text-white px-16 py-5 mt-5' to={'/'}>Back To Home</Link>

            </div>
            <Footer />
        </div>
    )
}

export default Page;