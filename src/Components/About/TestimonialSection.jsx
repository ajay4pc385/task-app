import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../../image/about/testimonial-1-1.jpg";
import Img2 from "../../image/about/testimonial-2-1.jpg";
import Img3 from "../../image/about/testimonial-3-1.jpg";
import GetTouch from "../GetTouch";

const testimonials = [
  {
    image: Img,
    name: "John Doe",
    title: "CEO",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    image: Img2,
    name: "Jane Smith",
    title: "CFO",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    image: Img3,
    name: "David Wilson",
    title: "CTO",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const TestimonialSection = () => {
  useEffect(() => {
		AOS.init();
	  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Use useEffect to handle autoplay
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <>  
      <section className="py-8 px-4 text-center hero-service" data-aos="fade-up">
      <div className="flex justify-center space-x-4 mb-4" >
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-24 h-24 rounded-lg border-2 p-1 ${
              currentIndex === index ? "border-orange-400" : "border-transparent"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-lg italic mb-6 max-w-xl mx-auto bg-white text-gray-500">
        {testimonials[currentIndex].quote}
      </blockquote>

      <div className="font-semibold">{testimonials[currentIndex].name}</div>
      <div className="text-gray-500">{testimonials[currentIndex].title}</div>

      <div className="mt-4 text-gray-600">
        {currentIndex + 1} / {testimonials.length}
      </div>

      {/* <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={previousTestimonial}
          className="px-3 py-1 bg-gray-300 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="px-3 py-1 bg-gray-300 rounded-full"
        >
          Next
        </button>
      </div> */}
    </section>
    <GetTouch/>
    </>

  );
};

export default TestimonialSection;
