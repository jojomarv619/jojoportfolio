// import React, { useState } from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const SidebarGaming = () => {
  return (
    <div className="fixed hidden lg:flex  flex-col top-[25%] left-0 z-10">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.youtube.com/@ussurixwildstride"
            target="_blank"
            rel="noreferrer"
          >
            Youtube <FaYoutube size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/jjhipolits"
            target="_blank"
            rel="noreferrer"
          >
            Company Github <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarGaming;
