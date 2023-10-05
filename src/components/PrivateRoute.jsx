// src/components/PrivateRoute.js
import React from 'react';
import { Route, Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // You can add additional logic here, such as redirecting to login or displaying a message
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
