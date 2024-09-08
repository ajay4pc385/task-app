import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import logo_img from "../image/logo-hero.png"
import TopBar from './TopBar';
import { Link } from 'react-router-dom';

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when clicking a link
  };

  return (
    <div>
      <header className="border-b-2 sticky top-0 bg-white z-50">
        {/* Top Bar */}
        <TopBar />

        {/* Main Header */}
        <div className="bg-white py-3 px-4 w-full shadow-md headers">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link to="/">
                <img src={logo_img} alt="Logo" className="h-16 transition-transform duration-300 ease-in-out hover:scale-110 " />
              </Link>
            </div>

            {/* Navigation for large screens */}
            <div className="hidden lg:block">
              <nav className="lg:flex lg:space-x-8 ">
                <Link to="/" onClick={handleLinkClick} className="block px-4 py-4 font-bold text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110">
                  HOME
                </Link>
                <Link to="/about-us" onClick={handleLinkClick} className="block px-4 font-bold py-4 text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110">
                  ABOUT US
                </Link>
                <Link to="/services" onClick={handleLinkClick} className="block font-bold px-4 py-4 text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110">
                  SERVICES
                </Link>

                <button className="font-bold bg-gray-900 text-white py-4 px-4 text-sm rounded-md transition-transform duration-300 ease-in-out hover:scale-110">
                  CALL US ANYTIME
                </button>
              </nav>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose className="h-8 w-8 font-bold text-orange-500" />
                ) : (
                  <LuMenu className="h-8 w-8 font-bold text-orange-500" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <nav className="flex flex-col items-center mt-4 space-y-4">
              <Link to="/" onClick={handleLinkClick} className="block font-bold text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 w-full  py-2">
                HOME
              </Link>
              <Link to="/about-us" onClick={handleLinkClick} className="block font-bold text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 w-full  py-2">
                ABOUT US
              </Link>
              <Link to="/services" onClick={handleLinkClick} className="block font-bold text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 w-full  py-2">
                SERVICES
              </Link>

              {/* Mobile Call to Action Button */}
              <button className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 w-full">
                CALL US ANYTIME
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
