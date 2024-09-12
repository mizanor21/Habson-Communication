/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HowWeWork = () => {
  const cardData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 1",
      description: "This is a description for the first card.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 2",
      description: "This is a description for the second card.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
  ];
  return (
    <div className="flex flex-col px-4 lg:px-[100px]">
      {/* Section 1 */}
      <div className="border-b border-gray-400 py-8 lg:py-[100px]">
        <h1 className="text-3xl lg:text-6xl font-bold">
          we bring the whole Schbang!
        </h1>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row py-8 lg:py-[60px] mb-6">
        <div className="lg:w-[30%]">
          <h2 className="text-[20px] lg:text-[25px] font-bold leading-relaxed px-4 lg:px-[20px]">
            Our mission - taking the best of Indian Creative Talent to the
            World!
          </h2>
        </div>
        <div className="lg:w-[70%] px-4 lg:px-[40px] text-[16px] lg:text-[18px]">
          Schbang originally spelt as Shebang is a word created in the 17th
          Century and added to the lexicon of the English language, and usually
          used as the phrase "the whole Schbang.”
          <br />
          <br />
          At Schbang, we strive to deliver fully integrated and holistic
          marketing solutions to our clients and unite interrelated services
          like creative, media, and technology under one roof.
          <br />
          <br />
          Our aim is to simplify the client experience by acting as a one-stop
          shop that can meet all of a client's marketing needs. Rather than
          specialising in one narrow area, we incorporate strategies that span
          across all mediums.
          <br />
          <br />
          By taking this comprehensive approach, we can coordinate solutions
          that are greater than the sum of their parts and truly move the needle
          for our client’s businesses.
          <br />
          <br />
          Our unified offerings allow us to create marketing solutions with
          maximum impact and create a "SCHBANG".
        </div>
      </div>

      {/* Section 3 - Our Principles */}
      <div className="flex flex-col">
        <h2 className="text-[20px] lg:text-[25px] font-bold leading-relaxed px-4 lg:px-[20px]">
          Our Principle
        </h2>

        <div className="flex justify-center flex-wrap gap-6 p-4 mb-10">
          {cardData.map(({ id, image, headline, description }) => (
            <div
              key={id}
              className=" bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 sm:h-60 md:h-72 object-cover"
                src={image}
                alt={headline}
              />
              <div className="p-4">
                <h2 className="text-lg lg:text-xl text-center font-semibold mb-2">
                  {headline}
                </h2>
                <p className="text-gray-600 text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
