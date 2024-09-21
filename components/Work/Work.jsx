import React from "react";
import Button from "../Custom/Button";
import Image from "next/image";
import Items from "../Items/Items";

const Work = () => {
  return (
    <div className="bg-white relative rounded-b-[40px]">
      <div className="px-[5%] pb-10">
        <h2 className="text-[Inter] text-5xl text-[#125b5c] font-bold py-10">
          Explore Our latest Work
        </h2>
        <hr />
        <div className="flex justify-end my-5">
          <Button>Casestudy</Button>
          <span className="divider divider-horizontal divider-start divider-neutral"></span>
          <Button>Daily Creativity</Button>
        </div>

        <Items />
      </div>
    </div>
  );
};

export default Work;
