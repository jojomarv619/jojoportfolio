import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = (props) => {
  const [home, setHome] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8081/portfoliohome/home');
    setHome(result.data[0]);
  };
  const buttonClick = () => {
    if (window.confirm('Are you sure you want to move to work mode?')) {
      props.gaming(false);
    }
  };
  return (
    <div className='home w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
          {/* Hello, my name is */}
          {home.homeIntro}
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          {/* Marvin Joseph Salaber Hipolito */}
          {home.homeName}
        </h1>
        <h2 className='text-[#ccd6f6]'>
          {/* You can guys can call me jojo, I am currently a Junior Developer */}
          {home.homeInfo1}
        </h2>
        <h3 className='text-[#ccd6f6]'></h3>

        <div className='click'>
          <button
            onClick={buttonClick}
            className='text-yellow-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-black'
          >
            {/* Gamer Move */}
            {home.homeInfo2}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
