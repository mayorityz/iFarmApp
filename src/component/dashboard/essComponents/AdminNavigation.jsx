import React from "react";
import { Link } from "react-router-dom";
import "../../pageRoute/stylesheet/css/bootstrap.min.css";
import "../styles/fontastic.css";
import "../styles/grasp_mobile_progress_circle-1.0.0.min.css";
import "../styles/style.default.premium.css";
import "../styles/custom.css";

import jsonwebtoken from "jsonwebtoken";

const AdminNav = () => {
  const userToken = localStorage.getItem("iFarmVendor");

  if (!userToken) {
    window.location = "../login";
  }

  jsonwebtoken.verify(userToken, "iFarmSecretKey", (err, result) => {
    if (err) {
      window.location = "../login";
    }
  });
  return (
    <>
      <header className="header" id="navbar__">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header">
                <Link id="toggle-btn" to="#" className="menu-btn">
                  <i className="icon-bars"> </i>
                </Link>
                <a href="index.html" className="navbar-brand">
                  <div className="brand-text d-none d-md-inline-block">
                    <span>Welcome Back!!! </span>
                  </div>
                </a>
              </div>
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <li className="nav-item">
                  <a href="login.html" className="nav-link logout">
                    <span className="d-none d-sm-inline-block">Logout</span>
                    <i className="fa fa-sign-out"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminNav;
