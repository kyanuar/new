import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto font-Outfit">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          khairulyanuar6@gmail.com
        </div>
      </div>
      <div className="font-Outfit text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6">
        <p className="flex max-md:mx-auto items-center justify-center">
          Made with <Image src={assets.love} alt="" className="mx-1 w-4 mt-2.5 mb-2.5" /> by Khairul Yanuar.
        </p>
        <ul className="w-44 max-md:mx-auto flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/khairulyanuar/">
              <Image src={isDarkMode ? assets.linkedin_icon_dark : assets.linkedin_icon} alt="" />
            </a>
          </li>
          <li>
            {" "}
            <a target="_blank" href="https://www.instagram.com/__khairuul/">
              <Image src={isDarkMode ? assets.instagram_dark : assets.instagram} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.behance.net/khairulyanuar1">
              <Image src={isDarkMode ? assets.behance_dark : assets.behance} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
