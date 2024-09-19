"use client";

import CareerSection from "@/components/Career/CareerSection";
import VideoSection from "@/components/Career/VideoSection";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="container mx-auto">
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white my-20">
      <div className="my-20">
        <h1 className="text-[24px] font-bold text-center ">
          Have you got what it takes to #CreateASchbang?
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
      className="group relative  w-[500px] overflow-hidden  hover:-translate-y-5 duration-300 border mt-10"
    >
      <div>
        <Image
          width={400}
          height={500}
          className="w-full h-[500px] object-cover"
          src={card.imageUrl}
          alt={card.title}
        />
      </div>
      <div className="text-center p-[2rem] bg-white hover:bg-neutral-50">
        <h2 className="text-[24px] font-extrabold group-hover:text-black">
          {card.title}
        </h2>
        <p className="text-[16px] group-hover:text-black py-4">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    id: 1,
    imageUrl: "https://i.postimg.cc/4yhyDCnT/5-1.png", // Replace with the correct image URL or import
    title: "Client's Business Wins, We Win.",
    description:
      "Fundamentally, we will always be a services-first company that ensures our clients’ businesses fit their definition of success. As Schbangers, we must deliver the whole Schbang by pushing ourselves and those around us to work in the best interests of our partners",
  },
  {
    id: 2,
    imageUrl: "https://i.postimg.cc/R0XWfQ22/2.png",
    title: "Our Word is our Bond.",
    description: `We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility, and results to our clients. It is integral to hold ourselves accountable for our promises and strive to deliver on those promises without fail.`,
  },
  {
    id: 3,
    imageUrl: "https://i.postimg.cc/rpFSvmTX/8.png",
    title: "Creativity is Sacred, Aesthetics are God.",
    description: `We create path-breaking work that challenges the status quo and positively impacts our clients’ businesses. We make sure how we communicate, and design helps our brand stand out.
  .`,
  },
  {
    id: 4,
    imageUrl: "https://i.postimg.cc/0N86bHXp/3.png",
    title: "Partnerships with Win-Win Attitude.",
    description: `We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.`,
  },
  {
    id: 5,
    imageUrl: "https://i.postimg.cc/qBYCjwgT/1.png",
    title: "Be Culturally Relevant, Always.",
    description: `We exist to make brands culturally relevant by being consumer-centric, ensuring seamless communication, and providing top-notch consumer experiences.`,
  },
  {
    id: 6,
    imageUrl: "https://i.postimg.cc/7Y0Mzd9c/6-1.png",
    title: "Technology to Simplify..",
    description: `We believe any technology’s governing principle is to simplify the consumer’s life and provide immersive user experiences. Therefore, technology to simplify is our guiding light to create effortless and effective outputs for our clients.
  `,
  },
  {
    id: 7,
    imageUrl: "https://i.postimg.cc/T3jL2X0d/4.png",
    title: "Think. Plan. And then execute fearlessly.",
    description: `Raw energy is powerful, but raw energy channeled correctly is advantageous. We internalize this to think deeply, plan purposefully, and execute fearlessly.`,
  },
];
