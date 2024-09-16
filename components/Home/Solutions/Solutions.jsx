"use client";
import React, { useRef } from "react";
import "./solutions.css";
import { FaCircleArrowRight } from "react-icons/fa6";

const Solutions = () => {
  const sections = [
    {
      id: "slide-1",
      title: "Brand Strategy",
      content:
        "We specialize in crafting brand strategies that breathe life into brands, infusing them with purpose, differentiation, and resonance. Our approach leverages the essence of each brand to drive meaningful connections and sustainable growth.",
    },
    {
      id: "slide-2",
      title: "Media Buying Strategy",
      content:
        "The media buying strategy we employ leverages data-driven insights to maximize brand impact across diverse channels. Through meticulous targeting and strategic placement, we optimize ROI and foster meaningful engagement, ensuring brands stand out amidst the ever-evolving media landscape.",
    },
    {
      id: "slide-3",
      title: "Research Solution",
      content:
        "Delving deep into market dynamics, consumer behavior, and industry trends, our research solution provides tailored insights empowering informed decisions. Utilizing cutting-edge methodologies, we offer comprehensive analysis and actionable recommendations, equipping brands with the knowledge to thrive in today's competitive landscape.",
    },
    {
      id: "slide-4",
      title: "Tech Innovation",
      content:
        "Tech innovation fuels our passion. We're dedicated to pioneering solutions that redefine possibilities. Through relentless exploration and collaboration, we push boundaries to shape the future of technology and empower meaningful progress in diverse sectors.",
    },
    {
      id: "slide-5",
      title: "Social Media Solution",
      content:
        "Driving impactful engagement, our social media solutions are crafted to amplify brand presence and foster genuine connections. From content creation to community management, we tailor strategies with creative finesse and utilize data-driven insights to navigate the digital landscape, achieving tangible results and lasting influence.",
    },
    {
      id: "slide-6",
      title: "Content Development",
      content:
        "Our content development services craft compelling narratives that captivate audiences and elevate brands. From concept to execution, we blend creativity with strategic insight to deliver engaging content across diverse platforms. With a focus on authenticity and relevance, we ensure each piece resonates and inspires action.",
    },
    {
      id: "slide-7",
      title: "Influencer Partnerships",
      content:
        "Our influencer and celebrity partnerships harness the power of influence to amplify brand messaging. Through strategic collaborations, we connect brands with personalities who authentically resonate with target audiences. From endorsement to content creation, we cultivate partnerships that drive awareness, credibility, and engagement.",
    },
    {
      id: "slide-8",
      title: "Pr Innovations",
      content:
        "Leveraging cutting-edge strategies and channels, our PR innovations redefine brand storytelling, elevating narratives to new heights. From digital PR to immersive experiences, we pioneer approaches that capture attention and foster meaningful connections, driving visibility, credibility, and advocacy in today's dynamic media landscape.",
    },
    {
      id: "slide-9",
      title: "Films & Production",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, libero. Molestias quaerat, facilis laboriosam aut tempora ab quidem? Ullam nemo quis facilis nostrum sint maxime doloremque consequatur vero assumenda distinctio!",
    },
    {
      id: "slide-10",
      title: "3D Motion Contents",
      content:
        "We specialize in films and production, breathing life into stories with cinematic flair. From concept to post production, we merge creativity and technical expertise to deliver captivating visuals that resonate with audiences. Whether crafting commercials, documentaries, or branded content, we turn visions into reality, leaving a lasting impression.",
    },
  ];
  return (
    <div className="flex overflow-scroll">
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className={`hover-container ${section.id} h-screen border-r-2 hover:text-white group`}
        >
          <div className="text-center w-[550px] h-full flex items-center justify-center">
            <div className="px-5 lg:px-20">
              <h3 className="text-4xl  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
                {section?.title}
              </h3>
              <p className="carousel-p hidden-on-hover">{section?.content}</p>
              <div className="flex justify-center pt-5 lg:pt-20">
                <FaCircleArrowRight className="text-2xl lg:text-5xl carousel-p text-white hidden-on-hover " />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
