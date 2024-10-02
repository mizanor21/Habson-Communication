"use client";
import React, { useEffect } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ButtonEffect = ({ children }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn-posnawr");

    buttons.forEach((button) => {
      ["mouseenter", "mouseout"].forEach((evt) => {
        button.addEventListener(evt, (e) => {
          let parentOffset = button.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

          const span = button.getElementsByTagName("span");

          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });
  }, []);

  const handleMouseEnter = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "225%";
    span.style.height = "562.5px";
    span.style.transition = "width 0.6s ease, height 0.6s ease"; // Smooth expansion
  };

  const handleMouseLeave = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "0";
    span.style.height = "0";
    span.style.transition = "width 0.6s ease, height 0.6s ease"; // Smooth shrinking
  };

  return (
    <div
      className="btn-posnawr relative flex justify-center items-center gap-2 rounded-full  py-3 px-8 text-center text-lg text-[#115c5c] border-2 border-[#115c5c] overflow-hidden transition-colors duration-300 ease-in-out hover:text-white"
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children} <MdOutlineArrowRightAlt className="text-xl" />
      <span
        className="absolute block bg-[#115c5c] rounded-full transition-all ease-in-out duration-700 -z-10"
        style={{ transform: "translate(-50%, -50%)" }}
      ></span>
    </div>
  );
};

export default ButtonEffect;
