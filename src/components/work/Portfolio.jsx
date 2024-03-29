import React from "react";
// import css from "assets/professionalSkills/css.png";
import css from "../../assets/professionalSkills/css.png";
// import html from "assets/professionalSkills/html.png";
import html from "../../assets/professionalSkills/html.png";
// import node from "assets/professionalSkills/node.png";
import node from "../../assets/professionalSkills/node.png";
// import react from "assets/professionalSkills/react.png";
import react from "../../assets/professionalSkills/react.png";
// import github from "assets/professionalSkills/github.png";
import github from "../../assets/professionalSkills/github.png";

const Skills = () => {
  return (
    <div className="portfolio bg-[#0a192f]  text-gray-300 py-4 px-4">
      {/* Container */}
      <div className="max-w-[1000px] mt-10 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="portDescription">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Portfolio
          </p>
          <p className="py-4">Technology used to make this Portfolio</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={html} alt="html icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={css} alt="css icon" />
          <p className="my-4 ">CSS</p>
        </div>
        <div className="shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={node} alt="css icon" />
          <p className="my-4">NODE</p>
        </div>
        <div className="reactwidth shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={react} alt="react icon" />
          <p className="my-4">REACT</p>
        </div>
        <div className="shadow-md shadow-[#00FF00] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={github} alt="github icon" />
          <p className="my-4">GITHUB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
