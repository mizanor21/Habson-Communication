import React from "react";

const CareerSection = () => {
  return (
    <div className="bg-white  py-10 mt-14">
      <h1 className="text-3xl md:text-2xl lg:text-5xl tracking-tighter font-bold text-[#125b5c] mb-5">
        Career
      </h1>
      <p className="text-xl tracking-tighter text-black mb-8">
        Showcasing the innovative spirit of Bangladesh on a global stage.
      </p>
      <button className="inline-flex  px-20 py-3 bg-[#125b5c] text-white border border-[#125b5c] rounded-full text-md hover:bg-black hover:text-white transition-all">
        See All Openings <span className="ml-2 text-2xl">→</span>
      </button>
    </div>
  );
};

export default CareerSection;
