import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDateRange } from "react-icons/md";
const LeftNews = (props) => {
  return (
    <div className="flex flex-col p-4 gap-6 pt-16">
      <div className="card card-compact shadow-xl">
        <figure>
          <img src="/1.png" alt="news" className="w-full" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">We want our first home</h2>
          <div className="flex justify-between p-2">
            <p className="font-semibold">Humanity</p>
            <div className="flex items-center gap-2 justify-center">
              <MdOutlineDateRange />
              <p>Jan 4, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-compact shadow-xl">
        <figure>
          <img src="/2.png" alt="news" className="w-full" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Corporate Relationships between employees</h2>
          <div className="flex justify-between p-2">
            <p className="font-semibold">Corporate</p>
            <div className="flex items-center gap-2 justify-center">
              <MdOutlineDateRange />
              <p>Jan 4, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-compact shadow-xl">
        <figure>
          <img src="/3.png" alt="news" className="w-full" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">World Cup is coming!</h2>
          <div className="flex justify-between p-2">
            <p className="font-semibold">Sports</p>
            <div className="flex items-center gap-2 justify-center">
              <MdOutlineDateRange />
              <p>Jan 4, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftNews.propTypes = {};

export default LeftNews;
