import React, { useEffect } from "react";
import bgvideo from "../assets/Videos/bgvideo.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="-mt-20">
          <video
            autoPlay
            muted
            loop
            className=" inset-0 object-cover w-full opacity-80 z-10 h-screen"
            data-aos="zoom-in"
          >
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
    </div>
  );
}

export default Home;
