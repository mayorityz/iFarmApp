import React, { useState } from "react";
import "../../pageRoute/stylesheet/css/bootstrap.min.css";
import "../styles/fontastic.css";
import "../styles/grasp_mobile_progress_circle-1.0.0.min.css";
import "../styles/style.default.premium.css";
import "../styles/custom.css";
import {
  FiMenu,
  FiXCircle,
  FiHome,
  FiShoppingCart,
  FiShare,
  FiBriefcase,
  FiUserCheck,
  FiTablet,
  FiPlus,
} from "react-icons/fi";
import * as url from "../../../utility.json";
import jsonwebtoken from "jsonwebtoken";

const AdminNav = () => {
  const logout = () => {
    localStorage.setItem("iFarmVendor", null);
    window.location = "../login";
  };
  const userToken = localStorage.getItem("iFarmVendor");

  if (!userToken) {
    window.location = "../login";
  }

  jsonwebtoken.verify(userToken, "iFarmSecretKey", (err, result) => {
    if (err) {
      window.location = "../login";
    }
  });

  const [mobileMenu, showMenu] = useState("mobile_nav");
  const [icon, setIcon] = useState(false);

  const showMobileMenu = () => {
    if (!icon) {
      showMenu("mobile_nav showMenu");
      setIcon(true);
    } else {
      showMenu("mobile_nav");
      setIcon(false);
    }
  };
  return (
    <>
      <div className={mobileMenu}>
        <ul>
          <li>
            <a href={`${url.frontend}/dashboard/index`}>
              <FiHome /> Dashboard
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/marketplace`}>
              <FiShoppingCart /> Market Place
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/newproducts`}>
              <FiShare /> Upload New Product
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/products`}>
              <FiBriefcase /> My Products
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/newinvestment`}>
              <FiPlus /> New Investment
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/investments`}>
              <FiPlus /> My Investments
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/myaccount`}>
              <FiUserCheck /> My Account
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/shopping-cart`}>
              <FiShoppingCart /> Shopping Cart
            </a>
          </li>
          <li>
            <a href={`${url.frontend}/dashboard/order-history`}>
              <FiTablet /> Order History
            </a>
          </li>
        </ul>
      </div>
      <header className="header" id="navbar__">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header">
                <a
                  id="toggle-btn"
                  href="#0"
                  className="menu-btn"
                  onClick={showMobileMenu}
                >
                  {!icon ? (
                    <FiMenu style={{ fontSize: "20px" }} />
                  ) : (
                    <FiXCircle style={{ fontSize: "20px" }} />
                  )}
                </a>
                <a href="/dashboard" className="navbar-brand">
                  <div className="brand-text d-none d-md-inline-block">
                    <span>Welcome Back!!! </span>
                  </div>
                </a>
              </div>
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <li className="nav-item" onClick={logout}>
                  <a href="/dashboard/logout" className="nav-link logout">
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
