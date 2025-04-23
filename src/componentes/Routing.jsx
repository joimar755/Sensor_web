import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./public/PublicLayout";
import Login from "./Login";
import { PrivateLayout } from "./private/PrivateLayout";
import { Auth_Provider } from "./context/Auth_Provider";
import Home from "./Home";
import TextLinkExample from "./TextLinkExample";
import Register from "./Register";

export const Routing = () => {
  return (
    <Router>
      <Auth_Provider>
        <div>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<PrivateLayout />}>
              <Route path="principal" element={<Home />} />
            </Route>
          </Routes>
          <Routes>
               <Route path="/carro" element={<Register />} />
               
          </Routes>
        </div>
      </Auth_Provider>
    </Router>
  );
};
