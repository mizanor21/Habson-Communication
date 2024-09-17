import React from "react";
import TimeSchbang from "../TimeSchbang/TimeSchbang";
import BlurIn from "@/components/magicui/blur-in";

const Hero = () => {
  return (
    <div className=" w-full bg-white  py-4 font-[Inter]">
      <div className="container mx-auto">
        <BlurIn
          className="text-3xl lg:text-6xl font-bold"
          word={"Your Creative, Media & Technology Transformation Partner"}
        ></BlurIn>
        {/* <h1 className="text-3xl lg:text-6xl font-bold m-0 p-0">
          Your Creative, Media & Technology Transformation Partner
        </h1> */}
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
