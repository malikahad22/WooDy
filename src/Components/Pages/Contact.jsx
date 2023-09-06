import React from 'react'
import img from '../../Assetes/img/carousel-1.jpg';
import Header from '../Header'
import Footer from '../Footer'
import MAp from './MAp';
function Contact() {
    return (
        <div>
            <Header />
            <div className='w-full'>
                <img className='absolute h-80 w-full object-cover' src={img} alt="/" />
                <div className='relative top-0 left-0 bg-black/30 h-80 w-full'>
                    <p data-aos="fade-down" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-6xl text-white font-Roboto pl-24 pt-24 font-semibold tracking-wide'>Contact</p>
                    <p className='pl-24 text-white text-lg'>Home/Page/Contact</p>
                </div>

                <div className='flex flex-col md:flex-row h-full bg-slate w-full my-24' >
                    <div className='flex flex-col content-between py-20 pl-24 pr-32 h-full w-full bg-slate'>
                        <p className='text-4xl font-Roboto font-bold text-[#353535] '>Contact Us_</p>
                        <p className=' text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi numquam voluptatem ad ratione necessitatibus veritatis dolore rerum ab ipsam cum distinctio mollitia soluta beatae, inventore debitis quaerat omnis cupiditate cumque.</p>
                        <form className='space-y-5' >
                            <div className='flex flex-col md:flex-row w-full gap-2 mt-5'>
                                <div>
                                    <input className='h-12 w-[250px] focus:blue-lg outline-none border-2 px-2 border-brown/20' type="text" placeholder='your Name' />
                                </div>
                                <div>
                                    <input className='h-12 w-[250px] outline-none border-2 px-2 border-brown/20' type="text" placeholder='Your Email' />
                                </div>
                            </div>
                            <div>
                                <input className='h-12 w-full outline-none border-2 px-2 border-brown/20' type="text" placeholder='Subject' />
                            </div>
                            <div>
                                <textarea className='h-20 w-full  outline-none border-2 p-2 border-brown/20' name="Message" id="" cols="30" rows="10" placeholder='Message'> </textarea>
                            </div>
                            <div>
                                <button className='w-full bg-brown text-white text-lg h-12'>Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full'>
                        <MAp />
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Contact;