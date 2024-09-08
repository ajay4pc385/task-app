import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSection from '../Components/HeroSection';
import Banner from "../image/outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc-11.jpeg-scaled.jpg";
import Banner2 from "../image/one-big-happy-family-cropped-shot-of-a-happy-dive-2023-11-27-04-53-51-utc1-scaled.jpg";
import Banner3 from "../image/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg";
import 'animate.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow next-arrow absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black p-2 rounded-full"
    onClick={onClick}
  >
    <MdKeyboardArrowRight className="text-white text-3xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev-arrow absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black p-2 rounded-full"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft className="text-white text-3xl" />
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems = [
    {
      img: Banner,
      alt: "Image 1",
      h2: "Empowering Financial Security <br> for Everyone",
      text: "We are committed to providing accessible and reliable financial services to help individuals and families.",
    },
    {
      img: Banner2,
      alt: "Image 2",
      h2: "Empowering Financial Security <br> for Everyone",
      text: "We are committed to providing accessible and reliable financial services to help individuals and families.",
    },
    {
      img: Banner3,
      alt: "Image 3",
      h2: "Empowering Financial Security <br> for Everyone",
      text: "We are committed to providing accessible and reliable financial services to help individuals and families.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".text-overlay h2, .text-overlay p"
    );
    elements.forEach((el) => {
      el.classList.remove(
        "animate__animated",
        "animate__fadeInUp",
        "animate__fadeInDown"
      );
      void el.offsetWidth; // trigger reflow
      el.classList.add("animate__animated");
      if (el.tagName === "H2") {
        el.classList.add("animate__fadeInUp");
      } else if (el.tagName === "P") {
        el.classList.add("animate__fadeInUp");
      }
    });
  }, [currentSlide]);

  return (
    <div>
      <div className="home">
        <div className="swiper-container relative">
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="slider-item relative">
                  {/* Adjusted height for the image */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="slider-image w-full h-[60vh] sm:h-[50vh] md:h-[40vh] lg:h-[30vh] xl:h-[20vh]"
                  />
                  <div className="text-overlay absolute bottom-8 left-8 text-white px-4 py-4">
                    <h2 dangerouslySetInnerHTML={{ __html: item.h2 }} className="font-h2" />
                    <p className="text-sm mt-3 mb-2 TEXT">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
