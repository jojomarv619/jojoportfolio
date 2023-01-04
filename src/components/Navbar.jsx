import React, { useState } from "react";
import jojoicon from "../assets/jojoicon.png";
import {
  FaBars,
  FaGithub,
  FaYoutube,
  FaTimes,
  FaLinkedin,
  //   FaFacebook,
  //   FaGit,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#AF734A] text-gray-300">
      <div>
        <img class="icon" src={jojoicon} alt="icon" style={{ width: "85px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-[#0a192f]">Home</li>
        <li className="text-[#0a192f]">About</li>
        <li className="text-[#0a192f]">Professional Skills</li>
        <li className="text-[#0a192f]">Hobbies</li>
        <li className="text-[#0a192f]">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Professional Skills</li>
        <li className="py-6 text-4xl">Hobbies</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/*Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/@ussurixwildstride"
              target="_blank"
              rel="noreferrer"
            >
              Gaming Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
            >
              Coding Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/login"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jojomarv619/"
              target="_blank"
              rel="noreferrer"
            >
              Personal Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jjhipolits/"
              target="_blank"
              rel="noreferrer"
            >
              Company Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
