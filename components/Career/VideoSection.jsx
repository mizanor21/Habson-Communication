import { useRef } from "react";

const VideoSection = () => {
  const [isFirstPlay, setIsFirstPlay] = useState(true);
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
    <div className="w-full md:h-screen relative z-[110]">
      <video
        ref={videoRef}
        className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover"
        autoPlay
        loop
        // muted={isFirstPlay} // Muted during the first play
        onClick={handleVideoClick} // Toggle play/pause on click
        onEnded={handleVideoEnd} // On first play end, restart with sound
      >
        <source src="/videos/career1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
