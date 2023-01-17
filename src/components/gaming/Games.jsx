import React from "react";
import github from "../../assets/professionalSkills/github.png";
import dota from "../../assets/games/dota.jpg";
import bdo from "../../assets/games/bdo.png";
import genshin from "../../assets/games/genshin.png";
import elsword from "../../assets/games/elsword.png";

const Games = () => {
  return (
    <div className="portfolio bg-[#0a192f]  text-gray-300 py-4 px-4">
      {/* Container */}
      <div className="max-w-[1000px] mt-10 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="portDescription">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Current Games
          </p>
          <p className="py-4">
            These are the current games I play and mostly just PC games if you
            wanna know more about each game feel free to click them to go to
            their respective links, and hey maybe we could party up.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-5 text-center py-8">
        <div className="shadow-md shadow-[#a62c2b] hover:scale-110 duration-500">
          <a href="https://www.dota2.com/home" target="_blank">
            {" "}
            <img className="w-20 mx-auto" src={dota} alt="dota icon" />
          </a>
          <p className="my-4">DOTA 2</p>
        </div>
        <div className="shadow-md shadow-[#d4af37] hover:scale-110 duration-500">
          <a
            href="https://www.sea.playblackdesert.com/en-US/Main/Index"
            target="_blank"
          >
            <img className="w-20 mx-auto" src={bdo} alt="bdo icon" />
          </a>
          <p className="my-4 ">Black Desert </p>
        </div>
        <div className="shadow-md shadow-[#E9EBE2] hover:scale-110 duration-500">
          <a href="https://genshin.hoyoverse.com/en/" target="_blank">
            <img className="w-20 mx-auto" src={genshin} alt="genshin icon" />
          </a>
          <p className="my-4">Genshin Impact</p>
        </div>
        <div className="reactwidth shadow-md shadow-[#a62c2b] hover:scale-110 duration-500">
          <a href="https://elsword.koggames.com/" target="_blank">
            <img className="w-20 mx-auto" src={elsword} alt="elsword icon" />
          </a>
          <p className="my-4">Elsword</p>
        </div>
        {/* <div className="shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={github} alt="github icon" />
          <p className="my-4">GITHUB</p>
        </div> */}
      </div>
    </div>
  );
};

export default Games;
