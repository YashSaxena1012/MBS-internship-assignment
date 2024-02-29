import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
function About() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className=" mt-5 md:-mt-5 mb-3 lg:-mb-10 lg:-mt-24 text-white flex flex-col md:flex-row font-playfair bg-black bg-opacity-65 w-full items-center " data-aos="fade-up">
      <div className="text-3xl font-bold text-center rounded-lg w-full md:w-2/6" >About Us
        </div>
        <div className="text-lg leading-loose font-bold p-4 w-full md:w-4/6">
            Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.
    </div>
  </div>
  );
}

export default About;
