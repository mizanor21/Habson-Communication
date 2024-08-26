import React from "react";
import logo from "@/public/assets/logo/logo.gif";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

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
                <a>Work</a>
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
          <a className="w-[400px]" href="/">
            <Image src={logo} alt="Habson logo"></Image>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Work</a>
            </li>
            <li>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Brand Solutions</a>
                  </li>
                  <li>
                    <a>Tech Solutions</a>
                  </li>
                  <li>
                    <a>Media Solutions</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
          <a className="btn rounded-badge bg-black text-white px-10">
            Contact Us <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
