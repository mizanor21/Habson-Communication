// import React from "react";
// import logo from "@/public/assets/logo/logo.png";
// import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import Button from "../../Custom/Button";
// import { GoChevronDown } from "react-icons/go";
// import WordRotate from "@/components/magicui/word-rotate";

// const Nav = () => {
//   const navItems = (
//     <>
//       <li className="border-b border-teal-700 lg:border-0">
//         <Link className="text-[#125b5c]" href={"/work"}>
//           Work
//         </Link>
//       </li>
//       {/* Solution */}
//       <li className="relative group hidden lg:block">
//         <span className="cursor-pointer flex items-center text-[#125b5c]">
//           Solution <GoChevronDown className="ml-1 font-bold " />
//         </span>

//         <ul className=" py-10 absolute lg:left-[-930px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
// <div className="flex justify-center gap-28">
//   <div className="flex-1 px-10 ">
//     <Link href="/brand-solutions">
//       <li className="font-bold text-3xl">Brand Solution</li>
//     </Link>
//     <Link href="/media-solutions">
//       <li className="font-bold text-3xl mt-5">Media Solution</li>
//     </Link>
//     <Link href="/tech-solutions">
//       <li className="font-bold text-3xl mt-5">Tech Solution</li>
//     </Link>
//   </div>
//   <div className="flex gap-8">
//     <div className="w-[100%]">
//       <Link href={"/about-details"} className="">
//         <img
//           className="w-[100%]  rounded-xl "
//           src="https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg"
//           alt="Shoes"
//         />
//       </Link>
//     </div>
//     <div className="w-[100%]">
//       <Link href={"/about-details"} className="">
//         <img
//           className="w-[100%]  rounded-xl"
//           src="https://i.postimg.cc/K88zzWnM/1.jpg"
//           alt="Shoes"
//         />
//       </Link>
//     </div>
//   </div>
// </div>
//         </ul>
//       </li>

//       {/* solution small device */}
//       <li className="lg:hidden border-b border-teal-700">
//         <details className="relative dropdown">
//           <summary className="cursor-pointer list-none">Solutions</summary>
//           <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
//             <li className="border-b border-orange-500">
//               <Link href={"/brand-solutions"}>Brand Solutions</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/media-solutions"}>Media Solutions</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/tech-solutions"}>Tech Solutions</Link>
//             </li>
//           </ul>
//         </details>
//       </li>

//       {/* About Small device */}
//       <li className="lg:hidden border-b border-teal-700">
//         <details className="dropdown border-none">
//           <summary className="cursor-pointer list-none">About</summary>
//           <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
//             <li className="border-b border-orange-500">
//               <Link href={"how-we-work"}>How We Work</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/news-center"}>News Center</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/our-partner"}>Our Partnership</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/csr"}>CSR</Link>
//             </li>
//           </ul>
//         </details>
//       </li>

//       {/* About */}
//       <li className="relative group hidden lg:block">
//         <span className="cursor-pointer flex items-center text-[#125b5c]">
//           About <GoChevronDown className="ml-1 font-bold " />
//         </span>

//         <ul className="py-5 px-6 absolute lg:left-[-1020px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
//           <div className="flex justify-center gap-44 py-5">
//             <div className="grid grid-col-1 ">
//               <li className="font-bold text-2xl">
//                 Flame Awards 2024 - LB and Habson Static
//               </li>

//               <li className="font-bold text-2xl">
//                 A Magnificent Masterstroke!(LB & Habson Logo)
//               </li>

//               <li className="font-bold text-2xl">
//                 Ten Awards Five golds, Three silvers, Two bronzes
//               </li>

//               <li className="font-bold text-2xl">Flame Awards Asia 2024</li>

//               <li className="font-bold text-2xl">
//                 Digital Marketing Awards 2022 - Living Brands
//               </li>

//               <li className="font-bold text-2xl">
//                 Pusti Home Chef Best Digital Campaign by New Agency (Silver)
//               </li>

