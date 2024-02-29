import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
const HomeText = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div
      className="text-white py-16 px-4 w-full absolute lg:static top-1/4" data-aos="fade-right">
      <div className="flex flex-col gap-6 container font-playfair font-extrabold text-3xl md:text-5xl lg:text-6xl">
        <h2>
          Welcome to Skate Republic
        </h2>
        <h2>
          Built by developers
        </h2>
        <h2>
          Built for Gamers
        </h2>
      </div>
    </div>
  );
};

export default HomeText;
