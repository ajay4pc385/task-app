import React ,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Contact_img from "../image/close-up-person-working-call-center-1536x1024.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import GetTouch from './GetTouch';

const Contact = () => {
    useEffect(() => {
		AOS.init();
	  }, []);
  return (
    <>
    <section>
    <div className='container'>
<div className='row'>
    <div className='col-md-6 mt-4 mb-2' data-aos="fade-down">
<div>
    <h3 className='font-bold px-2 py-2'>Contact Us</h3>
    <p className='text-slate-500'>Please feel free to ask if you have any further questions.

</p>
</div>
<div className=' d-flex gap-2 social-media-icons'>
    <IoLocationOutline className='text-orange-500 font-bold text-xl mt-1 transition-transform duration-300 ease-in-out  hover:scale-110'/>
<p className='font-bold'>Sydney, Australia
</p>
</div>
<div className=' d-flex gap-2 social-media-icons'>
    <IoCall className='text-orange-500 font-bold text-xl mt-1 transition-transform duration-300 ease-in-out  hover:scale-110'/>
<p className='font-bold'> 0468328227

</p>
</div>
<div className=' d-flex gap-2 social-media-icons'>
<MdAccessTimeFilled className='text-orange-500 font-bold text-xl mt-1 transition-transform duration-300 ease-in-out  hover:scale-110'/>
<p className='font-bold'>Mon - Fri: 9:00am - 5:00pm
</p>
</div>
<div className=' d-flex gap-2 social-media-icons'>
    <MdAccessTimeFilled className='text-orange-500 font-bold text-xl mt-1 transition-transform duration-300 ease-in-out  hover:scale-110'/>
<p className='font-bold'>Weekend Appointments Only
</p>
</div>
<div className=' d-flex gap-3 social-media'>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaInstagram />
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaFacebook/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaTwitter/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300 transition-transform duration-300 ease-in-out  hover:scale-110'>
    <FaTelegram/>
    </span>
    <span className='bg-orange-500 p-2 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-slate-300 transition-transform duration-300 ease-in-out  hover:scale-110'>
<FaWordpress/>
</span>
</div>
    </div>
    <div className='col-md-6 mt-3 mb-2' data-aos="fade-down">
        <div>
            <img src={Contact_img} alt='contact-us-img'/>
        </div>
        </div>
</div>
    </div>
    </section>
    <GetTouch/>
    </>
  )
}

export default Contact