import React from "react";
import footerLogo from "@/public/assets/logo/logoFooter.png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#125b5c] ">
      <div className="p-10 lg:p-20 grid grid-cols-1 gap-y-10">
        <div className="flex justify-center items-center w-full">
          <Image src={footerLogo} alt="Footer Logo" className="w-60"></Image>
        </div>
        <div className="">
          <hr />
        </div>
        <div className="lg:container lg:mx-auto lg:flex justify-between items-center ">
          <div className="flex text-white justify-center items-center gap-2 text-3xl">
            <Link
              href="https://www.facebook.com/Livingbrands.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/livingbrands.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="https://www.youtube.com/@LivingBrandsBD/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.linkedin.com/company/livingbrandsbyhabson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>

          <div className="text-white text-sm text-center">
            <p className="lg:text-end text-sm">
              Hosue: 230, New D.O.H.S Lake Road, Lane-16, Mohakhali, Dhaka-1206.
            </p>
            <p className="lg:text-end text-sm">
              Living Brands All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div>
        <small></small>
      </div>
    </div>
  );
};

export default Footer;
