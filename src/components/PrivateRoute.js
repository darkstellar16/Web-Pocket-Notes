
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const authed = JSON.parse(localStorage.getItem("acces_token"));

    return authed ? children : <Navigate to="/login" />;
}


//--function to chekc whether user is logged or not if not logged in he cannot acces the protected routes--