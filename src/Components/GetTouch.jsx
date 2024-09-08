import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetTouch = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  return (
   <>
   <section className='get-touch '>
    <div className='container mt-4 mb-2'>
<div>
<h1 className='text-center font-h2 px-4 py-4 font-bold'  data-aos="fade-up">Talk to PAWAN now!</h1>
<div className='flex justify-center items-center'  data-aos="fade-up">
  <button className="bg-white  text-gray-800 font-semibold py-3 px-5 border border-gray-400 rounded shadow transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:scale-110">
    Contact
  </button>
</div>

<h5 className='text-center mt-3 mb-2 text-lg '  data-aos="fade-up">Feel Free to Get in Touch for a No Obligations
Call <b className="">PAWAN </b>!!!</h5>
</div>
    </div>
   </section>
   </>
  )
}

export default GetTouch