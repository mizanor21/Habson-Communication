"use client";
import React, { useState } from "react";
import Items from "../Items/Items";

const BrandSolutions = () => {
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
            Brand Solutions
          </h2>
          <p className="text-lg font-semibold  text-black mb-10">
            Our Strategists, Designers, Video Editors and Animators provide you
            with holistic solutions to grow your digital presence and achieve
            your business goals through both day-to-day content and integrated
            flagship campaigns.
          </p>
          <p className="font-bold text-xl text-black mb-10">
            Proud to work with the biggest brands in India & Abroad
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 mb-10">
            {/* Brand Logos */}
            <img
              src="https://i.postimg.cc/XYnP8q4S/l-1.png"
              alt="P&G"
              className="h-10 object-contain mb-12"
            />
            <img
              src="https://i.postimg.cc/VLqTnnyW/l-10.png"
              alt="Glow & Lovely"
              className="h-10 object-contain"
            />
            <img
              src="https://i.postimg.cc/28RM1Tt5/l-12.png"
              alt="Garnier Men"
              className="h-20 object-contain"
            />
            <img
              src="https://i.postimg.cc/SQzHQHD5/l-13.png"
              alt="Kotak"
              className="h-10  mb-12"
            />
            <img
              src="https://i.postimg.cc/RhfYPnW9/l-14.png"
              alt="Jio"
              className="h-20 object-contain"
            />
            <img
              src="https://i.postimg.cc/76jcMNYm/l-17.png"
              alt="uno"
              className="h-16 object-contain"
            />
            <img
              src="https://i.postimg.cc/mDPJHnRP/l-18.png"
              alt="Godrej"
              className="h-16 object-contain mb-12"
            />
            <img
              src="https://i.postimg.cc/HLZFjmGG/l-2.png"
              alt="Ashok Leyland"
              className="h-16 object-contain"
            />
            <img
              src="https://i.postimg.cc/BnCr9DMn/l-23.png"
              alt="domino's"
              className="h-16 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {[
            "Social Media Management",
            "Original Content and Copywriting",
            "Graphic Design, Iconography and Illustrations",
            "Video Editing and Animation",
            "Film Production, AVs and Product Photography",
            "Campaign Planning",
            "Schbang Fluence & ORM",
            "Print, OOH, Mainline Advertising",
            "New Brand Launch and Rebranding",
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
                <div className=" collapse-content py-2 text-black">
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

export default BrandSolutions;
