"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slideshow.css";
import { FaCircleArrowRight } from "react-icons/fa6";

const Slideshow = () => {
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);

  useEffect(() => {
    const handleMouseWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // Scroll down
        sliderLeftRef.current.slickNext();
        sliderRightRef.current.slickPrev(); // Sync reverse slider
      } else {
        // Scroll up
        // sliderLeftRef.current.slickPrev();
        // sliderRightRef.current.slickNext(); // Sync reverse slider
      }
    };

    // Add event listener for mouse wheel
    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  const handleNextSlide = () => {
    sliderLeftRef.current.slickNext();
    sliderRightRef.current.slickPrev(); // Sync reverse slider
  };

  const handlePrevSlide = () => {
    sliderLeftRef.current.slickPrev();
    sliderRightRef.current.slickNext(); // Sync reverse slider
  };

  const settingsLeft = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: false,
    speed: 1000,
    // cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  const settingsRight = {
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    // cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden bg-[#110101] z-[9999]">
        {/* Left Slideshow (Top-Down) */}
        <div className="absolute inset-0 z-10 slideshow slideshow-left">
          <Slider {...settingsLeft} ref={sliderLeftRef}>
            <div className="item h-screen">
              <div className="left-half">
                <img
                  src="https://i.postimg.cc/TPv19Qx1/mark-active-school.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-1"
                />
              </div>
            </div>

            <div className="item h-screen">
              <div className="left-half">
                <img
                  src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-2"
                />
              </div>
            </div>
            <div className="item h-screen">
              <div className="left-half">
                <img
                  src="https://i.postimg.cc/WzW1pVyH/chips.png"
                  className="object-cover w-full h-full"
                  alt="slide-3"
                />
              </div>
            </div>
            <div className="item h-screen">
              <div className="left-half">
                <img
                  src="https://i.postimg.cc/X7CfJG1K/2.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-4"
                />
              </div>
            </div>
          </Slider>

          {/* Left Side Buttons */}
          <div className="absolute bottom-10  left-5 z-20">
            <FaCircleArrowRight className="text-3xl lg:text-6xl  text-white" />
          </div>
        </div>

        {/* Right Slideshow (Bottom-Up) */}
        <div className="absolute inset-0 z-10 slideshow slideshow-right right-0">
          <Slider {...settingsRight} ref={sliderRightRef}>
            <div className="item h-screen">
              <div className="right-half">
                <img
                  src="https://i.postimg.cc/TPv19Qx1/mark-active-school.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-4-reverse"
                />
              </div>
            </div>
            <div className="item h-screen">
              <div className="right-half">
                <img
                  src="https://i.postimg.cc/X7CfJG1K/2.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-1-reverse"
                />
              </div>
            </div>
            <div className="item h-screen">
              <div className="right-half">
                <img
                  src="https://i.postimg.cc/WzW1pVyH/chips.png"
                  className="object-cover w-full h-full"
                  alt="slide-2-reverse"
                />
              </div>
            </div>
            <div className="item h-screen">
              <div className="right-half">
                <img
                  src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                  className="object-cover w-full h-full"
                  alt="slide-3-reverse"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
