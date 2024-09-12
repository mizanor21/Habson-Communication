import React from "react";

const CareerSection = () => {
  return (
    <div className="bg-white  py-10">
      <h1 className="text-6xl tracking-tighter font-bold text-black mb-5">
        Taking The Best Of Creative Talent From <br /> India To The World.
      </h1>
      <p className="text-xl tracking-tighter text-black font-semibold mb-8">
        Want a sneak peak into a Schbanger&apos;s life? Watch this video & apply
        to be part of the team!
      </p>
      <button className="inline-flex  px-6 py-3 bg-white text-black border border-black rounded-full text-lg hover:bg-black hover:text-white transition-all">
        See All Openings <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default CareerSection;
