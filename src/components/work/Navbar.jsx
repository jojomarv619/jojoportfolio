import React, { useState } from "react";
import github from "../../assets/professionalSkills/github.png";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [gaming, setGaming] = useState(true);
  // {
  //   setGaming(!gaming);
  //   props.gaming(!gaming);
  // }

  const buttonClick = () => {
    setGaming(!gaming);
    props.gaming(!gaming);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#AF734A] text-gray-300">
      <div>
        <button onClick={buttonClick}>
          <img
            className="icon"
            src={github}
            alt="icon"
            style={{ width: "85px" }}
          />
        </button>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-[#0a192f]">Home</li>
        <li className="text-[#0a192f]">About</li>
        <li className="text-[#0a192f]">Techology</li>
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
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
