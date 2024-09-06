"use client";
import React, { useState } from "react";
import Items from "../Items/Items";

const TechSolutions = () => {
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
            Tech Solutions
          </h2>
          <p className="text-lg font-semibold  text-black mb-10">
            Our Digital Transformation Team uses bleeding-edge technology to
            enable you to nurture customer relationships at every stage. We
            create integrated digital ecosystems covering web, social & paid
            media, CRM, ERP, search, e-commerce and other channels.
          </p>
          <p className="text-lg font-semibold  text-black mb-10">
            Our custom-made platforms and solutions help you attract, retain and
            engage every prospect with a personalized touch.
          </p>
          <p className="font-bold text-xl text-black mb-10">
            Proudly innovating with leading technology leaders in the market...
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 mb-10">
            {/* Tech Logos */}
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742443d82451ca503eca0_1.webp"
              alt="shopify partner"
              className="h-24 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e4f_6.webp"
              alt="Google partner"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bd521f0ee28256a9fcd2_HubSpot-certified-partner-2-p-500.webp"
              alt="hubspot"
              className="h-16 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64674240ce6535840fe75043_3.webp"
              alt="Adobe solution partner "
              className="h-24  mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64674241bf45be36db12d2cb_5.webp"
              alt="premium partner"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e5a_7.webp"
              alt="uno"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bdd4ebdcee2b99b714e2_download-removebg-preview%20(1).png"
              alt="Godrej"
              className="h-24 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bd3023daf955a8fb94e0_phploho.png"
              alt=""
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477be1b9ede7ec2c17b1590_pngwing.com-p-500.png"
              alt=""
              className="h-24 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {[
            "Custom Web Development",
            "Web Personalization",
            "UI/Ux",
            "Search Engine Optimization",
            "CRM & ERP Solutions",
            "E-Commerce",
            "Email Marketing",
            "Marketing Automation",
            "Chatbots",
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

export default TechSolutions;
