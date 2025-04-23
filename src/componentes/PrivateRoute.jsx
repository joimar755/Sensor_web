import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token'); // Verifica si hay un token

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
