import React, { useState } from "react";
import logo from "../assets/Images/logo.jpg";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-black text-white mx-auto flex sticky top-0 left-0 justify-around items-center z-10 w-full font-playfair">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-20 mr-4" />
          <h1 className="text-xl">Skater</h1>
        </div>
        <nav className="hidden md:flex md:gap-8 lg:gap-14">
          <div name="about" className=" relative group">
            <p>About</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group">
            <p>Media</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group">
            <p>News</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group">
            <p>Purchase</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group">
            <p>Socials</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group">
            <p>Contact Us</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
        </nav>

        {/* for mobile */}
        <div className="md:hidden">
          <button
            className="text-2xl text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <RxCross1 /> : <IoMdMenu />}
          </button>
          {toggle && (
            <nav className="flex absolute bg-black top-16 left-0 w-full p-4 flex-wrap gap-2 justify-center ">
              <div name="about" className=" relative group w-1/4 text-center mb-4">
            <p>About</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group w-1/4 text-center">
            <p>Media</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group w-1/4 text-center">
            <p>News</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group w-1/4 text-center">
            <p>Purchase</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group w-1/4 text-center">
            <p>Socials</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
          <div name="about" className=" relative group w-1/4 text-center">
            <p>Contact Us</p>
            <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-200 transition-all group-hover:w-full"></span>
          </div>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
