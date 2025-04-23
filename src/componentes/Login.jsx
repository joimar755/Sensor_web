import React from "react";
import axios from "axios";
import { useState } from "react";
import { Resister_users } from "../api/auth";
import { Logins } from "../api/auth";

import * as Components from "../Components";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsers] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setphone_number] = useState("");

  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("inserte el usuario");
    } else if (password.length === 0) {
      alert("inserte el password");
    } else {
      try {
        const res = await Resister_users({
          username,
          password,
          phone_number

        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit_login = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("inserte el usuario");
    } else if (password.length === 0) {
      alert("inserte el password");
    } else {
      try {
        const res = await Logins({
          username,
          password,
        });

        const token = res.data.access_token;
        const user = res.data;
        console.log(token);
        console.log(res.data.username);

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user))
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          console.log("Login exitoso y token guardado");
          //navigate("/socialmedia");
          window.location.reload();
        } else {
            alert("datos incorrectos")
            console.log("error", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
   <div className="login">
     <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsers(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <Components.Input
            type="number"
            placeholder="Password"
            onChange={(e) => setphone_number(e.target.value)}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit_login}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="text"
            placeholder="name"
            onChange={(e) => setUsers(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
   </div>
  );
}

export default Login
