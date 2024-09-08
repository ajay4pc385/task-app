import React from 'react';
import Founter from "../image/Pawan-panjabi-e1724242619180.jpg";
import Contact from './Contact';
import { PiNotebookFill } from "react-icons/pi";

const Founder = () => {
  return (
    <>
  
    <section>

 

    <div className="container mx-auto text-center py-8">
   
      <h2 className="text-center font-bold text-3xl mb-6">Meet our Founder</h2>
      
     

     
      <div className="flex flex-col items-center ">
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
