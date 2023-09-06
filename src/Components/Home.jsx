import React,{useEffect} from 'react'
import Header from './Header';
import AOS from "aos";
import "aos/dist/aos.css";

import Crousal from './Crousal';
import Crousal1 from '../Assetes/img/carousel-1.jpg';
import Crousal2 from '../Assetes/img/carousel-2.jpg';
import Crousal3 from '../Assetes/img/carousel-3.jpg';
import Section2 from './Section2';
import About from './About';
import OurServices from './OurServices';
import Choose from './Choose';
import Project1 from './Project1';
import Form from './Form';
import Members from './Members';
 import Footer from './Footer';
import { ImArrowUp2 } from 'react-icons/im';
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const slide = [
    {
      id: 1,
      img: Crousal1
    },
    {
      id: 2,
      img: Crousal2
    },
    {
      id: 3,
      img: Crousal3
    }
  ]
  return (
    <div className='z-20'>
      <Header />
      <div className={`bg-brown h-14  flex justify-center items-center text-white cursor-pointer  bottom-10 right-10 fixed w-12 p-2 z-20`}>
          <ImArrowUp2 size={20}/>
        </div>
      <Crousal autoSlide={true} autoSlideIntterval={3000}>
        {
          slide.map((i) =>
            <img src={i.img} alt='Crousal' />
          )
        }
        
      </Crousal>
      <Section2 />
      <About />
      <OurServices />
      <Choose />
      <Project1/>
      <Form/>
      <Members/>
        <Footer/>

    </div>
  )
}

export default Home;