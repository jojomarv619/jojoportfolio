import React from "react";
import css from "../assets/professionalSkills/css.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300 py-4">
      {/* Container */}
      <div className="max-w-[1000px] mx auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p>Technology Skills</p>
        </div>
      </div>
      <div className="w-full grid gird-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="shadow-ms shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={css} alt="css icon" />
          <p className="my-4">CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
