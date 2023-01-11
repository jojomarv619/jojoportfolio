import React, { useState } from "react";
import { Link } from "react-scroll";

// import github from "assets/professionalSkills/github.png";
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
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#AF734A] text-gray-300">
      <div>
        <button onClick={buttonClick}>
          <img
            className="icon"
            src={github}
            alt="icon"
            style={{ width: "30px" }}
          />
        </button>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-[#0a192f]">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#0a192f]">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-[#0a192f]">
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="text-[#0a192f]">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
