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
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d64fe6bc2e32b2eac9420_P_G-min-p-500.webp"
              alt="P&G"
              className="h-10 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d64faa61ee055ad1cc612_glow_and_lovely_logo%20-%20Prajna%20Anchan-min.png"
              alt="Glow & Lovely"
              className="h-10 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d64fbfeac4725f998b8de_GarnierMen_NewLogo%20(1)%20-%20Copy%20-%20Richa%20Nadkarni(1)-min-p-500.webp"
              alt="Garnier Men"
              className="h-20 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f68e1e441809161cd5207_download.webp"
              alt="Kotak"
              className="h-10  mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d64f9f0752c75fb64ffce_jio-logo%20(1)-min.png"
              alt="Jio"
              className="h-20 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64115e4b34e519f889ee3122_uno-logo.svg"
              alt="uno"
              className="h-16 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d64fb1c4a4faaa6fd4a17_Godrej___Boyce-Logo.wine%20-%20Sadhana%20Yadav-min-p-500.webp"
              alt="Godrej"
              className="h-16 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64115e4c3b3a8496bd204d10_AL_Logo.svg"
              alt="Ashok Leyland"
              className="h-16 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d5a3989b0aa7a4a169910_Dominos_Logo_png-min-p-500.png"
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
