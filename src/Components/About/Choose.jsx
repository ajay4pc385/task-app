import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about_choose from "../../image/about/cheerful-family-2023-11-27-05-20-02-utc-scaled.jpg"
import about_choose2 from "../../image/about/happy-indian-asian-family-having-lunch-at-home-and-2024-05-13-16-50-29-utc.jpeg-scaled.jpg"
import about_choose3 from "../../image/about/happy-indian-family-of-four-looking-at-photo-album-2024-02-13-20-54-46-utc.jpeg-scaled.jpg"
import TestimonialSection from './TestimonialSection'


const Choose = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  
    const images = [
        about_choose,
        about_choose2,
        about_choose3,
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Clean up on component unmount
      }, [images.length]);
  return (
    <>
    <section className='hero-section'>
        <div className='container'>
<div className='row'>
<div className='col-lg-6'  data-aos="fade-right">
<div 

        className="relative h-screen w-full bg-cover bg-center rounded-lg transition-opacity duration-1000 absolute inset-0 rounded-lg border-l-4 border-b-4 border-orange-500 pointer-events-none"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Slideshow Content */}
        <div className="elementor-widget-wrap elementor-element-populated p-6 py-14">
          <div className="elementor-icon-box-wrapper">
           
          </div>
         
        </div>
      </div>
</div>
<div className='col-lg-6'  data-aos="fade-left">
<div>
    <h5 className=" text-orange-500 font-bold px-4 py-8">Why Choose Us
    </h5>
    <h2 className='font-bold text-white px-4 py-3'>Our Expertise
    </h2>
    <p className='text-white px-4 py-3'>Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.</p>
<div>
    <p className='text-white px-4 py-3'>Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>

</div>
<div>
    <p className='text-white px-4 py-3'>Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.</p>

</div>
<div>
    <p className='text-white px-4 py-3'>Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
</div>
</div>
</div>
</div>
        </div>
    </section>
    <TestimonialSection/>
    </>
  )
}

export default Choose