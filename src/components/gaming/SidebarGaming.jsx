import React, { useState } from 'react';
import {
  FaGithub,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';

const SidebarGaming = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.youtube.com/@ussurixwildstride"
            target="_blank"
            rel="noreferrer"
          >
            Youtube <FaYoutube size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6441a5]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.twitch.tv/ussurix/videos?filter=clips&range=7d"
            target="_blank"
            rel="noreferrer"
          >
            Twitch <FaTwitch size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://twitter.com/ussurix"
            target="_blank"
            rel="noreferrer"
          >
            Twitter <FaTwitter size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/jojomarv619"
            target="_blank"
            rel="noreferrer"
          >
            Personal Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7289DA]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
          >
            Discord <FaDiscord size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarGaming;
