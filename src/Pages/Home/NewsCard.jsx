import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {_id, title, image_url, details } = news;
  return (
    <div>
      <div className="card shadow-xl mb-16">
        <h2 className="card-title">{title}</h2>
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt=""
            className="w-full rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          {details.length > 200 ? (
            <p className="text-left">
              {details.slice(0, 200)} <br />
              <Link className="text-[#F75B5F]"
              to={`/news/${_id}`}
              >Read more...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
