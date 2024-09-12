"use client";
import React, { useRef } from "react";
import "./solutions.css";

const Solutions = () => {
  return (
    <div className="flex overflow-scroll">
      <div className="hover-container slide-1 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px] uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Brand Strategy
            </h3>
            <p className="carousel-p hidden-on-hover">
              We specialize in crafting brand strategies that breathe life into
              brands, infusing them with purpose, differentiation, and
              resonance. Our approach leverages the essence of each brand to
              drive meaningful connections and sustainable growth.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-2 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px] uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Media Buying Strategy
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              The media buying strategy we employ leverages data-driven insights
              to maximize brand impact across diverse channels. Through
              meticulous targeting and strategic placement, we optimize ROI and
              foster meaningful engagement, ensuring brands stand out amidst the
              ever-evolving media landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-3 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Research Solution
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Delving deep into market dynamics, consumer behavior, and industry
              trends, our research solution provides tailored insights
              empowering informed decisions. Utilizing cutting-edge
              methodologies, we offer comprehensive analysis and actionable
              recommendations, equipping brands with the knowledge to thrive in
              today&apos;s competitive landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-4 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Tech Innovation
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Tech innovation fuels our passion. We&apos;re dedicated to
              pioneering solutions that redefine possibilities. Through
              relentless exploration and collaboration, we push boundaries to
              shape the future of technology and empower meaningful progress in
              diverse sectors.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-5 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Social Media Solution
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Driving impactful engagement, our social media solutions are
              crafted to amplify brand presence and foster genuine connections.
              From content creation to community management, we tailor
              strategies with creative finesse and utilize data-driven insights
              to navigate the digital landscape, achieving tangible results and
              lasting influence.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-6 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Content Development
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Our content development services craft compelling narratives that
              captivate audiences and elevate brands. From concept to execution,
              we blend creativity with strategic insight to deliver engaging
              content across diverse platforms. With a focus on authenticity and
              relevance, we ensure each piece resonates and inspires action.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-7 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Influencer Partnerships
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Our influencer and celebrity partnerships harness the power of
              influence to amplify brand messaging. Through strategic
              collaborations, we connect brands with personalities who
              authentically resonate with target audiences. From endorsement to
              content creation, we cultivate partnerships that drive awareness,
              credibility, and engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-8 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Pr Innovations
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Leveraging cutting-edge strategies and channels, our PR
              innovations redefine brand storytelling, elevating narratives to
              new heights. From digital PR to immersive experiences, we pioneer
              approaches that capture attention and foster meaningful
              connections, driving visibility, credibility, and advocacy in
              today&apos;s dynamic media landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-9 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              Films & Production
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              libero. Molestias quaerat, facilis laboriosam aut tempora ab
              quidem? Ullam nemo quis facilis nostrum sint maxime doloremque
              consequatur vero assumenda distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container slide-10 h-screen border-r-2 hover:text-white group">
        <div className="text-center w-[550px] h-full flex items-center justify-center p-5">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl mt-[-100px]  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              3d Motion Contents
            </h3>
            <p className="carousel-p hidden-on-hover   ">
              We specialize in films and production, breathing life into stories
              with cinematic flair. From concept to post production, we merge
              creativity and technical expertise to deliver captivating visuals
              that resonate with audiences. Whether crafting commercials,
              documentaries, or branded content, we turn visions into reality,
              leaving a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
