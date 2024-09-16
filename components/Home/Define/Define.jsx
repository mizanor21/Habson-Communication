"use client";
import { useRef, useEffect } from "react";
import arrowIcon from "@/public/assets/define/about-arrow.png";
import Link from "next/link";
import Image from "next/image";

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
    fontFamily: "Open Sans, sans-serif",
    backgroundPosition: "center",
  };

  return (
    <div className="py-10 lg:py-48 bg-white relative z-[9999]">
      <div style={styles} className="flex items-center    ">
        <div
          className="lg:container lg:mx-auto mx-3 "
          onMouseMove={handleMouseMove}
        >
          <div className="flex justify-center items-center rounded-badge">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="col-span-1">
                <h2 className="text-2xl lg:text-4xl font-bold lg:pr-5 mb-2">
                  What defines us
                </h2>
                <div className="flex">
                  <Image
                    src={arrowIcon}
                    className="w-36 transition-transform duration-300"
                    alt=""
                    ref={arrowRef}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-xl font-bold text-[#185C5D] mb-5">
                  We&apos;re brand architects, crafting narratives with
                  precision, fueled by innovation and seamless integration.
                </p>
                <p>
                  “Living Brands” is fueled by an unquenchable drive to make
                  your brand a global force. We believe in the power of
                  collaboration, bringing together the best creative minds,
                  in-house specialists, industry partners, and technology
                  leaders - pushing the boundaries of what&apos;s possible in
                  digital marketing, crafting impactful campaigns that ignite
                  brand growth.
                </p>
                <div className="mt-5">
                  <Link
                    href="https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212/data=!4m2!3m1!1s0x3755c700426d1655:0x8a70d2c34d6aae47?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACDXggMqUSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQkQ%3D&g_st=aw"
                    target="_blank"
                    className="bg-[#185C5D] hover:bg-[#1d7374] rounded-full px-6 py-2 text-white"
                  >
                    Discover Our Dynamic Culture
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
