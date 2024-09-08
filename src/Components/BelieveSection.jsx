import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../image/family-showcasing-their-home-scaled.jpg";
import shap from "../image/img-shape-02-1.png";
import Founder from "../Components/Founder";

const BelieveSection = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  const [lendersCount, setLendersCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Effect to handle the counting animation
  useEffect(() => {
    // Function to handle the count-up animation for lenders
    const countUp = (setCountFunc, finalValue, speed) => {
      let count = 0;
      const increment = Math.ceil(finalValue / 100); // Adjust the increment value to control speed
      
      const interval = setInterval(() => {
        count += increment;
        if (count >= finalValue) {
          count = finalValue;
          clearInterval(interval);
        }
        setCountFunc(count);
      }, speed);
    };

    // Start the counting animations when the component mounts
    countUp(setLendersCount, 320, 20);  // 320+ Lenders, speed 20ms
    countUp(setYearsCount, 20, 50);     // 20+ Years Experience, speed 50ms
  }, []);

  return (
    <>
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Left Side */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="space-y-6" data-aos="fade-right">
                {/* Icon */}
                <div className="text-orange-500">
                  <img src={shap} alt='shap-icon' className='w-32 h-10 mx-auto lg:mx-0' />
                </div>
                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left" >
                  We Believe You're <br className="hidden lg:block" /> Bright
                </h2>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start" data-aos="fade-left">
              {/* Family Image */}
              <div className="w-full h-64 lg:h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img
                  src={Img}
                  alt="Family"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Card 1 */}
                <div className="bg-white text-gray-900 p-12 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-full max-w-xs mx-auto">
                  <p className="text-3xl font-bold text-center">{lendersCount}+</p>
                  <p className="text-lg text-center">Lenders</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-full max-w-xs mx-auto">
                  <p className="text-3xl font-bold text-center">{yearsCount}+</p>
                  <p className="text-lg text-center">Years Experience</p>
                </div>
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
