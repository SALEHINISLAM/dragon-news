import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';

const News = props => {
    const {id}=useParams();
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">
                news: {id}
                </div>
                <div className="">

                </div>
            </div>
            
        </div>
    );
};

News.propTypes = {
    
};

export default News;