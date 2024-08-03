import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import BreakingNews from '../Home/BreakingNews';

const Career = props => {
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
          Careers at The Dragon News
          </h1>
          <h3
           className="text-3xl font-semibold"
          >
          Join the Dragon Team
          </h3>
          <article className="text-lg">
            Are you passionate about journalism and making a difference? The Dragon News is always on the lookout for talented individuals to join our dynamic team. We offer a stimulating work environment where you can grow professionally and contribute to shaping the narrative.
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
          <h3 className="text-3xl font-semibold">What We Offer:</h3>
          <ol className="list-decimal">
            <li>
              <span className="font-bold">Opportunities for growth:</span>
              We believe in nurturing talent and providing ample opportunities for career advancement.
            </li>
            <li>
              <span className="font-bold">Competitive compensation:</span>
              We offer a competitive salary and benefits package.
            </li>
            <li>
              <span className="font-bold">A collaborative culture:</span>
              Our team is built on collaboration, innovation, and a shared passion for storytelling.
            </li>
          </ol>
          <h3  className="text-3xl font-semibold">
          Internships:
          </h3>
          <article>
          We offer internships for aspiring journalists to gain hands-on experience in the news industry.
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

Career.propTypes = {
    
};

export default Career;