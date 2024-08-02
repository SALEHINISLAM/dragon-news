import React from "react";
import PropTypes from "prop-types";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import './RightSideNav.css'
const RightSideNav = (props) => {
  return (
    <div>
      <div className="flex flex-col p-4 w-full space-y-4">
        <h2 className="text-4xl font-bold text-black">Login With</h2>
        <button className="btn btn-outline btn-accent m-2 text-sm">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline text-black m-2 textarea-sm">
          <FaGithub /> Login with Github
        </button>
      </div>
      <div className="flex flex-col p-4 w-full space-y-4">
        <h2 className="text-3xl font-bold text-black">Find Us On</h2>
        <div className="text-lg text-black font-medium flex flex-col gap-0">
          <a href="" className="flex gap-2 items-center flex-row border p-3">
            <FaFacebookF
              className="rounded-full bg-[#c2c2c2] p-1 size-8"
              stroke="blue"
            />
            <span>Facebook</span>
          </a>
          <a href="" className="flex gap-2 items-center flex-row border p-3">
            <BsTwitterX className="rounded-full bg-[#c2c2c2] p-1 size-8" />
            <span>X (Twitter)</span>
          </a>
          <a href="" className="flex gap-2 items-center flex-row border p-3">
            <FaInstagram className="rounded-full bg-[#c2c2c2] p-1 size-8" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-3 bg-[#c2c2c2] justify-center w-full">
        <h2 className="text-3xl font-bold text-black py-3">Q-Zone</h2>
        <img src="qZone1.png" alt="" />
        <img src="qZone2.png" alt="" />
        <img src="qZone3.png" alt="" />
      </div>
      <div 
      id="ads"
        className="text-white text-center p-6 py-16 flex flex-col justify-center items-center gap-12 m-3"
      >
        <h2 className=" font-bold text-4xl bg-transparent">
          Create an Amazing Newspaper
        </h2>
        <p className="text-base">
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>
        <div>
        <button className="font-semibold text-xl btn bg-[#D72050] p-3 px-5 text-white">
            Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

RightSideNav.propTypes = {};

export default RightSideNav;
