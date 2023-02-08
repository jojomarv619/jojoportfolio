import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      'http://localhost:8081/portfolioabout/about'
    );
    setAbout(result.data[0]);
  };

  return (
    <div className='w-full about'>
      <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full  gap-8'>
            <div className='content-center justify-center sm:text-center pb-8 pl-4 '>
              <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>
                {/* About */}
                {about.aboutName}
              </p>
            </div>
            <div></div>
            <div className='max-h-[1000px] h-full max-w-[1000px] w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>
                  {/* Heya, it's me jojo again if something piques your interest
                  just contact */}
                  {about.aboutInfo1}
                </p>
              </div>
              <div className='aboutDes'>
                <p>
                  {/* What is up guys, I am still kind of new to React JS but I do
                  very much enjoy designing especially with the different
                  animations we can use. just looking on the top left corner you
                  can see the "Github" logo what's more interesting is if you
                  click that logo this will actually change the current page you
                  are in. You are currently viewing my Professional web page.
                  Try clicking the Gamer Mode or Icon on the top left it will
                  prompt you to another web page which is my gaming profile my
                  steam, discord and various games. */}
                  {about.aboutInfo2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
