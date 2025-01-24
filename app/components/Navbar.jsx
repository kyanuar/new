import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3.5 flex items-center justify-between z-50 
      ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/0 dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2 
          ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#experience" className="font-Ovo">
              Experience
            </a>
          </li>
          <li>
            <a href="#gallery" className="font-Ovo">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 
            border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* --------------- Mobile Menu --------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 
        fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-700 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu} className="font-Ovo">
              Experience
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu} className="font-Ovo">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;