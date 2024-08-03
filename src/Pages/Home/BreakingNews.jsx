import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
const BreakingNews = props => {
    const [news, setNews]=useState([]);
    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data));
    },[])
    return (
        <div className='flex'>
<button className='text-white bg-[#D72050] btn font-medium text-xl'>Latest</button>
            <Marquee pauseOnHover={true} className='cursor-pointer text-lg font-semibold text-[#403F3F]'>
                {
                    news.map(aNews=><p key={aNews._id}>{
                        aNews.title
                    }</p>)
                }
            </Marquee>
        </div>
    );
};

BreakingNews.propTypes = {
    
};

export default BreakingNews;