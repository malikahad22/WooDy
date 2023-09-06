import React from 'react';
import {testimonial} from '../Components/data';
function Testimonial() {
  return (
    <div className='overflow-hidden relative'>
        <p>_Testimonials_</p>
        <div className='flex transition-transform duration-700  ease-in' style={{transform:`translateX(-${testimonial*100}%)`}}>
        {
                    testimonial.map((i)=>
                    <div className='w-[1500px]  border' >
                        <div>
                            <img src={i.img} alt="" />
                        </div>
                        <div>
                            <p>{i.text}</p>
                            <p>{i.name}</p>
                            <p>{i.pro}</p>
                        </div>
                    </div>
                    )
                }
        </div>
    </div>
  )
}

export default Testimonial;