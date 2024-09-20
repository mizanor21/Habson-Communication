import React from "react";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import footerLogo from "@/public/assets/logo/logoFooter.png";
import copy from "@/public/assets/logo/copy.png";
import location from "@/public/assets/logo/location.png";

const Footer = () => {
  return (
    <div className="bg-[#125b5c] ">
      <div className="p-10 lg:p-20 grid grid-cols-1 gap-y-5">
        <div className="flex justify-center items-center w-full">
          <Image src={footerLogo} alt="Footer Logo" className="w-60"></Image>
        </div>
        <div className="">
          <hr />
        </div>
        <div className="lg:container lg:mx-auto lg:flex justify-between items-center ">
          <div className="flex text-white justify-center items-center gap-2 text-3xl mb-5 md:mb-0">
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
            <div className="lg:text-end flex items-center gap-2">
              <Image src={copy} alt="Copy" className=""></Image>
              <small>
                Hosue: 230, New D.O.H.S Lake Road, Lane-16, Mohakhali,
                Dhaka-1206.
              </small>
            </div>
            <div className="lg:text-end flex items-center gap-2">
              <Image src={location} alt="Location" className=""></Image>
              <small>Living Brands All Rights Reserved</small>
            </div>
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
