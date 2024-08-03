import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NewsCard from "../Home/NewsCard";

const Category = ({ category_id }) => {
  const { id } = useParams();
  const news = useLoaderData();
  let categoryNews;
  if (id == 0) {
    categoryNews = news;
  } else {
    categoryNews = news.filter((addNews) => addNews.category_id == id);
  }
  return (
    <div className="container mx-auto text-black">
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="">
          <LeftSideNav />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2">
          {categoryNews.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews} />
          ))}
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category_id: PropTypes.string,
};

export default Category;
