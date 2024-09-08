import { useState, useEffect } from "react";


import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import img_shap from "../image/img-shape-02-1.png"
import Gallery from "../Components/Gallery"
const Services = () => {
    const images = [
        "https://alphaafin.com.au/wp-content/uploads/2024/08/cheerful-family-2023-11-27-05-20-02-utc-scaled.jpg",
        "https://alphaafin.com.au/wp-content/uploads/2024/08/happy-indian-family-of-four-looking-at-photo-album-2024-02-13-20-54-46-utc.jpeg-scaled.jpg",
        "https://alphaafin.com.au/wp-content/uploads/2024/08/family-showcasing-their-home-scaled.jpg",
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
    <section
     className="hero-service">

   
    <div className='container'>
        <div className='services-h2 flex justify-center px-4 py-4  '>
          <img src={img_shap} alt="" className='shap-img' />
        </div>
<h1 className='text-center font-bold px-4 py-4'>Our services</h1>
<div className='row mt-4 mb-2'>
    <div className='col-md-4'>
    <div className='col-md-12 services-box'>
    <div className="d-flex gap-5 align-items-center">
        <MdOutlineDocumentScanner className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Home Loans</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey.&nbsp;</span></p><p><span style={{fontWeight: "400"}}> looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals. </span></p>			
                        			</div>
                                    </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
  <MdOutlineDocumentScanner className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Refinancing

</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan  through a cash-out refinance. &nbsp;</span></p>						</div>
  </div>

  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
            <MdOutlineDocumentScanner className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Self Managed Super fund
        SMSF</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. 

 </span></p>						</div>
  </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
            <MdOutlineDocumentScanner className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Personal loans</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs. 

 </span></p>						</div>
  </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
            <MdOutlineDocumentScanner className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Commercial/Business Loans</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs.. &nbsp;</span></p>				</div>
  </div>
    </div>
    <div className='col-md-4'>
    <div className="col-md-12 services-box ">
  <div className="d-flex gap-5 align-items-center">
        <GrDocumentStore className="fs-1 text-orange-500 font-bold"/>



        <h5 className="font-bold">
        <span className="fs-6 text-gray-500">Home Loan</span><br/>
        First home buyer</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>
At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. 



</span></p>						</div>
  </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
        <GrDocumentStore className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">
        Investment Property</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time, &nbsp;</span></p>					</div>
  </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
        <GrDocumentStore className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Asset finance</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. 

Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options. &nbsp;</span></p>					</div>
  </div>
  <div className="col-md-12 services-box mt-4 mb-2">
  <div className="d-flex gap-5 align-items-center">
        <GrDocumentStore className="fs-1 text-orange-500 font-bold"/>
        <h5 className="font-bold">Expat Loans</h5>
    </div>
    <hr/>
    <div class="elementor-widget-container">
						<p><span style={{fontWeight: "400"}}>At Alphaa Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates. 

</span></p>						</div>
  </div>
    </div>
    <div className="col-md-4">
      <div
        className="relative h-full w-full bg-cover bg-center rounded-lg transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Slideshow Content */}
        <div className="elementor-widget-wrap elementor-element-populated p-6 py-14">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-content text-white">
              <h3 className="text-2xl font-semibold mb-2">
                At Alphaa Financial Solutions, we offer a comprehensive range of financial services
              </h3>
              <p className="text-lg">
                We have the expertise to guide you through the process.
              </p>
            </div>
          </div>
          <div className="elementor-section mt-6">
            <div className="elementor-container grid grid-cols-2 gap-4">
              <div></div>
              <div>
                <div className="text-white">
                  <span className="text-4xl font-bold">100</span>+
                  <p className="text-lg">Simplify the loan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
    </section>
    <Gallery/>
   
    </>
  )
}

export default Services