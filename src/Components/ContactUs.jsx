import React, { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosSend } from "react-icons/io";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import Aos from 'aos';
import "aos/dist/aos.css"
import Swal from "sweetalert2";
const ContactUs = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      form.name === "" ||
      form.email === "" ||
      form.subject == "" ||
      form.message == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
    });
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg opacity-90" data-aos="fade-up" id="Contact Us">
      <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-playfair">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <ul className="mt-12 space-y-8">
            <li className="flex items-center">
              <SiGmail className="text-white font-bold text-xl" />
              <a href="/" className="text-white text-sm ml-3">
                <strong>info@example.com</strong>
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-white font-bold text-xl" />
              <a href="/" className="text-white text-sm ml-3">
                <strong>+158 996 888</strong>
              </a>
            </li>
            <li className="flex items-center">
              <HiBuildingOffice2 className="text-white font-bold text-xl" />
              <a href="/" className="text-white text-sm ml-3">
                <strong>123 Street 256 House</strong>
              </a>
            </li>
          </ul>
          <ul className="flex mt-12 space-x-4">
            <li className="bg-gray-900 hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:animate-wiggle">
              <TiSocialFacebook className="text-white font-bold text-2xl" />
            </li>
            <li className="bg-gray-900 hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:animate-wiggle">
              <TiSocialInstagram className="text-white font-bold text-2xl" />
            </li>
            <li className="bg-gray-900 hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:animate-wiggle">
              <TiSocialLinkedin className="text-white font-bold text-2xl" />
            </li>
            <li className="bg-gray-900 hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:animate-wiggle">
              <TiSocialTwitter className="text-white font-bold text-2xl" />
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <p className="text-2xl font-semibold text-gray-600">
            Hey There! Fill me Out
          </p>

          <form className="mt-8 space-y-4 text-gray-800">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              required
              className="w-full rounded-md py-3 px-4 text-sm outline-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              required
              className="w-full rounded-md py-3 px-4 text-sm outline-gray-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={(e) => handleChange(e)}
              required
              className="w-full rounded-md py-3 px-4 text-sm outline-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              value={form.message}
              onChange={(e) => handleChange(e)}
              required
              className="w-full rounded-md px-4 text-sm pt-3 outline-gray-500"
            ></textarea>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-gray-900 hover:bg-gray-800 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
            >
              <IoIosSend className="text-xl m-1" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
