import React from 'react';
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
const BreakingNews = props => {
    return (
        <div className='flex'>
<button className='text-white bg-[#D72050] btn font-medium text-xl'>Latest</button>
            <Marquee pauseOnHover={true} className='cursor-pointer text-lg font-semibold text-[#403F3F]'>
                I love Bangladesh
            </Marquee>
        </div>
    );
};

BreakingNews.propTypes = {
    
};

export default BreakingNews;