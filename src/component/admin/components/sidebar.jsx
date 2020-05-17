import React from "react";
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

/**
 * users, investments, orders, account balance, messaging, dashboard
 */

const AdminSideBar = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="sidebar_">
        <div className="sidebar_header">
          <h3>iFarms Admin</h3>
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
            <Link to={`${url}/logout`}>
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
      </Switch>
    </>
  );
};

export default AdminSideBar;
