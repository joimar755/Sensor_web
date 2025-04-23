import axios, { Axios } from "axios";
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8001/"; 

export const Auth_Provider = ({ children }) => {
  const [auth, setAuth] = useState({});
   useEffect(() => {
    authUser();
   }, []) 
   const authUser = async()=> {
     const token =  localStorage.getItem("token");
     const user  =  localStorage.getItem("user");
     
     if (!token || !user) {
       return false;
     }
     const userObj = JSON.parse(user);
     const userID = userObj.userID
     //console.log(userID)
          
        
        axios.get(`${URL}/profile/${userID}`,{ 
             headers:  {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
             }
        })
        .then(response => {
          // Handle success.
          //console.log('Data: ', response.data.user.username);
          setAuth(response.data.user);
        })
        
    }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;