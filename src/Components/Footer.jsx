import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCall } from "react-icons/io5";
import { MdAccessTimeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaWordpress, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-500" data-aos="fade-right">Quick Contact</h2>
            <p className="text-sm" data-aos="fade-right">
              At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.
            </p>
            <div className="space-y-2" data-aos="fade-right">
              <div className="flex items-center space-x-2">
                <IoLocationOutline className='text-orange-500 text-xl transition-transform duration-300 ease-in-out hover:scale-110' />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoCall className='text-orange-500 text-xl transition-transform duration-300 ease-in-out hover:scale-110' />
                <span>0468328227</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineMailOutline className='text-orange-500 text-xl transition-transform duration-300 ease-in-out hover:scale-110' />
                <span>Email us</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4" data-aos="fade-left">
            <h3 className="text-lg font-semibold text-white">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className='font-semibold text-orange-500'>Mon to Fri:</span>
                <span>9:00AM | 5:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className='font-semibold text-orange-500'>Sat to Sun:</span>
                <span>Appointments Only</span>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-white text-dark font-bold py-2 px-4 w-full rounded-md transition-transform duration-300 ease-in-out hover:scale-110">
              Schedule a Visit
            </button>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className='bg-orange-500 p-2 text-white hover:bg-slate-600 hover:text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110'>
                <FaInstagram />
              </a>
              <a href="#" className='bg-orange-500 p-2 text-white hover:bg-slate-600 hover:text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110'>
                <FaFacebook />
              </a>
              <a href="#" className='bg-orange-500 text-white p-2 hover:bg-slate-600 hover:text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110'>
                <FaTwitter />
              </a>
              <a href="#" className='bg-orange-500 text-white p-2 hover:bg-slate-600 hover:text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110'>
                <FaTelegram />
              </a>
              <a href="#" className='bg-orange-500 text-white p-2 hover:bg-slate-600 hover:text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110'>
                <FaWordpress />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              2024 © All Rights Reserved | Developed with <span className="text-red-500">❤</span> by <a href="#" className="text-orange-500 hover:underline">Psyber Inc</a>
            </div>
          </div>
        </div>
      </div>
<div className="mt-4 m-2">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-16  mt-4 mb-2 bg-orange-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:bg-orange-300 hover:scale-110"
      >
        <FaArrowUp />
      </button>
      </div>
    </footer>
  );
};

export default Footer;
