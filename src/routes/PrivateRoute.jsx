import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
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