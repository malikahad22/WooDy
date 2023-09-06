import React from 'react'
import quote from '../Assetes/img/quote.jpg';
function Form() {
    return (
        <div className='grid grid-cols-1 h-full md:grid-cols-2 w-full'>

            <div className='h-full w-full'>
                <img className='h-full' src={quote} alt="" />
            </div>


            <div className='flex flex-col py-24  bg-slate pl-10 pr-10 md:pr-28 box-border justify-center'  data-aos="fade-In" data-aos-duration="500">

                <div>
                    <p className='text-6xl font-Roboto font-semibold tracking-wide text-[#555555]'>Free Quote_</p>
                    <p className='text-lg text-[#555555] pt-8 text-justify'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                </div>

                <form className='pt-8 space-y-5'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <input type="text" className='h-16 px-3 w-full   focus:border-4 border-brown/30 outline-none text-md' placeholder='Your Name' />
                        <input type="text" className='h-16 px-3 w-full  focus:border-4 focus:border-brown/30 outline-none text-md' placeholder='Your Email' />
                    </div>

                    <div className='flex gap-5 flex-col md:flex-row' >
                    <input type="text" className='h-16 px-3 w-full focus:border-4 border-brown/30 outline-none text-md' placeholder='Your Mobile' />
                        <select className='h-16 px-3 w-full pl-3 focus:border-4 border-brown/30 outline-none text-md' id="cars" name="cars">
                            <option >Select a Service</option>
                            <option >Serrvice 1</option>
                            <option >Service 2</option>
                            <option >Service 3</option>
                            <option >Service 4</option>
                        </select>
                    </div>

                    <div>
                        <textarea className='h-16 p-1 w-full  focus:border-4 focus:border-brown/30 outline-none text-md' name="" id="" cols="30" rows="10" placeholder='Special Note'></textarea>
                    </div>

                    <div>
                        <input className='h-16 p-1 w-full bg-brown text-white  font-medium cursor-pointer hover:bg-brown/80 duration-200 focus:border-4 focus:border-brown/30 outline-none text-md' type="submit" />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Form;