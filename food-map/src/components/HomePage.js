import React from "react";
import "../CSS/HomePage.css";
import Header from "./Header";

const Homepage = ({ setLoginUser }) => {
  return (
    <div>
      <Header />
      <div className="homepage">
        <h1>Hello Homepage</h1>
        <div className="button" onClick={() => setLoginUser({})}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Homepage;
