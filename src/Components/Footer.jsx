import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-500" data-aos="fade-right">Quick Contact</h2>
          <p className="text-sm" data-aos="fade-right">
            At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.
          </p>
          <div className="space-y-2" data-aos="fade-right">
            <div className="flex items-center space-x-2">
           <IoLocationOutline className='text-orange-500 font-bold transition-transform duration-300 ease-in-out  hover:scale-110'/>
              <span>Sydney, Australia</span>
            </div>
            <div className="flex items-center space-x-2">
       <IoCall className='text-orange-500 font-bold transition-transform duration-300 ease-in-out  hover:scale-110'/>
              <span>0468328227</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdOutlineMailOutline className='text-orange-500 font-bold transition-transform duration-300 ease-in-out  hover:scale-110'/>
              <span>Email us</span>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-4 opening-hours" data-aos="fade-left">
          <h3 className="text-lg font-semibold text-white">Opening Hours</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className='font-semibold text-orange-500'>Mon to Fri:</span>
              <span >............................................................................................. 9:00AM | 5:00PM</span>
            </div>
            <div className="flex justify-between">
              <span className='font-semibold text-orange-500'>Sat to Sun:</span>
              <span>....................................................................................... Appointments Only</span>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-white  text-dark font-bold py-2 px-4 w-full rounded-md transition-transform duration-300 ease-in-out  hover:scale-110">
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4" >
          <div className=' d-flex gap-3 social-media' >
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300  text-gray-800 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaInstagram />
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300  text-gray-800 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaFacebook/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300  text-gray-800 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaTwitter/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300  text-gray-800 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaTelegram/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300  text-gray-800 transition-transform duration-300 ease-in-out  hover:scale-110'>
<FaWordpress/>
</span>
</div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            2024 © All Rights Reserved | Developed with <span className="text-red-500">❤</span> by <a href="#" className="text-orange-500 hover:underline text-decoration-none">Psyber Inc</a>
          </div>
          <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110"
    >
      <FaArrowUp />
    </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
