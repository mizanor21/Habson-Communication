"use client";
import React from "react";

const Video = () => {
  return (
    <div>
      <video className="mb-4" width="100%" height="auto" controls>
        <source src="/assets/introVideo/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
