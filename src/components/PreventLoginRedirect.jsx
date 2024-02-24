import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const PreventLoginRedirect = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if the user is trying to navigate to the login page
        if ((location.pathname === '/login' || location.pathname === '/') && isLoggedIn) {
            // Prevent the navigation and redirect to another page
            navigate('/preview');
        }
    }, [location, navigate, isLoggedIn]); // Depend on location, navigate, and isLoggedIn

    return null; // This component doesn't render anything
};


