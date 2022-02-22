import React from 'react'
import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import { useUserContext } from "../context/userContext";

const UserRoute = ({ children, ...rest }) => {

    const { user, logoutUser } = useUserContext();
    return user ? <Route {...rest} /> : <LoadingToRedirect></LoadingToRedirect>;
}

export default UserRoute
