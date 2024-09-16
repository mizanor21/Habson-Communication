"use client";
import { useState, useEffect, useRef } from "react";

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player once API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "uwfP_WdNK2E", // Video ID
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0, // Hide controls
          loop: 1, // Loop the video
          modestbranding: 1, // Minimize YouTube branding
          rel: 0, // Prevent showing related videos
        },
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Ensure video starts playing
          },
        },
      });
    };
  }, []);

  const handleVideoClick = () => {
    const player = playerRef.current;
    if (player) {
      if (isPlaying) {
        player.pauseVideo(); // Pause the video if it's playing
      } else {
        player.playVideo(); // Play and unmute the video if paused
        player.unMute(); // Unmute the video when play is clicked
      }
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };

  return (
    <div className="bg-white flex justify-center relative z-[9999]">
      <div
        className={`h-screen transition-all duration-500 ease-in-out ${
          isScrolledUp ? "w-[100%]" : "w-[90%]"
        }`}
        onClick={handleVideoClick} // Handle video play/pause on click
      >
        {/* YouTube Player */}
        <div id="youtube-player" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default IntroVideo;
