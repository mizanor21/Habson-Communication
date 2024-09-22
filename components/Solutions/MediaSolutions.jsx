"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

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
    <section className="px-[5%] py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-6xl text-[#125b5c] font-bold mb-10">
            Media Solutions
          </h2>
          <p className="text-lg font-normal  text-black mb-10">
            Our Media Sciences department specializes in implementing and
            managing paid marketing strategies to increase your brand awareness,
            market share and business revenue.
          </p>
          <p className="font-bold text-xl text-[#125b5c] mb-10">
            Proud to be collaborating with media industry leaders to power
            growth for brands!
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 gap-y-10 mb-10">
            {/* Media Logos */}
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/dVFbxnRf/l-24.png"
              alt="Meta"
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/s1dc16DC/l-6.png"
              alt="Google Partner"
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/zXTm74hW/l-25.png"
              alt="Adobe"
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/VLqTnnyW/l-10.png"
              alt="Hubspot"
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/RhfYPnW9/l-14.png"
              alt=""
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/76jcMNYm/l-17.png"
              alt=""
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/SQzHQHD5/l-13.png"
              alt=""
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={100}
              height={200}
              src="https://i.postimg.cc/BnCr9DMn/l-23.png"
              alt="ONDC"
              className="h-16 object-contain saturate-0 hover:saturate-100"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 font-extrabold text-[#125b5c] text-left"
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
