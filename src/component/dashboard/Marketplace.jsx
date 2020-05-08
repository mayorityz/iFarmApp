import React from "react";
import { useParams } from "react-router-dom";
import MyAccount from "./MyAccount";
import AdminNav from "./essComponents/AdminNavigation";
import NewProduct from "./NewProducts";
import Investment from "./Investments";
import NewInvestment from "./NewInvestment";
import Products from "./Products";
import Market from "./Market";

import jsonwebtoken from "jsonwebtoken";

let userToken = localStorage.getItem("iFarmVendor");

let access;

const verify = (userToken) => {
  jsonwebtoken.verify(userToken, "iFarmSecretKey", (err, res) => {
    if (err) {
      return (access = []);
    }
    return (access = res);
  });
};

!userToken ? (access = []) : verify(userToken);
const MarketPlace = () => {
  let page_;
  const { page } = useParams();
  switch (page) {
    case "myaccount":
      page_ = <MyAccount user={access} />;
      break;
    case "products":
      page_ = <Products user={access} />;
      break;
    case "newproducts":
      page_ = <NewProduct user={access} />;
      break;
    case "investments":
      page_ = <Investment user={access} />;
      break;
    case "newinvestment":
      page_ = <NewInvestment user={access} />;
      break;
    case "marketplace":
      page_ = <Market user={access} />;
      break;
    default:
      page_ = "<h3>page not found</h3>";
      break;
  }

  return (
    <>
      <div className="page">
        <AdminNav />
        <div style={{ marginTop: 65 }}></div>
        {page_}
      </div>
    </>
  );
};

export default MarketPlace;
