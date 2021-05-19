import React from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";
import NewAccount from "./NewUser";
import ContactUs from "./ContactUs";
import PageNotFound from "./NotFound";
import LostPassword from "./ForgotPassword";
import VerifyAccount from "./VerifyAccount";
import AboutUs from "./Aboutus";
import MarketPlace from "./MarketPlace";
import Blog from "./Blog";
import MyCart from "./MyCart";

const RoutePage = () => {
  let { pageTitle } = useParams();
  let page;
  switch (pageTitle) {
    case "login":
      page = <Login />;
      break;
    case "newaccount":
      page = <NewAccount />;
      break;
    case "marketplace":
      page = <MarketPlace />;
      break;
    case "contactus":
      page = <ContactUs />;
      break;
    case "blog":
      page = <Blog />;
      break;
    case "forgotpassword":
      page = <LostPassword />;
      break;
    case "verify-my-account":
      page = <VerifyAccount />;
      break;
    case "aboutus":
      page = <AboutUs />;
      break;
    case "my-cart":
      page = <MyCart />;
      break;
    default:
      page = <PageNotFound />;
      break;
  }
  return <>{page}</>;
};

export default RoutePage;
