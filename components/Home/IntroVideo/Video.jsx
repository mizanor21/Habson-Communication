"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Video = () => {
  const [position, setPosition] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left, // Adjust based on parent div's left position
      y: event.clientY - rect.top, // Adjust based on parent div's top position
    });
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 2s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;
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
    <div
      className="relative bg-black z-[110] h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <style>{keyframes}</style>

      <div
        className="w-44 h-10 absolute z-[999] border border-gray-700 rounded-full"
        style={{ top: position.y - 50, left: position.x - 90 }}
      >
        <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
          {/* Scrolling text with inline styles */}
          <Link href={""} className="" style={scrollAnimation}>
            Play Reel Play Reel
          </Link>
        </div>
      </div>
      <div
        className={`transition-all duration-500 lg:h-[100vh] ease-in-out mx-auto 
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
