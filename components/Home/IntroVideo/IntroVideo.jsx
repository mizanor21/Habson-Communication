"use client";
import { useState, useEffect } from "react";
import Video from "next-video";
import intro from "@/videos/intro.mp4";

const IntroVideo = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect if the user has scrolled up and set the width to 100%
      if (window.scrollY > 50) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-[9999] flex justify-center items-center bg-white">
      <div
        className={`h-screen  transition-all duration-500 ease-in-out ${
          isScrolledUp ? "w-[100%]" : "w-[90%]"
        }`}
      >
        {/* <Video src={intro} autoPlay loop muted /> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/uwfP_WdNK2E?si=6xeDD_wAdQ4kmk2w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default IntroVideo;
