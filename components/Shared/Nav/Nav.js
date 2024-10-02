"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import React, { useState } from "react";
import "./Nav.css";
import Link from "next/link";
import Image from "next/image";
import WordRotate from "@/components/magicui/word-rotate";
import logo from "@/public/assets/logo/logo.png";
import Button from "@/components/Custom/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonEffect from "@/app/button/page";

const Nav = () => {
  // State declarations
  const [on, setOn] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [about, setAbout] = useState(false);
  const [resources, setResources] = useState(false);
  const [isHoveredSolutions, setIsHoveredSolutions] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredResources, setIsHoveredResources] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [innerActive, setInnerActive] = useState("");

  // Toggle functions
  const toggleSolutions = () => setSolutions(!solutions);
  const toggleAbout = () => setAbout(!about);
  const toggleResources = () => setResources(!resources);
  const toggleOn = () => setOn(!on);

  // Navigation handlers
  const handleNavigation = (path) => {
    setIsActive(path);
    toggleOn();
  };
  const handleNavigations = (path) => {
    setInnerActive(path);
    toggleOn();
  };

  // Card data
  const solutionsData = [
    {
      src: "https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg",
    },
    {
      src: "https://i.postimg.cc/K88zzWnM/1.jpg",
    },
  ];

  const AboutData = [
    {
      src: "https://i.postimg.cc/7hyZJDrZ/about1.png",
    },
    {
      src: "https://i.postimg.cc/J0c4bgRc/about2.jpg",
    },
  ];

  const ResourcesData = [
    {
      src: "https://i.postimg.cc/1t3S7tTc/dt-BSuy7-OJd8-HD.jpg",
    },
    {
      src: "https://i.postimg.cc/XNg2MVb3/ey-SLf-CX2-Vsk-HD.jpg",
    },
  ];

  return (
    <div className="navber pd px-[5%] lg:mt-2">
      {/* Logo and side menu */}
      <div className="navber-logo z-[115]">
        <div className="">
          <div className="w-[100%]">
            <Link className=" flex items-end gap-1 text-[#125b5c]" href="/">
              <Image
                src={logo}
                className="w-20"
                alt="Living Brands logo"
              ></Image>
              <h1 className="text-4xl animate-pulse font-bold mb-2 transform origin-center">
                .
              </h1>
              <WordRotate
                className="text-sm md:text-lg font-bold p-0 m-0 w-full"
                words={[
                  "Brands",
                  "Tech",
                  "Media",
                  "Production",
                  "Influencer",
                  "Talent Management",
                  "IT",
                  "UI/UX",
                  "SEO",
                  "Chatbots",
                ]}
              />
            </Link>
          </div>
          {on && (
            <div className="side-menu">
              <div className="side-menu-2">
                <div className="side-menu-top">
                  <div className="w-[100%]">
                    <Link
                      className=" flex items-end gap-1 text-[#125b5c]"
                      href="/"
                    >
                      <Image
                        src={logo}
                        className="w-20"
                        alt="Living Brands logo"
                      ></Image>
                      <h1 className="text-4xl animate-pulse font-bold mb-2">
                        .
                      </h1>
                      <WordRotate
                        className="text-sm md:text-lg font-bold p-0 m-0 w-full duration-1000"
                        words={[
                          "Brands",
                          "Tech",
                          "Media",
                          "Production",
                          "Influencer",
                          "Talent Management",
                          "IT",
                          "UI/UX",
                          "SEO",
                          "Chatbots",
                        ]}
                      />
                    </Link>
                  </div>
                  <div
                    className="side-menu-top-menu text-black"
                    onClick={toggleOn}
                  >
                    <ImCancelCircle />
                  </div>
                </div>

                {/* Side Menu Links */}
                <ul>
                  <li
                    onClick={() => handleNavigation("/")}
                    className={`${isActive === "/" && "active"}`}
                  >
                    <Link href="/work" className="">
                      Work
                    </Link>
                  </li>

                  <li>
                    <div className="ss" onClick={toggleSolutions}>
                      Solutions
                      <div className="sso">
                        <IoMenu />
                      </div>
                    </div>
                  </li>
                  {solutions && (
                    <div className="itemHover">
                      <ul>
                        <li>
                          <Link href={"/brand-solutions"} className=" ">
                            Brand Solutions
                          </Link>
                        </li>
                        <li>
                          <Link href={"/media-solutions"} className="">
                            Media Solutions
                          </Link>
                        </li>
                        <li>
                          <Link href={"/tech-solutions"} className="">
                            Tech Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  <li>
                    <div className="ss" onClick={toggleAbout}>
                      About
                      <div className="sso">
                        <IoMenu />
                      </div>
                    </div>
                  </li>
                  {about && (
                    <div className="itemHover">
                      <ul>
                        <li>
                          <Link href={"/awards"} className="">
                            Awards
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  <li>
                    <div className="ss" onClick={toggleResources}>
                      Resources
                      <div className="sso">
                        <IoMenu />
                      </div>
                    </div>
                  </li>
                  {resources && (
                    <div className="itemHover">
                      <ul>
                        <li>
                          <Link href={"/blogs"} className="">
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link href={"/the-edge"} className="">
                            The Edge
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  <li
                    onClick={() => handleNavigation("/career")}
                    className={`${isActive === "/career" && "active"}`}
                  >
                    <Link href="/careers" className="">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Nav Links */}
      <div className="navber-links text-[#125b5c] ">
        <ul>
          <li
            onClick={() => handleNavigations("/work")}
            className={`${
              innerActive == "/work" ? "actives" : "text-[#115c5c]"
            }`}
          >
            <Link href="/work" className="link">
              Work
            </Link>
          </li>
          <li
            className={`dropdown ${isActive === "/solutions" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredSolutions(true)}
            onMouseLeave={() => setIsHoveredSolutions(false)}
          >
            <p className="link group">Solutions</p>
            {/* Add transition and transform to the icon */}
            <RiArrowDropDownLine
              className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out ${
                isHoveredSolutions ? "rotate-180" : ""
              } group-hover:rotate-180`}
            />
          </li>

          <li
            className={`dropdown ${isActive === "/about" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredAbout(true)}
            onMouseLeave={() => setIsHoveredAbout(false)}
          >
            <p className="link group">About</p>
            <RiArrowDropDownLine
              className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out ${
                isHoveredAbout ? "rotate-180" : ""
              } group-hover:rotate-180`}
            />
          </li>

          <li
            className={`dropdown ${isActive === "/resources" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredResources(true)}
            onMouseLeave={() => setIsHoveredResources(false)}
          >
            <p className="link group">Resources</p>
            <RiArrowDropDownLine
              className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out ${
                isHoveredResources ? "rotate-180" : ""
              } group-hover:rotate-180`}
            />
          </li>

          <li
            onClick={() => handleNavigations("/careers")}
            className={`${
              innerActive == "/careers" ? "actives" : "text-[#115c5c]"
            }`}
          >
            <Link href="/careers" className="link">
              Careers
            </Link>
          </li>
        </ul>
        <Link href={"/contact"} className="flex">
          {/* <Button>
            Contact Us <MdOutlineArrowRightAlt className="text-xl" />
          </Button> */}
          <ButtonEffect>Contact Us</ButtonEffect>
        </Link>
      </div>

      {/* Dropdown services card section */}
      {isHoveredSolutions && (
        <div
          className="card-containers w-screen z-[115]"
          onMouseEnter={() => setIsHoveredSolutions(true)}
          onMouseLeave={() => setIsHoveredSolutions(false)}
        >
          <div className="flex justify-between bg-white mt-10 gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
            <div className="min-w-72  solutions">
              <h2
                onClick={() => handleNavigations("/brand-solutions")}
                className={`${
                  innerActive == "/brand-solutions"
                    ? "actives"
                    : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"brand-solutions"}
                  className="text-2xl lg:text-3xl font-bold "
                  onClick={() => setIsHoveredSolutions(false)}
                >
                  Brand Solution
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/media-solutions")}
                className={`${
                  innerActive == "/media-solutions"
                    ? "actives"
                    : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"media-solutions"}
                  className="text-2xl lg:text-3xl font-bold "
                  onClick={() => setIsHoveredSolutions(false)}
                >
                  Media Solution
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/tech-solutions")}
                className={`${
                  innerActive == "/tech-solutions"
                    ? "actives"
                    : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"tech-solutions"}
                  className="text-2xl lg:text-3xl font-bold  transition-transform duration-1000 ease-out"
                  onClick={() => setIsHoveredSolutions(false)}
                >
                  Tech Solution
                </Link>
              </h2>
            </div>
            <React.Fragment>
              {solutionsData.map((item, index) => (
                <Link
                  href={"/work"}
                  key={index}
                  className="card cursor-pointer "
                  onClick={() => isHoveredSolutions(false)}
                >
                  <div className="card_image">
                    <Image
                      className="rounded-2xl "
                      src={item?.src}
                      alt={index}
                      width={700}
                      height={500}
                    />
                  </div>
                </Link>
              ))}
            </React.Fragment>
          </div>
        </div>
      )}

      {isHoveredAbout && (
        <div
          className="card-containers w-screen mt-1  z-[115]"
          onMouseEnter={() => setIsHoveredAbout(true)}
          onMouseLeave={() => setIsHoveredAbout(false)}
        >
          <div className="flex justify-between bg-white mt-10 gap-5 px-[5%] pt-5 pb-10 lg:pb-64">
            <div className="min-w-72  solutions">
              <h2
                onClick={() => handleNavigations("/who-we-are")}
                className={`${
                  innerActive == "/who-we-are" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"/who-we-are"}
                  className="text-2xl lg:text-3xl font-bold  "
                  onClick={() => setIsHoveredAbout(false)}
                >
                  Who We Are
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/we-works")}
                className={`${
                  innerActive == "/we-works" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"we-works"}
                  className="text-2xl lg:text-3xl font-bold   "
                  onClick={() => setIsHoveredAbout(false)}
                >
                  How We Work
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/partnership")}
                className={`${
                  innerActive == "/partnership" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"partnership"}
                  className="text-2xl lg:text-3xl font-bold   "
                  onClick={() => setIsHoveredAbout(false)}
                >
                  Our Partnership
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/achievements")}
                className={`${
                  innerActive == "/achievements" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"achievements"}
                  className="text-2xl lg:text-3xl font-bold   "
                  onClick={() => setIsHoveredAbout(false)}
                >
                  Achievements
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/tech-solutions")}
                className={`${
                  innerActive == "/tech-solutions"
                    ? "actives"
                    : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"tech-solutions"}
                  className="text-2xl lg:text-3xl font-bold  "
                  onClick={() => setIsHoveredAbout(false)}
                >
                  Meet The Team
                </Link>
              </h2>
            </div>
            {/* <div className="flex gap-5">
              <Link href={"/awards"}>
                <video className="rounded-2xl w-[600px]" autoPlay loop muted>
                  <source src="/videos/about1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Link>
              <Link href={"/awards"}>
                <video className="rounded-2xl w-[600px]" autoPlay loop muted>
                  <source src="/videos/about2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Link>
            </div> */}
            <React.Fragment>
              {AboutData.map((item, index) => (
                <Link
                  href={"/work"}
                  key={index}
                  className="card cursor-pointer "
                >
                  <div className="card_image">
                    <Image
                      className="rounded-2xl max-h-[390px]"
                      src={item?.src}
                      alt={index}
                      width={700}
                      height={400}
                    />
                  </div>
                </Link>
              ))}
            </React.Fragment>
          </div>
        </div>
      )}

      {isHoveredResources && (
        <div
          className="card-containers w-screen z-[115] mt-1"
          onMouseEnter={() => setIsHoveredResources(true)}
          onMouseLeave={() => setIsHoveredResources(false)}
        >
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
            <div className="min-w-72 ">
              <h2
                onClick={() => handleNavigations("/blogs")}
                className={`${
                  innerActive == "/blogs" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"/blogs"}
                  className="text-2xl lg:text-3xl font-bold   "
                  onClick={() => setIsHoveredResources(false)}
                >
                  Blogs
                </Link>
              </h2>
              <h2
                onClick={() => handleNavigations("/the-edge")}
                className={`${
                  innerActive == "/the-edge" ? "actives" : "text-[#115c5c]"
                } mb-4`}
              >
                <Link
                  href={"the-edge"}
                  className="text-2xl lg:text-3xl font-bold  "
                  onClick={() => setIsHoveredResources(false)}
                >
                  The Edge
                </Link>
              </h2>
            </div>
            {ResourcesData.map((item, index) => (
              <Link href={"/blogs"} key={index} className="card cursor-pointer">
                <div className="card_image">
                  <Image
                    className="rounded-2xl "
                    src={item?.src}
                    alt={index}
                    width={700}
                    height={500}
                    onClick={() => setIsHoveredResources(false)}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu button */}
      <div className="navber-menu" onClick={toggleOn}>
        <IoMenu />
      </div>
    </div>
  );
};

export default Nav;
