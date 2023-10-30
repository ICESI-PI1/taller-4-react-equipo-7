import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';



const RouteGuard = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    console.log(isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" />;
        
 
};

export default RouteGuard;
