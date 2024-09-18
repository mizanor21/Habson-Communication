import React from "react";
import logo from "@/public/assets/logo/logo.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Button from "../../Custom/Button";
import { GoChevronDown } from "react-icons/go";
import WordRotate from "@/components/magicui/word-rotate";

const Nav = () => {
  const navItems = (
    <>
      <li className="border-b border-teal-700 lg:border-0">
        <Link className="text-[#125b5c]" href={"/work"}>
          Work
        </Link>
      </li>
      {/* Solution */}
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center text-[#125b5c]">
          Solution <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="  py-10 absolute lg:left-[-1000px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center gap-[500px]">
            <div className="grid grid-col-1 px-10">
              <Link href="/brand-solutions">
                <li className="font-bold text-2xl">Brand Solution</li>
              </Link>
              <Link href="/media-solutions">
                <li className="font-bold text-2xl">Media Solution</li>
              </Link>
              <Link href="/tech-solutions">
                <li className="font-bold text-2xl">Tech Solution</li>
              </Link>
            </div>
            <div className="w-[100%]">
              <Link href={"/about-details"} className="">
                <img
                  className="w-[100%] h-[40vh] rounded-sm"
                  src="https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg"
                  alt="Shoes"
                />
              </Link>
            </div>
          </div>
        </ul>
      </li>

      {/* solution small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="relative dropdown">
          <summary className="cursor-pointer list-none">Solutions</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"/brand-solutions"}>Brand Solutions</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/media-solutions"}>Media Solutions</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/tech-solutions"}>Tech Solutions</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* About Small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="dropdown border-none">
          <summary className="cursor-pointer list-none">About</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"how-we-work"}>How We Work</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/news-center"}>News Center</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/our-partner"}>Our Partnership</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/csr"}>CSR</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* About */}
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center text-[#125b5c]">
          About <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="  py-10 px-10 absolute lg:left-[-1100px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center gap-72 py-10">
            <div className="grid grid-col-1 gap-5">
              <li className="font-bold text-xl">
                Flame Awards 2024 - LB and Habson Static
              </li>

              <li className="font-bold text-xl">
                A Magnificent Masterstroke!(LB & Habson Logo)
              </li>

              <li className="font-bold text-xl">
                Ten Awards Five golds, Three silvers, Two bronzes
              </li>

              <li className="font-bold text-xl">Flame Awards Asia 2024</li>

              <li className="font-bold text-xl">
                Digital Marketing Awards 2022 - Living Brands
              </li>

              <li className="font-bold text-xl">
                Pusti Home Chef Best Digital Campaign by New Agency (Silver)
              </li>

              <li className="font-bold text-xl">
                Commward 2022 - Habson Communication
              </li>

              <li className="font-bold text-xl">
                PUMA Flagship Store Launch Best Outdoor Campaign (Bronze)
              </li>
            </div>
            <div className="w-[100%]">
              <Link href={"/about-details"} className="">
                <img
                  className="w-full h-[40vh] rounded-sm"
                  src="https://i.postimg.cc/brZ136ZB/Whats-App-Image-2024-09-17-at-12-59-57.jpg"
                  alt="Shoes"
                />
              </Link>
            </div>
          </div>
        </ul>
      </li>

      {/* Blog small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="dropdown border-none">
          <summary className="cursor-pointer list-none">Blogs</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/the-edge"}>The Edge</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* Blogs */}
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center text-[#125b5c]">
          Resources <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="  py-10 px-10 absolute lg:left-[-1100px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center gap-72 py-10">
            <div className="grid grid-col-1 gap-5">
              <Link href="/blogs">
                <li className="font-bold text-xl">Blogs</li>
              </Link>

              <Link href="/the-edge">
                <li className="font-bold text-xl">The Edge</li>
              </Link>
            </div>
            <div className="w-[100%]">
              <Link href={"/"} className="">
                <img
                  className="w-[80%] h-[40vh] rounded-sm"
                  src="https://i.postimg.cc/brZ136ZB/Whats-App-Image-2024-09-17-at-12-59-57.jpg"
                  alt="Shoes"
                />
              </Link>
            </div>
          </div>
        </ul>
      </li>

      <li className="border-b border-teal-700 lg:border-0">
        <Link className="text-[#125b5c]" href={"/career"}>
          Careers
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 z-50">
      <div className="navbar container mx-auto flex justify-between">
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
        <div className="">
          <div className="dropdown dropdown-left ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-teal-600"
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
              className="menu menu-sm dropdown-content bg-base-100 space-y-5  rounded z-[1] mt-16 w-72 h-64 px-2 shadow"
            >
              {navItems}
            </ul>
          </div>
        </div>
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal z-50">{navItems}</ul>
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
