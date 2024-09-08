import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About_img from "../../image/about-img.jpg"
import Choose from './Choose'
const Believe = () => {
    useEffect(() => {
		AOS.init();
	  }, []);
  return (
  <>
  <section className="hero-service">
    <div className='container'>
        <div className='abouts-h2'>
<h2 className='text-center font-bold px-4 py-9' data-aos="fade-up">We believe you’re bright</h2>
        </div>
<div className='row'>
    <div className='col-lg-6 ' data-aos="fade-right">
    <div className="relative hero-belive">
  <img
    src={About_img}
    alt="about-img"
    className="rounded-lg border-none"
  />
  {/* Custom Border Element */}
  <div className="absolute inset-0 rounded-lg border-r-4 border-b-4 border-orange-500 pointer-events-none"></div>
</div>

<div className="mt-4 mb-2">
    <h5>Our Mission</h5>
    <p className='text-gray-500'>Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.</p>
</div>
    </div>
    <div className='col-lg-6' data-aos="fade-left">
        <h5>Welcome to Alphaa Financial Solutions</h5>
        <p className='text-gray-500'>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>
   <div className="mt-4 mb-2">
    <h5>Our Story</h5>
    <p className='text-gray-500'>Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
    Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.</p>
   </div>
    </div>
</div>
    </div>
  </section>
  <Choose/>
  </>
  )
}

export default Believe