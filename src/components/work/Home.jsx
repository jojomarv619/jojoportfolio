// import React, { useState } from "react";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Modal from "../Modal";

const Home = (props) => {
  const buttonClick = () => {
    props.gaming(false);
  };
  return (
    <div className="home w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Marvin Joseph Salaber Hipolito
        </h1>
        <h2 className="text-[#ccd6f6]">
          You can guys can call me jojo, I am currently a Junior Developer
        </h2>
        <h3 className="text-[#ccd6f6]"></h3>

        <div className="click">
          <button
            onClick={buttonClick}
            className="text-yellow-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-black"
          >
            Gamer Move
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
