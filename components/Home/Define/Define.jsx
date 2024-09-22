"use client";
import { useRef, useEffect } from "react";
import arrowIcon from "@/public/assets/define/about-arrow.png";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Define = () => {
  const arrowRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  const updateArrowRotation = () => {
    const arrow = arrowRef.current;
    if (arrow) {
      const rect = arrow.getBoundingClientRect();
      const arrowX = rect.left + rect.width / 2;
      const arrowY = rect.top + rect.height / 2;

      const angle =
        Math.atan2(mousePos.current.y - arrowY, mousePos.current.x - arrowX) *
        (90 / Math.PI);
      arrow.style.transform = `rotate(${angle}deg)`;
    }
    requestRef.current = requestAnimationFrame(updateArrowRotation);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateArrowRotation);
    return () => cancelAnimationFrame(requestRef.current);
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
    <div className="bg-white font-thin  py-10 lg:py-[10%]  relative z-[9999]">
      <div className="flex px-[5%]">
        <div className="mx-3 " onMouseMove={handleMouseMove}>
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
                  <Image
                    src={arrowIcon}
                    className="w-36 lg:w-64 transition-transform duration-300"
                    alt=""
                    ref={arrowRef}
                  />
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
