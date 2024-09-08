import React ,{useEffect} from 'react';
import family_image from "../image/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg"
import house_image from "../image/img-home-02-min-1.png"
import AOS from "aos";
import "aos/dist/aos.css";
import BelieveSection from "../Components/BelieveSection"
const ResponsiveSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    
   
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-8">
      {/* Image Section */}
      <div className="container">
        <div className='row flex justify-center  '>
            <div className='col-md-7'>
        <div className="relative w-full ">
  {/* Family Image */}
  <img
    src={family_image}
    alt="Family"
    className="w-full h-96 rounded-lg " 
  />
  
  {/* House Image (positioned on top of the family image) */}

  <img
    src={house_image}
    alt="House"
    className="absolute bottom-0 left-0 w-40 h-52  lg:w-60"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  />

</div>
</div>

       
     

      <div className="col-md-5 bg-gray-200" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
      </div>
  
      </div>
      </div>
      
    </section>
    <BelieveSection/>
    </>
  );
};

export default ResponsiveSection;
