import { HiLocationMarker } from "react-icons/hi";
import { RiCopyrightFill } from "react-icons/ri";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#185C5D] sticky bottom-0">
      <footer className="footer text-base-content p-10 items-center justify-center">
        <img
          className="max-h-[230px] max-w-[900px]"
          src="https://i.postimg.cc/L68GLfzq/footer-logo.png"
          alt=""
        />
      </footer>
      <footer className="footer block lg:flex lg:justify-between border-t border-gray-400 px-10 py-4 text-white justify-center items-center">
        <div className="flex justify-center items-center gap-2 text-3xl">
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
        <div className="my-3 md:my-0">
          <Link
            href={
              "https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212/data=!4m2!3m1!1s0x3755c700426d1655:0x8a70d2c34d6aae47?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACDXggMqUSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQkQ%3D&g_st=aw"
            }
            target="_blanck"
            className="flex items-center gap-2"
          >
            <HiLocationMarker className="text-[26px]" /> Hosue: 230, New D.O.H.S
            Lake Road, Lane-16, Mohakhali, Dhaka-1206.
          </Link>
          <div className=" flex items-center  gap-2">
            <RiCopyrightFill className="text-[22px] m-[2px]" />
            <p>Living Brands All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
<p></p>;
