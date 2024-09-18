"use client";
import React, { useEffect, useState } from "react";

const ContactUsImg = () => {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   fetch("ContactleftImg.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCards(data);
  //     });
  // }, []);

  const cards = [
    {
      id: 1,
      image: "https://i.postimg.cc/R0ZLLczk/contact1.png",
    },

    {
      id: 2,
      image: "https://i.postimg.cc/2SwxW0gd/contact2.png",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/Bv7cYXSX/contact3.png",
    },
  ];

  return (
    <div>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <div className="w-full  mx-auto">
              <img src={card.image} className=" w-full h-full "></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsImg;
