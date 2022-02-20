import React, { useState } from "react";
import "../CSS/Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeFormEffect } from "./FormStyle";

const Register = () => {
  const history = useHistory();
  const form_effect = () => {
    makeFormEffect();
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, address, password } = user;
    if (name && email && address && password) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  makeFormEffect();
  return (
    <div className="register--body">
      <img class="wave" src="images/wave.png" />
      <div class="container" id="form--container">
        <div class="img">
          <img src="images/undraw_hamburger.svg" />
        </div>
        <div class="login-content">
          <div className="form">
            <img src="images/undraw_profile.svg" />
            <h2 class="title">Register</h2>
            <div onClick={form_effect} class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Name</h5>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  class="input"
                ></input>
              </div>
            </div>
            <div onClick={form_effect} class="input-div one">
              <div class="i">
                <i class="fas fa-at"></i>
              </div>
              <div class="div">
                <h5>Email</h5>
                <input
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  type="email"
                  class="input"
                ></input>
              </div>
            </div>
            <div onClick={form_effect} class="input-div address">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Address</h5>
                <input
                  name="address"
                  value={user.address}
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
            <input
              onClick={register}
              type="submit"
              class="btn"
              value="Register"
            ></input>
            <h6>
              Already Have an Account?{" "}
              <span onClick={() => history.push("/login")} id="log--in">
                Login
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
