import React from "react";
import "../CSS/Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <h1>FoodsBD for Business</h1>
                  <button
                    onClick={navigate("/restaurent")}
                    className="business--btn"
                  >
                    Register
                  </button>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div>
                    <h6>JavaScript</h6>
                    <h6>NodeJs</h6>
                    <h6>MongoDB</h6>
                  </div>
                  <div>
                    <h6>React</h6>
                    <h6>ExpressJS</h6>
                    <h6>Atlas</h6>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div
          className="text-center p-3 mt-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        >
          © 2022 Copyright: <strong>AAF Production</strong>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;
