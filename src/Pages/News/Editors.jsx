import React from "react";
import PropTypes from "prop-types";
import { MdDateRange } from "react-icons/md";
const Editors = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="card md:w-1/3 shadow-xl p-4">
        <div className="bg-gray-500 w-full h-52"></div>
        <div className="card-body text-black">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <div className="flex items-center text-[#9F9F9F]">
            <MdDateRange />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="card md:w-1/3 shadow-xl p-4">
        <div className="bg-gray-500 w-full h-52"></div>
        <div className="card-body text-black">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <div className="flex items-center text-[#9F9F9F]">
            <MdDateRange />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="card md:w-1/3 shadow-xl p-4">
        <div className="bg-gray-500 w-full h-52"></div>
        <div className="card-body text-black">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
          <div className="flex items-center text-[#9F9F9F]">
            <MdDateRange />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Editors.propTypes = {};

export default Editors;
