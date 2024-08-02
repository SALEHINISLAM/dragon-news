import React, { Children, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const {location}=useLocation();
    if (loading) {
        return
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children:PropTypes.object,
};

export default PrivateRoute;