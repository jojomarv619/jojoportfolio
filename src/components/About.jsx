import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Heya, it's me jojo again if something piques your interest just
                contact
              </p>
            </div>
            <div>
              <p>
                I am a Jr Developer at work, and a full game enthusiast. I guess
                I'm gonna start with why did I chose to be a Developer. I like
                the idea that there are some complicated things about being
                Developer especially for people who are new to it, what I like
                doing mostly would be creating word files, or probably even
                creating basic tutorials as to where I could help other people
                understand it in a way that's much simpler. I believe in the
                term KISS which is you guessed it "Keep It Short and Simple".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
