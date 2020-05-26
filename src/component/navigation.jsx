import React, { useState } from "react";
import { Link } from "react-router-dom";
// stylesheets for the frontend

import "./pageRoute/stylesheet/css/bootstrap.min.css";
import "./pageRoute/stylesheet/css/et-line-icons.css";
import "./pageRoute/stylesheet/css/font-awesome.min.css";
import "./pageRoute/stylesheet/css/iconmonstr-iconic-font.min.css";
import "./pageRoute/stylesheet/css/lity.min.css";
import "./pageRoute/stylesheet/css/animate.css";

import "./pageRoute/stylesheet/css/lightbox.css";

// import "./pageRoute/stylesheet/css/owl.carousel.min.css";
import "./pageRoute/stylesheet/css/owl.theme.default.min.css";

import "./pageRoute/stylesheet/main.css";
import "./pageRoute/stylesheet/css/responsive.css";

const Navigation = () => {
  const [open, setOpen] = useState({
    status: true,
    a: "navbar-toggler collapsed",
    b: "navbar-collapse collapse",
  });

  const toggleDropDown = () => {
    !open.status
      ? setOpen({
          status: true,
          a: "navbar-toggler collapsed",
          b: "navbar-collapse collapse",
          expanded: "false",
        })
      : setOpen({
          status: false,
          a: "navbar-toggler",
          b: "navbar-collapse collapse show",
          expanded: "true",
        });
  };
  return (
    <>
      <nav className="navbar navbar-index navbar-transparent navbar-black-links navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="../">
            <img src="images/ifarm_90_30.png" alt="logo" />
          </a>
          <button
            className={open.a}
            type="button"
            data-toggle="collapse"
            data-target="#main-navbar"
            aria-controls="main-navbar"
            aria-expanded={open.expanded}
            aria-label="Toggle navigation"
            onClick={toggleDropDown}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className={open.b} id="main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  Faqs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item log-in">
                <Link
                  className="nav-link flex-center bg-blue radius-5px transition-3"
                  to="login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
