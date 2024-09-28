"use client";
import React, { useState, useEffect, useRef } from "react";

const Video = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videoRef = useRef(null);

  // Function to toggle play/pause on click
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if paused
      } else {
        videoRef.current.pause(); // Pause the video if playing
      }
    }
  };

  return (
    <div className="relative bg-black z-[110]">
      <div
        className={`transition-all duration-500  lg:h-[100vh] ease-in-out mx-auto ${
          isScrolledDown ? "w-full" : "w-[90%]"
        }`}
      >
        <video
          ref={videoRef}
          className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover" // Fullscreen & responsive
          autoPlay
          controls
          loop
          onClick={handleVideoClick} // Toggle play/pause on click
        >
          <source src="/videos/Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
