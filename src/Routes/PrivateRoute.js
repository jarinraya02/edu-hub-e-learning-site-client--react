import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user && user.uid) {
        return Children
    }
    return <Navigate to = '/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;