import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author,rating,total_view } = news;
  return (
    <div>
      <div className="card shadow-xl mb-16">
        <div className="bg-[#F3F3F3] flex flex-row justify-between p-4">
          <div className="flex items-center gap-4">
            <img src={author.img} alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <h3 className="text-base text-black font-semibold">
                {author.name}
              </h3>
              <p className="text-xs">{author.published_date}</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-black font-semibold">
            <CiBookmark className="size-8" />
            <CiShare2 className=" size-8" />
          </div>
        </div>
        <h2 className="text-black text-xl font-bold px-10 pt-10 border-t">
          {title}
        </h2>
        <figure className="px-10 pt-6">
          <img src={image_url} alt="" className="w-full rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {details.length > 200 ? (
            <p className="text-left">
              {details.slice(0, 200)} <br />
              <Link className="text-[#F75B5F]" to={`/news/${_id}`}>
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <div className="border-t border-t-gray-500 w-full flex justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name={`rating-${_id}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${_id}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${_id}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${_id}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${_id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <p className="text-xl">
                {rating.number}
              </p>
            </div>
            <div className="flex flex-row justify-center gap-2 items-center text-base">
<FaEye/>
<p>
  {total_view}
</p>
            </div>
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
