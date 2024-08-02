import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';

const Home = props => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h1>this is home</h1>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;