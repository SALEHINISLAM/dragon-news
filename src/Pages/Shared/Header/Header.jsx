import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center'>
            <Link to='/'>
            <img src="/logo.png" alt="" />
            </Link>
            <p
            className='text-lg text-[#706F6F]'
            >Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>
                {
                    moment().format("dddd, MMMM D, YYYY")
                }
            </p>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;