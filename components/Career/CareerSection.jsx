import React from "react";

const CareerSection = () => {
  return (
    <div className="bg-white  py-10 mt-14">
      <h1 className="text-5xl tracking-tighter font-bold text-[#125b5c] mb-5">
        Taking The Best Of Creative Talent From Bangladesh To The <br /> World.
      </h1>
      <p className="text-xl tracking-tighter text-black font-semibold mb-8">
        Want a sneak peak into a Schbanger&apos;s life? Watch this video & apply
        to be part of the team!
      </p>
      <button className="inline-flex  px-20 py-3 bg-[#125b5c] text-white border border-[#125b5c] rounded-full text-lg hover:bg-black hover:text-white transition-all">
        See All Openings <span className="ml-2 text-2xl">→</span>
      </button>
    </div>
  );
};

export default CareerSection;
