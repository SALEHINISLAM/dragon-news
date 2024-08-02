import React from "react";
import PropTypes from "prop-types";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = (props) => {
  const news = useLoaderData();
  return (
    <div className="mx-auto container">
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews} />
          ))}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
