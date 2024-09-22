"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import "./Nav.css";
import Link from "next/link";
import Image from "next/image";
import WordRotate from "@/components/magicui/word-rotate";
import logo from "@/public/assets/logo/logo.png";
import Button from "@/components/Custom/Button";

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
      src: "https://i.postimg.cc/ydkH14dY/award.jpg",
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
      <div className="navber-logo">
        <div className="">
          <div className="w-[100%]">
            <Link className=" flex items-end gap-1 text-[#125b5c]" href="/">
              <Image
                src={logo}
                className="w-20"
                alt="Living Brands logo"
              ></Image>
              <h1 className="text-4xl custom-pulse font-bold mb-2 transform origin-center">
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
                      <h1 className="text-4xl animate-pulse font-bold mb-3">
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
                    <div className="vetore">
                      <ul>
                        <li>
                          <Link
                            href={"/brand-solutions"}
                            className="hover:ml-2 duration-200"
                          >
                            Brand Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/media-solutions"}
                            className="hover:ml-2 duration-200"
                          >
                            Media Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/tech-solutions"}
                            className="hover:ml-2 duration-200"
                          >
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
                    <div className="vetore">
                      <ul>
                        <li>
                          <Link
                            href={"/awards"}
                            className="hover:ml-2 duration-200"
                          >
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
                    <div className="vetore">
                      <ul>
                        <li>
                          <Link
                            href={"/blogs"}
                            className="hover:ml-2 duration-200"
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/the-edge"}
                            className="hover:ml-2 duration-200"
                          >
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
      <div className="navber-links text-[#125b5c]">
        <ul>
          <li
            onClick={() => setIsActive("/work")}
            className={`${isActive === "/work" && "active"}`}
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
            <p className="link">Solutions</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            className={`dropdown ${isActive === "/about" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredAbout(true)}
            onMouseLeave={() => setIsHoveredAbout(false)}
          >
            <p className="link">About</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            className={`dropdown ${isActive === "/resources" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredResources(true)}
            onMouseLeave={() => setIsHoveredResources(false)}
          >
            <p className="link">Resources</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            onClick={() => setIsActive("/careers")}
            className={`${isActive === "/careers" && "active"}`}
          >
            <Link href="/careers" className="link">
              Careers
            </Link>
          </li>
        </ul>
        <Link href={"/contact"}>
          <Button>
            Contact Us <span className="ml-2 text-2xl">→</span>
          </Button>
        </Link>
      </div>

      {/* Dropdown services card section */}
      {isHoveredSolutions && (
        <div
          className="card-containers min-w-screen z-[105] mt-1"
          onMouseEnter={() => setIsHoveredSolutions(true)}
          onMouseLeave={() => setIsHoveredSolutions(false)}
        >
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
            <div className="min-w-72">
              <h2 className="mb-4">
                <Link
                  href={"brand-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:ml-2 duration-200 text-[#115c5c] hover:text-gray-500"
                >
                  Brand Solution
                </Link>
              </h2>
              <h2 className=" mb-4">
                <Link
                  href={"media-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:ml-2 duration-200 text-[#115c5c] hover:text-gray-500"
                >
                  Media Solution
                </Link>
              </h2>
              <h2>
                <Link
                  href={"tech-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:ml-2 duration-200 text-[#115c5c] hover:text-gray-500"
                >
                  Tech Solution
                </Link>
              </h2>
            </div>
            {solutionsData.map((item, index) => (
              <Link href={"/work"} key={index} className="card cursor-pointer">
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
          </div>
        </div>
      )}

      {isHoveredAbout && (
        <div
          className="card-containers min-w-screen z-[105] mt-1"
          onMouseEnter={() => setIsHoveredAbout(true)}
          onMouseLeave={() => setIsHoveredAbout(false)}
        >
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10">
            <div className="min-w-72">
              <div className="py-10">
                <h2 className="text-2xl lg:text-2xl font-medium hover:ml-2 duration-200  hover:text-gray-500 mb-5 lg:max-w-[800px]">
                  Living Brands & Habson&apos;s remarkable performance at the
                  Flame Awards Asia 2024, securing ten awards including five
                  golds, showcases their exceptional creativity and dedication
                  to excellence.
                </h2>
              </div>
            </div>
            {AboutData.map((item, index) => (
              <Link
                href={"/awards"}
                key={index}
                className="card cursor-pointer ml-auto"
              >
                <div className="card_image ">
                  <Image
                    className="rounded-2xl h-[550px] "
                    src={item?.src}
                    alt={index}
                    width={400}
                    height={300}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isHoveredResources && (
        <div
          className="card-containers min-w-screen z-[105] mt-1"
          onMouseEnter={() => setIsHoveredResources(true)}
          onMouseLeave={() => setIsHoveredResources(false)}
        >
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
            <div className="min-w-72 ">
              <h2 className="mb-4 ">
                <Link
                  href={"/blogs"}
                  className="text-2xl lg:text-3xl font-bold hover:ml-2 duration-200 text-[#115c5c] hover:text-gray-500"
                >
                  Blogs
                </Link>
              </h2>
              <h2 className=" mb-4">
                <Link
                  href={"the-edge"}
                  className="text-2xl lg:text-3xl font-bold hover:ml-2 duration-200 text-[#115c5c] hover:text-gray-500"
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
