// "use client";

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import "./solutions.css";
// import { BsArrowRight } from "react-icons/bs";

// const Solutions = () => {
//   return (
//     <div className="">
//       <HorizontalScrollCarousel />
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

//   return (
//     <>
//       <sectionrelative z-[110] bg-white h-[800vh] py-20 hidden md:block
//       >
//         <div className="sticky top-10 flex  items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-4">
//             <div className="flex overflow-scroll bg-white relative">
//               {sections.map((section, sectionIndex) => (
//                 <div
//                   key={sectionIndex}
//                   className={`hover-container ${section?.id} h-screen border-r-2 hover:text-white group`}
//                 >
//                   <div className="text-center w-[550px] h-full flex items-center justify-center">
//                     <div className="px-5 lg:px-20">
//                       <h3 className="text-4xl  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
//                         {section?.title}
//                       </h3>
//                       <p className="carousel-p hidden-on-hover">
//                         {section?.content}
//                       </p>
//                       <div className="flex justify-center pt-5 lg:pt-20">
//                         <BsArrowRight className="text-2xl lg:text-5xl carousel-p text-[#125b5c] p-2 hidden-on-hover  bg-white rounded-full" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </sectionrelative>

//       {/* Mobile */}
//       <div className="md:hidden">
//         <div className=" bg-white relative z-[9999] mt-8">
//           {sections.map((section, sectionIndex) => (
//             <div
//               key={sectionIndex}
//               className={`hover-container ${section?.id}   hover:text-white group`}
//             >
//               <div className="h-full md:flex items-center justify-center border-b border-black">
//                 <div className="px-2">
//                   <h3 className="text-xl font-bold text-black  group-hover:text-white transition-colors duration-300 mb-5 mt-2">
//                     {section?.title}
//                   </h3>
//                   <p>{section?.content}</p>
//                   <BsArrowRight className="text-[40px] my-6 bg-[#125b5c] p-2 rounded-full text-white" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Solutions;

// const sections = [
//   {
//     id: "slide-1",
//     title: "Brand Strategy",
//     content:
//       "We specialize in crafting brand strategies that breathe life into brands, infusing them with purpose, differentiation, and resonance. Our approach leverages the essence of each brand to drive meaningful connections and sustainable growth.",
//   },
//   {
//     id: "slide-2",
//     title: "Media Buying Strategy",
//     content:
//       "The media buying strategy we employ leverages data-driven insights to maximize brand impact across diverse channels. Through meticulous targeting and strategic placement, we optimize ROI and foster meaningful engagement, ensuring brands stand out amidst the ever-evolving media landscape.",
//   },
//   {
//     id: "slide-3",
//     title: "Research Solution",
//     content:
//       "Delving deep into market dynamics, consumer behavior, and industry trends, our research solution provides tailored insights empowering informed decisions. Utilizing cutting-edge methodologies, we offer comprehensive analysis and actionable recommendations, equipping brands with the knowledge to thrive in today's competitive landscape.",
//   },
//   {
//     id: "slide-4",
//     title: "Tech Innovation",
//     content:
//       "Tech innovation fuels our passion. We're dedicated to pioneering solutions that redefine possibilities. Through relentless exploration and collaboration, we push boundaries to shape the future of technology and empower meaningful progress in diverse sectors.",
//   },
//   {
//     id: "slide-5",
//     title: "Social Media Solution",
//     content:
//       "Driving impactful engagement, our social media solutions are crafted to amplify brand presence and foster genuine connections. From content creation to community management, we tailor strategies with creative finesse and utilize data-driven insights to navigate the digital landscape, achieving tangible results and lasting influence.",
//   },
//   {
//     id: "slide-6",
//     title: "Content Development",
//     content:
//       "Our content development services craft compelling narratives that captivate audiences and elevate brands. From concept to execution, we blend creativity with strategic insight to deliver engaging content across diverse platforms. With a focus on authenticity and relevance, we ensure each piece resonates and inspires action.",
//   },
//   {
//     id: "slide-7",
//     title: "Influencer Partnerships",
//     content:
//       "Our influencer and celebrity partnerships harness the power of influence to amplify brand messaging. Through strategic collaborations, we connect brands with personalities who authentically resonate with target audiences. From endorsement to content creation, we cultivate partnerships that drive awareness, credibility, and engagement.",
//   },
//   {
//     id: "slide-8",
//     title: "Pr Innovations",
//     content:
//       "Leveraging cutting-edge strategies and channels, our PR innovations redefine brand storytelling, elevating narratives to new heights. From digital PR to immersive experiences, we pioneer approaches that capture attention and foster meaningful connections, driving visibility, credibility, and advocacy in today's dynamic media landscape.",
//   },
//   {
//     id: "slide-9",
//     title: "Films & Production",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, libero. Molestias quaerat, facilis laboriosam aut tempora ab quidem? Ullam nemo quis facilis nostrum sint maxime doloremque consequatur vero assumenda distinctio!",
//   },
//   {
//     id: "slide-10",
//     title: "3D Motion Contents",
//     content:
//       "We specialize in films and production, breathing life into stories with cinematic flair. From concept to post production, we merge creativity and technical expertise to deliver captivating visuals that resonate with audiences. Whether crafting commercials, documentaries, or branded content, we turn visions into reality, leaving a lasting impression.",
//   },
// ];

