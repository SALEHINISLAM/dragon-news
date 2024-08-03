import React from "react";
import PropTypes from "prop-types";
import Header from "../Shared/Header/Header";
import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa6";
import Editors from "./Editors";

const News = (props) => {
  const { id } = useParams();
  const oneNews = useLoaderData();
  const exactNews = oneNews.find((news) => news._id == id);
  const { title,details,thumbnail_url,category_id } = exactNews;
  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold text-black">Dragon News</h2>
          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={thumbnail_url}
                alt=""
                className="rounded-lg w-full"
              />
            </figure>
            <div className="card-body text-left text-black">
              <h2 className="card-title text-2xl font-bold">{title}</h2>
              <p className="text-base">{details}</p>
              <div className="card-actions">
                <Link to={`/category/${category_id}`}>
                <button className="btn btn-primary">
                    <FaArrowLeft/>
                    All news in this category
                </button>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <h2 className="text-3xl mt-6 font-semibold text-black">Editors Insight</h2>
          <Editors/>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
