"use client";
import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  // Function to toggle play/pause on video click
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play if the video is paused
      } else {
        videoRef.current.pause(); // Pause if the video is playing
      }
    }
  };

  return (
    <div className="relative w-screen h-screen bg-black z-[110]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover" // Fullscreen & responsive
        autoPlay
        loop
        muted
        onClick={handleVideoClick} // Toggle play/pause on click
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