"use client";
import React, { useEffect, useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./solutions.css";

const Card = ({ sections, section, index }) => {
  return (
    <div className="flex overflow-scroll bg-white relative">
      <div
        key={index}
        className={`hover-container ${section?.id} h-screen border-r-2 hover:text-white group`}
      >
        <div className="text-center w-[550px] h-full flex items-center justify-center">
          <div className="px-5 lg:px-20">
            <h3 className="text-4xl  uppercase font-bold text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              {section?.title}
            </h3>
            <p className="carousel-p hidden-on-hover">{section?.content}</p>
            <div className="flex justify-center pt-5 lg:pt-20">
              <BsArrowRight className="text-2xl lg:text-5xl carousel-p text-[#125b5c] p-2 hidden-on-hover  bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  const [offset, setOffset] = useState(0);
  const totalCards = 5; // Total number of cards
  const visibleCards = 3; // Number of full cards visible
  const cardWidth = 1200; // Width of each card (adjusted for your preference)
  const cardMargin = 8; // Margin around each card (m-2 gives 8px margin)
  const containerWidth = (cardWidth + cardMargin) * totalCards; // Total width of the card container
  const screenWidth = window.innerWidth;
  const maxOffset = -(containerWidth - screenWidth); // Maximum scroll value, adjusted to stop at the last card

  const targetOffset = useRef(0); // Ref to store the target offset for smoother transition
  const isMoving = useRef(false); // To track whether the mouse is moving
  const animationFrameId = useRef(null); // To store the requestAnimationFrame ID

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const screenWidth = window.innerWidth;

    // Calculate the scroll range based on mouse position
    const newOffset =
      (clientX / screenWidth) *
      (totalCards - visibleCards) *
      -(cardWidth + cardMargin);

    // Prevent scrolling past the last card
    targetOffset.current = Math.max(maxOffset, Math.min(0, newOffset));

    // Indicate that the mouse is moving
    isMoving.current = true;

    // Cancel any ongoing animation to avoid multiple frames being requested
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    // Start the animation
    animate();
  };

  const animate = () => {
    setOffset((prevOffset) => {
      const diff = targetOffset.current - prevOffset;
      if (Math.abs(diff) > 0.1) {
        return prevOffset + diff * 0.05; // Smooth easing
      } else {
        return targetOffset.current; // Stop updating when close to target
      }
    });

    if (isMoving.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    let mouseStopTimeout;

    const stopMoving = () => {
      // Set mouse moving to false after a delay when mouse stops
      mouseStopTimeout = setTimeout(() => {
        isMoving.current = false;
      }, 100); // Wait for 100ms to confirm the mouse has stopped
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", stopMoving);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", stopMoving);
      if (mouseStopTimeout) {
        clearTimeout(mouseStopTimeout);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden h-screen flex relative z-[110] bg-white  py-20 md:block">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(${offset}px)`,
          width: `${containerWidth}px`, // Set the total width for the card container
        }}
      >
        {sections.map((section, index) => (
          <Card key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
