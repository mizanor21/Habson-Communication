import React from "react";
import footerLogo from "@/public/assets/logo/logoFooter.png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
          <div className="flex justify-center gap-3">
            <a href="#">
              <ImFacebook2 className="text-white text-3xl" />
            </a>
            <a href="#">
              <FaInstagramSquare className="text-white text-4xl" />
            </a>
            <a href="#">
              <FaYoutube className="text-white text-4xl" />
            </a>
            <a href="#" className="text-white text-4xl">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex justify-center gap-5 text-sm text-center py-5 md:py-0">
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
            <a href="#" className="text-white">
              Blog Privacy
            </a>
          </div>
          <div className="text-white text-sm text-center">
            <p className="lg:text-end">Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
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