//               <li className="font-bold text-2xl">
//                 Commward 2022 - Habson Communication
//               </li>

//               <li className="font-bold text-2xl">
//                 PUMA Flagship Store Launch Best Outdoor Campaign (Bronze)
//               </li>
//             </div>
//             <div className="">
//               <Link href={"/about-details"} className="">
//                 <img
//                   className="w-full h-[500px] rounded-xl"
//                   src="https://i.postimg.cc/brZ136ZB/Whats-App-Image-2024-09-17-at-12-59-57.jpg"
//                   alt="Shoes"
//                 />
//               </Link>
//             </div>
//           </div>
//         </ul>
//       </li>

//       {/* resource small device */}
//       <li className="lg:hidden border-b border-teal-700">
//         <details className="dropdown border-none">
//           <summary className="cursor-pointer list-none">Blogs</summary>
//           <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
//             <li className="border-b border-orange-500">
//               <Link href={"/blogs"}>Blogs</Link>
//             </li>
//             <li className="border-b border-orange-500">
//               <Link href={"/the-edge"}>The Edge</Link>
//             </li>
//           </ul>
//         </details>
//       </li>

//       {/* Resource */}
//       <li className="relative group hidden lg:block">
//         <span className="cursor-pointer flex items-center text-[#125b5c]">
//           Resources <GoChevronDown className="ml-1 font-bold " />
//         </span>

//         <ul className="  py-10 px-10 absolute lg:left-[-1100px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
//           <div className="flex justify-center gap-72 py-10">
//             <div className="">
//               <Link href="/blogs">
//                 <li className="font-bold text-3xl">Blogs</li>
//               </Link>

//               <Link href="/the-edge">
//                 <li className="font-bold text-3xl mt-5">The Edge</li>
//               </Link>
//             </div>
//             <div className="flex gap-8">
//               <div className="w-[100%]">
//                 <Link href={"/"} className="">
//                   <img
//                     className="w-[100%]  rounded-xl "
//                     src="https://i.postimg.cc/NjPfhR6C/Gujn-Dntu-TI-HD.jpg"
//                     alt="Shoes"
//                   />
//                 </Link>
//               </div>
//               <div className="w-[100%]">
//                 <Link href={"/"} className="">
//                   <img
//                     className="w-[100%]  rounded-xl"
//                     src="https://i.postimg.cc/yYxcxKwF/RJx-It-SXXC6-U-HD.jpg"
//                     alt="Shoes"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </ul>
//       </li>

