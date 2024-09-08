import React from 'react';
import Founder from './Founder';
import Img from '../image/family-showcasing-their-home-scaled.jpg'; // Ensure the image path is correct

const BeliefSection = () => {
  return (
    <>
      <section className="container bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className=" text-4xl font-bold mb-4">We Believe You're <br/> Bright</h2>
          </div>

          {/* Right Side Image as Background */}
          <div
            className="md:w-1/2 flex justify-center bg-cover bg-center rounded-md shadow-lg"
            style={{
              backgroundImage: `url(${Img})`, // Correctly use the imported image
              height: '90vh', // Adjust height as needed
              width: '100%',
              maxWidth: '500px', // Adjust max-width if needed
        

            }}
          ></div>
        </div>

        {/* Bottom Statistics */}
        <div className="container mx-auto px-4 mt-8 flex flex-wrap justify-end gap-4 " >
          <div className="bg-white text-gray-900 p-4 rounded-lg text-center w-1/4 md:w-1/6 hero-section">
            <h3 className="text-3xl font-bold">320+</h3>
            <p>Lenders</p>
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg text-center w-1/4 md:w-1/6 hero-section" >
            <h3 className="text-3xl font-bold">20+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* Founder Component */}
      <Founder />
    </>
  );
};

export default BeliefSection;
