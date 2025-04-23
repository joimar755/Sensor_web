import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export const PrivateLayout = () => {
  const {auth} = useAuth();
 /*  const token = localStorage.getItem('token');
  
    return token ? <Outlet /> : <Navigate to="/login" />; */
   return(
    <>
      {auth.id ?
      <Outlet />
      :
      <Navigate to="/Login"/>
    }
    </>
   )

};
