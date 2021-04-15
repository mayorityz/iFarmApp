import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const logout = () => {
    localStorage.setItem("iFarmVendor", null);
    window.location = "../login";
  };

  return (
    <>
      <nav className="side-navbar">
        <div className="side-navbar-wrapper">
          <div className="sidenav-header d-flex align-items-center justify-content-center">
            <div className="sidenav-header-inner text-center">
              {/* <Link to="./dashboard">
                <img
                  src="./img/avatar-7.jpg"
                  alt="user profile img"
                  className="img-fluid rounded-circle"
                />
              </Link> */}
              <h2 className="h5">IFarm</h2>
            </div>
            <div className="sidenav-header-logo">
              <Link to="./dashboard" className="brand-small text-center">
                <strong>i</strong>
                <strong className="text-primary">Farm</strong>
              </Link>
            </div>
          </div>

          <div className="main-menu">
            <h5 className="sidenav-heading">MENU</h5>
            <ul id="side-main-menu" className="side-menu list-unstyled">
              <li>
                <a href={`/dashboard/index`}>
                  <i className="fa fa-home"></i>Home
                </a>
              </li>
              <li>
                <a href={`/dashboard/marketplace`}>
                  <i className="fa fa-truck"></i>Market Place
                </a>
              </li>
              <SideBarLinks
                title="Farming"
                sublinks={[
                  { title: "Upload New Product", url: "./newproducts" },
                  { title: "My Products", url: "./products" },
                ]}
              />
              <SideBarLinks
                title="Investment"
                sublinks={[
                  { title: "New Investment", url: "./newinvestment" },
                  { title: "Existing Investment", url: "./investments" },
                ]}
              />

              <li>
                <a href={`/dashboard/myaccount`}>
                  <i className="fa fa-user-circle-o"></i>My Account
                </a>
              </li>
              <li>
                <a href={`/dashboard/shopping-cart`}>
                  <MdShoppingCart /> Shopping Cart
                </a>
              </li>
              <li>
                <a href={`/dashboard/order-history`}>
                  <MdShoppingCart /> My Orders
                </a>
              </li>
              <li onClick={logout}>
                <Link to="#logout">
                  <i className="fa fa-sign-out"></i>LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

function SideBarLinks(props) {
  let toLink = `#${props.title}`;
  const [collapse, setCollapse] = useState("collapse list-unstyled");
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState("collapsed");

  let expand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setCollapsed("");
      setCollapse("collapse list-unstyled show");
    } else {
      setCollapsed("collapsed");
      setCollapse("collapse list-unstyled");
    }
  };
  return (
    <>
      <li>
        <Link
          to={toLink}
          aria-expanded={expanded}
          data-toggle="collapse"
          className={collapsed}
          onClick={expand}
        >
          <i className="fa fa-area-chart"></i>
          {props.title}
        </Link>
        <ul id={props.link} className={collapse}>
          {props.sublinks.map((link_, id) => (
            <li key={id}>
              <a href={`/dashboard/${link_.url}`}>{link_.title}</a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export default SideBar;
