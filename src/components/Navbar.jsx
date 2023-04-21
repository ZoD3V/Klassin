import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] shadow-md fixed bg-white z-[9999]">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="w-full flex items-center">
          <img className="w-[100px]" src="/icons/klassin.png" alt="" />
          <ul className="lg:flex hidden">
            <li className="p-4 mt-2 cursor-pointer text-[15px]">About</li>
            <li className="p-4 mt-2 cursor-pointer text-[15px]">Services</li>
            <li className="p-4 mt-2 cursor-pointer text-[15px]">School list</li>
            <li className="p-4 mt-2 cursor-pointer text-[15px]">Contact</li>
          </ul>
        </div>
        <div className="lg:flex gap-3 hidden">
          <div className="font-medium p-1.5 px-5 text-base cursor-pointer rounded border-2 border-purple-600">
            Login
          </div>
          <div className="font-medium p-1.5 px-5 text-base cursor-pointer rounded text-white bg-purple-600">
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
                href="#home"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                About
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
                Services
              </a>
            </li>
            <li className="group">
              <a
                href="#certificate"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                School list
              </a>
            </li>
            <li className="group">
              <a
                href="#portfolio"
                className={
                  nav
                    ? "text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                    : "hidden"
                }
              >
                Contact
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
