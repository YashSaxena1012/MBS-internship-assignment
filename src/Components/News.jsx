import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2"
import skaterpark from '../assets/Images/skaterpark.webp';
import community from '../assets/Images/community.jpeg';
import custom from '../assets/Images/custom.jpg';
import championship from '../assets/Images/championship.jpg';
import Aos from 'aos';
import "aos/dist/aos.css"
const News = () => {
    useEffect(()=>{
        Aos.init();
    })
    const news = [
        {
          id: 1,
          title: 'New Skateparks Unveiled',
          desc: 'Explore three new skateparks in Skater Republic: Urban Jungle, Coastal Bay, and Neon Nights. Each park offers unique challenges and environments for skaters of all levels.',
          img: skaterpark
        },
        {
          id: 2,
          title: 'Skateboarding Championships 2024',
          desc: 'Get ready for the biggest skateboarding event of the year! The Skater Republic Skateboarding Championships are back, featuring top skaters from around the world competing for glory.',
          img: championship
        },
        {
          id: 3,
          title: 'New Gear and Customization Options',
          desc: 'Customize your skater with new gear and clothing options. From helmets to decks, there are plenty of ways to make your skater stand out on the streets.',
          img: custom
        },
        {
          id: 4,
          title: 'Community Spotlight: Skater Stories',
          desc: 'Check out some of the most epic skateboarding stories from the Skater Republic community. From crazy tricks to heartwarming moments, these stories will inspire you to hit the streets and skate.',
          img: community
        },
    ];

    const [mail,setMail]=useState("")
    const handleSubmit=()=>{
        if (
            mail === "" 
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please enter the email",
            });
            return;
          }
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
          setMail("")
    }
    return (
        <div className="bg-gray-900 opacity-90 py-16 sm:py-24 lg:py-32 font-playfair" id="News">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-around">
            <div className='flex gap-8 w-full overflow-x-auto no-scrollbar p-4' data-aos="fade-right">
                {news.map((item) => {
                    return (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow h-30 hover:shadow-md hover:-translate-y-4 hover:shadow-gray-300 duration-300">
                            <img className="rounded-t-lg h-1/4 w-full object-cover" src={item.img} alt="" />
                            <div className="p-5 w-60">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mx-auto flex flex-col justify-center md:w-6/12" data-aos="fade-up">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter. Stay Connected.</h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">We're still working on it! The skate. newsletter is the best way to stay up to date on all the latest skate. news, behind-the-scenes content, updates and more (including other EA news, products, events, and promotions) by email.</p>
                <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" value={mail} onChange={(e)=>setMail(e.target.value)} type="email" autoComplete="email" required className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white focus:ring-2 focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email" />
                    <button type="submit" onClick={handleSubmit} className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default News;
