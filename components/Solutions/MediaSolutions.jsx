"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MediaSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Array of items with dynamic titles and contents
  const data = [
    {
      title: "Media Buying",
      content:
        "We meticulously identify high-impact advertising placements across a diverse digital landscape, encompassing websites, social media platforms, mobile apps, and over-the-top (OTT) streaming services. Our in-depth analysis pinpoints opportunities to maximize brand visibility and reach the target audience effectively. We leverage data-driven insights to select placements that align with campaign objectives and deliver optimal ROI.",
    },
    {
      title: "Media Planning",
      content:
        "We translate identified opportunities into data-driven media strategies tailored to your specific goals. Our team meticulously plans campaigns that optimize budget, reach, and engagement, ensuring maximum ROI within your desired timeframe.",
    },
    {
      title: "Performance Marketing",
      content:
        "We excel at maximizing ROI on both modest and substantial media budgets. Our experience spans multiple platforms, including Meta, Google, and streaming services.",
    },
    {
      title: "MarTech for Media",
      content:
        "Our commitment to innovation drives us to experiment with new technologies alongside partners like Google and Adobe, unlocking untapped opportunities to enhance customer interactions and deliver exceptional value.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-6xl text-black font-bold mb-10">
            Media Solutions
          </h2>
          <p className="text-lg font-normal  text-black mb-10">
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
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 font-extrabold text-black text-left"
                onClick={() => toggle(index)}
              >
                {item.title}
                {open === index ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>

              {open === index && (
                <div className="py-2 text-black">
                  {/* Dynamic content based on the selected item */}
                  {item.content}
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
