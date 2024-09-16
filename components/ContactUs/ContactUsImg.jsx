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
      image:
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646103677552ccf3d4b371cd_522fb1162706823.Y3JvcCw1MDUzLDM5NTIsMCwxMDg4.webp",
    },

    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6461036875a21d411d460535_c1544e153590993.Y3JvcCw0NzY1LDM3MjcsMCw1MTg-p-800.webp",
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
