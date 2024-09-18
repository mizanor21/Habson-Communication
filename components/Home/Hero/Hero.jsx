import React from "react";
import TimeSchbang from "../TimeSchbang/TimeSchbang";
import BlurIn from "@/components/magicui/blur-in";

const Hero = () => {
  return (
    <div className=" w-full bg-white  pt-[5%] font-[Inter] text-[#125b5c]">
      <div className="container mx-auto ">
        <BlurIn
          className="text-3xl lg:text-6xl font-bold text-start"
          word={"Spark Something Real. Live Your Brands with Us."}
        ></BlurIn>
        {/* <h1 className="text-3xl lg:text-6xl font-bold m-0 p-0">
          Spark Something Real. Live Your Brands with Us.
        </h1> */}
        <p className="mt-10 text-lg">
          We ignite emotions, tell captivating stories, create campaigns that
          resonate, and drive real results. Let&apos;s bring your brand to life.
        </p>
      </div>
      <TimeSchbang />
    </div>
  );
};

export default Hero;
