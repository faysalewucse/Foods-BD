import React, { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { makeFormEffect } from "./FormStyle";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const form_effect = () => {
    makeFormEffect();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  makeFormEffect();

  return (
    <div className="login--body">
      <img class="wave" src="images/wave.png" />
      <div class="container" id="form--container">
        <div class="img">
          <img src="images/undraw_hamburger.svg" />
        </div>
        <div class="login-content">
          <div className="form">
            <img src="images/undraw_profile.svg" />
            <h2 class="title">Login</h2>
            <div onClick={form_effect} class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Email</h5>
                <input
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  type="text"
                  class="input"
                ></input>
              </div>
            </div>
            <div onClick={form_effect} class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  type="password"
                  class="input"
                ></input>
              </div>
            </div>
            <Nav.Link id="forgot--pass" href="#">
              Forgot Password?
            </Nav.Link>
            <input
              onClick={login}
              type="submit"
              class="btn"
              value="Login"
            ></input>
            <h6>
              Don't Have an Account?{" "}
              <span onClick={() => navigate("/register")} id="sign--up">
                Sign Up
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
