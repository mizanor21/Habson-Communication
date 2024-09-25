"use client";
import { useRef, useEffect, useState } from "react";
import arrowIcon from "@/public/assets/define/about-arrow.png";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const Define = () => {
  const [angle, setAngle] = useState(0);

  // Function to calculate angle between arrow and mouse
  const calculateAngle = (event) => {
    // Get the bounding box of the arrow container
    const arrow = document.getElementById("arrow-container");
    const rect = arrow.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - arrowCenterX;
    const deltaY = event.clientY - arrowCenterY;

    // Calculate the angle in radians and then convert to degrees
    const rad = Math.atan2(deltaY, deltaX);
    const deg = (rad * 180) / Math.PI;
    setAngle(deg);
  };

  useEffect(() => {
    window.addEventListener("mousemove", calculateAngle);

    return () => {
      window.removeEventListener("mousemove", calculateAngle);
    };
  }, []);

  const styles = {
    justifyContent: "center",
    backgroundImage: `url(/assets/define/about-bg.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "30vh",
  };

  return (
    <div className="bg-white font-thin  py-10 lg:py-[10%]  relative z-[110]">
      <div className="flex px-[5%]">
        <div className="mx-3 ">
          <div className="flex justify-center items-center rounded-badge">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              style={styles}
            >
              <div className="col-span-1">
                <h2 className="text-2xl lg:text-[50px] font-bold lg:pr-5 mb-2 text-[#185C5D]">
                  What defines us
                </h2>
                <div className="flex">
                  <div className="relative w-[50%] h-auto flex px-8  items-center">
                    <div
                      id="arrow-container"
                      className="bg-no-repeat flex justify-start items-center"
                    >
                      <div
                        className=" w-[300px] transform origin-center"
                        style={{ transform: `rotate(${angle + 90}deg)` }}
                      >
                        {/* <FaArrowLeft /> */}
                        <Image
                          width={400}
                          height={500}
                          src={arrowIcon}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-xl lg:text-3xl font-bold text-[#185C5D]">
                  We&apos;re brand architects, crafting narratives with
                  precision, fueled by innovation and seamless integration.
                </p>
                <p className="my-5 lg:my-12 text-base opacity-60 font-semibold tracking-wider">
                  “Living Brands” is fueled by an unquenchable drive to make
                  your brand a global force. We believe in the power of
                  collaboration, bringing together the best creative minds,
                  in-house specialists, industry partners, and technology
                  leaders - pushing the boundaries of what&apos;s possible in
                  digital marketing, crafting impactful campaigns that ignite
                  brand growth.
                </p>
                <div>
                  <Link
                    href="/careers"
                    className="bg-[#185C5D] btn hover:bg-[#1d7374] rounded-full px-8 py-4 mt-5 text-white"
                  >
                    <span>Discover Our Dynamic Culture</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Define;
