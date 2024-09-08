import React ,{useEffect} from 'react';

import Services from './Services'
import AOS from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
	useEffect(() => {
		AOS.init();
	  }, []);
  return (
	
    <>
    <section className='hero-section '>
    <div className='container'>
        <div className='row hero-row'>
            <div className='col-md-6 hero px-4 py-4 '  data-aos="fade-up">
            <div class="elementor-icon-box-content">
				<div class="elementor-icon-box-title">
					<h4 className='font-bold'>
						Our Story					</h4>
				</div>
									<p class="elementor-icon-box-description text-gray-500">
						Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.					</p>
							</div>
              <div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="https://alphaafin.com.au/about-us/">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">Know More</span>
		</span>
					</a>
		</div>
				</div>
            </div>
            <div className='col-md-6 hero px-4 py-4 '  data-aos="fade-up">
            <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-3c06f351 elementor-widget__width-initial elementor-widget elementor-widget-icon-box" data-id="3c06f351" data-element_type="widget" data-widget_type="icon-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-box-wrapper">
						<div class="elementor-icon-box-content">
				<div class="elementor-icon-box-title">
					<h4 className='font-bold'>
						Our Mission					</h4>
				</div>
									<p class="elementor-icon-box-description  text-gray-500">
						At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
					</p>
							</div>
		</div>
				</div>
				</div>
					</div>
            </div>
        </div>
    </div>
    </section>
    <Services/>
    </>
  )
}

export default HeroSection