import React from "react";
import { Link } from "react-router-dom";
import tomato from "./images/tomatoes.jpg";
const HomeHeader = () => {
  return (
    <>
      <section
        className="welcome-area sec-padding p-relative o-hidden"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row welcome-text sec-padding flex-center">
            <div className="col-md-6 mb-50px z-index-1">
              <h1 className="mb-20px">Welcome To iFarms</h1>
              <p>
                Creating Wealth For Farmers By Bringing Market, Funds and
                Innovation Right Onto Farm Locations.
              </p>
              <Link to="./newaccount" className="main-btn btn-3 mt-30px">
                <i className="fa fa-user"></i> Create Account
              </Link>
            </div>
            <div className="col-md-6 text-center">
              <img alt="img" src={tomato} className="header-img" />
            </div>
          </div>
        </div>
        <div className="shape-1 bg-gray p-absolute"></div>
      </section>
    </>
  );
};

export default HomeHeader;
