import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import gimg1 from '../assets/Images/gimg1.jpeg'
import gimg2 from '../assets/Images/gimg2.jpg'
import gimg3 from '../assets/Images/gimg3.jpeg'
import gimg4 from '../assets/Images/gimg4.jpeg'
import gimg5 from '../assets/Images/gimg5.jpeg'
import valo from '../assets/Videos/valo.mp4'
import gtav from '../assets/Videos/gtav.mp4'
import csgo from '../assets/Videos/csgo.mp4'
import fortnite from '../assets/Videos/fortnite.mp4'
import as9 from '../assets/Videos/as9.mp4'

function Media() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const imagesRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (imagesRef.current) {
        const containerWidth = window.innerWidth;
        const images = imagesRef.current.querySelectorAll('.media-item');
        images.forEach((image) => {
          image.style.width = `${containerWidth/2}px`;
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [
    {
      id: 1,
      name: 'Asphalt 9',
      image: gimg1,
      video: as9,
    },
    {
      id: 2,
      name: 'GTA V',
      image: gimg2,
      video: gtav,
    },
    {
      id: 3,
      name: 'CSGO',
      image: gimg3,
      video: csgo,
    },
    {
      id: 4,
      name: 'Fortnite',
      image: gimg4,
      video: fortnite,
    },
    {
      id: 5,
      name: 'Valorant',
      image: gimg5,
      video: valo,
    },
  ];

  return (
    <>
      <div className="text-center container h-full flex flex-col" id="Media">
        <h2 className="m-4 text-2xl">Other Trending Games</h2>
        <div
          ref={imagesRef}
          className="flex overflow-x-scroll px-4 py-4 scroll-smooth no-scrollbar"
          data-aos="fade-up"
        >
          {images.map((item) => (
            <div
              key={item.id}
              className="media-item h-[120px] md:h-[350px] rounded-lg transition-all duration-300 ease-in-out cursor-pointer relative flex-shrink-0 mr-3 lg:mr-8 xl:-mr-32">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 rounded-md hover:opacity-100 opacity-0 hover:z-2 h-full object-cover"
              />
              <img
                src={item.image}
                className="h-full object-cover rounded-md hover:border-[4px] opacity-100 hover:opacity-0 transition-all duration-100 ease-in"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Media;

