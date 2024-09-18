import React from "react";

const data = [
  {
    id: 1,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b4542fd781a746f7303a4_Asset%2015%402x.webp", // Replace with the correct image URL or import
    title: "Client's Business Wins, We Win.",
    description:
      "Fundamentally, we will always be a services-first company that ensures our clients’ businesses fit their definition of success. As Schbangers, we must deliver the whole Schbang by pushing ourselves and those around us to work in the best interests of our partners",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b454240e38a668af642de_Asset%2016%402x.webp",
    title: "Our Word is our Bond.",
    description: `We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility, and results to our clients. It is integral to hold ourselves accountable for our promises and strive to deliver on those promises without fail.`,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b454210447453436bd1c3_Asset%2017%402x.webp",
    title: "Creativity is Sacred, Aesthetics are God.",
    description: `We create path-breaking work that challenges the status quo and positively impacts our clients’ businesses. We make sure how we communicate, and design helps our brand stand out.
.`,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b454251c157cfc0193cfe_Asset%2018%402x.webp",
    title: "Partnerships with Win-Win Attitude.",
    description: `We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.`,
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b45431bb20d701b7212b1_Asset%2019%402x.webp",
    title: "Be Culturally Relevant, Always.",
    description: `We exist to make brands culturally relevant by being consumer-centric, ensuring seamless communication, and providing top-notch consumer experiences.`,
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b4542650f3323bd50c41c_Asset%2020%402x.webp",
    title: "Technology to Simplify..",
    description: `We believe any technology’s governing principle is to simplify the consumer’s life and provide immersive user experiences. Therefore, technology to simplify is our guiding light to create effortless and effective outputs for our clients.
`,
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b4542e51baa3dd511a5a0_Asset%2021%402x.webp",
    title: "Think. Plan. And then execute fearlessly.",
    description: `Raw energy is powerful, but raw energy channeled correctly is advantageous. We internalize this to think deeply, plan purposefully, and execute fearlessly.`,
  },
];

const Card = ({ imageUrl, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full mb-10 hover:bg-[#f5f5f5] ">
    <img src={imageUrl} alt={title} className="" />
    <div className="p-6  ">
      <h2 className="text-3xl font-bold mb-2 text-center text-black mb-5">
        {title}
      </h2>
      <p className="text-gray-600  font-semibold text-lg text-center">
        {description}
      </p>
    </div>
  </div>
);

const DynamicCard = () => {
  return (
    <div className="p-16">
      <div className="container mx-auto px-16 ">
        <div className="bg-white text-center py-16">
          <h1 className="text-3xl font-semibold tracking-tighter text-black ">
            Have you got what it takes to #CreateASchbang?
          </h1>
          <p className="text-xl text-gray-700 mb-5">
            Check out our core principles. If they align with your values, do
            apply..
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item) => (
            <Card
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
