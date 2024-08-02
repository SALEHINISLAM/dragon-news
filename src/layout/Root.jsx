import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Root = props => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;