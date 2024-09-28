"use client";
import React, { useState, useEffect, useRef } from "react";

const Video = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isFirstPlay, setIsFirstPlay] = useState(true); // Track first play

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

  // Function to handle video end event
  const handleVideoEnd = () => {
    if (isFirstPlay) {
      setIsFirstPlay(false); // Set flag that first play is done
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.currentTime = 0; // Restart video from beginning
      videoRef.current.play(); // Play video with sound
    }
  };

  return (
    <div className="relative bg-black z-[110]" title="Play Reel">
      <div
        className={`transition-all duration-500 lg:h-[100vh] ease-in-out mx-auto ${
          isScrolledDown ? "w-full" : "w-[90%]"
        }`}
      >
        <video
          ref={videoRef}
          className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover"
          autoPlay
          loop
          // muted={isFirstPlay} // Muted during the first play
          onClick={handleVideoClick} // Toggle play/pause on click
          onEnded={handleVideoEnd} // On first play end, restart with sound
        >
          <source src="/videos/Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
