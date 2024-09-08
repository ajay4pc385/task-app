import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../image/family-showcasing-their-home-scaled.jpg";
import Founder from "../Components/Founder";

const BelieveSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [lendersCount, setLendersCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Effect to handle the counting animation
  useEffect(() => {
    const countUp = (setCountFunc, finalValue, speed) => {
      let count = 0;
      const increment = Math.ceil(finalValue / 100);
      
      const interval = setInterval(() => {
        count += increment;
        if (count >= finalValue) {
          count = finalValue;
          clearInterval(interval);
        }
        setCountFunc(count);
      }, speed);
    };

    countUp(setLendersCount, 320, 20);  // 320+ Lenders
    countUp(setYearsCount, 20, 50);     // 20+ Years Experience
  }, []);

  return (
    <>
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
          
          {/* Left Side: Text and Icon */}
          <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
            <div className="w-12 h-12 border-orange-500">
              {/* Simple House Icon */}
              <svg
                className="w-full h-full text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-7 0h6"
                />
              </svg>
            </div>

            <h1 className="lg:text-4xl font-bold text-left">
              We Believe You're <br /> Bright
            </h1>
          </div>

          {/* Right Side: Image and Stats */}
          <div className="lg:w-1/2 flex flex-col items-center believe-boxes" data-aos="fade-left">
            {/* Family Image */}
            <div className="w-full h-screen  rounded-lg overflow-hidden mb-6">
              <img
                src={Img}
                alt="Family"
                className="w-full  height-image object-cover"
              />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 Stats">
              {/* Lenders Stat */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105 transition-transform w-64 max-w-xs mx-auto border-b-4 border-orange-500 boxes_believe">
                <h1 className="font-bold text-center">{lendersCount}+</h1>
                <p className="text-lg text-center">Lenders</p>
              </div>

              {/* Years of Experience Stat */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105 transition-transform w-64 max-w-xs mx-auto border-b-4 border-orange-500 boxes">
                <h1 className="font-bold text-center">{yearsCount}+</h1>
                <p className="text-lg text-center">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Founder />
    </>
  );
};

export default BelieveSection;
