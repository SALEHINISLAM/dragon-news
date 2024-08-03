import React from "react";
import PropTypes from "prop-types";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "../Home/BreakingNews";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const About = (props) => {
  return (
    <div className="mx-auto container text-black">
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2 flex flex-col gap-6 pt-16">
          <h1 className="text-5xl font-extrabold text-center">
            About The Dragon News
          </h1>
          <article className="text-lg">
            The Dragon News is your premier source for in-depth and unbiased
            news coverage. We are committed to delivering accurate, timely, and
            comprehensive information to our readers. Our team of experienced
            journalists works tirelessly to uncover the stories that matter
            most, from breaking news to investigative reports.
          </article>
          <h3 className="text-3xl font-semibold">Our Mission:</h3>
          <article className="text-lg">
            To inform, educate, and engage our audience with compelling
            journalism that reflects the diversity of the world.
          </article>
          <h3 className="text-3xl font-semibold">Our Values:</h3>
          <ol className="list-decimal">
            <li>
              <span className="font-bold">Independence:</span>
              We uphold journalistic integrity and operate without bias or
              influence.
            </li>
            <li>
              <span className="font-bold">Accuracy:</span>
              We strive for precision in reporting and fact-checking.
            </li>
            <li>
              <span className="font-bold">Transparency:</span>
              We strive for precision in reporting and fact-checking.
            </li>
            <li>
              <span className="font-bold">Diversity:</span>
              We embrace diverse perspectives and voices.
            </li>
          </ol>
          <h3 className="text-3xl font-semibold">What We Cover:</h3>
          <article>
            All the things that want to know.
            <ol className="list-disc">
              <li>Politics</li>
              <li>Business</li>
              <li>Technology</li>
              <li>Entertainment</li>
              <li>Sports</li>
              <li>World news</li>
            </ol>
          </article>
          <br />
          <p className="font-semibold">Join us on our journey to inform and inspire.</p>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
