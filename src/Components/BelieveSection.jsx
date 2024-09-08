import React, { useEffect, useState } from 'react';
import Img from "../image/family-showcasing-their-home-scaled.jpg";
import shap from "../image/img-shape-02-1.png";
import Founder from "../Components/Founder"
const BelieveSection = () => {

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
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:flex lg:items-center lg:justify-between">
        {/* Left Side */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="space-y-6">
            {/* Icon */}
            <div className="text-orange-500">
              <img src={shap} alt='shap-icon' className='w-40 h-12 ' />
            </div>
            {/* Heading */}
            <h2 className="text-4xl font-bold">We Believe You're <br /> Bright</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Family Image */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-6 ">
            <img
              src={Img}
              alt="Family"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-72 mb-3">
              <p className="text-3xl font-bold">{lendersCount}+</p>
              <p className="text-lg">Lenders</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-72 mb-3">
              <p className="text-3xl font-bold">{yearsCount}+</p>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Founder/>
    </>
  );
};

export default BelieveSection;
