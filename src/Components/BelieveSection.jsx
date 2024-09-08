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
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="space-y-6" data-aos="fade-right">
                {/* Icon */}

                {/* Heading */}
                <h1 className=" lg:text-4xl font-bold text-left lg:text-left" >
                  We Believe You're <br className="hidden lg:block" /> Bright
                </h1>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6" data-aos="fade-left">
              {/* Family Image */}
              <div className="w-full  height-image  bg-gray-100 rounded-lg overflow-hidden mb-6 believe-boxes">
                <img
                  src={Img}
                  alt="Family"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 Stats">
                {/* Card 1 */}
                <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-64 max-w-xs mx-auto boxes border-b-4 border-orange-500 pointer-events-none">
                  <h1 className=" font-bold text-center">{lendersCount}+</h1>
                  <p className="text-lg text-center">Lenders</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110 w-64 max-w-xs mx-auto boxes_believe border-b-4 border-orange-500 pointer-events-none">
                  <h1 className=" font-bold text-center">{yearsCount}+</h1>
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
