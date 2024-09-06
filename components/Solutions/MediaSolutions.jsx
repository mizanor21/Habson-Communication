"use client";
import React, { useState } from "react";
import Items from "../Items/Items";

const MediaSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-6xl text-black font-bold mb-10">
            Media Solutions
          </h2>
          <p className="text-lg font-semibold  text-black mb-10">
            Our Media Sciences department specializes in implementing and
            managing paid marketing strategies to increase your brand awareness,
            market share and business revenue.
          </p>
          <p className="font-bold text-xl text-black mb-10">
            Proud to be collaborating with media industry leaders to power
            growth for brands!
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 mb-10">
            {/* Media Logos */}
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477c05f6f9e81c9d0f82322_62691149902f536a63a89ae2_Brigade-Web-Meta-Business-Partner-1-1.png"
              alt="Meta"
              className="h-14 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e4f_6.webp"
              alt="Google Partner"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64674240ce6535840fe75043_3.webp"
              alt="Adobe"
              className="h-28 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e5a_7.webp"
              alt="ONDC"
              className="h-24  mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bd521f0ee28256a9fcd2_HubSpot-certified-partner-2-p-500.webp"
              alt="Hubspot"
              className="h-16 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477c0fb107ad31b724643eb_629a40dc3e59ee069da94c82-p-500.png"
              alt=""
              className="h-16 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bdd4ebdcee2b99b714e2_download-removebg-preview%20(1).png"
              alt=""
              className="h-16 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477c190c05b4c36d20363b0_SimilarWeb_logo.svg-p-500.webp"
              alt=""
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {[
            "Media Buying",

            "Media Planning",

            "Performance Marketing",

            "MarTech for Media",
          ].map((item, index) => (
            <div
              key={index}
              className="collapse-arrow border-b border-gray-300"
            >
              <button
                className=" collapse-title w-full text-left py-4 font-semibold text-black "
                onClick={() => toggle(index)}
              >
                {item}
              </button>

              {open === index && (
                <div className=" collapse-content py-2 text-black bg-blue-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ac neque at dolor auctor fringilla.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Items />
    </section>
  );
};

export default MediaSolutions;
