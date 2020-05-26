import React, { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiChevronRight,
  FiTrendingUp,
  FiPackage,
} from "react-icons/fi";
import "../styles/sidebar.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AdminUsers from "./users";
import AdminInvestments from "./investments";
import AdminHome from "../pages/Home";
import AdminProducts from "./products";
import InvestmentDetails from "./investmentDetails";
import Orders from "./orders";
import AdminLogin from "./Login";
import { logout } from "./../utility/session";

/**
 * users, investments, orders, account balance, messaging, dashboard
 */

const AdminSideBar = () => {
  let { path, url } = useRouteMatch();
  let [open, setOpen_] = useState("");

  const openMenu = () => {
    setOpen_("isOpen");
  };

  const logout_ = () => {
    logout();
  };

  const closeMenu = () => setOpen_("");
  return (
    <>
      <div id="openMenu" onClick={openMenu}>
        &#9776; MENU
      </div>
      <div className="sidebar_" id={open}>
        <div className="sidebar_header">
          <h3>
            iFarms Admin{" "}
            <span onClick={closeMenu} className="closeBtn">
              &times;
            </span>
          </h3>
        </div>
        <ul>
          <li>
            <Link exact="true" to={`${url}`}>
              <FiHome /> HOME
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/users`}>
              <FiUsers /> CURRENT USERS
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/investments`}>
              <FiTrendingUp /> INVESTMENTS
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/products`}>
              <FiPackage /> PRODUCTS
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/orders`}>
              <FiPackage /> ORDERS
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link onClick={logout_} to="0#">
              <FiTrendingUp /> lOGOUT
              <span>
                <FiChevronRight />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={path}>
          <AdminHome />
        </Route>
        <Route path={`${path}/investments/:id`}>
          <InvestmentDetails />
        </Route>
        <Route path={`${path}/investments`}>
          <AdminInvestments />
        </Route>
        <Route path={`${path}/orders`}>
          <Orders />
        </Route>
        <Route path={`${path}/products`}>
          <AdminProducts />
        </Route>
        <Route path={`${path}/users`}>
          <AdminUsers />
        </Route>
        <Route path={`${path}/login`}>
          <AdminLogin />
        </Route>
      </Switch>
    </>
  );
};

export default AdminSideBar;
