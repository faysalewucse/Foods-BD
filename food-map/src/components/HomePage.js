import React from "react";
import "../CSS/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div className="container">
      <div className="row homepage-section">
        <div className="col-sm-6">
          <h6 className="font-italic">Are You Hungry?</h6>
          <h1 className="dont--wait">Don't Wait!?</h1>
          <div>
            <div className="order--now--btn">Order Now</div>
          </div>
        </div>
        <div className="col-sm-6">
          <img className="homepage-pizza" src="images/hero-pizza.png" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
