import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] shadow-md fixed bg-white z-[9999]">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="w-full flex items-center">
          <Link to="hero" smooth={true} duration={500}>
            <img
              className="w-[100px] cursor-pointer"
              src="/icons/klassin.png"
              alt=""
            />
          </Link>

          <ul className="lg:flex hidden">
            <li className="p-4 mt-2 cursor-pointer text-[15px] font-medium">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="p-4 mt-2 cursor-pointer text-[15px] font-medium">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="p-4 mt-2 cursor-pointer text-[15px] font-medium">
              <Link to="school-list" smooth={true} duration={500}>
                School List
              </Link>
            </li>
            <li className="p-4 mt-2 cursor-pointer text-[15px] font-medium">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex gap-3 hidden">
          <div className="font-medium p-1.5 px-5 text-[15px] cursor-pointer rounded border-2 border-purple-600">
            Login
          </div>
          <div className="font-medium p-1.5 px-5 text-[15px] cursor-pointer rounded text-white bg-purple-600">
            Signin
          </div>
        </div>

        {/* Mobile */}
        <div className="cursor-pointer block lg:hidden" onClick={handleNav}>
          <button type="button">
            <span
              className={
                nav
                  ? "rotate-45 hamburger-line transition duration-300 ease-in-out origin-top-left"
                  : "hamburger-line transition duration-300 ease-in-out origin-top-left"
              }
            ></span>
            <span
              className={
                nav
                  ? "scale-0 hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                  : "hamburger-line transition duration-300 ease-in-out origin-bottom-left"
              }
            ></span>
            <span
              className={
                nav
                  ? "-rotate-45 hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                  : "hamburger-line transition duration-300 ease-in-out origin-bottom-left"
              }
            ></span>
          </button>
        </div>
        <nav
          className={
            nav
              ? "absolute right-4 bg-white py-5 shadow-lg top-[70px] rounded-lg w-[300px] lg:hidden"
              : "lg:hidden"
          }
        >
          <ul className={nav ? "block lg:hidden" : "lg:hidden"}>
            <li className="group">
              <a
                href="/"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </a>
            </li>
            <li className="group">
              <a
                href="/"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                <Link to="school-list" smooth={true} duration={500}>
                  School List
                </Link>
              </a>
            </li>
            <li className="group">
              <a
                href="/"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </a>
            </li>
          </ul>
          <div className={nav ? "flex gap-3 py-2 mx-8" : "hidden"}>
            <div className="font-medium p-2 px-5 cursor-pointer rounded border-2 border-purple-600">
              Login
            </div>
            <div className="font-medium p-2 px-5 cursor-pointer rounded text-white bg-purple-600">
              Signin
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
