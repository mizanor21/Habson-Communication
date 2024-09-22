"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TechSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Array of items with dynamic titles and contents
  const data = [
    {
      title: "Social Media Management",
      content:
        "We create data-driven social media strategies that go beyond vanity metrics. By focusing on building genuine connections, we transform your online presence into a thriving community.",
    },
    {
      title: "Content and Copywriting",
      content:
        "Our wordsmiths craft compelling, customer-centric content that drives results. We prioritize clarity, impact, and empathy over empty buzzwords.",
    },
    {
      title: "Graphic Design and Illustration",
      content:
        "In today's visual-first world, we create captivating content that grabs attention and embodies your brand's essence.",
    },
    {
      title: "Video Editing and Animation",
      content:
        "We create captivating 2D and 3D animations and video edits optimized for maximum social impact. Our team blends artistry and technology to craft visually stunning and engaging content that resonates with audiences, drives engagement, and delivers results.",
    },
    {
      title: "Film Production, AVs and Product Photography",
      content:
        "Our in-house production studio offers a full spectrum of creative services, from script-to-screen. Our talented team of filmmakers, photographers, and editors produce a wide range of content, including feature films, commercials, brand films, and product photography.",
    },
    {
      title: "Campaign Planning",
      content:
        "Beyond daily content, we specialize in creating unforgettable experiences. Our end-to-end digital services transform client visions into reality, exceeding expectations at every turn.",
    },
    {
      title: "Influencer Management & ORM",
      content:
        "We forge powerful partnerships with top-tier influencers and thought leaders to amplify your brand's reach and drive meaningful engagement. By leveraging their social influence, we create impactful campaigns that resonate with your target audience and boost brand recall. Our strong media relationships ensure widespread coverage and positive press for your brand. To protect and enhance your online reputation, our dedicated ORM team uses advanced listening tools and media contacts to manage online conversations effectively.",
    },
    {
      title: "New Brand Launch and Rebranding",
      content:
        "Our branding division crafts enduring brand identities. We delve deep into your business, understanding your audience and goals to develop a comprehensive brand ecosystem. From designing your brand’s logo to building a brand persona - this includes everything! ",
    },
  ];

  return (
    <section className="px-[5%] py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-6xl text-[#125b5c] font-bold mb-10">
            Tech Solutions
          </h2>
          <p className="text-lg font-normal  text-black mb-10 text-justify">
            From crafting compelling daily content to executing high-impact
            flagship campaigns, we provide a comprehensive range of digital
            services tailored to your unique business objectives. We combine
            strategic thinking, creative design, engaging video production, and
            dynamic animation to create a cohesive digital presence that drives
            tangible results.
          </p>
          <p className="font-bold text-xl text-[#125b5c] mb-10">
            Proud to work with the biggest brands in India & Abroad
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 mb-10">
            {/* Media Logos */}
            <img
              src="https://i.postimg.cc/dVFbxnRf/l-24.png"
              alt="Meta"
              className="h-14 object-contain mb-12"
            />
            <img
              src="https://i.postimg.cc/T2zMrTKf/l-26.png"
              alt="Google Partner"
              className="h-24 object-contain"
            />
            <img
              src="https://i.postimg.cc/nVjfjXc3/l-3.png"
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

export default TechSolutions;
