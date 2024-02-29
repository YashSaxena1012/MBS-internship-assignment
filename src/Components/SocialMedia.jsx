import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../assets/Images/user1.jpeg";
import user2 from "../assets/Images/user2.jpeg";
import user3 from "../assets/Images/user3.jpg";
import user4 from "../assets/Images/user4.jpeg";
import srimg1 from "../assets/Images/srimg1.jpg";
import srimg2 from "../assets/Images/srimg2.jpg";
import srimg3 from "../assets/Images/srimg3.jpg";
import srimg4 from "../assets/Images/srimg4.jpg";
import srimg5 from "../assets/Images/srimg5.avif";

const TestimonialSlider = () => {
  const data = [
    {
      name: "Alice",
      testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      desig: "User",
      img: user1,
    },
    {
      name: "John",
      testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      desig: "CEO",
      img: user2,
    },
    {
      name: "Sam",
      testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      desig: "Product Manager",
      img: user3,
    },
    {
      name: "Carla",
      testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      desig: "Developer",
      img: user4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
  };

  const settingsImg = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode:true,
    arrows:false,
  };
  const imageArray=[srimg1,srimg2,srimg3,srimg4,srimg5];
  return (
    <div className="bg-gray-900 opacity-90 p-4">
    <div className="mt-4 w-full md:w-3/4  mx-auto text-black">
      <h2 className="text-3xl font-playfair mb-4 text-white">Social Media Testimonials</h2>
      <Slider {...settings} className="mb-10 group group-hover:blur-md">
        {data.map((item, index) => (
          <div key={index} className="hover:blur-none">
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg mx-3">
              <div className="flex justify-center">
                <div className="max-w-3xl">
                  <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                    <div className="md:flex md:flex-row">
                      <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                        <img
                          src={item.img}
                          className="rounded-full shadow-md h-20 w-20"
                          alt="user avatar"
                          />
                      </div>
                      <div className="md:ml-6">
                        <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                          {item.testimony}
                        </p>
                        <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                          {item.name}
                        </p>
                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                          {item.desig}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h2 className="text-white font-playfair mb-4 text-3xl">Social Stories</h2>
      <Slider {...settingsImg}>
        {imageArray.map((item,index)=>{
          return <img src={item} key={index} alt='game pics' className="p-2 rounded-md h-1/2"/>
        })}
      </Slider>
    </div>
  </div>
  );
};

export default TestimonialSlider;
