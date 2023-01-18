import React from "react";

const AboutGaming = () => {
  return (
    <div className="aboutgaming w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          <div className="max-h-[1000px] h-full max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                "Feel free to checkout my games below, and links on the left
                side"
              </p>
            </div>
            <div className="description">
              <p>
                Yep definitely in the right place, Ussurix here and if you guys
                are interested in the games I play you can click the games below
                to find out more. And yes Genshin is my most played among these
                4 as this takes less time compared to its other peers.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGaming;
