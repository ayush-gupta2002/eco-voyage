import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full h-fit flex flex-col sm:flex-row justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-4 px-8 border-b-2 border-gray-500 sm:border-none">
      <div className="flex flex-col order-2 sm:order-1">
        <h1 className="font-semibold text-2xl mx-auto sm:mx-0">
          Contact the developer
        </h1>
        <div className="flex gap-4 mx-auto">
          <a href="https://www.linkedin.com/in/ayushgupta2002/">
            <FiLinkedin className="text-3xl cursor-pointer hover:scale-110 duration-1000"></FiLinkedin>
          </a>
          <a href="https://github.com/ayush-gupta2002">
            <AiFillGithub className="text-3xl cursor-pointer hover:scale-110 duration-1000"></AiFillGithub>
          </a>
          <a href="mailto:ayush.gupta2002@gmail.com">
            <AiOutlineMail className="text-3xl cursor-pointer hover:scale-110 duration-1000"></AiOutlineMail>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 my-4 sm:my-0 sm:flex-row gap-4 order-1 sm:order-2">
        <a className="my-auto font-semibold text-gray-500 rounded-lg p-2 bg-gray-100 cursor-pointer hover:bg-red-400 hover:text-white duration-500 text-center w-fit mx-auto sm:mx-0 order-3 sm:order-1">
          Buy me a coffee
        </a>
        <a
          href="https://github.com/ayush-gupta2002/eco-voyage"
          className="bg-gray-100 flex gap-2 mx-auto p-2 my-auto rounded-lg cursor-pointer group hover:bg-gray-600 duation-600 order-2 sm:order-2"
        >
          <AiFillGithub className="text-2xl group-hover:text-white duration-300"></AiFillGithub>
          <div className="font-semibol text-gray-500 font-semibold group-hover:text-white duration-300">
            Code
          </div>
        </a>
        <h1 className="text-4xl font-bold my-auto sm:mx-0 mx-auto order-1 sm:order-3">
          EcoVoyage.
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
