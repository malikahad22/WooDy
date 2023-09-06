import React from 'react'
import {BsFillPersonCheckFill} from 'react-icons/bs';
import {TiTick} from 'react-icons/ti';
import {FaHeadphones,FaDraftingCompass} from 'react-icons/fa'
function Section2() {
    const data = [
        {
            logo:<BsFillPersonCheckFill/>,
            number:"01",
            title:"Creative Designers"
        },
        {
            logo:<TiTick/>,
            number:"02",
            title:"Quality Products"
        },
        {
            logo:<FaDraftingCompass/>,
            number:"03",
            title:"Free Consultation"
        },
        {
            logo:<FaHeadphones/>,
            number:"04",
            title:"Customer Support"
        }
    ]
  return (
    <div className='flex w-full flex-wrap items-center py-28 justify-center gap-10'>
       {
         data.map((item)=>
         <div className='w-[250px]' data-aos ="fade-in" >
             <div className='flex justify-between'>
                <p className='text-4xl  bg-slate p-2 text-brown'>{item.logo}</p>
                <p className='text-6xl text-slate font-semibold font-Roboto'>{item.number}</p>
             </div>
             <p className='text-black text-xl font-medium mt-7 tracking-normal font-Roboto'>{item.title}</p>
         </div>
         )
       }
    </div>
  )
}

export default Section2;