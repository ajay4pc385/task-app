import { useState } from 'react';

import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

import logo_img from "../image/logo-hero.png"
import TopBar from './TopBar';
import { Link } from 'react-router-dom';

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
          <header className="border-b-2">
      {/* Top Bar */}
  
    
<TopBar/>
      {/* Main Header */}
      <div className="bg-white py-3 px-4 fixed top-9 w-full z-50 shadow-md headers">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <Link to={"/"}>
          <img src={logo_img} alt="Logo" className="h-12 transition-transform duration-300 ease-in-out  hover:scale-110" />
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className="h-8 w-8 text-gray-800" />
            ) : (
              <LuMenu className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>

        {/* Navigation */}
     

        {/* Call us Button */}
        <div className="hidden lg:block d-flex ">
        <nav className={`lg:flex lg:space-x-8 lg:items-center ${isOpen ? 'block' : 'hidden'} absolute lg:relative bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto  lg:shadow-none`}>
          <Link to="/" className="block px-4 py-4 font-bold lg:py-0 text-sm text-gray-800 hover:text-white hover:bg-gray-900  transition-transform duration-300 ease-in-out  hover:scale-110">
            HOME
          </Link>
          <Link to="/about-us" className="block px-4 font-bold py-4 lg:py-0 text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out  hover:scale-110">
            ABOUT US
          </Link>
          <Link to="/services" className="block font-bold px-4 py-4 lg:py-0 text-sm text-gray-800 hover:text-white hover:bg-gray-900 transition-transform duration-300 ease-in-out  hover:scale-110">
            SERVICES
          </Link>
        
          <button className="hidden lg:block font-bold bg-gray-900 text-white py-4 px-4 text-sm rounded-md  sm-3 transition-transform duration-300 ease-in-out  hover:scale-110">
            CALL US ANYTIME
          </button>
        </nav>
        </div>
      </div>

      {/* Mobile call to action button */}
      <div className={`lg:hidden mt-4 ${isOpen ? 'block' : 'hidden'} text-center`}>
        <button className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700">
          CALL US ANYTIME
        </button>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Headers