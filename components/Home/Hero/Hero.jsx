import React from "react";
import TimeSchbang from "../TimeSchbang/TimeSchbang";

const Hero = () => {
  return (
    <div className=" w-full bg-white  p-4 font-[Inter] sticky top-0 z-[9999]">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl font-bold">
          Your Creative, Media & Technology Transformation Partner
        </h1>
        <p className="mt-10 text-lg">
          We&apos;re a team of 1000+ Specialists delivering award-winning work
          for 300+ brands worldwide, 8 years and counting!
        </p>
      </div>
      <TimeSchbang />
    </div>
  );
};

export default Hero;