//       <li className="border-b border-teal-700 lg:border-0">
//         <Link className="text-[#125b5c]" href={"/career"}>
//           Careers
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <div className="bg-base-100 z-50">
//       <div className="navbar container mx-auto flex justify-between">
// <Link className=" flex items-end gap-1 text-[#125b5c]" href="/">
//   <Image src={logo} className="w-16" alt="Living Brands logo"></Image>
//   <h1 className="text-4xl animate-pulse font-bold mb-2">.</h1>
//   <WordRotate
//     className="text-lg font-bold p-0 m-0"
//     words={[
//       "Brands",
//       "Tech",
//       "Media",
//       "Production",
//       "Influencer",
//       "Talent management",
//       "IT",
//       "UI/UX",
//       "SEO",
//       "Chatbots",
//     ]}
//   />
// </Link>
//         <div className="">
//           <div className="dropdown dropdown-left ">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 hover:text-teal-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 space-y-5  rounded z-[1] mt-16 w-72 h-64 px-2 shadow"
//             >
//               {navItems}
//             </ul>
//           </div>
//         </div>
//         <div className=" hidden lg:flex ">
//           <ul className="menu menu-horizontal">{navItems}</ul>
//           <Link href={"/contact"}>
//             <Button>
//               Contact Us <FaArrowRightLong />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

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
    {
      src: "https://i.postimg.cc/3J73Gqf9/award1.jpg",
    },
    {
      src: "https://i.postimg.cc/4N5sQ1rG/award2.jpg",
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
    <div className="navber pd px-[5%]">
      {/* Logo and side menu */}
      <div className="navber-logo">
        <div className="">
          {/* <img src="https://i.postimg.cc/fy4vdpHR/logo-1.png" alt="Logo" /> */}
          <div className="w-[100%]">
            <Link className=" flex items-end gap-1 text-[#125b5c]" href="/">
              <Image
                src={logo}
                className="w-20"
                alt="Living Brands logo"
              ></Image>
              <h1 className="text-4xl animate-pulse font-bold mb-2">.</h1>
              <WordRotate
                className="text-sm md:text-lg font-bold p-0 m-0 w-full"
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
                        className="text-sm md:text-lg font-bold p-0 m-0 w-full"
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
                            className="hover:translate-x-2 duration-200"
                          >
                            Brand Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/media-solutions"}
                            className="hover:translate-x-2 duration-200"
                          >
                            Media Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/tech-solutions"}
                            className="hover:translate-x-2 duration-200"
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
                            className="hover:translate-x-2 duration-200"
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
                            className="hover:translate-x-2 duration-200"
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/the-edge"}
                            className="hover:translate-x-2 duration-200"
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
      <div className="navber-links">
        <ul>
          <li
            onClick={() => setIsActive("/about")}
            className={`${isActive === "/about" && "active"}`}
          >
            <Link href="/work" className="link">
              Work
            </Link>
          </li>
          <li
            className={`dropdown ${isActive === "/services" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredSolutions(true)}
            onMouseLeave={() => setIsHoveredSolutions(false)}
          >
            <p className="link">Solutions</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            className={`dropdown ${isActive === "/services" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredAbout(true)}
            onMouseLeave={() => setIsHoveredAbout(false)}
          >
            <p className="link">About</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            className={`dropdown ${isActive === "/services" ? "active" : ""}`}
            onMouseEnter={() => setIsHoveredResources(true)}
            onMouseLeave={() => setIsHoveredResources(false)}
          >
            <p className="link">Resources</p>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>

          <li
            onClick={() => setIsActive("/blog")}
            className={`${isActive === "/blog" && "active"}`}
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
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10">
            <div className="min-w-72">
              <h2 className="mb-4">
                <Link
                  href={"brand-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  Brand Solution
                </Link>
              </h2>
              <h2 className=" mb-4">
                <Link
                  href={"media-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  Media Solution
                </Link>
              </h2>
              <h2>
                <Link
                  href={"tech-solutions"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  Tech Solution
                </Link>
              </h2>
            </div>
            {solutionsData.map((item, index) => (
              <div key={index} className="card">
                <div className="card_image">
                  <Image
                    className="rounded-2xl "
                    src={item?.src}
                    alt={index}
                    width={700}
                    height={500}
                  />
                </div>
              </div>
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
              <h2 className="mb-4">
                <Link
                  href={"awards"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  Valuable Awards
                </Link>
              </h2>
            </div>
            {AboutData.map((item, index) => (
              <div key={index} className="card">
                <div className="card_image">
                  <Image
                    className="rounded-2xl "
                    src={item?.src}
                    alt={index}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
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
          <div className="card_container bg-white mt-10 flex gap-5 px-[5%] pt-5 pb-10">
            <div className="min-w-72">
              <h2 className="mb-4">
                <Link
                  href={"/blogs"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  Blogs
                </Link>
              </h2>
              <h2 className=" mb-4">
                <Link
                  href={"the-edge"}
                  className="text-2xl lg:text-3xl font-bold hover:text-gray-500"
                >
                  The Edge
                </Link>
              </h2>
            </div>
            {ResourcesData.map((item, index) => (
              <div key={index} className="card">
                <div className="card_image">
                  <Image
                    className="rounded-2xl "
                    src={item?.src}
                    alt={index}
                    width={700}
                    height={500}
                  />
                </div>
              </div>
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
