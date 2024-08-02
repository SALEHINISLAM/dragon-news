import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import userDefaultPic from '/user.png'
const Navbar = (props) => {
    const links=<>
    <li>
        <NavLink to='/'>
            Home
        </NavLink>
    </li>
    <li>
        <NavLink to='/about'>
            About
        </NavLink>
    </li>
    <li>
        <NavLink to='/career'>
            Career
        </NavLink>
    </li>
    </>
  return (
    <div className="navbar bg-transparent text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3 ">
      <div className="w-10 rounded-full">
          <img
            alt="User"
            src={userDefaultPic} />
        </div>
        <a className="btn text-white px-6">Login</a>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
