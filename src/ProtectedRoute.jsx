import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loginStatus = JSON.parse(localStorage.getItem('GinaEssentialsLogin'));

  if (!loginStatus || loginStatus.login !== true) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
