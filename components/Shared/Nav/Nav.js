import React from "react";
import logo from "@/public/assets/logo/logo.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Button from "../../Custom/Button";
import WordRotate from "@/components/magicui/word-rotate";

const Nav = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/work"}>Work</Link>
              </li>
              <li>
                <a>Solutions</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Resources</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <Link className=" flex items-end gap-1 text-[#125b5c]" href="/">
            <Image src={logo} className="w-16" alt="Living Brands logo"></Image>
            <h1 className="text-4xl animate-pulse font-bold mb-2">.</h1>
            <WordRotate
              className="text-lg font-bold p-0 m-0"
              words={[
                "Brands",
                "Tech",
                "Media",
                "Production",
                "Influencer",
                "Talent management",
                "IT",
                "UI/UX",
                "SEO",
                "Chatbots",
              ]}
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 z-50">
            <li>
              <Link href={"/work"}>Work</Link>
            </li>
            <li>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2 w-60 relative bg-white z-[10]">
                  <li>
                    <Link href={"/brand-solutions"}>Brand Solutions</Link>
                  </li>
                  <li>
                    <Link href={"media-solutions"}>Media Solutions</Link>
                  </li>
                  <li>
                    <Link href={"tech-solutions"}>Tech Solutions</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 w-56">
                  <li>
                    <Link href={"how-we-work"}>How We Work</Link>
                  </li>
                  <li>
                    <Link href={"/news-center"}>News Center</Link>
                  </li>
                  <li>
                    <Link href={"/our-partner"}>Our Partnership</Link>
                  </li>
                  <li>
                    <Link href={"/csr"}>CSR</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/blogs"}>Blogs</Link>
                  </li>
                  <li>
                    <Link href={"/the-edge"}>The Edge</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/career"}>Careers</Link>
            </li>
          </ul>
          <Link href={"/contact"}>
            <Button>
              Contact Us <FaArrowRightLong />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
