import { CiLocationOn } from "react-icons/ci";

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
    <div className="bg-[#185C5D] ">
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
        <div>
          <span className="flex items-center gap-2">
            <CiLocationOn className="text-3xl" />{" "}
            <address>
              Hosue: 230, New D.O.H.S Lake Road, Lane-16, Mohakhali, Dhaka-1206.
            </address>
          </span>
          <div className=" flex items-center justify-end gap-2">
            <FaRegCopyright className="text-xl" />
            <p>Living Brands All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
<p></p>;
