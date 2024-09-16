import React from "react";
import footerLogo from "@/public/assets/logo/logo.png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black bg-dark">
      <div className="p-10 lg:p-20">
        <div className="flex justify-center items-center">
          <Image src={footerLogo} alt="Footer Logo" className="mb-10 "></Image>
        </div>
        <div>
          <hr className="pb-10" />
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
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
          <div className="flex gap-5 text-sm">
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
            <a href="#" className="text-white">
              Case Studies
            </a>
            <a href="#" className="text-white">
              Blog Privacy
            </a>
          </div>
          <div className="text-white text-sm">
            <p className="text-end">Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
