import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Founter from "../image/Pawan-panjabi-e1724242619180.jpg";
import Contact from './Contact';
import shap_icon from "../image/img-icon-02-1.png"
const Founder = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  return (
    <>
  
    <section className="bg-color">

 

    <div className="container mx-auto text-center py-8">
   {/* <img src={shap_icon} alt="icon" className="fs-1 text-orange-500 font-bold"/> */}
      <h2 className="text-center font-bold text-3xl mb-6" data-aos="fade-up">Meet our Founder</h2>
      
    
      <div className="flex flex-col items-center " data-aos="fade-up">
        <img 
          src={Founter} 
          alt="Founder"
          className="w-56 h-72  mb-4 "
        />
        <div className='founter-box'>

        <h5 className=" font-semibold mb-2">Mr. Pawan Punjabi</h5>
        <p className="text-lg text-gray-600 ">Founder</p>
        </div>
      </div>
      </div>
      </section>
      <Contact/>
      </>

  );
};

export default Founder;
