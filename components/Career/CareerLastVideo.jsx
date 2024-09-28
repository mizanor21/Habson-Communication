import React from "react";

const CareerLastVideo = () => {
  return (
    <div>
      <div className="video-container w-full h-60 md:h-screen pb-10 lg:pb-20">
        <video
          className=" h-[100%] top-0 left-0 w-full md:h-full object-cover" // Fullscreen & responsive
          autoPlay
          loop
        >
          <source src="/videos/career.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CareerLastVideo;
