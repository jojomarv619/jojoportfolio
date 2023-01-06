import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = (props) => {
  const buttonClick = () => {
    props.gaming(true);
  };
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Henlo, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ussurix Wildstride
        </h1>
        <h2 className="text-yellow-300">Steam ID:</h2>
        <h3 className="text-yellow-500">Discord ID: </h3>

        <div className="click">
          <button
            onClick={buttonClick}
            className="text-yellow-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-white"
          >
            Work Mode
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
