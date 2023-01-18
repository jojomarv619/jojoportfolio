import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const HomeGaming = (props) => {
  const buttonClick = () => {
    if (
      window.confirm(
        "Are you sure you want to move to work mode DOTA muna pre tanong mo pa si Vonn?"
      )
    ) {
      props.gaming(true);
    }
  };
  return (
    <div className="homegaming w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Henlo, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ussurix Wildstride
        </h1>
        <h2 className="text-[#ccd6f6]">
          Steam ID:{" "}
          <a
            href="https://steamcommunity.com/profiles/76561198079177038/"
            target="_blank"
          >
            118911310
          </a>{" "}
        </h2>
        <h3 className="text-[#ccd6f6]">Discord ID: jojomarv619 #3997</h3>

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

export default HomeGaming;
