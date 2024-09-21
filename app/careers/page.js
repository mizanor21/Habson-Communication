"use client";

import CareerSection from "@/components/Career/CareerSection";
import VideoSection from "@/components/Career/VideoSection";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="px-[5%]">
      <CareerSection></CareerSection>
      <VideoSection></VideoSection>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-white my-20">
      <div className="my-20">
        <h1 className="text-[24px] font-bold text-center ">
          Have you got what it takes to #CreateALivingBrands?
        </h1>
        <p className="text-[20px] font-normal text-center">
          Check out our core principles. If they align with your values, do
          apply..
        </p>
      </div>
      <div className="sticky top-0 flex  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className=" relative  w-[500px] overflow-hidden border hover:-translate-y-5 duration-300 mt-5"
    >
      <div>
        <img
          className="w-full h-[500px] object-cover"
          src={card.imageUrl}
          alt={card.title}
        />
      </div>
      <div className="p-[2rem] bg-white hover:bg-neutral-50 ">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold group-hover:text-black">
            {card.title}
          </h2>
          <p className="text-[16px] group-hover:text-black py-4">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    id: 1,
    imageUrl: "https://i.postimg.cc/bJyprFm5/Artboard-1.png",
    title: "Our Growth is Fueled by Our Clients' Growth",
    description:
      "Our core purpose is to be an unparalleled service provider, dedicated to aligning our clients' goals with their ultimate vision of success. At Living Brands, we commit to delivering exceptional value by inspiring ourselves and our colleagues to prioritize the needs of our partners.",
  },
  {
    id: 2,
    imageUrl: "https://i.postimg.cc/xdS0DdMn/orange.png",
    title: "Commitment Defines Our Work Ethic",
    description: `Operating within fast-paced, intricate environments, we manage multiple relationships to provide rapid, flexible outcomes for our clients. We are steadfast in honoring our commitments.`,
  },
  {
    id: 3,
    imageUrl: "https://i.postimg.cc/HL4TpC95/purple.png",
    title: "Creativity is The Soul of Our Work, Aesthetics, Its Expression",
    description: `We produce groundbreaking work that challenges conventional norms and significantly enhances our clients' businesses. Our communication and design strategies ensure our brand stands out in the market.`,
  },
  {
    id: 4,
    imageUrl: "https://i.postimg.cc/fTJWYpMn/yellow.png",
    title: "Collaborative Win-win Relationships",
    description: `We cultivate partnerships founded on mutual respect and shared objectives, ensuring the success of all stakeholders involved.`,
  },
  {
    id: 5,
    imageUrl: "https://i.postimg.cc/sgWVNWBT/red.png",
    title: "Cultural Relevance is Our Cornerstone",
    description: `Our purpose is to align brands with consumer culture through deep consumer understanding, effective communication, and exceptional experiences.`,
  },
  {
    id: 6,
    imageUrl: "https://i.postimg.cc/7Y0Mzd9c/6-1.png",
    title: "Technology for Ease",
    description: `Our core belief is that technology should enhance lives by simplifying processes and delivering engaging experiences. We harness this principle to create streamlined, impactful solutions for our clients.`,
  },
  {
    id: 7,
    imageUrl: "https://i.postimg.cc/0N86bHXp/3.png",
    title: "Brainstorm, Strategize, Execute. ",
    description: `Unleashed power is formidable, but its true potential lies in control. This inspires us to think profoundly, strategize astutely, and act boldly.`,
  },
];
